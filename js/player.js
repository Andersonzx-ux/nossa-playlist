/**
 * CORE AUDIO PLAYER ENGINE
 * 
 * Gerencia a lógica de áudio baseada na API HTML5 Audio, persistência no localStorage,
 * modos de reprodução (aleatório, repetição), favoritos e fallback robusto de sintetizador.
 */

class AudioPlayer {
    constructor(tracks) {
        this.tracks = tracks;
        this.audio = new Audio();
        
        // Configurações e estados iniciais persistidos ou padrão
        this.volume = parseFloat(localStorage.getItem('player_volume') ?? '0.8');
        this.isMuted = localStorage.getItem('player_muted') === 'true';
        this.shuffle = localStorage.getItem('player_shuffle') === 'true';
        
        // Modos de repetição: 'none' (para a playlist no fim), 'playlist' (repete tudo), 'track' (repete atual)
        this.repeat = localStorage.getItem('player_repeat') ?? 'playlist'; 
        
        // Lista de IDs favoritados salvos localmente
        this.favorites = JSON.parse(localStorage.getItem('player_favorites') ?? '[]');
        this.favorites.forEach(id => {
            const track = this.tracks.find(t => t.id === id);
            if (track) track.favorite = true;
        });

        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.shuffledIndexList = [];
        this.shufflePointer = 0;

        // Propriedades para Synth Fallback caso o arquivo de áudio falhe
        this.isSynthMode = false;
        this.synthInterval = null;
        this.synthCtx = null;
        this.synthOsc = null;
        this.synthGain = null;
        this.synthDuration = 300; // Duração simulada de 5 minutos (300 segundos) para arquivos que falham
        this.synthCurrentTime = 0;

        this.initAudioSettings();
        this.setupAudioListeners();
    }

    // Inicializa propriedades físicas do elemento de áudio
    initAudioSettings() {
        this.audio.volume = this.isMuted ? 0 : this.volume;
        this.audio.preload = "metadata";
    }

    // Registra listeners de eventos do elemento de áudio
    setupAudioListeners() {
        // Atualizações de tempo
        this.audio.addEventListener('timeupdate', () => {
            if (!this.isSynthMode && this.onTimeUpdateCallback) {
                this.onTimeUpdateCallback(this.audio.currentTime, this.audio.duration);
            }
        });

        // Quando o metadado é carregado
        this.audio.addEventListener('loadedmetadata', () => {
            if (!this.isSynthMode && this.onTrackLoadedCallback) {
                this.onTrackLoadedCallback(this.audio.duration);
            }
        });

        // Fim da música
        this.audio.addEventListener('ended', () => {
            this.handleTrackEnded();
        });

        // Rede de segurança: se o áudio REAL conseguir tocar de fato, garante que
        // o sintetizador de fallback (caso tenha disparado por engano, ex: um erro
        // passageiro de rede) seja desligado. Evita o synth tocar "por baixo" da
        // música real, causando o ruído estático.
        this.audio.addEventListener('playing', () => {
            if (this.isSynthMode) {
                this.isSynthMode = false;
                this.stopSynthFallback();
            }
        });

        // Tratamento de Erro de carregamento (ex: offline, link quebrado ou sem permissão de CORS)
        this.audio.addEventListener('error', (e) => {
            // Ignora erros passageiros: se o áudio já está tocando de verdade
            // (ex: um 'error' disparado por um soluço de rede que se recuperou sozinho),
            // não faz sentido ativar o sintetizador por cima da música que já está tocando.
            if (!this.audio.paused && this.audio.currentTime > 0) {
                console.warn("Erro de áudio ignorado (a faixa já está tocando normalmente).", e);
                return;
            }
            console.warn("Falha ao carregar áudio. Ativando Sintetizador de Fallback Romântico...", e);
            this.activateSynthFallback();
        });
    }

    /**
     * Define callbacks vinculados à interface do usuário.
     */
    bindEvents({ onPlayStateChange, onTrackChange, onTimeUpdate, onTrackLoaded, onVolumeChange, onMuteChange, onShuffleChange, onRepeatChange }) {
        this.onPlayStateChangeCallback = onPlayStateChange;
        this.onTrackChangeCallback = onTrackChange;
        this.onTimeUpdateCallback = onTimeUpdate;
        this.onTrackLoadedCallback = onTrackLoaded;
        this.onVolumeChangeCallback = onVolumeChange;
        this.onMuteChangeCallback = onMuteChange;
        this.onShuffleChangeCallback = onShuffleChange;
        this.onRepeatChangeCallback = onRepeatChange;
    }

    // Carrega a música atual
    loadTrack(index) {
        this.stopSynthFallback(); // Garante o desligamento do sintetizador
        this.isSynthMode = false;
        
        if (index < 0 || index >= this.tracks.length) return;
        this.currentTrackIndex = index;
        
        const track = this.tracks[this.currentTrackIndex];
        this.audio.src = track.audio;
        this.audio.load();

        if (this.onTrackChangeCallback) {
            this.onTrackChangeCallback(track);
        }
    }

