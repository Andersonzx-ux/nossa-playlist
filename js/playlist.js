/**
 * PLAYLIST UI MANAGER
 * 
 * Gerencia a renderização da lista de reprodução dinâmica e suas interações visuais.
 */

const PlaylistUI = {
    container: null,
    onTrackSelectCallback: null,

    /**
     * Inicializa o gerenciador da playlist.
     * @param {string} containerId - ID do elemento HTML container da lista.
     * @param {Function} onTrackSelect - Callback acionada ao selecionar uma música.
     */
    init(containerId, onTrackSelect) {
        this.container = document.getElementById(containerId);
        this.onTrackSelectCallback = onTrackSelect;
    },

    /**
     * Renderiza dinamicamente a playlist com base no array de dados.
     * @param {Array} tracks - Lista de músicas.
     * @param {number} currentTrackId - ID da música que está tocando no momento.
     */
    render(tracks, currentTrackId) {
        if (!this.container) return;

        this.container.innerHTML = ''; // Limpa a lista existente

        tracks.forEach(track => {
            const item = document.createElement('div');
            item.className = `playlist-item ${track.id === currentTrackId ? 'active' : ''} ${track.favorite ? 'is-fav' : ''}`;
            item.setAttribute('data-id', track.id);
            item.setAttribute('role', 'button');
            item.setAttribute('aria-label', `Tocar ${track.title} de ${track.artist}`);
            item.setAttribute('tabindex', '0');

            item.innerHTML = `
                <div class="item-left">
                    <img class="item-cover" src="${track.cover}" alt="Capa de ${track.title}" loading="lazy">
                    <div class="item-details">
                        <h4 class="item-title">${track.title}</h4>
                        <p class="item-artist">${track.artist}</p>
                    </div>
                </div>
                <div class="item-right">
                    <svg class="item-fav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span class="item-duration">${track.duration || '00:00'}</span>
                    <span class="item-play-state">
                        ${track.id === currentTrackId ? this._getPlayStateSVG() : ''}
                    </span>
                </div>
            `;

            // Evento de clique
            item.addEventListener('click', () => {
                if (this.onTrackSelectCallback) {
                    this.onTrackSelectCallback(track.id);
                }
            });

            // Acessibilidade por teclado (Enter e Espaço)
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (this.onTrackSelectCallback) {
                        this.onTrackSelectCallback(track.id);
                    }
                }
            });

            this.container.appendChild(item);
        });
    },

    /**
     * Atualiza o estado visual ativo de um item na lista de forma performática sem re-renderizar tudo.
     * @param {number} activeTrackId - ID do novo track ativo.
     */
    updateActiveState(activeTrackId) {
        if (!this.container) return;

        const items = this.container.querySelectorAll('.playlist-item');
        items.forEach(item => {
            const trackId = parseInt(item.getAttribute('data-id'), 10);
            const playStateContainer = item.querySelector('.item-play-state');
            
            if (trackId === activeTrackId) {
                item.classList.add('active');
                if (playStateContainer) {
                    playStateContainer.innerHTML = this._getPlayStateSVG();
                }
            } else {
                item.classList.remove('active');
                if (playStateContainer) {
                    playStateContainer.innerHTML = '';
                }
            }
        });
    },

    /**
     * Atualiza o ícone de favorito na playlist para uma música específica.
     * @param {number} trackId - ID da música.
     * @param {boolean} isFavorite - Novo estado de favorito.
     */
    updateFavoriteState(trackId, isFavorite) {
        if (!this.container) return;
        const item = this.container.querySelector(`.playlist-item[data-id="${trackId}"]`);
        if (item) {
            if (isFavorite) {
                item.classList.add('is-fav');
            } else {
                item.classList.remove('is-fav');
            }
        }
    },

    /**
     * Retorna o SVG de indicador de reprodução atual.
     * @private
     */
    _getPlayStateSVG() {
        return `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="color: var(--accent-secondary)">
                <path d="M8 5v14l11-7z"/>
            </svg>
        `;
    }
};

// Exporta se em ambiente Node/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PlaylistUI;
}
