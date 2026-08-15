/**
 * APPLICATION ENTRY POINT
 * 
 * Orquestra a inicialização dos módulos, vincula interações da interface e gerencia
 * o estado de reprodução.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. MAPEAMENTO DE ELEMENTOS DOM
    const DOM = {
        // Seções principais
        landingPage: document.getElementById('landing-page'),
        mainContent: document.getElementById('main-content'),
        btnEnter: document.getElementById('btn-enter-experience'),
        
        // Elementos do Player Info
        cover: document.getElementById('player-cover'),
        title: document.getElementById('player-title'),
        artist: document.getElementById('player-artist'),
        visualizer: document.getElementById('visualizer'),
        
        // Controles de Reprodução
        btnPlayPause: document.getElementById('btn-play-pause'),
        playIcon: document.getElementById('play-icon'),
        pauseIcon: document.getElementById('pause-icon'),
        btnPrev: document.getElementById('btn-prev'),
        btnNext: document.getElementById('btn-next'),
        btnShuffle: document.getElementById('btn-shuffle'),
        btnRepeat: document.getElementById('btn-repeat'),
        repeatBadge: document.getElementById('repeat-badge'),
        btnFav: document.getElementById('btn-favorite'),
        
        // Sliders e Timestamps
        progressBar: document.getElementById('progress-bar'),
        timeCurrent: document.getElementById('time-current'),
        timeTotal: document.getElementById('time-total'),
        
        // Volume
        btnMute: document.getElementById('btn-volume-mute'),
        volHighIcon: document.getElementById('volume-high-icon'),
        volMuteIcon: document.getElementById('volume-mute-icon'),
        volBar: document.getElementById('volume-bar'),
        
        // Seção de Mensagem e Playlist
        personalMessage: document.getElementById('personal-message'),
        playlistItems: 'playlist-items' // Passado apenas como string ID para a UI
    };

    // Variável global para armazenar a instância do Player
    let player = null;

    // Helper para converter segundos em MM:SS
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds === Infinity) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // 2. FUNÇÃO DE INICIALIZAÇÃO DA EXPERIÊNCIA (APÓS INTERAÇÃO DO USUÁRIO)
    //
    // IMPORTANTE (iOS Safari): o play() precisa ser chamado de forma SÍNCRONA
    // dentro do gesto de clique/toque do usuário. Se ele rodar depois de um
    // setTimeout (como na animação de transição), o Safari entende que o
    // "gesto do usuário" expirou e bloqueia o áudio silenciosamente.
    // Por isso toda a parte que não depende do layout estar visível
    // (criar o player, vincular eventos, carregar a faixa e dar play)
    // roda AQUI, direto no clique — só a animação do coração em canvas
    // (que precisa medir um elemento visível) fica para depois da transição.
    function initializeExperience() {
        // Inicializa o Engine de Áudio
        player = new AudioPlayer(PLAYLIST_DATA);

        // Inicializa a Interface da Playlist
        PlaylistUI.init(DOM.playlistItems, (trackId) => {
            player.selectTrackById(trackId);
        });

        // Renderização Inicial da Lista
        PlaylistUI.render(PLAYLIST_DATA, player.getCurrentTrack().id);

        // Vincula eventos do Engine do Player com atualizações do DOM
        player.bindEvents({
            onPlayStateChange(isPlaying) {
                if (isPlaying) {
                    DOM.playIcon.classList.add('hidden');
                    DOM.pauseIcon.classList.remove('hidden');
                    DOM.visualizer.classList.remove('hidden');
                } else {
                    DOM.playIcon.classList.remove('hidden');
                    DOM.pauseIcon.classList.add('hidden');
                    DOM.visualizer.classList.add('hidden');
                }
            },

            onTrackChange(track) {
                // Atualiza informações no player usando transição suave
                Animations.transitionPlayerInfo(DOM.cover, DOM.title, DOM.artist, track);

                // Atualiza mensagem pessoal associada à música
                Animations.transitionMessage(DOM.personalMessage, track.message);

                // Atualiza marcação ativa na playlist
                PlaylistUI.updateActiveState(track.id);

                // Atualiza estado do botão curtir
                if (track.favorite) {
                    DOM.btnFav.classList.add('active');
                } else {
                    DOM.btnFav.classList.remove('active');
                }

                // Reseta a barra de progresso
                DOM.progressBar.value = 0;
                DOM.timeCurrent.textContent = "0:00";
                DOM.timeTotal.textContent = track.duration || "0:00";
            },

            onTimeUpdate(currentTime, duration) {
                const percent = duration > 0 ? (currentTime / duration) * 100 : 0;
                DOM.progressBar.value = percent;
                DOM.timeCurrent.textContent = formatTime(currentTime);
                DOM.timeTotal.textContent = formatTime(duration);
            },

            onTrackLoaded(duration) {
                DOM.timeTotal.textContent = formatTime(duration);
            },

            onVolumeChange(value) {
                DOM.volBar.value = value;
                updateVolumeIcons(value, player.isMuted);
            },

            onMuteChange(isMuted) {
                updateVolumeIcons(player.volume * 100, isMuted);
            },

            onShuffleChange(isShuffle) {
                if (isShuffle) {
                    DOM.btnShuffle.classList.add('active');
                } else {
                    DOM.btnShuffle.classList.remove('active');
                }
            },

            onRepeatChange(repeatMode) {
                updateRepeatUI(repeatMode);
            }
        });

        // 3. EVENTOS DE INTERAÇÃO DOS CONTROLES DO PLAYER
        DOM.btnPlayPause.addEventListener('click', () => player.togglePlay());
        DOM.btnPrev.addEventListener('click', () => player.prev());
        DOM.btnNext.addEventListener('click', () => player.next());
        
        DOM.btnShuffle.addEventListener('click', () => player.toggleShuffle());
        DOM.btnRepeat.addEventListener('click', () => player.cycleRepeatMode());
        
        DOM.btnFav.addEventListener('click', () => {
            const track = player.toggleFavorite();
            if (track.favorite) {
                DOM.btnFav.classList.add('active');
            } else {
                DOM.btnFav.classList.remove('active');
            }
            PlaylistUI.updateFavoriteState(track.id, track.favorite);
        });

        // Eventos dos Sliders (Progresso e Volume)
        DOM.progressBar.addEventListener('input', (e) => {
            player.seek(parseFloat(e.target.value));
        });

        DOM.volBar.addEventListener('input', (e) => {
            player.setVolume(parseInt(e.target.value, 10));
        });

        DOM.btnMute.addEventListener('click', () => player.toggleMute());

        // Inicializações visuais do estado do player salvo no localStorage
        player.loadTrack(0);
        updateRepeatUI(player.repeat);
        updateVolumeIcons(player.volume * 100, player.isMuted);
        
        if (player.shuffle) {
            DOM.btnShuffle.classList.add('active');
            player.generateShuffleList();
        }

        // Toca a música IMEDIATAMENTE, ainda dentro do gesto de clique original
        // (necessário para o autoplay funcionar no iOS Safari).
        player.play();
    }

    // Inicializa a animação do coração em canvas.
    // Precisa rodar DEPOIS que #main-content estiver visível (display != none),
    // já que o canvas mede as dimensões reais do container para se ajustar.
    function initializeHeartCanvas() {
        CanvasHeart.init('heart-canvas');
        CanvasHeart.start();
    }

    // Auxiliar: atualiza o estado visual do repeat
    function updateRepeatUI(repeatMode) {
        DOM.btnRepeat.classList.remove('active');
        DOM.repeatBadge.classList.add('hidden');

        if (repeatMode === 'playlist') {
            DOM.btnRepeat.classList.add('active');
        } else if (repeatMode === 'track') {
            DOM.btnRepeat.classList.add('active');
            DOM.repeatBadge.classList.remove('hidden');
        }
    }

    // Auxiliar: atualiza os ícones do volume
    function updateVolumeIcons(volumeValue, isMuted) {
        if (isMuted || volumeValue === 0) {
            DOM.volHighIcon.classList.add('hidden');
            DOM.volMuteIcon.classList.remove('hidden');
        } else {
            DOM.volHighIcon.classList.remove('hidden');
            DOM.volMuteIcon.classList.add('hidden');
        }
    }

    // 4. CAPTURA A TRANSIÇÃO DA TELA INICIAL (LANDING PAGE)
    DOM.btnEnter.addEventListener('click', () => {
        // Roda primeiro e de forma síncrona: cria o player e já dá play(),
        // ainda dentro do gesto de clique (crítico para autoplay no iOS).
        initializeExperience();

        // A transição visual acontece em paralelo; o canvas do coração só é
        // inicializado quando #main-content estiver de fato visível.
        Animations.transitionToApp(DOM.landingPage, DOM.mainContent, () => {
            initializeHeartCanvas();
        });
    });
});