    // Toca a música atual
    play() {
        if (this.isSynthMode) {
            this.playSynth();
            return;
        }

        // Política de AutoPlay: O navegador exige interação prévia do usuário.
        this.audio.play()
            .then(() => {
                this.isPlaying = true;
                if (this.onPlayStateChangeCallback) this.onPlayStateChangeCallback(true);
            })
            .catch(err => {
                console.warn("Autoplay bloqueado ou falha de reprodução. Iniciando em pausa.", err);
                this.isPlaying = false;
                if (this.onPlayStateChangeCallback) this.onPlayStateChangeCallback(false);
            });
    }

    // Pausa a música atual
    pause() {
        this.isPlaying = false;
        if (this.isSynthMode) {
            this.pauseSynth();
        } else {
            this.audio.pause();
        }
        if (this.onPlayStateChangeCallback) this.onPlayStateChangeCallback(false);
    }

    // Alterna entre play e pause
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    // Próxima música
    next() {
        let nextIndex = this.currentTrackIndex + 1;

        if (this.shuffle) {
            this.shufflePointer++;
            if (this.shufflePointer >= this.shuffledIndexList.length) {
                this.generateShuffleList();
                this.shufflePointer = 0;
            }
            nextIndex = this.shuffledIndexList[this.shufflePointer];
        } else {
            if (nextIndex >= this.tracks.length) {
                nextIndex = this.repeat !== 'none' ? 0 : this.tracks.length - 1;
                // Se o modo de repetição for 'none' e chegou ao fim, para a reprodução
                if (this.repeat === 'none') {
                    this.pause();
                    this.loadTrack(nextIndex);
                    return;
                }
            }
        }

        this.loadTrack(nextIndex);
        this.play();
    }

    // Música anterior
    prev() {
        let prevIndex = this.currentTrackIndex - 1;

        if (this.shuffle) {
            this.shufflePointer--;
            if (this.shufflePointer < 0) {
                this.shufflePointer = this.shuffledIndexList.length - 1;
            }
            prevIndex = this.shuffledIndexList[this.shufflePointer];
        } else {
            if (prevIndex < 0) {
                prevIndex = this.repeat !== 'none' ? this.tracks.length - 1 : 0;
            }
        }

        this.loadTrack(prevIndex);
        this.play();
    }

    // Salta para um ponto específico da música (porcentagem: 0 a 100)
    seek(percent) {
        if (this.isSynthMode) {
            this.synthCurrentTime = (percent / 100) * this.synthDuration;
            if (this.onTimeUpdateCallback) {
                this.onTimeUpdateCallback(this.synthCurrentTime, this.synthDuration);
            }
        } else {
            if (!this.audio.duration) return;
            const newTime = (percent / 100) * this.audio.duration;
            this.audio.currentTime = newTime;
        }
    }

    // Define o volume (0 a 100)
    setVolume(value) {
        this.volume = value / 100;
        localStorage.setItem('player_volume', this.volume);
        
        if (!this.isMuted) {
            this.audio.volume = this.volume;
            if (this.synthGain) {
                this.synthGain.gain.setValueAtTime(this.volume * 0.1, this.synthCtx.currentTime); // volume baixo para o synth
            }
        }
        
        if (this.onVolumeChangeCallback) {
            this.onVolumeChangeCallback(value);
        }
    }

    // Alterna o mudo
    toggleMute() {
        this.isMuted = !this.isMuted;
        localStorage.setItem('player_muted', this.isMuted);
        
        this.audio.volume = this.isMuted ? 0 : this.volume;
        if (this.synthGain) {
            this.synthGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume * 0.1, this.synthCtx.currentTime);
        }

