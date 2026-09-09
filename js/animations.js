/**
 * ANIMATIONS ENGINE
 * 
 * Controla as transições da interface de forma suave, elegante e performática.
 * Respeita as configurações do sistema para redução de movimento (prefers-reduced-motion).
 */

const Animations = {
    // Verifica se o usuário prefere movimentos reduzidos
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    /**
     * Transição suave da Landing Page para a aplicação principal.
     * @param {HTMLElement} landingEl - Elemento da Landing Page.
     * @param {HTMLElement} mainEl - Elemento do Conteúdo Principal.
     * @param {Function} callback - Ação executada após o término da animação.
     */
    transitionToApp(landingEl, mainEl, callback) {
        if (this.prefersReducedMotion) {
            landingEl.classList.add('hidden');
            mainEl.classList.remove('hidden');
            if (callback) callback();
            return;
        }

        // Animação de fade-out do landing
        landingEl.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        landingEl.style.opacity = '0';
        landingEl.style.transform = 'scale(0.95)';

        setTimeout(() => {
            landingEl.classList.add('hidden');
            
            // Configura o estado inicial invisível do main
            mainEl.classList.remove('hidden');
            mainEl.style.opacity = '0';
            mainEl.style.transform = 'translateY(15px)';
            mainEl.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';

            // Força um reflow para garantir a renderização inicial
            mainEl.offsetHeight;

            // Animação de fade-in e subida do main
            mainEl.style.opacity = '1';
            mainEl.style.transform = 'translateY(0)';
            
            if (callback) callback();
        }, 600);
    },

    /**
     * Anima a mudança de mensagem pessoal quando a música é alterada.
     * @param {HTMLElement} textEl - Elemento do texto da mensagem.
     * @param {string} newText - O novo texto a ser exibido.
     */
    transitionMessage(textEl, newText) {
        if (this.prefersReducedMotion) {
            textEl.textContent = newText;
            return;
        }

        // Desvanece a mensagem atual
        textEl.style.transition = 'opacity 0.25s ease';
        textEl.style.opacity = '0';

        setTimeout(() => {
            textEl.textContent = newText || "Esta música não tem mensagem especial associada, mas foi escolhida com muito carinho. ❤️";
            // Reaparece a nova mensagem
            textEl.style.opacity = '1';
        }, 250);
    },

    /**
     * Anima a mudança dos dados da música atual no player (capa, título, artista).
     * @param {HTMLElement} coverEl - Elemento da imagem de capa.
     * @param {HTMLElement} titleEl - Elemento do título.
     * @param {HTMLElement} artistEl - Elemento do artista.
     * @param {Object} trackData - Dados do novo track.
     */
    transitionPlayerInfo(coverEl, titleEl, artistEl, trackData) {
        if (this.prefersReducedMotion) {
            coverEl.src = trackData.cover;
            titleEl.textContent = trackData.title;
            artistEl.textContent = trackData.artist;
            return;
        }

        // Aplica transições sutis
        coverEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        titleEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        artistEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

        coverEl.style.opacity = '0.3';
        coverEl.style.transform = 'scale(0.97)';
        titleEl.style.opacity = '0';
        titleEl.style.transform = 'translateX(-5px)';
        artistEl.style.opacity = '0';
        artistEl.style.transform = 'translateX(-5px)';

        setTimeout(() => {
            coverEl.src = trackData.cover;
            titleEl.textContent = trackData.title;
            artistEl.textContent = trackData.artist;

            coverEl.style.opacity = '1';
            coverEl.style.transform = 'scale(1)';
            titleEl.style.opacity = '1';
            titleEl.style.transform = 'translateX(0)';
            artistEl.style.opacity = '1';
            artistEl.style.transform = 'translateX(0)';
        }, 300);
    }
};

// Exporta se em ambiente Node/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Animations;
}
