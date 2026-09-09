/**
 * LyricsUI
 *
 * Exibe a letra da música sincronizada com o tempo de reprodução (estilo Spotify).
 *
 * FORMATO ESPERADO em cada música do playlist.js:
 *
 * lyrics: `[00:12.00] Primeira linha da música
 * [00:15.30] Segunda linha da música
 * [00:18.90] Terceira linha...`
 *
 * Esse é o formato padrão ".lrc" (LRC), usado por diversos apps de letra
 * sincronizada. Cada linha começa com o tempo em minutos:segundos (segundos
 * podem ter casas decimais) entre colchetes, seguido do texto daquela linha.
 * Muitos sites de letra permitem exportar/copiar a letra já nesse formato.
 *
 * lyricsTranslation: string com UMA linha de tradução por linha de "lyrics",
 * na MESMA ORDEM (sem timestamps, só o texto):
 *
 * lyricsTranslation: `Primeira linha traduzida
 * Segunda linha traduzida
 * Terceira linha traduzida...`
 *
 * Se "lyrics" estiver vazio ou ausente, o painel mostra uma mensagem
 * amigável dizendo que a letra ainda não foi adicionada.
 */
const LyricsUI = (() => {
    let scrollContainer = null;
    let toggleBtn = null;
    let lines = []; // [{ time, text, translation }]
    let activeIndex = -1;
    let showTranslation = false;

    // Converte texto no formato LRC em uma lista de { time, text }
    function parseLRC(raw) {
        if (!raw || typeof raw !== 'string') return [];

        const lineRegex = /\[(\d{1,2}):(\d{2}(?:\.\d{1,2})?)\]\s*(.*)/;

        return raw
            .split('\n')
            .map((rawLine) => {
                const match = rawLine.match(lineRegex);
                if (!match) return null;

                const minutes = parseInt(match[1], 10);
                const seconds = parseFloat(match[2]);
                const text = match[3].trim();

                if (text === '') return null;

                return { time: minutes * 60 + seconds, text };
            })
            .filter(Boolean)
            .sort((a, b) => a.time - b.time);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function init(scrollContainerId, toggleBtnId) {
        scrollContainer = document.getElementById(scrollContainerId);
        toggleBtn = document.getElementById(toggleBtnId);

        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTranslationView);
        }
    }

    // Carrega a letra de uma nova faixa
    function loadTrack(track) {
        const parsedLines = parseLRC(track.lyrics);
        const translationLines = (track.lyricsTranslation || '')
            .split('\n')
            .map((l) => l.trim())
            .filter((l) => l !== '');

        lines = parsedLines.map((line, index) => ({
            ...line,
            translation: translationLines[index] || ''
        }));

        activeIndex = -1;

        updateToggleVisibility();
        render();
    }

    function updateToggleVisibility() {
        if (!toggleBtn) return;
        const hasTranslation = lines.some((l) => l.translation);
        toggleBtn.classList.toggle('hidden', !hasTranslation);
    }

    function render() {
        if (!scrollContainer) return;

        if (lines.length === 0) {
            scrollContainer.innerHTML =
                '<p class="lyrics-empty">Letra ainda não adicionada para esta música. 🎶</p>';
            return;
        }

        scrollContainer.innerHTML = lines
            .map((line, index) => {
                const translationHtml =
                    showTranslation && line.translation
                        ? `<span class="lyrics-translation">${escapeHtml(line.translation)}</span>`
                        : '';

                return `<p class="lyrics-line" data-index="${index}">
                    <span class="lyrics-original">${escapeHtml(line.text)}</span>
                    ${translationHtml}
                </p>`;
            })
            .join('');

        highlightActiveLine(true);
    }

    // Chamado a cada 'timeupdate' do player para sincronizar a linha ativa
    function update(currentTime) {
        if (!lines.length || currentTime == null) return;

        let newIndex = -1;
        for (let i = 0; i < lines.length; i++) {
            if (currentTime >= lines[i].time) {
                newIndex = i;
            } else {
                break;
            }
        }

        if (newIndex !== activeIndex) {
            activeIndex = newIndex;
            highlightActiveLine();
        }
    }

    function highlightActiveLine(instant = false) {
        if (!scrollContainer) return;

        const allLines = scrollContainer.querySelectorAll('.lyrics-line');
        allLines.forEach((el) => el.classList.remove('active'));

        if (activeIndex < 0) return;

        const activeEl = scrollContainer.querySelector(`.lyrics-line[data-index="${activeIndex}"]`);
        if (activeEl) {
            activeEl.classList.add('active');
            activeEl.scrollIntoView({
                behavior: instant ? 'auto' : 'smooth',
                block: 'center'
            });
        }
    }

    function toggleTranslationView() {
        showTranslation = !showTranslation;
        if (toggleBtn) {
            toggleBtn.classList.toggle('active', showTranslation);
        }
        render();
    }

    return { init, loadTrack, update };
})();