        if (this.onMuteChangeCallback) {
            this.onMuteChangeCallback(this.isMuted);
        }
    }

    // Alterna o modo Shuffle
    toggleShuffle() {
        this.shuffle = !this.shuffle;
        localStorage.setItem('player_shuffle', this.shuffle);
        
        if (this.shuffle) {
            this.generateShuffleList();
            this.shufflePointer = this.shuffledIndexList.indexOf(this.currentTrackIndex);
            if (this.shufflePointer === -1) this.shufflePointer = 0;
        }

        if (this.onShuffleChangeCallback) {
            this.onShuffleChangeCallback(this.shuffle);
        }
    }

    // Alterna ciclicamente o modo de repetição
    cycleRepeatMode() {
        // Ciclo: playlist -> track -> none -> playlist
        if (this.repeat === 'playlist') {
            this.repeat = 'track';
        } else if (this.repeat === 'track') {
            this.repeat = 'none';
        } else {
            this.repeat = 'playlist';
        }
        
        localStorage.setItem('player_repeat', this.repeat);
        
        if (this.onRepeatChangeCallback) {
            this.onRepeatChangeCallback(this.repeat);
        }
    }

    // Adiciona/Remove a música atual dos favoritos
    toggleFavorite() {
        const track = this.tracks[this.currentTrackIndex];
        track.favorite = !track.favorite;
        
        if (track.favorite) {
            if (!this.favorites.includes(track.id)) {
                this.favorites.push(track.id);
            }
        } else {
            this.favorites = this.favorites.filter(id => id !== track.id);
        }
        
        localStorage.setItem('player_favorites', JSON.stringify(this.favorites));
        return track;
    }

    // Trata o evento de finalização da faixa
    handleTrackEnded() {
        if (this.repeat === 'track') {
            if (this.isSynthMode) {
                this.synthCurrentTime = 0;
                this.play();
            } else {
                this.audio.currentTime = 0;
                this.play();
            }
        } else {
            this.next();
        }
    }

    // Seleciona uma faixa específica pelo ID
    selectTrackById(id) {
        const index = this.tracks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.loadTrack(index);
            this.play();
        }
    }

    // Gera lista embaralhada de índices
    generateShuffleList() {
        const indices = this.tracks.map((_, i) => i);
        // Algoritmo Fisher-Yates
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        this.shuffledIndexList = indices;
    }

    // Retorna a música atual
    getCurrentTrack() {
        return this.tracks[this.currentTrackIndex];
    }

    /* ==========================================================================
       FALLBACK ROMÂNTICO (SINTETIZADOR E MOCK TIMER)
       Garante o funcionamento offline completo e interativo
       ========================================================================== */
    activateSynthFallback() {
        this.isSynthMode = true;
        this.isPlaying = true;
        
        // Define duração fictícia baseada no metadado cadastrado
        const track = this.getCurrentTrack();
        const parts = (track.duration || "05:00").split(':');
        this.synthDuration = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
        this.synthCurrentTime = 0;

        if (this.onTrackLoadedCallback) {
            this.onTrackLoadedCallback(this.synthDuration);
        }

        // Toca as ondas senoidais
        this.playSynth();
    }

    playSynth() {
        this.isPlaying = true;
        this.stopSynthFallback(); // Limpa osciladores anteriores

        // Inicializa AudioContext se não existir
        if (!this.synthCtx) {
            this.synthCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        // Mapeia uma frequência romântica baseada no ID da música para dar timbres diferentes
        const freqs = [261.63, 329.63, 392.00, 440.00, 523.25]; // Notas musicais C4, E4, G4, A4, C5
        const baseFreq = freqs[this.currentTrackIndex % freqs.length];

        // Cria nós de áudio do synth
        this.synthOsc = this.synthCtx.createOscillator();
        this.synthGain = this.synthCtx.createGain();

        // Onda senoidal suave
        this.synthOsc.type = 'sine';
        this.synthOsc.frequency.setValueAtTime(baseFreq, this.synthCtx.currentTime);

        // Controla o volume para não incomodar (bem baixinho)
        const volumeFactor = this.isMuted ? 0 : this.volume * 0.08;
        this.synthGain.gain.setValueAtTime(volumeFactor, this.synthCtx.currentTime);

        this.synthOsc.connect(this.synthGain);
        this.synthGain.connect(this.synthCtx.destination);
        this.synthOsc.start();

        // Cria o intervalo de simulação do tempo
        this.synthInterval = setInterval(() => {
            if (this.isPlaying) {
                this.synthCurrentTime += 1;
                
                // Modula levemente a frequência para criar um vibrato romântico
                if (this.synthOsc) {
                    const vibrato = 2 * Math.sin(this.synthCurrentTime * 3);
                    this.synthOsc.frequency.setValueAtTime(baseFreq + vibrato, this.synthCtx.currentTime);
                }

                if (this.onTimeUpdateCallback) {
                    this.onTimeUpdateCallback(this.synthCurrentTime, this.synthDuration);
                }

                if (this.synthCurrentTime >= this.synthDuration) {
                    this.handleTrackEnded();
                }
            }
        }, 1000);

        if (this.onPlayStateChangeCallback) this.onPlayStateChangeCallback(true);
    }

    pauseSynth() {
        this.isPlaying = false;
        if (this.synthGain && this.synthCtx) {
            // Fade-out suave no volume
            this.synthGain.gain.exponentialRampToValueAtTime(0.0001, this.synthCtx.currentTime + 0.1);
            setTimeout(() => {
                if (!this.isPlaying && this.synthOsc) {
                    try { this.synthOsc.stop(); } catch(e) {}
                    this.synthOsc = null;
                }
            }, 120);
        }
        if (this.synthInterval) {
            clearInterval(this.synthInterval);
            this.synthInterval = null;
        }
    }

    stopSynthFallback() {
        if (this.synthInterval) {
            clearInterval(this.synthInterval);
            this.synthInterval = null;
        }
        if (this.synthOsc) {
            try { this.synthOsc.stop(); } catch(e) {}
            this.synthOsc = null;
        }
        this.synthGain = null;
    }
}

// Exporta se em ambiente Node/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioPlayer;
}
