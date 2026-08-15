/**
 * CANVAS HEART ANIMATION
 * 
 * Recria fielmente a animação do script Python Turtle, desenhando um coração 
 * tridimensional através de carimbos do texto "I love you" de forma progressiva.
 */

const CanvasHeart = {
    canvas: null,
    ctx: null,
    animationFrameId: null,
    
    // Configurações do desenho correspondentes ao script Python
    minScale: 11,
    maxScale: 16,
    pointsPerScale: 120,
    
    // Estado atual do desenho
    currentScale: 11,
    currentIndex: 0,
    isDrawing: false,
    
    // Cache de todos os pontos desenhados para permitir redesenho instantâneo no resize
    drawnPoints: [],

    /**
     * Inicializa a animação no canvas informado.
     * @param {string} canvasId - ID do elemento canvas.
     */
    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        
        // Ajusta a resolução para telas de alta densidade (Retina display)
        this.resize();
        window.addEventListener('resize', () => this.handleResize());

        // Evento de clique para reiniciar a animação
        this.canvas.addEventListener('click', () => {
            this.restartAnimation();
        });
        
        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.restartAnimation();
        });
    },

    /**
     * Ajusta o tamanho físico do canvas em relação ao tamanho CSS para nitidez máxima.
     */
    resize() {
        const rect = this.canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        // Estilização padrão da fonte
        this.ctx.font = "bold 8px Arial";
        this.ctx.fillStyle = "#ffb6c1"; // Rosa claro correspondente ao Python
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
    },

    handleResize() {
        if (!this.canvas) return;
        this.resize();
        
        // Redesenha todos os pontos acumulados até agora para não perder o progresso no resize
        this.redrawAll();
    },

    /**
     * Inicia a animação progressiva.
     */
    start() {
        if (this.isDrawing) return;
        
        this.isDrawing = true;
        this.currentScale = this.minScale;
        this.currentIndex = 0;
        this.drawnPoints = [];
        
        this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
        
        this.animateStep();
    },

    /**
     * Executa um passo do desenho na frequência do frame do navegador.
     */
    animateStep() {
        if (!this.isDrawing) return;

        // Desenha múltiplos pontos por frame no mobile/desktop para equilibrar velocidade e beleza
        // Python executa um loop interno de 120 iterações por escala. 
        // Desenhando 3 pontos por frame fica dinâmico e agradável.
        const pointsPerFrame = 3; 

        for (let step = 0; step < pointsPerFrame; step++) {
            if (this.currentScale > this.maxScale) {
                this.isDrawing = false;
                cancelAnimationFrame(this.animationFrameId);
                return;
            }

            // Calcula o ângulo correspondente: angle = i * (math.pi * 2) / 120
            const angle = this.currentIndex * (Math.PI * 2) / this.pointsPerScale;

            // Fórmulas matemáticas idênticas ao Python Turtle
            // x = 16 * (math.sin(angle) ** 3) * scale
            // y = (13 * math.cos(angle) - 5 * math.cos(2*angle) - 2 * math.cos(3*angle) - math.cos(4*angle)) * scale
            const sin3 = Math.pow(Math.sin(angle), 3);
            const cos1 = Math.cos(angle);
            const cos2 = Math.cos(2 * angle);
            const cos3 = Math.cos(3 * angle);
            const cos4 = Math.cos(4 * angle);

            const x = 16 * sin3 * this.currentScale;
            // No Canvas, o eixo Y cresce para baixo, então invertemos o sinal do Y da fórmula
            const y = -(13 * cos1 - 5 * cos2 - 2 * cos3 - cos4) * this.currentScale;

            // Salva o ponto
            const point = { x, y, scale: this.currentScale };
            this.drawnPoints.push(point);

            // Desenha o ponto atual
            this.drawTextStamp(point.x, point.y);

            // Incrementa índices
            this.currentIndex++;
            if (this.currentIndex >= this.pointsPerScale) {
                this.currentIndex = 0;
                this.currentScale++;
            }
        }

        this.animationFrameId = requestAnimationFrame(() => this.animateStep());
    },

    /**
     * Desenha "Eu te amo" na coordenada do coração, escalando dinamicamente para caber no canvas.
     *
     * Limites do coração nas coordenadas do canvas (y invertido) ao scale máximo (16):
     *   x:  -256  a  +256  → largura total = 512 unidades
     *   y:  -192  a  +272  → altura total  = 464 unidades
     * Centroide visual em y (canvas) = (-192 + 272) / 2 = +40
     */
    drawTextStamp(relX, relY) {
        const canvasW = this.canvas.offsetWidth;
        const canvasH = this.canvas.offsetHeight;

        // Caixa delimitadora conhecida do coração (escala máxima = 16)
        const heartHalfW   = 256;   // máx |x|
        const heartTopY    = -192;  // y canvas no topo dos arcos
        const heartBottomY =  272;  // y canvas na ponta inferior
        const heartTotalH  = heartBottomY - heartTopY; // 464

        // Fator de escala para caber 88% do canvas (margem de 6% em cada lado)
        const scaleX = (canvasW * 0.88) / (heartHalfW * 2);
        const scaleY = (canvasH * 0.88) / heartTotalH;
        const sf     = Math.min(scaleX, scaleY);

        // Centroide real do coração em canvas-y: desloca o centro de desenho
        const heartCenterY = (heartTopY + heartBottomY) / 2; // = 40

        const drawX = canvasW / 2 + relX * sf;
        const drawY = canvasH / 2 + (relY - heartCenterY) * sf;

        this.ctx.fillText("Eu te amo", drawX, drawY);
    },

    /**
     * Redesenha instantaneamente todos os pontos do cache.
     */
    redrawAll() {
        this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
        this.drawnPoints.forEach(point => {
            this.drawTextStamp(point.x, point.y);
        });
    },

    /**
     * Para e reinicia a animação do início.
     */
    restartAnimation() {
        this.isDrawing = false;
        cancelAnimationFrame(this.animationFrameId);
        
        // Efeito visual rápido de fade-out do canvas
        this.canvas.style.transition = 'opacity 0.2s ease';
        this.canvas.style.opacity = '0.3';
        
        setTimeout(() => {
            this.start();
            this.canvas.style.opacity = '1';
        }, 200);
    }
};

// Exporta se em ambiente Node/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CanvasHeart;
}
