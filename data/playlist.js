/**
 * Playlist Data
 * 
 * Este arquivo contém a definição de todas as músicas da nossa playlist.
 * O site carrega esta lista dinamicamente. Para adicionar, remover ou modificar músicas,
 * basta alterar este array.
 * 
 * Propriedades de cada música:
 * - id: Identificador único (número)
 * - title: Título da música
 * - artist: Nome do artista ou banda
 * - album: Nome do álbum
 * - cover: Caminho para a imagem de capa (ex: "assets/covers/musica-01.png")
 * - audio: Caminho local (ex: "music/musica-01.mp3") ou URL externa de teste
 * - message: Mensagem pessoal romântica vinculada à música (opcional)
 * - duration: Duração em texto formatado "MM:SS" (usada como fallback)
 * - favorite: Estado inicial de favorita (true/false)
 * - lyrics: Letra sincronizada no formato LRC (opcional). Exemplo:
 *     `[00:12.00] Primeira linha
 *      [00:15.30] Segunda linha`
 *   O número entre colchetes é o minuto:segundo em que aquela linha começa
 *   a tocar. Muitos sites de letra sincronizada permitem copiar/exportar
 *   nesse formato. Deixe como "" se ainda não tiver a letra dessa música.
 * - lyricsTranslation: Tradução, uma linha de texto por linha de "lyrics",
 *   NA MESMA ORDEM, sem timestamps. Exemplo:
 *     `Primeira linha traduzida
 *      Segunda linha traduzida`
 *   Deixe como "" para músicas que já estão em português (não precisam de tradução).
 */
const PLAYLIST_DATA = [
    {
        id: 1,
        title: "Special Lady",
        artist: "Ray, Goodman & Brown",
        album: "Ray, Goodman & Brown",
        cover: "assets/covers/1.png",
        audio: "music/musica1.mp3",
        message: "Entre tantas pessoas no mundo, foi você quem tornou meu coração completamente certo de onde queria estar",
        duration: "4:15",
        favorite: false,
        lyrics: `[00:00.67] You must be a special lady
[00:03.76] Billy, you sing the first verse
[00:04.62] Naw, Herb, I'm singing the second man
[00:06.11] And a very exciting girl
[00:08.85] Al, bring that bass out, man
[00:10.24] Hey man, I'll bring it out a little bit more
[00:12.08] You gotta be a special lady
[00:14.75] Let's get down once more, come on
[00:16.69] 'Cause you got me sittin' on top of the world
[00:20.62] Sittin' on top of the world
[00:24.38] Somehow I knew it would be you
[00:30.03] To change my gray skies to blue
[00:35.79] And it was strange when you called my name
[00:41.05] Ever since that day I haven't been the same, ooh
[00:46.13] Before I met you, my sun didn't want to shine
[00:51.07] Then all of a sudden you slipped up from behind
[00:57.47] Pop (Pop) went the reason in my mind
[01:03.45] A sweet special lady
[01:08.76] And a very exciting girl (ooh, so exciting)
[01:14.76] You gotta be a special lady (what a lady)
[01:19.45] 'Cause you got me sittin' on top of the world
[01:23.36] Sittin' on top of the world
[01:27.02] I was like a song so out of key
[01:32.29] Then you came and gave my soul a melody
[01:37.98] For instance, you're pullin' me through
[01:43.83] I've always lost but now I win with you
[01:48.85] Before I met you, my sun didn't want to shine
[01:53.64] Then all of a sudden you slipped up from behind
[02:00.68] Pop (pop) went the reason in my mind
[02:06.03] (You must be a special lady) you're a lady
[02:11.63] (And a very exciting girl) so exciting, woo
[02:17.44] (You gotta be a special lady) you're a lady
[02:22.30] ('Cause you got me sittin' on top of the world)
[02:24.28] Oh, sittin' on top of the world
[02:34.10] Woo, what lady Oh Ooh...
[02:45.67] (Sittin' on top of the world)
[02:49.32] (Sittin' on top of the world)
[02:51.43] Before I met you, my sun didn't want to shine
[02:57.62] Then all of a suddenly you slipped up from behind
[03:03.31] Pop (Pop) went the reason in my mind
[03:07.79] You must be a special lady
[03:16.31] And a very exciting girl
[03:18.33] You gotta be a special lady
[03:24.77] 'Cause you got me sittin' on top of the world
[03:28.55] Sittin' on top of the world
[03:31.42] You must be a special lady (you're a lady)
[03:36.92] And a very exciting girl (you're a lady)
[03:42.78] You gotta be a special lady (get down Billy Graham) alright
[03:47.69] 'Cause you got me sittin' on top of the world
[03:51.40] Sittin' on top of the world
[03:54.13] You must be a special lady (woo)
[03:59.66] And a very exciting girl (oh girl)
[04:05.56] You gotta be a special lady
[04:07.89] (fade out)`,
        lyricsTranslation: ` Você deve ser uma mulher especial
(Billy, você canta o primeiro verso)
(Vamos lá, Herb, cante, cante, cara)
E uma garota muito emocionante
(Al, aumenta o baixo, cara)
(Ei, cara, vou aumentar um pouquinho)
Você tem que ser uma moça especial
(Vamos mais uma vez, vamos lá)
Porque você me fez sentar no topo do mundo
Sentar no topo do mundo
De alguma maneira eu sabia que seria você
Quem transformaria o céu cinza em azul
Foi estranho quando você chamou o meu nome
Desde aquele dia, eu nunca mais fui o mesmo
Antes de te conhecer, meu sol não queria brilhar
Depois todo o calor de repente deslizou da parte de trás
(Bum) A razão na minha cabeça fez bum
Uma moça doce e especial
E uma garota muito emocionante (tão emocionante)
Você tem que ser uma moça especial (que moça)
Porque você me fez sentar no topo do mundo
Sentar no topo do mundo
Eu era como uma música fora de tom
E então você veio e trouxe melodia à minha alma
Por exemplo, você está me fazendo sobreviver
Eu sempre perdia, mas agora com você eu ganho
Antes de te conhecer, meu sol não queria brilhar
Depois todo o calor de repente deslizou da parte de trás
(Bum) A razão na minha cabeça fez bum
Você deve ser uma moça especial
E uma garota muito emocionante (tão emocionante)
Você tem que uma moça especial (que moça)
Porque você me fez sentar no topo do mundo (oh...)
Sentar no topo do mundo
Ohh que moça, oh oh...
Sentar no topo do mundo
Sentar no topo do mundo
Antes de te conhecer, meu sol não queria brilhar
Depois todo o calor de repente deslizou da parte de trás
(Bum) A razão na minha cabeça fez bum
Você deve ser uma moça especial
E uma garota muito emocionante (tão emocionante)
Você tem que ser uma moça especial (que moça)
Porque você me fez sentar no topo do mundo (oh...)
Sentar no topo do mundo
Você deve ser uma moça especial
E uma garota muito emocionante (tão emocionante)
Você tem que ser uma moça especial (abaixando, Billy Brown)
(Certo, Harry Ray)
Porque você me fez sentar no topo do mundo
Sentar no topo do mundo
Você deve ser uma moça especial (ohh ohh)
E uma garota muito emocionante (oh, garota, oh...)
Você tem que uma moça especial (que moça)
Porque você me fez sentar no topo do mundo`,
    },
    {
        id: 2,
        title: "My Kind of Lady",
        artist: "Supertramp",
        album: "...Famous Last Words...",
        cover: "assets/covers/2.png",
        audio: "music/musica2.mp3",
        message: "Você é exatamente o tipo de mulher que eu sempre quis encontrar, mesmo antes de saber que estava procurando por você.",
        duration: "5:13",
        favorite: false,
        lyrics: `[00:02.00] Let me tell you what I want to say
[00:05.49] You're the only one who can make me feel this way
[00:11.26] My kind of lady
[00:15.84] No better love could I embrace
[00:21.89] No better heart, no other face
[00:28.09] Can quite compare with you
[00:30.93] You came along and then you mend my broken dreams
[00:36.90] I was so down and then as foolish as it seems
[00:42.56] You gave me your affection
[00:45.49] Yeh baby you came through
[00:47.67] We'll make it you'll see
[00:52.29] In spite of those who say it's wrong
[00:58.34] This time we feel that we belong
[01:04.30] Now we can truly say
[01:07.31] We'll be together and that's all we'll ever need
[01:13.39] We'll love each other, that's the way it's gonna be
[01:18.81] And nothin' under the sun of moon
[01:22.02] Can make us be apart
[01:26.00] Oh my honey
[01:28.73] You know I'll love you every day
[01:34.75] When things go wrong we'll find a way
[01:40.60] I'm so glad I met you
[01:43.62] Much more than I can ever say
[01:46.92] We're making plans and holding hands just like before
[01:52.65] We'll try again, we'll make amends along the road
[01:58.82] It's fellin' good, just like it should, this time we know
[02:03.96] We'll share eachother's happiness for now and evermore
[02:12.20] I've been wastin' my life away
[02:15.29] I've got a message for you today
[02:19.35] To tell you that you are
[02:21.78] My kind of lady
[02:26.09] I'm not the same since I met you
[02:32.05] All of my dreams had fallen through
[02:38.04] And then you came along
[02:41.24] One magic night when things went right it was so fine
[02:47.24] Looked in your eyes and realized that you were mine
[02:52.64] And nothin' under the sun of moon
[02:55.78] Can make us be apart
[02:59.84] Oh my baby
[03:02.31] You know I'll love you all the way
[03:08.27] When times get hard we'll smile and say
[03:14.42] I'm so glad I met you
[03:17.42] I'll love you more and more each day
[03:20.74] We're making plans and holding hands just like before
[03:26.56] We'll try again, we'll make amends along the road
[03:32.57] It's fellin' good, just like it should, this time we know
[03:37.79] We'll share each other's happiness for now and evermore
[03:42.47] `,
        lyricsTranslation: `Deixe-me contar o que quero dizer

Você é a única que consegue me fazer sentir assim



Meu tipo de mulher

Não poderia querer um amor melhor

Nenhum coração melhor, nenhum outro rosto

Pode ser comparado a você

Você veio e depois refez meus sonhos despedaçados

Eu estava tão mal e depois por mais bobo que pareça

Você me deu seu carinho

Sim, você conseguiu



Nós vamos conseguir, você verá

Apesar daqueles que dizem que é errado

Dessa vez sentimos que nós pertencemos um ao outro

Agora nós podemos realmente dizer

Nós estaremos juntos e isso é tudo que precisaremos

Nós amaremos um ao outro, esse é o jeito que será

E nada abaixo do sol da lua

Pode nos separar



Oh, minha querida

Você sabe que eu te amarei todo dia

Quando as coisas derem errado, nós acharemos um jeito

Eu estou tão feliz que te conheci

Muito mais do que eu poderei dizer

Nós estamos fazendo planos e de mãos dadas como antes

Nós tentaremos de novo, nós faremos reparações ao longo da estrada

Está bom, como deveria, desta vez nós sabemos

Nós compartilharemos nossa felicidade agora e para sempre



Eu tenho jogado minha vida fora

Eu tenho uma mensagem para você hoje

Para te dizer que você é



Meu tipo de mulher

Eu não sou o mesmo desde que te conheci

Todos os meus sonhos tinham acabado

E depois você apareceu

Numa noite mágica quando tudo deu certo estava tão bom

Olhei em seus olhos e percebi que você era minha

E nada abaixo do sol da lua

Pode nos separar



Oh meu amor

Você sabe que eu te amarei sempre

Quando os tempos estiverem difíceis, nós sorriremos e diremos

Eu estou tão feliz que te conheci

Eu te amarei mais mais a cada dia

Nós estamos fazendo planos e de mãos dadas como antes

Nós tentaremos de novo, nós faremos reparações ao longo da estrada

Está bom, como deveria, desta vez nós sabemos

Nós compartilharemos nossa felicidade agora e para sempre`
    },
    {
        id: 3,
        title: "Serendipity",
        artist: "BTS",
        album: "Love Yourself 承 'Her'",
        cover: "assets/covers/3.png",
        audio: "music/musica3.mp3",
        message: "Talvez nosso encontro tenha sido acaso, mas amar você foi a melhor coincidência que a vida poderia ter me dado.",
        duration: "4:36",
        favorite: false,
        lyrics: `[00:03.13] 이 모든 건 우연이 아냐
[00:06.68] 그냥, 그냥 나의 느낌으로
[00:10.54] 온 세상이 어제완 달라
[00:14.09] 그냥, 그냥 너의 기쁨으로
[00:18.02] 네가 날 불렀을 때, 나는 너의 꽃으로
[00:21.64] 기다렸던 것처럼, 우린 시리도록 피어
[00:25.49] 어쩌면 우주의 섭리, 그냥 그랬던 거야
[00:28.95] (You know, I know) 너는 나, 나는 너
[00:32.23] 설레는 만큼 많이 두려워
[00:36.04] 운명이 우릴 자꾸 질투해서
[00:39.69] 너만큼 나도 많이 무서워
[00:42.76] When you see me, when you touch me
[00:46.86] 우주가 우릴 위해 움직였어
[00:50.67] 조금의 어긋남조차 없었어
[00:54.22] 너와 내 행복은 예정됐던 걸
[00:57.41] 'Cause you love me, and I love you
[01:00.92] 넌 내 푸른곰팡이, 날 구원해 준
[01:08.35] 나의 천사, 나의 세상
[01:15.67] 난 네 삼색 고양이, 널 만나러 온
[01:23.03] Love me now, touch me now
[01:30.62] Just let me love you (let me love, let me love you)
[01:38.04] Just let me love you (let me love, let me love you)
[01:45.91] 우주가 처음 생겨났을 때부터, 모든 건 정해진 거였어
[01:52.78] Just let me love you (let me love, let me love you)
[02:01.14] 이젠 곁에 와줘
[02:14.73] 넌 내 푸른곰팡이, 날 구원해 준
[02:22.13] 나의 천사, 나의 세상
[02:29.44] 난 네 삼색 고양이, 널 만나러 온
[02:36.88] Love me now, touch me now
[02:44.36] Just let me love you (let me love, let me love you)
[02:51.99] Just let me love you (let me love, let me love you)
[02:59.84] 우주가 처음 생겨났을 때부터, 모든 건 정해진 거였어
[03:06.70] Just let me love you (let me love, let me love you)
[03:13.88] 이젠 곁에 와줘, 우리가 되어줘
[03:17.68] I don't wanna let go, no
[03:21.99] 그냥 맡기면 되는 거야
[03:25.60] 말 안 해도 느껴지잖아
[03:28.64] 별들은 떠 있고, 우린 날고 있어
[03:32.38] 절대 꿈은 아냐
[03:36.76] 떨지 말고 내 손을 잡아
[03:40.47] 이제 우리가 되는 거야 (let me love you)
[03:47.32] Just let me love you (let me love, let me love you, just let me love you)
[03:54.64] Just let me love you (let me love, let me love you, baby, yes, you)
[04:02.62] 우주가 처음 생겨났을 때부터 (mm, baby, yes, you), 모든 건 정해진 거였어
[04:09.48] Just let me love you (let me love, let me love you, you, oh-oh)
[04:21.51] Let me love, let me love you (mm)
[04:25.63] 
[04:29.05] Let me love, let me love you
[04:31.64] `,
        lyricsTranslation: `Tudo isso não aconteceu por acaso.

É simplesmente o que o meu coração sente.

O mundo inteiro parece diferente desde ontem.

Tudo mudou por causa do seu sorriso.

Quando você me chamou, eu floresci para você.

Como se estivéssemos esperando um pelo outro, florescemos juntos, até fazer o coração doer.

Talvez tenha sido o destino escrito pelo universo, talvez simplesmente tivesse que ser assim.

Você é parte de mim, e eu sou parte de você.

Quanto mais meu coração se apaixona, mais eu tenho medo.

Porque até o destino parece ter ciúmes de nós.

E eu tenho tanto medo quanto você.

Quando você me olha, quando você me toca,

parece que o universo inteiro se moveu para nos unir.

Como se nenhum detalhe pudesse ter sido diferente.

Porque a nossa felicidade já estava escrita.

Você me ama, e eu amo você.

Você é aquilo que me encontrou quando eu precisava ser salvo.

Meu anjo, meu mundo.

E eu sou o seu pequeno gato tricolor, aquele que atravessou o caminho até encontrar você.

Ame-me agora, toque-me agora.

Apenas deixe-me amar você.

Apenas deixe-me amar você.

Desde o instante em que o universo nasceu, talvez tudo já estivesse destinado a nos encontrar.

Apenas deixe-me amar você.

Agora, venha para perto de mim.

Você é quem me salvou, quem trouxe luz para a minha vida.

Meu anjo, meu mundo.

E eu sou o seu gato tricolor, aquele que veio ao mundo para encontrar você.

Ame-me agora, toque-me agora.

Apenas deixe-me amar você.

Apenas deixe-me amar você.

Desde o começo do universo, talvez a nossa história já estivesse escrita.

Apenas deixe-me amar você.

Agora venha para perto de mim e vamos deixar de ser dois para nos tornarmos um "nós".

Eu não quero deixar você partir.

Só precisamos deixar o amor nos levar.

Porque podemos sentir tudo, mesmo sem dizer uma palavra.

As estrelas estão brilhando, e nós estamos voando.

E isso não é um sonho.

Não tenha medo, apenas segure a minha mão.

Porque, a partir de agora, somos nós.

Apenas deixe-me amar você.

Apenas deixe-me amar você, meu amor.

Desde o instante em que o universo nasceu, tudo já estava destinado a nos encontrar.

Apenas deixe-me amar você.

Deixe-me amar você.

Deixe-me amar você.

`
    },
    {
        id: 4,
        title: "The Way You Make Me Feel",
        artist: "Michael Jackson",
        album: "Bad",
        cover: "assets/covers/4.png",
        audio: "music/musica4.mp3",
        message: "Você tem um jeito único de fazer meu coração sentir coisas que eu nem sabia explicar.",
        duration: "4:58",
        favorite: false,
        lyrics: `
[00:37.39] Hey, pretty baby, with the high heels on
[00:41.33] You give me fever, like I've never, ever known
[00:46.02] You're just a product of, loveliness
[00:49.77] I like the groove of your walk, your talk, your dress
[00:54.12] I feel your fever from miles around
[00:58.43] I'll pick you up in my car and we'll paint the town
[01:02.64] Just kiss me baby and tell me twice
[01:06.03] That you're the one for me
[01:09.09] The way you make me feel
[01:11.29] (The way you make me feel)
[01:13.29] You really turn me on
[01:15.27] (You really turn me on)
[01:17.06] You knock me off of my feet
[01:19.34] (You knock me off of my feet)
[01:21.54] My lonely days are gone
[01:23.54] (My lonely days are gone)
[01:27.62] I like the feelin' you're givin' me
[01:31.77] Just hold me baby and I'm in ecstasy
[01:36.18] Oh, I'll be workin' from nine to five
[01:40.40] To buy ya things to keep you by my side
[01:44.34] I never felt so in love before
[01:48.70] Just promise baby, you'll love me forevermore
[01:52.77] I swear I'm keepin' you satisfied
[01:55.86] 'Cause you're the one for me
[01:59.27] The way you make me feel
[02:01.37] (The way you make me feel)
[02:03.23] You really turn me on
[02:05.20] (You really turn me on)
[02:07.33] You knock me off of my feet, now baby
[02:10.21] (You knock me off of my feet)
[02:12.63] My lonely days are gone
[02:14.53] (My lonely days are gone)
[02:17.54] Acha-ooh
[02:18.74] Go'n girl
[02:22.12] Go'n
[02:25.36] Hee-hee
[02:26.98] Ow
[02:28.76] Go'n girl
[02:31.02] 
[02:35.49] I never felt so in love before
[02:39.77] Promise baby, you'll love me forevermore
[02:43.65] I swear I'm keepin' you satisfied
[02:46.88] 'Cause you're the one for me
[02:50.44] The way you make me feel
[02:52.32] (The way you make me feel)
[02:54.52] You really turn me on
[02:56.58] (You really turn me on)
[02:58.47] You knock me off of my feet, now baby
[03:01.64] (You knock me off of my feet)
[03:03.26] My lonely days are gone
[03:04.75] (My lonely days are gone)
[03:06.74] The way you make me feel
[03:10.60] (The way you make me feel)
[03:12.16] You really turn me on
[03:13.81] (You really turn me on)
[03:15.67] You knock me off of my feet, now baby
[03:18.53] (You knock me off of my feet)
[03:20.08] My lonely days are gone
[03:21.61] (My lonely days are gone)
[03:24.14] Ain't nobody's business (the way you make me feel)
[03:27.52] Ain't nobody's business
[03:28.71] Ain't nobody's business
[03:30.36] Ain't nobody's business (you really turn me on)
[03:33.26] But mine and my baby
[03:35.05] (You knock me off of my feet) hee-hee
[03:38.01] Hee-hee, ooh
[03:39.57] (My lonely days are gone)
[03:40.82] Give it to me (the way you make me feel)
[03:44.59] Give me some time
[03:45.73] Come on be my girl
[03:46.82] I wanna be with mine (you really turn me on)
[03:49.87] Ain't nobody's business
[03:51.19] Ain't nobody's business (you knock me off of my feet)
[03:53.90] But mine and my baby's (my lonely days are gone)
[03:57.21] Go'n girl, ow
[04:01.52] Hee-hee, ooh
[04:05.04] 
[04:07.22] Choo-coo, choo-coo
[04:10.10] Choo-coo, choo-coo, choo-coo
[04:12.42] 
[04:14.49] Go'n girl, hee hee
[04:18.96] (The way you make me feel)
[04:20.26] Hee-hee-hee!
[04:21.44] (You really turn me on)
[04:24.31] (You knock me off of my feet)
[04:28.57] (My lonely days are gone)
[04:31.51] Give it to me (the way you make me feel)
[04:34.72] Give me some time
[04:35.84] Come on be my girl
[04:37.64] I wanna be with mine (you really turn me on)
[04:40.61] Ain't nobody's business
[04:41.85] Ain't nobody's business (you knock me off of my feet)
[04:44.18] But mine and my baby's (my lonely days are gone)
[04:47.83] Give it to me (the way you make me feel)
[04:52.07] Give me some time
[04:53.65] Come on be my girl
[04:54.04] `,
        lyricsTranslation: `Ei beleza com o salto alto

Você me dá uma febre como eu nunca tive jamais conhecido

Você é apenas um produto de graciosidade

Eu gosto da levada do seu andar, seu falar, seu vestir

Eu sinto sua febre a milhas ao redor

Eu pegarei você em meu carro e nós vamos pintar a cidade

Apenas me beije querida e me diga duas vezes

Que você é única para mim



O jeito que você me faz sentir

(O jeito que você me faz sentir)

Você realmente me excita

(Você realmente me excita)

Você me tira fora dos meus pés

(Você me tira fora dos meus pés)

Meus dias de solidão se foram

(Meus dias de solidão se foram)



Eu gosto da sensação que você está me dando

Apenas me abrace querida e eu estou em êxtase

Eu estarei trabalhando das nove às cinco

Para te comprar coisas para manter você do meu lado

Eu nunca me senti tão apaixonado antes

Apenas prometa querida, que você vai me amar para sempre

Eu juro que manterei você satisfeita

Porque você é única para mim



O jeito que você me faz sentir

(O jeito que você me faz sentir)

Você realmente me excita

(Você realmente me excita)

Você me tirou fora dos meus pés agora baby

(Você me tira fora dos meus pés)

Meus dias de solidão se foram

(Meus dias de solidão se foram)



Vá em frente garota!

Vá em frente!

Vá em frente garota!



Eu nunca me senti tão apaixonado antes

Apenas prometa querida, que você vai me amar para sempre

Eu juro que manterei você satisfeita

Porque você é única para mim



O jeito que você me faz sentir

(O jeito que você me faz sentir)

Você realmente me excita

(Você realmente me excita)

Você me tirou fora dos meus pés agora baby

(Você me tira fora dos meus pés)

Meus dias de solidão se foram

(Meus dias de solidão se foram)



O jeito que você me faz sentir

(O jeito que você me faz sentir)

Você realmente me excita

(Você realmente me excita)

Você me tirou fora dos meus pés agora baby

(Você me tira fora dos meus pés)

Meus dias de solidão se foram

(Meus dias de solidão se foram)



Não é da conta de ninguém

Não é da conta de ninguém

(O jeito que você me faz sentir)

Não é da conta de ninguém

Não é da conta de ninguém, mas meu e de minha garota

(Você realmente me excita)

Hee hee!

(Você me tira fora dos meus pés)

Hee hee! Ooh!

(Meus dias de solidão se foram)



Dê para mim

Me dê algumas vezes

(O jeito que você me faz sentir)

Venha ser minha garota

Eu quero estar com minha...

(Você realmente me excita)

Não é da conta de ninguém

(Você me tira fora dos meus pés)

Não é da conta de ninguém, mas meu e de minha garota

(Meus dias de solidão se foram)

Vá em frente garota!



Vá em frente garota!

(O jeito que você me faz sentir)

(Você realmente me excita)

(Você me tira fora dos meus pés)

(Meus dias de solidão se foram)



Dê para mim

Me dê algumas vezes

(O jeito que você me faz sentir)

Venha ser minha garota

Eu quero estar com minha...

(Você realmente me excita)

Não é da conta de ninguém

(Você me tira fora dos meus pés)

Não é da conta de ninguém, mas meu e de minha garota

(Meus dias de solidão se foram)

Vá em frente garota!`
    },
    {
        id: 5,
        title: "Não Quero Te Perder",
        artist: "Zezé Di Camargo & Luciano",
        album: "Zezé Di Camargo & Luciano",
        cover: "assets/covers/5.png",
        audio: "music/musica5.mp3",
        message: "De todas as coisas que a vida poderia tirar de mim, você é justamente aquela que eu mais quero proteger.",
        duration: "4:00",
        favorite: false,
        lyrics: `[00:26.52] Quero sim
[00:30.36] Um minuto do seu tempo só pra mim
[00:33.77] Eu insisto
[00:35.55] Seu olhar me devora
[00:39.47] Viro presa, não dá pra escapar
[00:48.20] Não resisto
[00:48.37] Quero sua boca, o seu beijo molhado
[00:55.43] Nosso amor grudando a pele, o coração disparado
[00:57.90] É fantástico viver com você
[01:00.77] Esse momento mágico
[01:02.45] Eu te amo tanto, em você tô ligado
[01:08.12] O desejo à flor da pele no meu corpo suado
[01:12.80] Quem fotografar o seu coração
[01:13.55] Vai me ver do seu lado
[01:17.71] Perder você
[01:18.27] É como ver o coração parar
[01:25.41] Cair e não poder se levantar
[01:34.36] Por isso é que eu não quero te perder
[01:39.88] Perder você
[01:40.09] É caminhar e não sentir o chão
[01:46.47] Eu brigo e morro por essa paixão
[01:56.90] Por isso é que eu não quero te perder
[02:03.12] 
[02:19.94] Quero sim
[02:23.62] Um minuto do seu tempo só pra mim
[02:29.11] Eu insisto
[02:32.69] Seu olhar me devora
[02:36.60] Viro presa, não dá pra escapar
[02:38.25] Não resisto
[02:40.31] 
[02:45.75] Quero sua boca, o seu beijo molhado
[02:49.45] Nosso amor grudando a pele, o coração disparado
[02:51.35] É fantástico viver com você
[02:53.48] Esse momento mágico
[02:58.52] Eu te amo tanto, em você tô ligado
[03:01.52] O desejo à flor da pele no meu corpo suado
[03:05.73] Quem fotografar o seu coração
[03:06.98] Vai me ver do seu lado
[03:10.53] Perder você
[03:14.70] É como ver o coração parar
[03:15.62] Cair e não poder se levantar
[03:21.83] Por isso é que eu não quero te perder
[03:33.28] Perder você
[03:33.47] É caminhar e não sentir o chão
[03:39.85] Eu brigo e morro por essa paixão
[03:46.99] Por isso é que eu não quero te perder
[03:56.73] Por isso é que eu não quero te perder
[04:03.27] Por isso é que eu não quero te perder
[04:10.16] 
[04:17.56] Te perder
[04:18.04] `,
        lyricsTranslation: ""
    },
    {
        id: 6,
        title: "Euphoria",
        artist: "BTS",
        album: "Love Yourself 結 'Answer'",
        cover: "assets/covers/6.png",
        audio: "music/musica6.mp3",
        message: "Tem algo em você que transforma os momentos mais simples em lembranças que eu quero guardar para sempre.",
        duration: "3:48",
        favorite: false,
        lyrics: `[00:05.54] 너는 내 삶에 다시 뜬 햇빛
[00:10.12] 어린 시절 내 꿈들의 재림
[00:14.52] 모르겠어 이 감정이 뭔지
[00:19.38] 혹시 여기도 꿈속인 건지
[00:23.87] 꿈은 사막의 푸른 신기루
[00:28.34] 내 안 깊은 곳의 a priori
[00:32.86] 숨이 막힐 듯이 행복해져
[00:37.45] 주변이 점점 더 투명해져
[00:41.44] 저기 멀리서 바다가 들려
[00:45.70] 꿈을 건너서 수풀 너머로
[00:50.46] 선명해지는 그 곳으로 가
[00:54.21] Take my hands now
[00:56.37] You are the cause of my euphoria
[01:00.77] 
[01:08.23] Euphoria
[01:10.89] 
[01:13.78] Take my hands now
[01:15.82] You are the cause of my euphoria
[01:19.24] Yeah-yeah, yeah-yeah, yeah-yeah
[01:23.72] Yeah-yeah, yeah-yeah, yeah-yeah
[01:26.41] Euphoria
[01:28.26] Yeah-yeah, yeah-yeah, yeah-yeah
[01:31.96] Close the door now
[01:34.05] When I'm with you, I'm in utopia
[01:36.61] 너도 나처럼 지워진 꿈을 찾아 헤맸을까?
[01:43.77] 운명 같은 흔한 말관 달라
[01:48.42] 아픈 너의 눈빛이 나와 같은 곳을 보는 걸
[01:52.69] Won't you please stay in dreams? Yeah
[01:55.73] 저기 멀리서 바다가 들려
[02:00.22] 꿈을 건너서 수풀 너머로
[02:04.77] 선명해지는 그 곳으로 가
[02:08.39] Take my hands now
[02:10.50] You are the cause of my euphoria
[02:14.22] 
[02:21.51] Euphoria
[02:24.21] 
[02:26.63] Take my hands now
[02:28.82] You are the cause of my euphoria
[02:34.30] 모래 바닥이 갈라진대도
[02:38.69] 그 누가 이 세곌 흔들어도
[02:43.26] 잡은 손 절대 놓지 말아줘
[02:47.76] 제발 꿈에서 깨어나지 마
[02:50.64] 저기 멀리서 바다가 들려 (들려)
[02:55.11] 꿈을 건너서 수풀 너머로 (제발 꿈에서 깨어나지 마)
[02:59.97] 선명해지는 그 곳으로 가
[03:03.21] Take my hands now
[03:05.62] You are the cause of my euphoria
[03:11.04] 
[03:13.24] Yeah-yeah, yeah-yeah, yeah-yeah
[03:16.44] Euphoria (euphoria, oh, ooh)
[03:21.41] Take my hands now
[03:23.85] You are the cause of my euphoria
[03:26.98] Yeah-yeah, yeah-yeah, yeah-yeah (yeah-yeah, yeah-yeah)
[03:31.73] Yeah-yeah, yeah-yeah, yeah-yeah (oh)
[03:34.66] Euphoria
[03:36.25] Yeah-yeah, yeah-yeah, yeah-yeah (ooh)
[03:39.99] Close the door now (door now)
[03:42.22] When I'm with you, I'm in utopia
[03:43.85] `,
        lyricsTranslation: `Você é o sol que voltou a nascer na minha vida,

o renascimento dos sonhos que eu tinha quando era criança.

Eu nem sei explicar que sentimento é esse,

às vezes me pergunto se ainda estou vivendo dentro de um sonho.

Um sonho que é como uma miragem azul no meio do deserto,

algo que sempre esteve escondido no fundo de mim.

É uma felicidade tão intensa que quase me tira o ar,

e tudo ao meu redor parece ficar cada vez mais transparente.

Ao longe, consigo ouvir o som do mar,

atravessando os sonhos, passando por entre as árvores,

até chegar a esse lugar que vai ficando cada vez mais nítido.

Segure minhas mãos agora.

**Você é a razão da minha euforia.**

Euforia.

Segure minhas mãos agora.

**Você é a razão da minha euforia.**

Euforia.

Feche a porta agora.

Quando estou com você, estou no meu próprio paraíso.

Será que você também passou tanto tempo procurando

por sonhos que havia perdido, assim como eu?

É diferente dessas palavras comuns sobre destino.

É o seu olhar, carregado de dor,

que me mostra que você também enxerga o mesmo lugar que eu.

Por favor, não vamos acordar desse sonho.

Ao longe, consigo ouvir o som do mar,

atravessando os sonhos, passando por entre as árvores,

até chegarmos juntos àquele lugar que se torna cada vez mais nítido.

Segure minhas mãos agora.

**Você é a razão da minha euforia.**

Euforia.

Segure minhas mãos agora.

**Você é a razão da minha euforia.**

Mesmo que o chão de areia se parta sob nossos pés,

mesmo que alguém tente abalar o nosso mundo,

por favor, nunca solte a minha mão.

Por favor, não acorde desse sonho.

Ao longe, consigo ouvir o som do mar,

atravessando os sonhos, passando por entre as árvores.

**Por favor, não acorde desse sonho.**

Vamos para aquele lugar que se torna cada vez mais nítido.

Segure minhas mãos agora.

**Você é a razão da minha euforia.**

Euforia.

Segure minhas mãos agora.

**Você é a razão da minha euforia.**

Euforia.

Feche a porta agora.

**Quando estou com você, estou no meu próprio paraíso.**
`
    },
    {
        id: 7,
        title: "Heaven Can Wait",
        artist: "Michael Jackson",
        album: "Invincible",
        cover: "assets/covers/7.png",
        audio: "music/musica7.mp3",
        message: "Se existe algum lugar melhor que estar ao seu lado, eu prefiro esperar para descobrir, porque hoje eu só quero você.",
        duration: "4:49",
        favorite: false,
        lyrics: `[00:14.77] Tell the angels no!
[00:17.67] I don't want to leave my baby alone
[00:21.72] I don't want nobody else to hold you
[00:25.79] That's a chance I'll take
[00:28.45] Baby I'll stay
[00:30.42] Heaven can wait
[00:32.44] No!
[00:34.11] If the angels took me from this earth
[00:38.07] I would tell them bring me back to her
[00:42.20] It's a chance I'll take
[00:44.69] Maybe I'll stay
[00:46.79] Heaven can wait
[00:48.92] You're beautiful
[00:49.93] You're wonderful!
[00:50.99] Incredible!
[00:52.05] I love you so!
[00:52.95] You're beautiful!
[00:54.59] Each moment spent with you is simply wonderful
[00:58.80] This love I have for you girl it's incredible
[01:02.72] And I don't know what I'd do
[01:04.98] If I can't be with you
[01:07.06] The world could not go on so every night I pray
[01:11.13] If the Lord should come for me before I wake
[01:15.21] I wouldn't want to go
[01:17.02] If I can't see your face
[01:19.10] Can't hold you close
[01:21.07] What good would Heaven be?
[01:23.35] If the angels came for me I'd tell them no
[01:27.24] I don't want to leave my baby alone
[01:31.22] I don't want nobody else to hold you
[01:35.16] That's a chance I'll take
[01:37.80] Baby I'll stay
[01:39.88] Heaven can wait
[01:42.07] No!
[01:43.48] If the angels took me from this earth
[01:47.45] I would tell them bring me back to her
[01:51.58] It's a chance I'll take
[01:53.92] Maybe I'll stay
[01:56.15] Heaven can wait
[01:58.07] Unthinkable
[01:59.81] Me sitting up in the clouds and you are all alone
[02:03.96] The time might come around when you'd be moving on (Moving on)
[02:10.46] I'd turn it all around
[02:12.44] And try to get back down to my baby girl
[02:16.38] Can't stand to see nobody kissing, touching her!
[02:20.44] Couldn't take nobody loving you the way we were!
[02:25.08] 
[02:26.49] What good would Heaven be?
[02:28.73] If the angels come for me I'd tell them no
[02:33.04] No!
[02:34.59] I don't want to leave my baby alone
[02:38.56] I don't want nobody else to hold you
[02:42.54] That's a chance I'll take
[02:45.14] Baby I'll stay
[02:47.19] Heaven can wait
[02:49.45] No!
[02:50.65] If the angels took me from this earth
[02:54.67] I would tell them bring me back to her
[02:59.13] It's a chance I'll take
[03:01.42] Maybe I'll stay
[03:03.62] Heaven can wait
[03:06.35] Oh no!
[03:07.66] Can't be without my baby!
[03:10.43] Won't go!
[03:11.73] Without her I'd go crazy!
[03:14.33] Oh no!
[03:15.72] Guess Heaven will be waiting!
[03:19.07] Ooh!
[03:22.53] Oh no!
[03:23.63] Can't be without my baby
[03:26.63] Won't go!
[03:27.99] Without her I'd go crazy!
[03:30.66] Oh no!
[03:32.10] Guess Heaven will be waiting!
[03:35.35] Ooh!
[03:39.09] 
[03:40.79] No!
[03:41.98] I don't want to leave my baby alone
[03:45.88] I don't want nobody else to hold you
[03:49.98] That's a chance I'll take
[03:52.60] Baby I'll stay
[03:54.74] Heaven can wait
[03:56.87] No!
[03:58.36] If the angels took me from this earth
[04:02.27] I would tell them bring me back to her
[04:06.41] It's a chance I'll take
[04:08.85] Maybe I'll stay
[04:11.03] Heaven can wait (no)
[04:15.57] Just leave us alone
[04:17.02] (You're beautiful, you're wonderful, incredible, I love you so)
[04:20.45] Leave us alone
[04:24.08] Please leave us alone (you're beautiful)
[04:27.84] Please leave us alone
[04:32.89] Oh, leave me alone
[04:36.06] Please leave me alone
[04:40.17] I said leave me alone
[04:44.55] `,
        lyricsTranslation: `Diga aos anjos que não!

Eu não quero deixar meu amor sozinho.

Não quero que ninguém mais segure você.

Essa é uma chance que eu estou disposto a correr.

Meu amor, eu vou ficar.

**O céu pode esperar.**

Não!

Se os anjos viessem me levar desta Terra,

eu pediria que me trouxessem de volta para você.

Essa é uma chance que eu estou disposto a correr.

Talvez eu escolha ficar.

**O céu pode esperar.**

Você é linda.

Você é maravilhosa.

Incrível.

Eu amo tanto você!

Você é linda!

Cada momento ao seu lado é simplesmente maravilhoso.

O amor que sinto por você é algo incrível.

E eu nem sei o que faria

se não pudesse estar com você.

O mundo não poderia continuar da mesma forma.

Por isso, todas as noites eu faço uma oração:

se o Senhor vier me buscar antes que eu acorde,

eu não quero partir

se não puder ver o seu rosto,

se não puder ter você em meus braços.

Que sentido teria o céu

se eu não pudesse estar com você?

Se os anjos viessem me buscar, eu diria que não.

Eu não quero deixar meu amor sozinho.

Não quero que ninguém mais segure você.

Essa é uma chance que eu estou disposto a correr.

Meu amor, eu vou ficar.

**O céu pode esperar.**

Não!

Se os anjos me levassem desta Terra,

eu pediria que me trouxessem de volta para você.

Essa é uma chance que eu estou disposto a correr.

Talvez eu escolha ficar.

**O céu pode esperar.**

Seria impossível imaginar

eu sentado entre as nuvens enquanto você estivesse aqui, sozinha.

Talvez um dia você precisasse seguir em frente.

Mas eu faria de tudo para voltar

para você, meu amor.

Eu não suportaria ver outra pessoa beijando você,

tocando você,

ou amando você da maneira que nós nos amamos.

Que sentido teria o céu

se os anjos viessem me buscar?

Eu diria que não.

**Não!**

Eu não quero deixar meu amor sozinho.

Não quero que ninguém mais segure você.

Essa é uma chance que eu estou disposto a correr.

Meu amor, eu vou ficar.

**O céu pode esperar.**

Não!

Se os anjos me levassem desta Terra,

eu pediria que me trouxessem de volta para você.

Essa é uma chance que eu estou disposto a correr.

Talvez eu escolha ficar.

**O céu pode esperar.**

Oh, não!

Eu não consigo viver sem você, meu amor.

Eu não vou embora!

Sem você, eu enlouqueceria.

Oh, não!

Acho que o céu vai ter que esperar.

Oh, não!

Eu não consigo viver sem você.

Eu não vou embora!

Sem você, eu enlouqueceria.

Oh, não!

Acho que o céu vai ter que esperar.

Não!

Eu não quero deixar meu amor sozinho.

Não quero que ninguém mais segure você.

Essa é uma chance que eu estou disposto a correr.

Meu amor, eu vou ficar.

**O céu pode esperar.**

Não!

Se os anjos me levassem desta Terra,

eu pediria que me trouxessem de volta para você.

Essa é uma chance que eu estou disposto a correr.

Talvez eu escolha ficar.

**O céu pode esperar.**

Apenas deixem nós dois em paz.

Você é linda, maravilhosa, incrível.

Eu amo tanto você.

Deixem nós dois em paz.

Por favor, deixem nós dois em paz.

Por favor, apenas nos deixem viver o nosso amor.

Deixem-me ficar com você.

Porque, se depender de mim,

**até o céu pode esperar.**
`
    },
    {
        id: 8,
        title: "The Lady in My Life",
        artist: "Michael Jackson",
        album: "Thriller",
        cover: "assets/covers/8.png",
        audio: "music/musica8.mp3",
        message: "Se um dia alguém me perguntar quem ocupa o lugar mais especial na minha vida, eu não vou precisar pensar duas vezes.",
        duration: "4:59",
        favorite: false,
        lyrics: `[00:19.86]There'll be no darkness tonight
[00:24.48]Lady our love will shine
[00:29.36]Lighting the night
[00:32.99]Just put your trust in my heart and meet me in paradise
[00:42.47]Now is the time
[00:44.63]
[00:44.85]Girl, you're every wonder in this world to me
[00:51.77]
[00:52.68]A treasure time won't steal away
[00:58.62]
[00:59.04]So listen to my heart
[01:02.12]Lay your body close to mine
[01:05.22]Let me feel you with my dreams
[01:08.48]I can make you feel alright
[01:12.67]And baby through the years
[01:15.24]Gonna love you more each day
[01:18.56]So I'll promise you tonight
[01:21.35]That you will always be the lady in my life
[01:28.02]
[01:32.24]Lay back in my tenderness
[01:35.10]Let's make this a night we won't forget
[01:39.94]
[01:40.16]Girl I need your sweet caress, oh
[01:45.51]Reach out to a fantasy
[01:48.77]Two hearts in the beat of ecstasy
[01:53.21]
[01:53.43]Come to me, girl
[01:58.35]
[01:58.68]And I will keep you warm
[02:01.21]Through the shadows of the night
[02:04.54]Let me touch you with my love
[02:07.52]I can make you feel so right
[02:11.49]
[02:11.76]And baby through the years
[02:14.36]Even when we're old and gray
[02:17.56]I will love you more each day
[02:20.75]'Cause you will always be the lady in my life
[02:27.30]
[02:30.11]Stay with me
[02:33.28]
[02:35.57]I want you to stay with me
[02:40.35]
[02:41.82]I need you by my side
[02:47.78]
[02:49.19]Don't you go no where
[02:50.93](Ooh, girl, let me keep you warm)
[02:53.22]Let me keep you warm (You are the lady in my life)
[02:56.37]You're my lady (Feel you with the sweetest love)
[02:59.99]I wanna squeeze ya (Always the lady in my life)
[03:02.30]I wanna touch you, baby (Lay back in my tenderness)
[03:06.98]
[03:07.37](You are the lady in my life) Do-do, do-do, doo (Rock me with your sweet caress)
[03:13.12](Always the lady in my life) Your my lady and I love your girl (Ooh)
[03:17.32]Girl, let me keep you warm
[03:20.48]
[03:20.70](You are the lady in my life) Don't you go nowhere
[03:23.99](Feel you with the sweetest love)
[03:26.96](Always the lady in my life) I love you, I love you, I need you, I want you, baby
[03:30.46](Lay back in my tenderness) Stay with me
[03:34.04](You are the lady in my life) Don't you go no where
[03:37.21](Rock me with your sweet caress) And I love you, baby
[03:40.67](Always the lady in my lady) Woo, ooh, baby
[03:48.08]
[03:52.28]Don't go no where
[03:55.20]
[03:55.82]You're my lady
[03:58.40]
[04:01.66]All through the night
[04:07.92]
[04:09.54](Ooh girl, let me keep you warm) I wanna give you all
[04:13.51](You are the lady in my life) In my life
[04:16.69](Feel you with the sweetest love) Let me be your baby
[04:19.92](Always the lady in my life) All over all over all over
[04:23.23](Lay back in my tenderness) Lay back with me
[04:26.46](You are the lady in my life) Let me touch you girl
[04:29.85](Rock me with your sweet caress) Lay back with me
[04:33.19](Always the lady in my life) All over
[04:35.52](Ooh girl, let me keep you warm) All over, all over, all over, all over, all over, all over, baby
[04:39.77](You are the lady in my life) Woo
[04:42.91](Fill you with the sweetest love)
[04:45.76]
[04:46.06](Always the lady in my life) You're my lady
[04:49.57](Lay back in my tenderness) You're my lady, baby
[04:53.25]`,
        lyricsTranslation: `Não haverá escuridão esta noite.

Meu amor, o nosso amor vai brilhar,

iluminando toda a noite.

Apenas confie no meu coração

e venha comigo para o paraíso.

Agora é o momento.

Você é a coisa mais maravilhosa que existe neste mundo para mim,

um tesouro que nem o tempo será capaz de levar.

Então escute o meu coração.

Aproxime-se de mim,

deixe-me sentir você junto aos meus sonhos.

Eu quero fazer você se sentir amada.

E, meu amor, com o passar dos anos,

vou amar você cada dia mais.

Por isso, hoje à noite eu prometo:

**você será para sempre a mulher da minha vida.**

Descanse no meu carinho e na minha ternura.

Vamos fazer desta uma noite que jamais esqueceremos.

Eu preciso do seu carinho,

do seu abraço,

da sua presença.

Vamos alcançar juntos esse sonho,

dois corações batendo como um só.

Venha para mim, meu amor,

e eu vou manter você aquecida

durante toda a noite.

Deixe-me envolver você com o meu amor.

Quero fazer você sentir o quanto é especial para mim.

E, meu amor, com o passar dos anos,

mesmo quando estivermos velhinhos e com os cabelos grisalhos,

eu continuarei amando você cada dia mais.

Porque você será para sempre

**a mulher da minha vida.**

Fique comigo.

Eu quero que você fique comigo.

Preciso de você ao meu lado.

Não vá embora.

Fique aqui comigo.

Deixe-me cuidar de você,

deixe-me manter você aquecida.

**Você é a mulher da minha vida.**

Quero envolver você com todo o meu amor.

Você é a minha mulher,

e eu quero ter você sempre perto de mim.

Quero sentir você,

quero abraçar você,

quero cuidar de você, meu amor.

**Você é, e sempre será, a mulher da minha vida.**

Fique comigo.

Não vá embora.

Eu amo você, meu amor.

E quero continuar amando você

durante toda a noite,

durante todos os dias,

durante todos os anos que ainda teremos juntos.

Não vá embora.

Você é a minha mulher.

E será assim por toda a noite.

Eu quero entregar tudo de mim a você.

Quero que você faça parte da minha vida.

Deixe-me ser seu amor.

Quero estar com você por inteiro.

Descanse em meus braços.

Venha ficar comigo.

Deixe-me tocar seu coração com todo o meu carinho.

Fique aqui comigo.

**Porque você é a mulher da minha vida.**

Você é a minha mulher,

a minha amada,

a pessoa que eu escolhi para caminhar ao meu lado.

E enquanto o tempo passar,

eu continuarei olhando para você

e pensando:

**"É você. Sempre foi você."**
`
    },
    {
        id: 9,
        title: "DNA",
        artist: "BTS",
        album: "Love Yourself 承 'Her'",
        cover: "assets/covers/9.png",
        audio: "music/musica9.mp3",
        message: "Você entrou tão fundo na minha vida que parece que o meu coração já sabia o seu nome antes mesmo de eu te conhecer.",
        duration: "3:43",
        favorite: false,
        lyrics: `[00:16.54] 첫눈에 널 알아보게 됐어 (hmm)
[00:20.39] 서를 불러왔던 것처럼 (hoo, hoo, hoo-hoo-hoo)
[00:23.84] 내 혈관 속 DNA가 말해줘 (hmm)
[00:27.54] 내가 찾아 헤매던 너라는 걸 (hoo, hoo, hoo-hoo-hoo)
[00:30.49] 우리 만남은 (만남은) 수학의 공식 (수학의 공식)
[00:34.20] 종교의 율법 (율법) 우주의 섭리 (우주의 섭리)
[00:38.26] 내게 주어진 운명의 증거 (shoot), 너는 내 꿈의 출처 (shoot)
[00:42.24] Take it, take it, 너에게 내민 내 손은 정해진 숙명
[00:45.41] 걱정하지 마, love
[00:49.03] 이 모든 건 우연이 아니니까
[00:52.66] 우린 완전 달라, baby
[00:56.35] 운명을 찾아낸 둘이니까
[00:59.95] 우주가 생긴 그 날부터 계속 (계속)
[01:03.90] 무한의 세기를 넘어서 계속 (계속, 계속, yah)
[01:08.16] 우린 전생에도, 아마 다음 생에도
[01:12.00] 영원히 함께니까 (DNA)
[01:16.51] 
[01:18.69] 이 모든 건 우연이 아니니까 (DNA)
[01:23.62] 
[01:26.06] 운명을 찾아낸 둘이니까 (DNA)
[01:32.38] I want it this love (this love)
[01:33.67] I, I want it real love (real love)
[01:35.52] 난 너에게만 집중해, 좀 더 세게 날 이끄네
[01:39.12] 태초의 DNA (DNA) 가 널 원하는데 (하는데)
[01:43.07] 이건 필연이야, I love us (love us)
[01:45.16] 우리만이 true lovers (lovers)
[01:46.94] 그녀를 볼 때마다 소스라치게 놀라
[01:50.46] 신기하게 자꾸만 숨이 멎는 게 참 이상해 설마
[01:54.01] 이런 게 말로만 듣던 사랑이란 감정일까? (Oh, yeah)
[01:57.96] 애초부터 내 심장은 널 향해 뛰니까 (woo)
[02:01.38] 걱정하지 마, love
[02:04.96] 이 모든 건 우연이 아니니까
[02:08.35] 우린 완전 달라, baby
[02:12.03] 운명을 찾아낸 둘이니까
[02:15.94] 우주가 생긴 그 날부터 계속 (계속)
[02:19.80] 무한의 세기를 넘어서 계속 (계속, 계속, yah)
[02:24.18] 우린 전생에도, 아마 다음 생에도
[02:27.74] 영원히 함께니까 (DNA)
[02:34.69] 이 모든 건 우연이 아니니까 (DNA)
[02:41.13] 운명을 찾아낸 둘이니까 (DNA)
[02:46.94] 
[02:49.28] 돌아보지 말아
[02:52.61] 운명을 찾아낸 우리니까
[02:56.56] 후회하지 말아, baby
[03:00.15] 영원히, 영원히, 영원히, 영원히 (영원히, 영원히)
[03:05.66] 함께니까
[03:07.62] 걱정하지 마, love (ah)
[03:11.05] 이 모든 건 우연이 아니니까
[03:14.93] 우린 완전 달라, baby
[03:18.52] 운명을 찾아낸 둘이니까 (DNA)
[03:23.54] La-la-la-la-la, la-la-la-la-la
[03:26.90] 우연이 아니니까 (DNA)
[03:30.80] La-la-la-la-la, la-la-la-la-la
[03:34.31] 우연이 아니니까 (DNA)
[03:37.61] `,
        lyricsTranslation: `Eu soube que era você assim que te vi pela primeira vez.

Como se nossas almas já soubessem o caminho uma até a outra.

Até o meu próprio DNA parece dizer

que você é aquela que eu passei tanto tempo procurando.

O nosso encontro é como uma fórmula matemática,

como uma lei do universo,

como algo que estava destinado a acontecer.

Você é a prova do destino que me foi dado,

a origem de todos os sonhos que eu carregava comigo.

Então pegue, pegue a minha mão.

A mão que estendo para você

como se tivesse sido destinada a encontrar a sua.

Não se preocupe, meu amor.

**Porque nada disso aconteceu por acaso.**

Nós somos diferentes de todos os outros,

porque somos dois corações que encontraram o próprio destino.

Desde o dia em que o universo nasceu,

continuamos caminhando um em direção ao outro.

Atravessando a eternidade,

ultrapassando incontáveis vidas e gerações.

Nós estivemos juntos em vidas passadas

e, talvez, estaremos juntos nas próximas.

Porque, não importa quantas vidas existam,

**eu quero estar com você para sempre.**

Nada disso aconteceu por acaso.

Porque somos dois que encontraram o seu destino.

Eu quero esse amor.

Eu quero um amor verdadeiro.

Quero olhar somente para você

e deixar que você me conduza cada vez mais para perto.

Desde o começo de tudo,

algo dentro de mim já desejava encontrar você.

Isso não é coincidência.

**É inevitável. É o nosso amor.**

Nós somos dois corações que nasceram para se encontrar.

Toda vez que olho para você,

ainda fico completamente surpreso.

É estranho como meu coração parece parar

sempre que você está diante de mim.

Será que isso é aquele sentimento

que as pessoas chamam de amor?

Talvez meu coração já soubesse desde o início,

porque ele sempre bateu na direção de você.

Não se preocupe, meu amor.

**Nada disso aconteceu por acaso.**

Nós somos diferentes de todos os outros,

porque somos dois que encontraram o próprio destino.

Desde o dia em que o universo nasceu,

algo sempre nos conduziu um até o outro.

Atravessando a eternidade,

além de incontáveis vidas e gerações.

Nós estivemos juntos antes

e estaremos juntos novamente.

**Para sempre.**

Nada disso aconteceu por acaso.

Porque somos dois que finalmente encontraram o seu destino.

Não olhe para trás.

Nós encontramos o nosso destino.

Não tenha arrependimentos, meu amor.

Porque estaremos juntos

para sempre,

para sempre,

para sempre,

para sempre.

**Porque somos nós.**

Não se preocupe, meu amor.

Porque nada disso aconteceu por acaso.

Nós somos diferentes de todos os outros,

porque somos dois que encontraram o próprio destino.

Nada disso foi coincidência.

Nada disso foi por acaso.

**Era para ser você.**

E, de alguma forma,

**era para ser nós.**
`
    },
    {
        id: 10,
        title: "Dou a Vida por Um Beijo",
        artist: "Zezé Di Camargo & Luciano",
        album: "Zezé Di Camargo & Luciano",
        cover: "assets/covers/10.png",
        audio: "music/musica10.mp3",
        message: "Se um beijo seu consegue parar o mundo por alguns segundos, eu passaria a vida inteira procurando esse instante outra vez.",
        duration: "4:00",
        favorite: false,
        lyrics: `[00:30.50] Difícil demais te amar assim
[00:31.50] Minha timidez tem que ter um fim
[00:32.19] Preciso perder o medo de falar
[00:33.84] Pra não te perder vou me declarar
[00:40.10] Morro de saudades quando você some
[00:43.40] Dá uma vontade de gritar seu nome
[00:46.30] Quase uma loucura, uma obsessão
[00:51.63] Pra me sentir feliz só tem uma saida
[00:54.68] Fazer você ficar de vez na minha vida
[00:57.51] Perto dos meus olhos e do coração
[01:03.12] Eu te amo, eu preciso te dizer
[01:09.18] Todo dia, toda noite o meu sonho é você
[01:15.28] Eu te amo, é paixão que não tem fim
[01:21.02] Dou a vida por um beijo
[01:23.17] Quero ter você pra mim
[01:38.34] Morro de saudades quando você some
[01:39.90] Me dá uma vontade de gritar seu nome
[01:43.04] Quase uma loucura, uma obsessão
[01:48.90] Pra me sentir feliz só tem uma saida
[01:51.72] Fazer você ficar de vez na minha vida
[01:54.12] Perto dos meus olhos e do coração
[02:00.18] Eu te amo, eu preciso te dizer
[02:06.26] Todo dia, toda noite o meu sonho é você
[02:12.05] Eu te amo, é paixão que não tem fim
[02:17.58] Dou a vida por um beijo
[02:20.23] Quero ter você pra mim
[02:23.41] Eu te amo, eu preciso te dizer
[02:29.11] Todo dia, toda noite o meu sonho é você
[02:35.03] Eu te amo, é paixão que não tem fim
[02:40.61] Dou a vida por um beijo
[02:43.16] Quero ter você pra mim
[02:46.44] Dou a vida por um beijo
[02:48.18] Quero ter você pra mim`,
        lyricsTranslation: ""
    },
    {
        id: 11,
        title: "I Just Can't Stop Loving You",
        artist: "Michael Jackson",
        album: "Bad",
        cover: "assets/covers/11.png",
        audio: "music/musica11.mp3",
        message: "Quanto mais eu conheço você, mais motivos encontro para continuar escolhendo você todos os dias.",
        duration: "4:25",
        favorite: false,
        lyrics: `[00:33.47] Each time the wind blows
[00:36.24] I hear your voice so
[00:39.06] I call your name
[00:43.06] Whispers at morning
[00:45.01] Our love is dawning
[00:48.09] Heaven's glad you came
[00:52.03] You know how I feel
[00:55.02] This thing can't go wrong
[00:58.07] I'm so proud to say i love you
[01:02.02] Your love's got me high
[01:05.03] I long to get by
[01:07.04] This time is forever
[01:09.03] Love is the answer
[01:12.09] I hear your voice now
[01:14.09] You are my choice now
[01:17.09] The love you bring
[01:21.06] Heaven's in my heart
[01:24.06] At your call
[01:25.03] I hear harps
[01:27.04] And angels sing
[01:31.04] You know how I feel
[01:33.02] This thing can't go wrong
[01:36.07] I can't live my life
[01:37.08] Without you
[01:40.00] I just can't hold on
[01:43.04] I feel we belong
[01:45.00] My life ain't worth living
[01:48.07] If I can't be with you
[01:50.06] I just can't stop loving you
[01:55.07] I just can't stop loving you
[02:00.07] And if i stop
[02:02.03] Then tell me just what
[02:04.00] Will I do
[02:07.03] 'Cause I just can't stop loving you
[02:14.00] At night when the
[02:16.02] Stars shine
[02:17.03] I pray in you I'll find
[02:19.04] A love so true
[02:23.04] When morning awakes me
[02:26.01] Will you come and take me
[02:29.06] I'll wait for you
[02:33.08] You know how i feel
[02:35.06] I won't stop until
[02:38.09] I hear your voice saying "I do"
[02:41.07] "I do"
[02:43.05] This thing can't go wrong
[02:45.08] This feeling's so strong
[02:47.04] Well, my life ain't
[02:49.02] Worth living
[02:50.02] If i can't be with you
[02:53.08] I just can't stop loving you
[02:58.07] I just can't stop loving you
[03:02.04] And if I stop
[03:04.06] Then tell me, just what will I do
[03:09.05] I just can't stop loving you
[03:13.04] We can change all the world tomorrow
[03:18.00] We can sing songs of yesterday
[03:23.06] I can say, hey
[03:25.01] Farewell To sorrow
[03:27.07] This is my life and I
[03:30.03] Want to see you for always
[03:33.08] I just can't stop loving you
[03:37.01] No, baby
[03:38.04] Oh!
[03:39.02] I just can't stop loving you
[03:42.01] If I can't stop!
[03:43.06] And if I stop
[03:45.06] Oh! Oh! Oh, Oh
[03:46.05] What will I do? Uh . . .Ooh . . .
[03:49.01] (Then tell me, just what will I do)
[03:53.07] I just can't stop loving you
[03:54.02] I do Girl!
[03:56.09] I just can't stop loving you
[03:58.03] You know I do
[04:00.02] And if I stop
[04:02.07] Then tell me, just what will I do
[04:05.09] I just can't stop loving you...
[04:07.00] `,
        lyricsTranslation: `Cada vez que o vento sopra,

parece que escuto a sua voz,

e então chamo pelo seu nome.

Nas manhãs tranquilas,

sinto o nosso amor nascer,

como se até o céu estivesse feliz por você ter chegado à minha vida.

Você sabe o que eu sinto.

Esse amor não pode dar errado.

Tenho tanto orgulho de poder dizer:

**eu amo você.**

O seu amor me faz tocar o céu,

e eu só quero continuar caminhando ao seu lado.

Desta vez, é para sempre.

Porque o amor é a resposta.

Agora eu escuto a sua voz,

e sei que é você quem eu escolhi.

O amor que você trouxe para a minha vida

fez do meu coração um lugar onde o céu existe.

Quando você me chama,

parece que escuto harpas

e até os anjos começam a cantar.

Você sabe o que eu sinto.

Esse amor é forte demais para dar errado.

Eu não consigo imaginar a minha vida sem você.

Simplesmente não consigo seguir sem o seu amor.

Sinto que nós pertencemos um ao outro.

E minha vida perderia o sentido

se eu não pudesse estar com você.

**Eu simplesmente não consigo parar de amar você.**

Eu simplesmente não consigo parar de amar você.

E se um dia eu parasse,

me diga...

o que eu faria sem você?

Porque eu simplesmente não consigo parar de amar você.

À noite, quando as estrelas brilham,

eu faço uma oração

para que eu encontre em você

um amor verdadeiro.

E quando a manhã chegar,

eu espero que você venha me encontrar.

Eu estarei esperando por você.

Você sabe o que eu sinto.

E eu não vou parar

até ouvir a sua voz dizendo:

**"Sim, eu aceito."**

"Sim."

Esse amor não pode dar errado.

Porque o que sinto por você é forte demais.

Minha vida não teria o mesmo sentido

se eu não pudesse estar com você.

**Eu simplesmente não consigo parar de amar você.**

Eu simplesmente não consigo parar de amar você.

E se um dia eu parasse,

me diga...

o que eu faria?

Eu simplesmente não consigo parar de amar você.

Podemos mudar o mundo amanhã.

Podemos guardar para sempre as lembranças de ontem.

E eu posso finalmente dizer:

**adeus à tristeza.**

Esta é a minha vida,

e eu quero passar todos os dias dela

ao seu lado.

**Eu simplesmente não consigo parar de amar você.**

Não, meu amor.

Eu simplesmente não consigo parar de amar você.

E se algum dia eu tentasse,

o que seria de mim?

Porque eu simplesmente não consigo parar de amar você.

Eu amo você.

E você sabe que eu amo.

E se um dia eu parasse,

me diga...

o que eu faria sem você?

**Eu simplesmente não consigo parar de amar você.**
`
    },
    {
        id: 12,
        title: "Pétala",
        artist: "Djavan",
        album: "Luz",
        cover: "assets/covers/12.png",
        audio: "music/musica12.mp3",
        message: "Você chegou de mansinho, como uma pétala levada pelo vento, e acabou florescendo no lugar mais bonito de mim.",
        duration: "4:04",
        favorite: false,
        lyrics: `[00:24.18] O seu amor
[00:34.48] Reluz que nem riqueza, asa do meu destino
[00:44.85] Clareza do tino, pétala
[00:54.94] De estrela caindo bem devagar
[01:06.09] Ó meu amor
[01:16.35] Viver é todo sacrifício feito em seu nome
[01:26.51] Quanto mais desejo um beijo, um beijo seu
[01:37.39] Muito mais eu vejo gosto em viver, viver
[01:47.85] Por ser exato
[01:52.92] O amor não cabe em si
[01:58.22] Por ser encantado
[02:03.84] O amor revela-se
[02:07.78] Por ser amor
[02:10.64] Invade, e fim
[02:22.18] 
[03:09.68] Por ser exato
[03:15.34] O amor não cabe em si
[03:21.34] Por ser encantado
[03:26.19] O amor revela-se
[03:30.19] Por ser amor
[03:32.65] Invade, e fim
[03:44.58] 
[04:00.64] Por ser exato
[04:05.71] O amor não cabe em si
[04:10.83] Por ser encantado
[04:16.06] O amor revela-se
[04:19.96] Por ser amor
[04:23.06] Invade, e fim
[04:33.50] `,
        lyricsTranslation: ""
    },
    {
        id: 13,
        title: "Love's Train",
        artist: "Con Funk Shun",
        album: "To the Max",
        cover: "assets/covers/13.png",
        audio: "music/musica13.mp3",
        message: "Se o amor é uma viagem, eu não quero saber o destino; só quero que seja com você.",
        duration: "5:18",
        favorite: false,
        lyrics: `[00:45.22] Warm night, can't sleep, too hurt, too weak
[00:50.73] Gotta call her up
[00:53.81] 
[00:59.51] Dial that, number, no one, answers
[01:05.97] Till it's two o'clock
[01:08.72] And if by chance, you let me come over
[01:12.07] 
[01:14.23] Out on the street, I want to see ya baby
[01:21.43] And if by chance you let me just hold ya
[01:28.08] I'm down on my knee, I wanna please ya baby, I
[01:35.35] I'll be your righteous lover
[01:37.59] She said "Sugar, Honey, Darlin'
[01:42.74] I really wanna see ya too
[01:46.17] 
[01:48.99] It's just that someone's, over, and baby
[01:56.17] I really wanna be with chu'
[02:02.38] But if by chance you let me just hold ya
[02:09.08] I'm calling I'm free, I wanna see ya baby
[02:17.10] When in need you said you would be here
[02:22.93] And you hold the key
[02:25.18] To my very being baby and I
[02:29.76] I love you, baby
[02:32.56] If you are that special lover
[02:35.82] And love keeps you tied to another
[02:39.15] That's the way it goes on love's train
[02:43.62] Sometimes heart strings can be broken
[02:49.27] But you've just have to keep on goin'
[02:52.91] That's the way it goes on love's train
[02:57.06] 
[02:59.45] On a warm night, lady, wants her, baby
[03:06.58] So she calls him up
[03:10.08] 
[03:12.63] Dial that, number, no one, answers
[03:20.29] Till it's two o'clock
[03:24.65] If by chance, you just come over
[03:31.26] 'Cause darlin' please, I've got to see ya baby
[03:38.21] And when in need you said you would be here
[03:45.18] And now I'm in need and please believe me baby
[03:52.47] I love you darlin' (Listen babe)
[03:56.19] If you are that special lover
[03:58.21] Love keeps you tied to another
[04:02.10] That's the way it goes on love's train
[04:05.42] You don't need no, you don't need no ticket to ride
[04:09.39] Sometimes heart strings can be broken
[04:11.76] But you've just got to keep on goin'
[04:15.42] That's the way it goes on love's train
[04:18.53] (Listen babe, listen baby)
[04:22.05] If deep sorrow you've been soakin'
[04:25.30] But you've just have to keep on strokin'
[04:28.72] That's the way it goes on love's train
[04:32.64] Loves a hurting thang ya'll that makes you want to cry, come on
[04:36.71] If you are that special lover
[04:38.84] And love keeps you tied to another
[04:42.02] That's the way it goes on love's train
[04:48.07] (Find yourself alone)
[04:49.82] Sometimes heart strings can be broken
[04:52.34] But you've just have to keep on flowin'
[04:55.53] That's the way it goes on love's train
[04:59.24] In time everythings gonna be alright
[05:02.31] If deep sorrow you've been soakin'
[05:05.84] But you've just got to keep on strokin'
[05:08.78] That's the way it goes on love's train
[05:13.80] `,
        lyricsTranslation: `Noite quente, não consigo dormir,
Meu coração está ferido e cansado,
Só consigo pensar em ligar para você.

Disco o seu número,
Mas ninguém atende,
E as horas passam lentamente,
Até chegar às duas da manhã.

E se, por acaso, você deixasse
Que eu fosse até você, meu amor...
Eu só queria te ver,
Ficar perto de você,
E, se pudesse, apenas te abraçar.

De joelhos, eu só queria te fazer feliz,
Ser aquele amor verdadeiro
Que sempre estará ao seu lado.

E você me diz:

"Meu amor, minha querida,
Eu também quero muito te ver.
É só que alguém está aqui agora...
Mas acredite, eu queria estar com você."

E se você me deixasse apenas te abraçar,
Eu estaria livre para ir até você.
Eu só quero te ver, meu amor.

Quando você precisa de mim,
Você sabe que eu estarei aqui.
Porque você tem a chave
Do meu coração, da minha alma,
De tudo aquilo que existe em mim.

Eu amo você, meu amor.

Se você é aquele amor especial,
Mesmo que a vida às vezes nos leve
Por caminhos diferentes,
É assim que o amor segue sua viagem.

Às vezes, o coração se quebra,
Às vezes, amar também dói,
Mas precisamos continuar seguindo.

É assim que acontece
No trem do amor.

---

Em uma noite quente,
Ela sente falta de quem ama
E decide ligar.

Ela disca o número,
Mas ninguém atende,
E ela espera até as duas da manhã.

"Se você puder, venha até mim...
Por favor, meu amor,
Eu preciso tanto te ver."

Quando você precisa de alguém,
Você sempre disse que estaria aqui.
E agora sou eu quem precisa de você,
Então, por favor, acredite em mim.

Eu amo você, meu amor.

Se você é aquele amor especial,
Mesmo quando o coração
Está preso a outro caminho,
É assim que o amor segue sua viagem.

Você não precisa de passagem
Para embarcar nesse trem.

Às vezes, o coração se quebra,
Mas precisamos continuar caminhando,
Continuar acreditando,
Continuar amando.

É assim que acontece
No trem do amor.

Mesmo quando a tristeza profunda
Toma conta do nosso coração,
Precisamos continuar seguindo em frente.

É assim que acontece
No trem do amor.

O amor às vezes machuca,
Às vezes faz nossos olhos chorarem,
Mas ainda assim ele continua sendo amor.

Se você é aquele amor especial,
Mesmo quando a vida nos coloca
Diante de caminhos difíceis,
É assim que o amor segue sua viagem.

Quando você se encontrar sozinho,
Quando sentir que o coração está quebrado,
Não pare de seguir em frente.

Porque, com o tempo,
Tudo vai ficar bem.

Mesmo que a tristeza pese sobre você,
Continue acreditando, continue amando,
Continue seguindo a viagem.

Porque é assim que acontece
No trem do amor.
`
    },
    {
        id: 14,
        title: "Rock with You",
        artist: "Michael Jackson",
        album: "Estações",
        cover: "assets/covers/14.png",
        audio: "music/musica14.mp3",
        message: "Se eu pudesse escolher uma única pessoa para dançar comigo em todos os momentos da vida, escolheria você.",
        duration: "3:40",
        favorite: false,
        lyrics: `[00:19.35] Girl, close your eyes
[00:22.80] Let that rhythm get into you
[00:28.03] Don't try to fight it
[00:30.44] There ain't nothin' that you can do
[00:35.77] Relax your mind
[00:40.59] Lay back and groove with mine
[00:43.68] You got to feel that heat
[00:46.10] And we can ride the boogie
[00:48.39] Share that beat of love
[00:51.86] I wanna rock with you (all night)
[00:56.74] Dance you into day (sunlight)
[01:00.49] I wanna rock with you (all night)
[01:04.69] We're gonna rock the night away
[01:09.94] Out on the floor
[01:12.80] There ain't nobody there but us
[01:17.96] Girl, when you dance
[01:21.29] There's a magic that must be love
[01:26.47] Just take it slow
[01:30.49] 'Cause we got so far to go
[01:33.84] When you feel that heat
[01:36.30] And we're gonna ride the boogie
[01:38.61] Share that beat of love
[01:42.09] I wanna rock with you (all night)
[01:46.91] Dance you into day (sunlight)
[01:50.62] I wanna rock with you (all night)
[01:55.00] We're gonna rock the night away
[02:00.03] And when the groove is dead and gone, yeah
[02:07.25] You know that love survives
[02:11.50] So we can rock forever, on
[02:16.71] 
[02:29.02] I wanna rock with you
[02:31.42] I wanna groove with you
[02:34.75] 
[02:46.15] I wanna rock with you
[02:48.32] I wanna groove with you
[02:50.06] I wanna rock (all night) with you girl (sunlight)
[02:58.30] Rock with you, rock with you, yeah (all night)
[03:02.69] Dance the night away
[03:06.15] I wanna rock with you (yeah) (all night)
[03:10.78] Rock you into day (sunlight)
[03:14.69] I wanna rock with you (all night)
[03:19.15] Rock the night away
[03:22.64] Feel the heat feel the beat (all night)
[03:27.64] Rock you into day (sunlight)
[03:31.34] I wanna rock (all night)
[03:35.74] Rock the night away
[03:37.50] `,
        lyricsTranslation: `Meu amor, feche os olhos,
Deixe essa melodia envolver você.
Não tente resistir,
Não há nada que precise fazer.

Relaxe a sua mente,
Deixe-se levar ao meu lado.
Sinta esse calor,
E vamos nos deixar levar pela música,
Compartilhando esse ritmo de amor.

Eu quero dançar com você a noite inteira,
Dançar até o amanhecer chegar.
Eu quero estar com você a noite inteira,
E deixar a noite inteira passar.

Lá na pista,
Não existe mais ninguém além de nós.
Meu amor, quando você dança,
Existe uma magia no ar
Que só pode ser amor.

Vamos devagar,
Porque ainda temos uma vida inteira pela frente.
Quando sentimos esse calor,
Deixamos a música nos levar,
Compartilhando esse ritmo de amor.

Eu quero dançar com você a noite inteira,
Dançar até o amanhecer chegar.
Eu quero estar com você a noite inteira,
E deixar a noite inteira passar.

E quando a música terminar,
Quando o ritmo finalmente desaparecer,
Você sabe que o nosso amor continuará.

Porque podemos continuar dançando juntos
Para sempre.

Eu quero dançar com você,
Quero sentir esse momento ao seu lado.

Eu quero dançar com você,
Quero viver esse ritmo com você.

Quero estar com você a noite inteira,
Até o sol nascer.

Dançar com você,
Dançar com você, meu amor,
Até a noite virar manhã.

Eu quero estar com você a noite inteira,
Dançar até o amanhecer chegar.

Eu quero dançar com você a noite inteira,
E deixar a noite inteira passar.

Sentir o calor, sentir o ritmo,
Viver cada instante ao seu lado.

Eu quero estar com você a noite inteira,
Dançar até o amanhecer.

Eu quero você comigo,
Quero continuar dançando,
Enquanto a noite inteira passa.

Porque, enquanto estivermos juntos,
Qualquer noite pode durar para sempre.
`
    },
    {
        id: 15,
        title: "Between the Sheets",
        artist: "The Isley Brothers ",
        album: "Between the Sheets",
        cover: "assets/covers/15.png",
        audio: "music/musica15.mp3",
        message: "Existem momentos em que o mundo inteiro desaparece e só importa a intimidade de estar perto de quem amamos. Para mim, essa pessoa é você.",
        duration: "5:40",
        favorite: false,
        lyrics: `[00:24.12] Hey, girl, ain't no mystery
[00:28.32] At least as far as I can see
[00:33.19] I wanna keep you here layin' next to me
[00:39.58] Sharin' our love between the sheets
[00:46.90] Ooh, baby, baby
[00:52.40] I feel your love surrounding me
[00:56.36] Whoa-oh-oh-oh-ooh, ooh, baby, baby
[01:03.93] Makin' love between the sheets
[01:09.97] Ooh, girl, let me hold you tight
[01:14.03] And you know, I'll make you feel alright
[01:18.95] Ooh, baby girl, just cling to me and let your mind be free
[01:25.65] While makin' love between the sheets
[01:32.88] Ooh, girl, I'll love you all night long
[01:36.97] And I know you felt it comin' on
[01:41.76] Ooh, darlin', just taste my love, ooh, you taste so sweet
[01:48.37] Sharin' our love between the sheets
[01:55.56] Ooh, baby, baby
[02:01.02] I feel your love surrounding me
[02:04.61] Whoa-oh-oh-oh-ooh, baby, baby
[02:12.46] We're makin' love between the sheets
[02:18.34] Hey, girl, what's your fantasy?
[02:22.78] I'll take you there, to that ecstasy
[02:27.75] Ooh, girl, you blow my mind, I'll always be your freak
[02:34.29] Let's make sweet love between the sheets
[02:38.92] Ooh, baby, baby
[02:46.88] I feel your love surrounding me
[02:51.03] Whoa-oh-oh-oh-ooh, baby, baby
[02:58.38] Makin' love between the sheets
[03:01.85] Ooh, baby, baby
[03:07.83] I feel your love surrounding me
[03:13.27] Whoa-oh-oh-oh-ooh, baby, baby
[03:21.27] Makin' love between the sheets
[03:24.35] Enough of the singin', let's make love
[03:28.54] 
[03:44.26] In between the sheets
[03:48.16] Oh, I like the way you receive me (Receive me, receive me)
[03:53.75] Girl, I love the way you relieve me
[03:59.56] I'm comin', comin' on strong (Comin' on strong, comin' on strong)
[04:05.22] (Sweet darlin') In between the sheets
[04:10.99] Oh, I like the way you receive me (Receive me, receive me)
[04:16.64] Girl, I love the way you relieve me
[04:23.45] Comin', comin' on strong (Comin' on strong)
[04:28.54] (Sweet darlin') In between the sheets
[04:32.49] 
[04:35.88] You got me moanin'
[04:40.23] Girl, you got me groanin'
[04:47.42] I'm comin', comin' on strong
[04:50.94] (Sweet darlin') In between the sheets
[04:54.90] Let's get all the way down
[04:58.52] 
[05:05.98] Turn it over
[05:10.37] I'm comin', comin', comin', comin', comin' on strong
[05:14.92] (Sweet darlin') In between the sheets
[05:16.23] Da-da-da-da-da-da-da-da
[05:19.92] Da-da-da-da-da-da-da-da
[05:21.91] `,
        lyricsTranslation: `Ei, garota, não existe mistério,
Pelo menos não para mim.
Eu só quero ter você aqui,
Deitada ao meu lado,
Compartilhando o nosso amor
Sob os lençóis.

Oh, meu amor...

Eu sinto o seu amor me envolvendo,
Me cercando por inteiro.
Oh, meu amor...

Vivendo o nosso amor
Entre os lençóis.

Deixe-me te abraçar bem forte,
E você sabe que vou fazer
Você se sentir bem.

Meu amor, apenas fique junto de mim,
Se entregue ao momento,
Deixe sua mente ficar livre,
Enquanto vivemos nosso amor
Entre os lençóis.

Eu quero amar você durante toda a noite,
E sei que você também sente
Esse momento chegando.

Meu amor, apenas sinta o meu carinho,
Porque o seu amor é doce demais.

Compartilhando nosso amor
Entre os lençóis.

Oh, meu amor...

Eu sinto o seu amor me envolvendo,
Me cercando por inteiro.

Oh, meu amor...

Vivendo nosso amor
Entre os lençóis.

Meu amor, qual é o seu desejo?
Eu quero descobrir cada sonho seu,
Levar você para um lugar
Onde só existam nós dois.

Você mexe completamente comigo,
E eu quero continuar sendo
Aquele que faz você se sentir amada.

Vamos viver esse amor
Entre os lençóis.

Oh, meu amor...

Eu sinto o seu amor me envolvendo,
Me cercando por inteiro.

Oh, meu amor...

Vivendo nosso amor
Entre os lençóis.

Oh, meu amor...

Eu sinto o seu amor me envolvendo,
E cada momento ao seu lado
Faz meu coração querer você ainda mais.

Entre os lençóis,
Onde o mundo deixa de existir
E só restamos nós dois.

Meu amor,
Não precisamos de mais nada agora,
Só de nós dois juntos.

Entre os lençóis.

Eu amo a forma como você se entrega
Ao carinho que existe entre nós.
Amo como conseguimos esquecer o mundo
Quando estamos juntos.

Meu amor,
Quero continuar perto de você,
Sentindo esse amor crescer
A cada instante.

Entre os lençóis.

Meu amor...

Deixe a noite nos envolver,
Deixe o tempo passar devagar.

Porque quando estou com você,
Tudo o que eu quero
É continuar ao seu lado.

Entre os lençóis,
Somente nós dois,
Vivendo o nosso amor.
`
    },
    {
        id: 16,
        title: "Monalisa",
        artist: "Jorge Vercillo",
        album: "Livre",
        cover: "assets/covers/16.png",
        audio: "music/musica16.mp3",
        message: "Eu poderia passar uma vida inteira tentando entender o seu sorriso e ainda assim continuaria encantado por ele.",
        duration: "4:00",
        favorite: false,
        lyrics: `[00:29.13] É incrível, nada desvia o destino
[00:35.36] Hoje tudo faz sentido
[00:38.94] E ainda há tanto a aprender
[00:44.19] E a vida tão generosa comigo
[00:50.14] Veio de amigo a amigo
[00:54.12] Me apresentar a você
[00:59.15] Paralisa com seu olhar, Monalisa
[01:05.10] Seu quase rir ilumina
[01:08.78] Tudo ao redor, minha vida
[01:12.98] Ai de mim, me conduza
[01:16.33] Junto a você ou me usa
[01:20.34] Pro seu prazer, me fascina
[01:23.82] Deusa com ar de menina
[01:29.22] Não se prenda
[01:31.79] A sentimentos antigos
[01:35.22] Tudo que se foi vivido
[01:39.04] Me preparou pra você
[01:44.17] Não se ofenda
[01:46.66] Com meus amores de antes
[01:50.33] Todos tornaram-se ponte
[01:54.02] Pra que eu chegasse a você
[01:59.18] Paralisa com seu olhar, Monalisa
[02:05.19] Seu quase rir ilumina
[02:08.90] Tudo ao redor, minha vida
[02:13.03] Ai de mim, me conduza
[02:16.46] Junto a você ou me usa
[02:20.27] Pro seu prazer, me fascina
[02:23.10] Deusa com ar de menina
[02:29.13] Paralisa com seu olhar, Monalisa
[02:35.28] E ao quase rir ilumina
[02:38.98] Tudo ao redor, minha vida
[02:42.97] Ai de mim, me conduza
[02:46.54] Junto a você ou me usa
[02:50.43] Pro seu prazer, me fascina
[02:53.94] Deusa com ar de menina
[02:59.38] Me fascina!
[03:01.36] Deusa com ar de menina
[03:13.10] Paralisa!
[03:17.88] Monalisa
[03:22.14] `,
        lyricsTranslation: ""
    },
    {
        id: 17,
        title: "Tender Love",
        artist: "Force M.D's",
        album: "Chillin'",
        cover: "assets/covers/17.png",
        audio: "music/musica17.mp3",
        message: "O que sinto por você não precisa ser barulhento para ser enorme; ele vive nos pequenos gestos, no cuidado e na vontade de te fazer feliz.",
        duration: "3:58",
        favorite: false,
        lyrics: `[00:01.81] Here i lay all alone
[00:19.11] Tossin turnin
[00:22.34] Longing for some of your
[00:25.86] Tender love
[00:29.32] I'm waitin 4 the right
[00:32.73] Moment to come
[00:36.23] So i can thank you for
[00:39.11] All the tender love you've given to me
[00:43.67] (CHORUS:)
[00:44.22] Tender love (tender love)
[00:46.73] Love so tender (aaaaaaah)
[00:50.13] Holdin me close to you
[00:53.38] Baby i surrender
[00:57.85] Candles fade like the dark
[01:01.59] Now i see how
[01:05.14] Loving a feeling's for
[01:07.19] All the tender lov you've given to me
[01:11.07] I want you more and more
[01:17.18] Can't resist you
[01:21.08] More than i feel your touch
[01:24.20] Tender love
[01:27.43] LOVIN ME STRAIGHT FROM THE HEART
[01:32.27] Holy mirror
[01:34.66] Please let me be a part
[01:38.26] Of all the tender love you've given to me
[01:52.91] (CHORUS)
[01:53.64] (INSTRUMENTAL) ooooooooooooh... yeah... surrender baby... ooooooh...
[02:00.02] ~*INSTRUMENTAL TIL PIANO STOPS PLAYING*~
[02:10.18] `,
        lyricsTranslation: `Aqui estou, deitado sozinho,
Virando de um lado para o outro,
Sentindo falta do seu carinho,
Do seu amor tão delicado.

Estou esperando o momento certo
Para poder agradecer
Por todo o amor e carinho
Que você sempre me deu.

Amor tão doce,
Um amor tão verdadeiro...
Quando você me abraça
E me mantém pertinho de você,
Eu simplesmente me entrego.

As velas vão se apagando
Enquanto a noite toma conta,
E agora eu entendo
O verdadeiro significado de amar.

Tudo isso existe por causa
Do amor e do carinho
Que você me deu.

E eu quero você cada vez mais.

Não consigo resistir a você.
Quanto mais sinto o seu toque,
Mais quero estar perto.

Seu amor é tão doce,
Tão verdadeiro,
E vem direto do coração.

Existe um lugar onde eu quero estar:
Ao seu lado, fazendo parte
De todo esse amor e carinho
Que você me dá.

Amor tão doce,
Um amor tão verdadeiro...

Quando você me abraça
E me mantém pertinho de você,
Eu simplesmente me entrego.

Eu só quero sentir
Esse amor que existe entre nós.

Porque todo o carinho que você me dá
Me faz querer você ainda mais.

E, quando penso em tudo
O que você trouxe para a minha vida,
Só consigo agradecer.

Por cada abraço,
Por cada momento,
Por cada demonstração de amor.

Você me ensinou
Como é bom amar e ser amado.

E tudo o que eu quero
É continuar recebendo
Esse amor tão doce
Que vem diretamente do seu coração.

Amor tão doce...
Meu amor, eu me entrego a você.
`
    },
    {
        id: 18,
        title: "You are My Lady",
        artist: "Freddie Jackson",
        album: "Rock Me Tonight",
        cover: "assets/covers/18.png",
        audio: "music/musica18.mp3",
        message: "Você não é apenas a mulher que eu amo; é a mulher que faz meu coração ter certeza de que encontrou seu lugar.",
        duration: "4:54",
        favorite: false,
        lyrics: `[00:11.90] There's something that I want to say
[00:17.16] But words sometimes get in the way
[00:22.59] I just want to show my feelings for you
[00:29.30] 
[00:32.97] There's nothing that I'd rather do
[00:38.20] Than spend every moment with you
[00:43.64] I guess you should know I love you so
[00:50.41] 
[00:54.20] You are my lady
[00:59.21] You're everything I need and more
[01:04.80] You are my lady
[01:08.01] You're all I'm living for
[01:14.92] There's no way that I can resist your precious kiss
[01:25.70] Girl you've got me so hypnotized
[01:32.86] 
[01:35.83] Just say that you'll stay with me (you'll stay)
[01:41.35] 'Cause our love was meant to be
[01:46.40] I promise to love you more each day
[01:53.56] 
[01:57.02] You are my lady (my love)
[02:02.12] You're everything I need and more
[02:07.75] You are my lady
[02:10.93] You're all I'm living for
[02:18.26] You are my lady yeah (my love)
[02:23.10] You're everything I need and more
[02:28.79] You are my lady
[02:31.96] You're all I'm living for
[02:37.99] I love your shine-shine-shine-shine
[02:47.79] Let's make it last until the end of time, yeah
[03:18.83] 
[03:21.15] You are my lady, yes you are (my love)
[03:26.44] Everything I need and more
[03:31.74] You are my lady
[03:35.04] You're all I'm living for
[03:42.14] You are my lady (my love)
[03:47.18] You're everything I need
[03:52.74] You are my lady
[03:56.01] You're all I'm living for
[04:01.17] Wanna tell the world (you are my lady)
[04:05.82] Back to my girl (everything I need and more)
[04:10.92] Sweeter than the day of days before (you are my lady)
[04:15.74] Ooh, you're all I'm living for
[04:21.36] I love the way you move girl (you are my lady)
[04:26.87] I love you so yeah (everything I need and more)
[04:31.49] Love won't let me love you baby-baby (you are my lady)
[04:39.65] `,
        lyricsTranslation: `Existe algo que eu quero dizer,
Mas às vezes as palavras não conseguem expressar
Tudo aquilo que sinto por você.

Eu só queria encontrar uma maneira
De mostrar o que existe dentro do meu coração.

Não existe nada que eu prefira
Do que passar cada momento ao seu lado.
Acho que você precisa saber
O quanto eu amo você.

Você é o meu amor,
É tudo o que eu preciso e muito mais.
Você é a mulher que eu amo,
Você é a razão pela qual eu vivo.

Não existe maneira de resistir
Ao seu beijo tão precioso.
Você me envolve de um jeito
Que me faz perder completamente o juízo.

Só me diga que vai ficar comigo,
Porque o nosso amor foi feito para acontecer.
E eu prometo amar você
Um pouco mais a cada dia.

Você é o meu amor,
É tudo o que eu preciso e muito mais.
Você é a mulher que eu amo,
Você é tudo aquilo por que eu vivo.

Você é o meu amor,
Meu amor...

É tudo o que eu preciso e muito mais.
Você é a mulher que eu amo,
E é por você que eu vivo.

Eu amo o seu brilho,
A maneira como você ilumina tudo ao seu redor.

Quero que o nosso amor dure
Até o fim dos tempos.

Você é o meu amor,
Sim, é você.

Tudo o que eu preciso e muito mais.
Você é a mulher que eu amo,
Você é tudo aquilo por que eu vivo.

Você é o meu amor,
É tudo o que eu preciso.

Você é a mulher que eu amo,
E é por você que eu vivo.

Quero dizer ao mundo inteiro:
Você é o meu amor.

Quero voltar sempre para você,
Minha garota, meu amor.

Você torna cada dia
Mais doce que o dia anterior.

Porque você é tudo aquilo
Por que eu vivo.

Eu amo a maneira como você se move,
A maneira como você transforma
Cada momento em algo especial.

Eu amo tanto você.

E quanto mais eu amo você,
Mais meu coração percebe
Que é ao seu lado que ele quer ficar.

Você é o meu amor.
Você é tudo o que eu preciso e muito mais.

E enquanto eu puder escolher,
Vou escolher você.
`
    },
    {
        id: 19,
        title: "Even the Nights Are Better",
        artist: "Air Supply",
        album: "Now and Forever",
        cover: "assets/covers/19.png",
        audio: "music/musica19.mp3",
        message: "Até as noites ficam mais bonitas quando sei que existe alguém como você fazendo parte da minha vida.",
        duration: "3:58",
        favorite: false,
        lyrics: `[00:13.21] I, I was the lonely one
[00:19.51] Wondering what went wrong
[00:23.38] Why love had gone, and left me lonely
[00:30.41] I, I was so confused, feeling like I'd just been used
[00:40.25] Then you came to me and my loneliness left me
[00:47.76] I used to think I was tied to a heartache
[00:51.96] That was the heartbreak, but now that I've found you
[00:55.86] Even the nights are better, now that we're here together
[01:04.28] Even the nights are better, since I found you, oh-ooh-whoa-ooh-whoa
[01:12.52] Even the days are brighter, when someone you love's beside ya
[01:20.82] Even the nights are better, since I found you
[01:29.13] You, you knew just what to do
[01:35.28] 'Cause you had been lonely too
[01:38.93] And you showed me how to ease the pain, and
[01:46.00] You did more than mend a broken heart
[01:52.12] 'Cause now you've made a fire start
[01:56.24] And I, I can see that you feel the same way
[02:03.59] I never dreamed there'd be someone to hold me
[02:07.87] Until you told me and now that I've found you
[02:11.65] Even the nights are better, now that we're here together
[02:19.89] Even the nights are better, since I found you, oh-ooh-whoa-ooh-whoa
[02:28.04] Even the days are brighter, when someone you love's beside ya
[02:36.28] Even the nights are better, since I found you
[02:44.22] 
[03:00.57] I never dreamed there'd be someone to hold me
[03:04.76] Until you told me and now that I've found you
[03:08.44] Even the nights are better, now that we're here together
[03:16.56] Even the nights are better, since I found you, oh-ooh-whoa-ooh-whoa
[03:24.54] Even the days are brighter, when someone you love's beside ya
[03:32.61] Even the nights are better, since I found you, oh-ooh-whoa-ooh-whoa
[03:40.67] Even the nights are better, now that we're here together
[03:48.77] Even the nights are better, since I found you
[03:52.55] `,
        lyricsTranslation: `Eu, eu era tão sozinho,
Tentando entender o que tinha dado errado.
Sem saber por que o amor tinha ido embora
E me deixado sozinho.

Eu estava tão confuso,
Sentindo como se tivesse sido usado,
Sem saber para onde seguir.

Então você chegou até mim,
E toda aquela solidão desapareceu.

Eu costumava pensar
Que estava preso a uma tristeza,
A um coração partido,
Mas tudo mudou quando encontrei você.

Agora até as noites são melhores,
Porque estamos aqui juntos.

Até as noites ficaram mais bonitas
Desde que encontrei você.

Até os dias parecem mais iluminados
Quando alguém que amamos
Está ao nosso lado.

Até as noites são melhores
Desde que encontrei você.

Você sabia exatamente o que fazer,
Porque também já conheceu a solidão.

E você me mostrou
Como aliviar a dor,
Como voltar a acreditar no amor.

Você fez muito mais
Do que simplesmente consertar meu coração partido.

Você reacendeu uma chama dentro de mim,
E agora consigo perceber
Que você sente o mesmo.

Eu nunca imaginei
Que existiria alguém para me abraçar,
Alguém que pudesse me fazer sentir
Que eu não estava mais sozinho.

Até você me mostrar isso.

E agora que encontrei você...

Até as noites são melhores,
Agora que estamos aqui juntos.

Até as noites ficaram mais bonitas
Desde que encontrei você.

Até os dias parecem mais iluminados
Quando alguém que amamos
Está ao nosso lado.

Até as noites são melhores
Desde que encontrei você.

Eu nunca imaginei
Que alguém poderia me abraçar
E fazer meu coração se sentir em casa.

Até você aparecer.

E agora que encontrei você,
Tudo mudou.

Até as noites são melhores,
Porque estamos aqui juntos.

Até as noites ficaram mais bonitas
Desde que encontrei você.

Até os dias parecem mais iluminados
Quando você está ao meu lado.

Até as noites são melhores,
Desde que encontrei você.

E se antes existia solidão,
Agora existe você.

Se antes as noites eram vazias,
Agora elas têm o seu amor.

Porque desde que encontrei você,
Meus dias ficaram mais brilhantes,
Minhas noites ficaram mais bonitas,
E meu coração nunca mais foi o mesmo.

Até as noites são melhores
Desde que encontrei você.
`
    },
    {
        id: 20,
        title: "Seguindo no Trem Azul",
        artist: "Roupa Nova",
        album: "Roupacustico",
        cover: "assets/covers/20.png",
        audio: "music/musica20.mp3",
        message: "Se a vida é uma viagem, eu não quero chegar rápido ao destino. Quero aproveitar cada estação ao seu lado.",
        duration: "4:12",
        favorite: false,
        lyrics: `[00:05.09] Confessar, sem medo de mentir
[00:10.11] Que em você, encontrei inspiração
[00:15.10] Para escrever
[00:19.12] Você é pessoa que nem eu
[00:23.91] Que sente amor
[00:26.97] Mas não sabe muito bem
[00:29.25] Como vai dizer
[00:33.40] Te dou meu coração
[00:38.06] Queria dar o mundo
[00:44.81] Luar do meu sertão
[00:49.46] Seguindo no trem azul
[00:56.12] Toda vez que for assoviar
[01:00.49] A cor do trem
[01:03.29] É da cor que alguém Fizer e você sonhar
[01:10.14] Não faz mal não ser compositor
[01:14.44] Se o amor valeu
[01:17.48] Eu empresto um verso meu
[01:20.18] Pra você dizer
[01:24.13] Só me dará prazer
[01:28.48] Se viajar contigo
[01:35.55] Até nascer o sol
[01:40.23] Seguindo no trem azul
[01:46.92] Te dou meu coração
[01:51.56] Queria dar o mundo
[01:58.12] Luar do meu sertão
[02:02.44] Seguindo no trem azul
[02:23.45] Vai lembrar de um cara como eu
[02:28.91] Que sente amor
[02:31.11] Mas não sabe muito bem
[02:33.44] Como vai dizer
[02:37.41] Só me dará prazer
[02:42.40] Se viajar contigo
[02:49.13] Até nascer o sol
[02:53.90] Seguindo no trem azul
[03:00.10] Te dou meu coração
[03:05.12] Queria dar o mundo
[03:11.20] Luar do meu sertão
[03:16.23] Seguindo no trem azul
[03:21.92] Seguindo no trem azul`,
        lyricsTranslation: ""
    },
    {
        id: 21,
        title: "Ela Une Todas as Coisas",
        artist: "Jorge Vercillo",
        album: "Todos Nós Somos Um",
        cover: "assets/covers/21.png",
        audio: "music/musica21.mp3",
        message: "Você tem esse jeito inexplicável de juntar em uma só pessoa tudo aquilo que eu sempre procurei no amor.",
        duration: "3:59",
        favorite: false,
        lyrics: `[00:20.36] Ela une todas as coisas
[00:25.84] Como eu poderia explicar
[00:29.50] Um doce mistério de rio
[00:33.10] Com a transparência de um mar?
[00:36.53] Ela une todas as coisas
[00:39.89] Quantos elementos vão lá
[00:43.46] Sentimento fundo de água
[00:47.23] Com toda leveza do ar
[00:50.52] Ela está em todas as coisas
[00:54.13] Até no vazio que me dá
[00:57.89] Quando vejo a tarde cair
[01:01.47] E ela não está
[01:04.65] Talvez ela saiba de cor
[01:08.44] Tudo que eu preciso sentir
[01:11.32] Pedra preciosa de olhar
[01:15.26] Ela só precisa existir
[01:18.91] Para me completar
[01:25.69] Ela une o mar
[01:29.26] Com o meu olhar
[01:32.39] Ela só precisa existir
[01:35.84] Pra me completar
[01:39.69] Ela une o mar
[01:42.83] Com o meu olhar
[01:46.15] Ela só precisa existir
[01:49.86] Para me completar
[01:53.72] Ela une as quatro estações
[01:56.76] Une dois caminhos num só
[02:00.56] Sempre que eu me vejo perdido
[02:04.14] Une amigos ao meu redor
[02:07.58] Ela está em todas as coisas
[02:11.04] Até no vazio que me dá
[02:14.69] Quando vejo a tarde cair
[02:18.72] E ela não está
[02:21.84] Talvez ela saiba de cor
[02:25.79] Tudo que eu preciso sentir
[02:28.85] Pedra preciosa de olhar
[02:32.33] Ela só precisa existir
[02:36.03] Para me completar
[02:42.49] Ela une o mar
[02:45.95] Com o meu olhar
[02:49.26] Ela só precisa existir
[02:53.18] Pra me completar
[02:56.42] Ela une o mar
[02:59.82] Com o meu olhar
[03:03.22] Ela só precisa existir
[03:07.05] Para me completar
[03:10.86] Une o meu viver
[03:14.02] Com o seu viver
[03:17.13] Ela só precisa existir
[03:20.83] Pra me completar
[03:25.22] Ela une o mar
[03:28.07] Com o meu olhar
[03:31.73] Ela só precisa existir
[03:35.03] Para me completar
[03:40.14] `,
        lyricsTranslation: ""
    },
    {
        id: 22,
        title: "Kiss Of Life",
        artist: "Sade",
        album: "Promise",
        cover: "assets/covers/22.png",
        audio: "music/musica22.mp3",
        message: "Você tem o dom de transformar um simples beijo em um momento que eu gostaria de viver para sempre.",
        duration: "5:50",
        favorite: false,
        lyrics: `[00:20.80] There must have been an angel by my side
[00:25.73] Something heavenly led me to you
[00:31.31] Look at the sky
[00:34.61] It's the colour of love
[00:40.78] There must have been an angel by my side
[00:45.60] Something heavenly came down from above
[00:50.85] He led me to you
[00:54.65] He led me to you
[00:59.05] He built a bridge to your heart, all the way
[01:08.75] How many tons of love inside? I can't say
[01:16.89] 
[01:19.28] When I was led to you
[01:24.22] I knew you were the one for me
[01:28.92] I swear whole world could feel my heartbeat
[01:38.83] When I lay eyes on you
[01:43.48] I-I-I-I-I
[01:49.23] You wrapped me up in the colour of love
[01:58.80] You gave me the kiss of life
[02:03.22] Kiss of life
[02:08.73] You gave me the kiss that's like
[02:12.88] The kiss of life
[02:17.54] 
[02:38.67] Wasn't it clear from the start?
[02:44.75] Look the sky is full of love
[02:49.29] Yeah, the sky is full of love
[02:58.13] You gave me the kiss of life
[03:02.38] Kiss of life
[03:08.06] You gave me the kiss that's like
[03:12.35] Kiss of life
[03:17.93] You gave me the kiss of life
[03:22.15] Kiss of life
[03:27.94] You gave me the kiss that's like
[03:31.90] Kiss of life
[03:37.26] You wrapped me up in the colour of love
[03:42.38] In the moonlight baby
[03:46.61] It must have been an angel came down from above
[03:52.38] Giving me love, yeah
[03:54.76] Giving me love, yeah
[03:57.51] You gave me the kiss of life
[04:01.63] Kiss of life
[04:05.33] `,
        lyricsTranslation: `Deve ter existido um anjo ao meu lado,
Algo celestial me guiou até você.

Olhe para o céu,
Veja como ele tem a cor do amor.

Deve ter existido um anjo ao meu lado,
Algo vindo do céu me trouxe até você.

Foi ele quem me guiou até você,
Foi ele quem me levou até o seu coração.

Ele construiu uma ponte
Que me trouxe diretamente até você.

E quanto amor pode existir dentro de mim?
Eu nem consigo explicar.

Quando fui levado até você,
Eu soube que era você.

Eu juro que o mundo inteiro
Parecia conseguir ouvir o meu coração bater
No instante em que meus olhos encontraram os seus.

Quando eu olhei para você...

Você me envolveu
Na mais bonita cor do amor.

E então você me deu
O beijo da vida.

O beijo da vida.

Um beijo tão especial,
Que parecia devolver vida ao meu coração.

Você me deu
O beijo da vida.

Não estava claro desde o começo?

Olhe para o céu...
Ele está completamente tomado pelo amor.

Sim, o céu está cheio de amor.

E você me deu
O beijo da vida.

O beijo da vida.

Você me deu aquele beijo
Que mudou tudo dentro de mim.

O beijo da vida.

Você me deu
O beijo da vida.

O beijo da vida.

Aquele beijo que fez meu coração
Voltar a acreditar no amor.

O beijo da vida.

Você me envolveu
Na cor do amor.

Sob a luz da lua, meu amor...

Deve ter sido um anjo
Que desceu do céu
Só para me levar até você.

Para me dar amor,
Para me ensinar o que é amar.

E então você me deu
O beijo da vida.

O beijo da vida.

Um beijo seu
Que transformou completamente a minha vida.

Desde que encontrei você,
Tudo ganhou uma nova cor.

E se existe mesmo um anjo
Que me guiou até você,
Eu só posso agradecer.

Porque entre tantas pessoas no mundo,
Ele escolheu me levar até você.

E foi assim que encontrei
O amor da minha vida.
`
    },
    {
        id: 23,
        title: "For All Time",
        artist: "Michael Jackson",
        album: "Dangerous",
        cover: "assets/covers/23.png",
        audio: "music/musica23.mp3",
        message: "Se eu pudesse fazer um único pedido para o futuro, seria simples: que, daqui a muitos anos, eu ainda esteja olhando para você com o mesmo amor de hoje.",
        duration: "4:08",
        favorite: false,
        lyrics: `[00:20.69] Sun comes up on this new morning
[00:26.93] Shifting shadows, a songbird sings
[00:32.33] And if these words could have kept you happy
[00:37.63] I'd do anything
[00:43.98] And if you feel alone, I'll be your shoulder
[00:49.05] With a tender touch you know so well
[00:54.41] Somebody once said, it's the soul that matters
[01:00.26] Baby, who can really tell
[01:02.86] When two hearts belong so well
[01:05.79] And maybe the walls will tumble
[01:11.29] And the sun may refuse to shine
[01:17.01] When I say I love you
[01:22.24] Baby, you gotta know that's for all time
[01:27.30] Baby, you gotta know that's for all time
[01:34.18] Moon shines down on this good evening
[01:40.20] One warm kiss in the cold night air
[01:45.64] For this good love I'm receiving
[01:51.19] I'd go anywhere
[01:53.63] Just as long as you were there
[01:56.50] And maybe the walls will tumble
[02:02.52] And sun may refuse to shine, oh
[02:08.02] When I say, I love you
[02:12.84] Baby, you gotta know that's for all time
[02:18.10] Baby, you gotta know that's for all time
[02:25.06] Oh, and on these quiet days
[02:30.08] Where souls embrace so silently
[02:36.33] Oh, the rain may wash away
[02:41.51] All these words that young lovers say
[02:47.60] And maybe the walls will crumble
[02:53.23] And the sun may refuse to shine
[02:58.58] When I say, I need you
[03:03.21] Baby, you've gotta know
[03:04.02] Baby, you gotta know that's for all time
[03:09.13] Baby, you gotta know that's for all time
[03:14.86] Say that you'll never go, that's for all time
[03:20.06] Baby, you gotta know that's for all time
[03:25.94] Baby, you gotta know that's for all time
[03:31.83] Baby, you gotta know that's for all time
[03:37.30] Don't lie, just don't lie
[03:39.28] That's for all time
[03:42.76] Baby, make lovin'
[03:44.79] That's for all time
[03:48.49] Say that you'll never go, that's for all time`,
        lyricsTranslation: `O sol nasce nesta nova manhã,
Enquanto as sombras lentamente mudam
E os pássaros começam a cantar.

E se essas palavras fossem capazes
De fazer você feliz,
Eu faria qualquer coisa por você.

E se algum dia você se sentir sozinha,
Eu serei o seu apoio,
Aquele abraço onde você sempre poderá descansar,
Com todo o carinho que você conhece tão bem.

Alguém um dia disse
Que é a alma que realmente importa.

E, meu amor,
Quem pode explicar o que acontece
Quando dois corações pertencem um ao outro?

Talvez as paredes desabem,
Talvez o sol se recuse a brilhar,
Mas quando eu digo que amo você,
Quero que saiba que é para sempre.

Meu amor,
Você precisa saber:
O que sinto por você
É para todo o tempo.

A lua ilumina esta noite tranquila,
E um beijo quente
Aquece o ar frio da noite.

Por esse amor tão bonito que recebo de você,
Eu iria a qualquer lugar,
Desde que você estivesse comigo.

Porque, com você ao meu lado,
Qualquer lugar se torna o meu lar.

Talvez as paredes desabem,
Talvez o sol deixe de brilhar,
Mas quando eu digo que amo você,
Quero que saiba que é para sempre.

Meu amor,
Você precisa saber:
O meu amor por você
É para todo o tempo.

E nos dias silenciosos,
Quando duas almas se abraçam
Sem precisar dizer uma palavra...

Talvez a chuva leve embora
Todas aquelas promessas
Que os jovens apaixonados costumam fazer.

Mas mesmo que tudo ao nosso redor desmorone,
Mesmo que o sol se recuse a nascer,
Quando eu disser que preciso de você,
Quero que saiba:

Eu preciso de você para sempre.

Meu amor,
Você precisa saber:
É para todo o tempo.

Diga que nunca vai embora,
Diga que vai ficar comigo.

Porque eu quero você
Hoje, amanhã
E em todos os dias que ainda virão.

Meu amor,
Você precisa saber:
É para todo o tempo.

Não minta para mim,
Não esconda o que sente.

Porque aquilo que existe entre nós
É para todo o tempo.

Quero continuar amando você,
Quero continuar vivendo esse amor.

Então fique comigo.

Diga que nunca vai embora,
Porque o que eu sinto por você
É para sempre.

É para todo o tempo.
`

    },
    {
        id: 24,
        title: "Meu Bem Querer",
        artist: "Djavan",
        album: "Bicho Solto",
        cover: "assets/covers/24.png",
        audio: "music/musica24.mp3",
        message: "Meu bem querer, meu amor, minha escolha todos os dias. Se existe um lugar onde eu quero estar, é ao seu lado.",
        duration: "4:44",
        favorite: false,
        lyrics: `[00:32.45] Meu bem querer
[00:35.66] É segredo, é sagrado
[00:39.55] Está sacramentado em meu coração
[00:48.25] Meu bem querer
[00:51.78] Tem um quê de pecado
[00:55.52] Acariciado pela emoção
[01:04.42] Meu bem querer, meu encanto
[01:10.23] "Tô" sofrendo tanto
[01:15.78] Amor, e o que é o sofrer
[01:25.03] Para mim que estou
[01:31.10] Jurado pra morrer de amor
[01:45.33] Meu bem querer
[01:50.33] É segredo, é sagrado
[01:54.58] Está sacramentado em meu coração
[02:04.58] Meu bem querer
[02:07.05] Tem um quê de pecado
[02:10.20] Acariciado pela emoção
[02:19.83] Meu bem querer, meu encanto
[02:27.38] "Tô" sofrendo tanto
[02:31.66] Amor, e o que é o sofrer
[02:39.56] Para mim que estou
[02:44.84] Jurado pra morrer de amor
[02:59.06] `,
        lyricsTranslation: ``
    },
    {
        id: 25,
        title: "Biggest Part Of Me",
        artist: "Ambrosia",
        album: "One Eighty",
        cover: "assets/covers/25.png",
        audio: "music/musica25.mp3",
        message: "Você se tornou a maior e mais bonita parte da minha vida. Tudo em mim parece fazer mais sentido desde que encontrei você.",
        duration: "5:25",
        favorite: false,
        lyrics: `[00:23.85] Y-e-a-h...
[00:25.44] (Sunrise) There's a new sun arisin'
[00:28.45] (In your eyes) I can see a new horizon
[00:31.65] (Realize) That will keep me realizin'
[00:34.58] You're the biggest part of me
[00:38.05] (Stay the night) Need your lovin' here beside me
[00:40.92] (Shine the light) Need you close enough to guide me
[00:43.97] (All my life) I've been hopin' you would find me
[00:47.32] You're the biggest part of me
[00:51.43] W-e-l-l...
[00:53.04] Make a wish baby
[00:55.97] Well and I will make it come true
[00:58.88] Make a list baby
[01:02.09] Of the things I'll do for you
[01:05.28] Ain't no risk now
[01:08.62] In lettin' my love rain down on you
[01:11.53] So we could wash away the past
[01:14.69] So that we may start anew...
[01:21.48] (Rainbow) Risin' over my shoulder
[01:24.80] (Love flows) Gettin' better as we're older
[01:27.80] (All I know) All I want to do is hold her
[01:31.17] She's the life that breathes in me
[01:34.24] (Forever) Got a feelin' that forever
[01:37.47] (Together) We are gonna stay together
[01:40.43] (Better) For me there's nothin' better
[01:43.46] You're biggest part of me
[01:47.16] W-e-l-l...
[01:52.28] Make a wish baby
[01:54.58] (Wishin' it will come true) Well and I will make it come true
[01:58.36] Make a list baby (make a list)
[02:01.67] Of the things I'll do for you
[02:04.77] Ain't no risk now
[02:07.72] Lettin' my love rain down on you
[02:11.01] So we could wash away the past (ah-ah)
[02:14.35] So that we may start anew...
[02:21.99] 
[02:28.14] Oh...
[02:32.05] 
[02:34.39] More than an easy feelin'
[02:37.36] She brings joy to me
[02:40.10] How can I tell you what it means to me
[02:46.42] Flow like a lazy river
[02:49.88] For an eternity
[02:53.24] I've finally found someone who believes in me
[02:57.29] (Who believes believes in me) And I'll never leave
[03:01.35] (Now I've found what I need...)
[03:03.63] Oh...
[03:09.68] Ah not to doubt now
[03:13.03] 
[03:21.78] M-m-m... make life grand
[03:25.32] 
[03:30.56] W-e-l-l...
[03:36.16] Make a wish baby
[03:38.46] (Wishin' it will come true) Well and I will make it come true
[03:42.26] Make a list baby (make a list)
[03:44.76] Of the things I'll do for you
[03:48.03] Ain't no risk now
[03:50.40] Lettin' my love rain down on you
[03:54.53] So we could wash away the past (ah-ah)
[03:57.95] So that we may start anew...
[04:02.75] Yeah-yeah-yeah
[04:04.79] (Beside me) Need your lovin' here beside me
[04:07.94] (To guide me) Keep it close enough to guide me
[04:11.03] (Inside of me) From the fears that are inside of me
[04:14.45] You're the biggest part of me
[04:17.00] (Forever) Got a feelin' that forever
[04:20.49] (Together) We are gonna stay together
[04:23.67] (Forever) From now until forever
[04:26.52] You're the biggest part of me
[04:29.83] You're the life that breathes in me
[04:32.72] You're the biggest part of me...
[04:42.22] M-m-m... m-m-m...
[04:47.64] 
[04:50.99] You changed my life
[04:53.11] You made it right
[04:56.04] And I'll be a servant to you
[04:59.77] For the rest of my life
[05:04.44] 
[05:10.85] You're the biggest part of me...
[05:16.43] Yeah... yeah
[05:18.47] `,
        lyricsTranslation: `Há um novo sol nascendo,
E nos seus olhos eu consigo enxergar
Um novo horizonte.

E então percebo
Que você é a maior parte de mim.

Fique esta noite,
Preciso do seu amor aqui ao meu lado.
Preciso de você por perto,
Para me guiar.

Passei a vida esperando
Que alguém como você me encontrasse.

Você é a maior parte de mim.

Faça um desejo, meu amor,
E eu farei de tudo para realizá-lo.

Faça uma lista
De tudo o que você gostaria que eu fizesse por você.

Não tenho medo de deixar
Todo o meu amor cair sobre você.

Quero que ele leve embora o passado,
Para que possamos começar de novo,
Juntos.

Um arco-íris surge diante de mim,
E o nosso amor fica ainda mais bonito
Conforme o tempo passa.

Tudo o que eu quero fazer
É abraçar você.

Você é a vida que existe dentro de mim.

E eu sinto que será para sempre,
Que nós vamos permanecer juntos.

Porque, para mim,
Não existe nada melhor do que você.

Faça um desejo, meu amor,
E eu farei de tudo para torná-lo realidade.

Diga o que deseja,
E eu farei tudo o que estiver ao meu alcance por você.

Não tenho medo de amar você por inteiro.

Quero deixar todo o meu amor
Cair sobre nós,
Apagar o que ficou para trás
E começar uma nova história ao seu lado.

Você é muito mais
Do que um sentimento bonito.

Você traz alegria para a minha vida.

E como eu poderia explicar
Tudo o que você significa para mim?

Quero que o nosso amor siga tranquilo,
Como um rio que nunca deixa de correr,
Por toda a eternidade.

Finalmente encontrei alguém
Que acredita em mim.

E eu nunca vou deixar você.

Porque agora encontrei
Tudo aquilo de que eu precisava.

Você.

Não quero mais ter dúvidas,
Quero apenas viver esse amor
E fazer a nossa vida ser cada vez mais bonita.

Faça um desejo, meu amor,
E eu farei de tudo para realizá-lo.

Preciso do seu amor aqui ao meu lado,
Preciso de você perto de mim
Para me guiar
E afastar todos os medos
Que ainda existem dentro de mim.

Você é a maior parte de mim.

E eu sinto que será para sempre.

Nós vamos permanecer juntos,
Hoje, amanhã
E até o fim.

Você é a maior parte de mim.

Você é a vida que existe dentro de mim.

Você é a maior parte de mim.

Você mudou a minha vida,
Fez tudo encontrar o seu lugar.

E, pelo resto da minha vida,
Quero cuidar de você,
Amar você
E estar ao seu lado.

Porque você é,
E sempre será,
A maior parte de mim.
`
    },
    {
        id: 26,
        title: "Eternamente",
        artist: "Gal Costa",
        album: "Baby Gal",
        cover: "assets/covers/26.png",
        audio: "music/musica26.mp3",
        message: "Se depender de mim, o que sinto por você não será apenas por hoje. Quero que seja um amor para a vida inteira.",
        duration: "4:08",
        favorite: false,
        lyrics: `[00:29.36] Só mesmo o tempo pode revelar
[00:36.48] O lado oculto das paixões
[00:43.12] O que se foi e o que não passará
[00:50.21] Inesquecíveis sensações
[00:57.12] Que sempre vão ficar
[01:01.55] Pra nos fazer lembrar
[01:04.57] Dos sonhos, beijos
[01:09.62] Tantos momentos bons
[01:27.22] Só mesmo o tempo vai poder provar
[01:34.53] A eternidade das canções
[01:41.41] A nossa música está no ar
[01:47.88] Emocionando os corações
[01:54.13] Pois tudo que é amor
[01:58.14] Parece com você
[02:01.43] Pense, lembre
[02:06.69] Nunca vou te esquecer
[02:15.26] Vou ter sempre você comigo
[02:24.09] Nosso amor eu canto e cantarei
[02:30.65] Você é tudo o que eu amei na vida
[02:40.40] Nunca vou te esquecer
[03:08.87] Só mesmo o tempo pode revelar
[03:16.58] O lado oculto das paixões
[03:23.19] O que se foi e o que não passará
[03:30.61] Inesquecíveis sensações
[03:36.94] Que sempre vão ficar
[03:40.57] Pra nos fazer lembrar
[03:44.66] Dos sonhos, beijos
[03:50.17] Tantos momentos bons
[04:03.72] `,
        lyricsTranslation: ``
    },
    {
        id: 27,
        title: "Sweet Love",
        artist: "Anita Baker",
        album: "Rapture",
        cover: "assets/covers/27.png",
        audio: "music/musica27.mp3",
        message: "O amor que recebo de você é doce, sincero e especial. É aquele tipo de amor que faz a gente agradecer por ter encontrado a pessoa certa.",
        duration: "4:26",
        favorite: false,
        lyrics: `[00:21.88] With all my heart I love you, baby
[00:27.97] Stay with me and you will see
[00:32.69] My arms will hold you, baby
[00:39.31] Never leave, 'cause I believe
[00:43.80] I'm in love, sweet love (sweet love)
[00:49.02] Hear me calling out your name, I feel no shame
[00:54.79] I'm in love, sweet love (sweet love)
[01:00.16] Don't you ever go away, it'll always be this way
[01:05.92] Your heart has called me closer to you
[01:12.13] I will be all that you need
[01:16.65] Just trust in what we're feeling
[01:23.20] Never leave, 'cause baby I believe
[01:27.81] In this love, sweet love (sweet love)
[01:33.24] Hear me calling out your name, I feel no shame
[01:38.60] I'm in love, sweet love
[01:43.94] Don't you ever go away, it'll always be this way
[01:49.72] There's no stronger love in this world
[01:54.97] Oh baby no, you're my man, I'm your girl
[02:00.31] I'll never go, wait and see, can't be wrong
[02:05.73] Don't you know this is where you belong?
[02:10.52] Oh, the sweetest dream, a lovely baby
[02:17.64] Stay right here, never fear
[02:22.31] I will be all that you need
[02:29.14] Never leave, 'cause baby I believe
[02:33.28] In this love, sweet love (sweet love)
[02:38.61] Hear me calling out your name, I feel no shame
[02:44.18] I'm in love, sweet love (sweet love)
[02:49.58] Don't you ever go away, it'll always be this way
[02:56.15] Sweet love
[02:58.94] Oh, no, no, no, no, no, no, no
[03:08.19] Sweet love, umm hmm
[03:17.54] So sweet, so sweet, so sweet, ooh...
[03:27.91] Oh, love
[03:29.69] Love, love (sweet love)
[03:37.35] Oh, baby no sweeter love (sweet love)
[03:40.92] Oh, sweeter love
[03:44.72] Oh, no, no, no, no, no, no, no, no, no
[03:50.94] Don't nobody know (sweet love)
[03:56.38] Don't nobody know how sweet it is
[04:01.04] Ah, how sweet it is (sweet love)
[04:05.78] Love me sweetly, baby
[04:08.24] Just leave me sweetly, baby (sweet love)
[04:16.54] Don't nobody know
[04:18.29] `,
        lyricsTranslation: `Com todo o meu coração,
Eu amo você, meu amor.

Fique comigo
E você vai descobrir
Que meus braços sempre estarão aqui
Para te abraçar e proteger.

Nunca vá embora,
Porque eu acredito
No amor que existe entre nós.

Estou apaixonado,
Vivendo esse amor tão doce.

Quero chamar pelo seu nome
Sem medo de demonstrar
Tudo aquilo que sinto.

Estou apaixonado,
Vivendo um amor tão doce.

Nunca se afaste de mim,
Porque eu quero que seja assim
Para sempre.

Seu coração me trouxe para perto de você,
E eu quero ser tudo aquilo
Que você precisar.

Apenas confie
No que nós dois estamos sentindo.

Nunca vá embora,
Porque eu acredito
Nesse amor tão doce.

Quero chamar pelo seu nome
Sem esconder o que sinto.

Estou apaixonado,
Vivendo um amor tão doce.

Não vá embora, meu amor,
Porque quero que seja assim
Para sempre.

Não existe amor mais forte
Do que aquele que sinto por você.

Você é meu amor,
E eu sou seu.

Eu nunca vou embora.
Espere e verá.

Não pode haver engano quando o coração sabe
Que encontrou o seu lugar.

E o meu coração encontrou o dele em você.

Você é o sonho mais bonito
Que eu poderia ter.

Então fique aqui comigo,
Não tenha medo.

Eu estarei aqui
Para ser tudo aquilo que você precisar.

Nunca vá embora,
Porque eu acredito
No nosso amor.

Nesse amor tão doce,
Que me faz chamar pelo seu nome
Sem nenhuma vergonha
De dizer o quanto amo você.

Estou apaixonado,
Vivendo o nosso amor.

E nunca quero que você vá embora,
Porque quero que seja assim
Para sempre.

Tão doce...

Tão doce é amar você.

Não existe nada mais bonito
Do que sentir esse amor.

Um amor tão doce,
Tão verdadeiro,
Tão nosso.

Meu amor,
Talvez ninguém consiga entender
O quanto esse sentimento é especial.

Mas eu sei.

Eu sei o quanto é doce
Ter você na minha vida.

E tudo o que eu quero
É continuar amando você
Com todo o meu coração.

Meu amor,
Fique comigo.
`
    },
    {
        id: 28,
        title: "Your Love Is King",
        artist: "Sade",
        album: "Promise",
        cover: "assets/covers/28.png",
        audio: "music/musica28.mp3",
        message: "O seu amor conquistou o meu coração por inteiro. E, entre todas as coisas que eu poderia escolher para a minha vida, eu escolheria você.",
        duration: "3:40",
        favorite: false,
        lyrics: `[00:20.84] Your love is king
[00:23.84] Crown you in my heart
[00:26.01] Your love is king
[00:29.07] Never need to part
[00:31.21] Your kisses ring
[00:34.72] Round and round and round my head
[00:37.44] Touching the very part of me
[00:39.94] It's making my soul sing
[00:42.71] Tearing the very heart of me
[00:45.55] I'm crying out for more
[00:47.68] Your love is king
[00:50.73] Crown you in my heart
[00:52.96] Your love is king
[00:56.05] You're the ruler of my heart
[00:58.09] Your kisses ring
[01:01.82] Round and round and round my head
[01:04.56] Touching the very part of me
[01:06.77] It's making my soul sing
[01:09.54] I'm crying out for more
[01:12.67] Your love is king
[01:17.90] I'm coming on
[01:21.07] I'm... coming...
[01:28.43] Making me dance inside...
[01:38.76] Your love is king
[01:42.07] Crown you in my heart
[01:44.35] Your love is king
[01:47.32] Never need to part
[01:49.28] Your kisses ring
[01:52.65] Round and round and round my head
[01:55.54] Touching the very part of me
[01:58.07] It's making my soul sing
[02:00.71] Tearing the very heart of me
[02:03.56] Crying out for more
[02:07.90] 
[02:30.18] Touching the very part of me
[02:32.90] It's making my soul sing
[02:35.57] I'm crying out for more
[02:37.80] Your love is king
[02:42.93] This is no blind faith
[02:48.01] This is no sad or sorry dream
[02:53.73] This is no blind faith
[02:59.69] Your love your love is real
[03:07.15] Gotta crown me with your heart
[03:09.35] (Your love is king)
[03:12.95] Never never need to part
[03:15.61] (Your love is king)
[03:17.66] Oh touch me
[03:20.22] (Your love is king)
[03:23.22] I'm coming
[03:32.10] Making me dance
[03:34.67] `,
        lyricsTranslation: `Seu amor é rei,
eu coroarei você no meu coração.
Seu amor é rei,
nunca precisaremos nos separar.

Seus beijos ecoam
repetidamente na minha cabeça,
tocando a parte mais profunda de mim
e fazendo minha alma cantar.

Atingindo o próprio coração de mim,
eu clamo por mais.

Seu amor é rei,
eu coroarei você no meu coração.
Seu amor é rei,
você é o governante do meu coração.

Seus beijos ecoam
repetidamente na minha cabeça,
tocando a parte mais profunda de mim
e fazendo minha alma cantar.

Eu clamo por mais.
Seu amor é rei.

Estou me entregando,
estou... me entregando...

Fazendo-me dançar por dentro...

Seu amor é rei,
eu coroarei você no meu coração.
Seu amor é rei,
nunca precisaremos nos separar.

Seus beijos ecoam
repetidamente na minha cabeça,
tocando a parte mais profunda de mim
e fazendo minha alma cantar.

Atingindo o próprio coração de mim,
eu clamo por mais.

Tocando a parte mais profunda de mim,
fazendo minha alma cantar,
eu clamo por mais.

Seu amor é rei.

Isso não é uma fé cega,
não é um sonho triste ou doloroso.

Isso não é uma fé cega.
Seu amor, seu amor é real.

Você tem que me coroar com o seu coração.

Seu amor é rei.

Nunca, nunca precisaremos nos separar.

Seu amor é rei.

Oh, toque-me.

Seu amor é rei.

Estou me entregando,
fazendo-me dançar.
`
    },
    {
        id: 29,
        title: "Linda Demais",
        artist: "Roupa Nova",
        album: "Roupacustico",
        cover: "assets/covers/29.png",
        audio: "music/musica29.mp3",
        message: "Você é linda de um jeito que vai muito além da aparência. É o seu jeito, seu sorriso, sua presença… tudo em você me encanta.",
        duration: "4:00",
        favorite: false,
        lyrics: `[00:16.18] Linda, só você me fascina
[00:22.58] Te desejo muito além do prazer
[00:30.29] Vista meu futuro em teu corpo
[00:36.63] E me ama como eu amo você
[00:44.14] Vem fazer diferente
[00:47.89] O que mais ninguém faz
[00:51.06] Faz parte de mim
[00:54.72] Me inventa outra vez
[00:59.57] Vem conquistar meu mundo
[01:02.52] Dividir o que é seu
[01:05.17] Mil beijos de amor em muitos lençóis
[01:12.31] Só eu e você
[01:16.07] Linda, conte a mim teu segredo
[01:22.24] Pro meu sonho, diga quem é você
[01:29.96] Livre, nunca mais tenha medo
[01:36.87] Pois quem ama, tudo pode vencer
[01:44.52] Vem fazer diferente
[01:48.39] O que mais ninguém faz
[01:51.23] Faz parte de mim
[01:54.73] Me inventa outra vez
[01:58.47] Vem conquistar meu mundo
[02:02.73] Dividir o que é seu
[02:05.13] Mil beijos de amor em muitos lençóis
[02:12.25] Só eu e você
[02:15.74] Oh, linda
[02:44.30] Vem fazer diferente
[02:47.99] O que mais ninguém faz
[02:51.20] Faz parte de mim
[02:54.67] Me inventa outra vez
[02:58.66] Vem conquistar meu mundo
[03:05.04] Dividir o que é seu
[03:06.14] Mil beijos de amor em muitos lençóis
[03:12.74] Só eu e você
[03:14.62] Linda, conte a mim teu segredo
[03:14.98] Pro meu sonho, diga quem é você
[03:15.19] Livre, nunca mais tenha medo
[03:16.21] Pois quem ama, tudo pode vencer
[03:16.54] Linda, só você me fascina
[03:23.40] Te desejo muito além do prazer
[03:30.97] Vista meu futuro em teu corpo
[03:37.57] E me ama como eu amo você
[03:49.87] Linda, conte a mim teu segredo
[03:51.68] Pro meu sonho, diga quem é você
[03:52.24] Livre, nunca mais tenha medo
[03:53.01] `,
        lyricsTranslation: ``
    },
    {
        id: 30,
        title: "Como um Anjo",
        artist: "Zezé Di Camargo & Luciano",
        album: "Zezé Di Camargo & Luciano 1994",
        cover: "assets/covers/30.png",
        audio: "music/musica30.mp3",
        message: "Você chegou na minha vida como um presente que eu nem sabia que estava esperando. Parece até que um anjo colocou você no meu caminho.",
        duration: "3:37",
        favorite: false,
        lyrics: `[00:15.76] Como um anjo
[00:19.16] Você apareceu na minha vida
[00:25.33] Como um anjo
[00:28.94] Repleto de ternura e de paixão
[00:33.60] Ouououou
[00:35.68] Como um anjo
[00:38.64] Encanto e sedução
[00:40.50] Doce aventura
[00:43.13] Uuuh, que loucura
[00:48.18] Você desabrochando
[00:50.11] No meu coração
[00:54.16] Linda menina
[00:58.25] Com olhar inocente e malícia
[01:01.86] Desejo e tentação
[01:05.93] Que me cobre de amor e carícia
[01:09.45] Vencendo a solidão
[01:12.63] Só você pra me fazer feliz
[01:18.22] Ai! ai! ai! ai! ai!
[01:20.44] Anjo
[01:22.50] A luz do sol tá me acordando
[01:26.50] Não vá embora, estou te amando
[01:29.21] Por favor, não me deixe só
[01:33.62] Ai! ai! ai! ai! ai!
[01:35.83] Anjo
[01:38.49] Não quero abrir meus olhos
[01:42.08] Quero seguir vivendo um sonho
[01:44.77] De sermos só você e eu
[01:48.84] 
[02:05.85] Linda menina
[02:09.90] Com olhar inocente, malícia
[02:13.43] Desejo e tentação
[02:16.08] 
[02:18.14] Que me cobre de amor e carícia
[02:21.56] Vencendo a solidão
[02:24.09] Só você pra me fazer feliz
[02:29.89] Ai! ai! ai! ai! ai!
[02:31.81] Anjo
[02:34.19] A luz do sol tá me acordando
[02:38.06] Não vá embora, estou te amando
[02:40.84] Por favor, não me deixe só
[02:45.29] Ai! ai! ai! ai! ai!
[02:47.49] Anjo
[02:50.13] Não quero abrir meus olhos
[02:53.50] Quero seguir vivendo um sonho
[02:56.96] De sermos só você e eu
[03:02.79] Anjo
[03:05.27] A luz do sol tá me acordando
[03:09.09] Não vá embora, estou te amando
[03:11.94] Por favor, não me deixe só
[03:16.40] Ai! ai! ai! ai! ai!
[03:17.95] `,
        lyricsTranslation: ``
    },
    {
        id: 31,
        title: "Pride and Joy",
        artist: "Stevie Ray Vaughan",
        album: "Texas Flood",
        cover: "assets/covers/31.png",
        audio: "music/musica31.mp3",
        message: "Você é minha alegria, meu orgulho e uma das maiores razões para eu sorrir todos os dias. Ter você na minha vida é um privilégio.",
        duration: "3:44",
        favorite: false,
        lyrics: `[00:30.62] Well, you've heard about lovin' givin' sight to the blind
[00:35.37] My baby's lovin' cause the sun to shine
[00:38.42] An' she's my sweet little thang
[00:41.83] She my pride and joy
[00:45.74] She my sweet little baby
[00:48.13] I'm her little lover boy
[00:53.39] Yeah, I love my baby, my heart and soul
[00:57.99] Love like ours, it won't never grow old
[01:00.89] She's my sweet little thang
[01:04.46] She's my pride and joy
[01:08.76] She my sweet little baby
[01:10.83] I'm her little lover boy
[01:16.14] Yeah, I love my lady
[01:18.24] She's long and lean
[01:20.62] You mess with her, you'll see a man gettin' mean
[01:23.67] She's my sweet little thang
[01:27.38] She my pride and joy
[01:31.40] She my sweet little baby
[01:33.64] I'm her little lover boy
[01:37.76] 
[02:24.60] Well, I love my baby like the finest wine
[02:29.07] Stick with her until the end of time
[02:32.17] She's my sweet little thang
[02:35.67] She my pride and joy
[02:39.68] She my sweet little baby
[02:41.83] I'm her little lover boy
[02:46.70] Yeah, I love my baby, my heart and soul
[02:51.53] Love like ours, it won't never grow old
[02:54.30] She's my sweet little thang
[02:58.12] She my pride and joy
[03:01.83] She my sweet little baby
[03:04.24] I'm her little lover boy
[03:05.84] `,
        lyricsTranslation: `Bem, você já ouviu falar que o amor pode dar visão aos cegos,
o amor da minha garota faz o sol brilhar.

E ela é minha coisinha doce,
ela é meu orgulho e minha alegria.
Ela é minha doce garotinha,
e eu sou o garotinho apaixonado dela.

Sim, eu amo minha garota com todo o meu coração e minha alma.
Um amor como o nosso nunca envelhece.

Ela é minha coisinha doce,
ela é meu orgulho e minha alegria.
Ela é minha doce garotinha,
e eu sou o garotinho apaixonado dela.

Sim, eu amo minha mulher,
ela é alta e esbelta.
Se mexerem com ela,
vão ver um homem ficar bravo.

Ela é minha coisinha doce,
ela é meu orgulho e minha alegria.
Ela é minha doce garotinha,
e eu sou o garotinho apaixonado dela.

Eu amo minha garota como o melhor dos vinhos,
e vou ficar ao lado dela até o fim dos tempos.

Ela é minha coisinha doce,
ela é meu orgulho e minha alegria.
Ela é minha doce garotinha,
e eu sou o garotinho apaixonado dela.

Sim, eu amo minha garota com todo o meu coração e minha alma.
Um amor como o nosso nunca envelhece.

Ela é minha coisinha doce,
ela é meu orgulho e minha alegria.
Ela é minha doce garotinha,
e eu sou o garotinho apaixonado dela.
`
    },
    {
        id: 32,
        title: "You Got It",
        artist: "Roy Orbison",
        album: "Dangerous",
        cover: "assets/covers/32.png",
        audio: "music/musica32.mp3",
        message: "Se algum dia você precisar de mim, quero que saiba que pode contar comigo. Meu amor, meu carinho e meu coração estarão sempre aqui para você.",
        duration: "3:32",
        favorite: false,
        lyrics: `[00:08.80] Every time I look into your loving eyes
[00:15.04] 
[00:17.12] I see a love that money just can't buy
[00:25.08] One look from you, I drift away
[00:33.28] I pray that you are here to stay
[00:42.86] Anything you want, you got it
[00:46.93] Anything you need, you got it
[00:51.13] Anything at all, you got it, baby
[00:58.44] 
[01:01.04] Every time I hold you I begin to understand
[01:07.22] 
[01:09.37] Everything about you tells me I'm your man
[01:17.25] I live (I live)
[01:19.39] My life (my life)
[01:21.28] To be (To be)
[01:23.53] With you (with you)
[01:25.56] No one (no one)
[01:27.60] Can do (can do)
[01:29.87] The things (the things)
[01:31.98] You do (you do)
[01:34.91] Anything you want, you got it
[01:39.27] Anything you need, you got it
[01:43.30] Anything at all, you got it, baby
[01:51.62] 
[01:53.95] Anything you want (you got it)
[01:58.04] Anything you need (you got it)
[02:02.25] Anything at all
[02:06.77] Do-do-do-do-doo (oh)
[02:10.87] Do-do-do-do-doo (oh, yeah)
[02:15.14] Do-do-do-do-doo (yeah, yeah, yeah)
[02:17.17] (You got it)
[02:20.01] 
[02:24.48] I'm glad to give my love to you
[02:32.78] I know you feel the way I do
[02:41.93] Anything you want, you got it
[02:46.03] Anything you need, you got it
[02:50.48] Anything at all, you got it, baby
[02:58.09] 
[03:00.86] Anything you want, you got it
[03:05.02] Anything you need, you got it
[03:09.27] Anything at all, you got it, baby
[03:16.74] 
[03:19.62] Anything at all (you got it)
[03:23.36] Baby
[03:27.40] You got it
[03:28.70] `,
        lyricsTranslation: `Toda vez que olho nos seus olhos amorosos,
vejo um amor que o dinheiro simplesmente não pode comprar.

Um olhar seu e eu me deixo levar.
Eu rezo para que você esteja aqui para ficar.

Tudo o que você quiser, você tem.
Tudo o que você precisar, você tem.
Qualquer coisa que seja, você tem, querida.

Toda vez que abraço você, começo a entender.
Tudo em você me mostra que eu sou o seu homem.

Eu vivo minha vida
para estar com você.
Ninguém pode fazer
as coisas que você faz.

Tudo o que você quiser, você tem.
Tudo o que você precisar, você tem.
Qualquer coisa que seja, você tem, querida.

Tudo o que você quiser, você tem.
Tudo o que você precisar, você tem.
Qualquer coisa que seja...

Do-do-do-do-doo
Do-do-do-do-doo
Do-do-do-do-doo
Você tem.

Fico feliz em dar meu amor a você.
Eu sei que você sente o mesmo que eu.

Tudo o que você quiser, você tem.
Tudo o que você precisar, você tem.
Qualquer coisa que seja, você tem, querida.

Tudo o que você quiser, você tem.
Tudo o que você precisar, você tem.
Qualquer coisa que seja, você tem, querida.

Qualquer coisa que seja, você tem.
Querida,
você tem.
`
    },
    {
        id: 33,
        title: "Nem Mais Uma Dúvida",
        artist: "Zezé Di Camargo & Luciano",
        album: "Zezé Di Camargo & Luciano 2001",
        cover: "assets/covers/33.png",
        audio: "music/musica33.mp3",
        message: "Depois de encontrar você, eu não tenho mais dúvidas sobre quem eu quero ao meu lado. É você. Sempre foi você.",
        duration: "4:18",
        favorite: false,
        lyrics: `[00:17.82] Quero acabar com essa dúvida do meu sentimento
[00:31.94] Por que será que você não sai do meu pensamento?
[00:37.98] Quando eu te vejo fico leve feito folha ao vento
[00:44.45] Um arrepio na pele, um fogo por dentro
[00:50.53] É um desejo que faz meu coração disparar
[00:54.13] Acendem mil estrelas dentro do meu olhar
[00:57.88] É sempre assim não muda
[01:03.05] É uma coisa estranha que eu nunca senti
[01:06.46] O amor e a paixão jogando flechas em mim
[01:10.27] Nem mais uma dúvida
[01:13.70] 
[01:15.72] Descobri que a minha outra metade é você
[01:19.21] Quero te dizer: "Te amo, te amo"
[01:27.81] Tá na cara que eu te quero já não dá pra esconder
[01:31.54] Preciso de você, te amo, te amo
[01:40.96] Como eu poderia um dia imaginar
[01:44.32] Que de repente eu fosse me apaixonar
[01:47.12] Era o começo de um amor sem fim
[01:53.03] Perto de você não vejo mais ninguém
[01:56.21] Quero esse teu beijo que me faz tão bem
[01:59.77] O meu coração vive dizendo assim: "I Love You"
[02:06.22] Só eu sei como eu te amo
[02:09.43] Te amo tanto assim
[02:13.46] 
[02:24.03] É um desejo que faz meu coração disparar
[02:27.68] Acendem mil estrelas dentro do meu olhar
[02:31.45] É sempre assim não muda
[02:36.89] É uma coisa estranha que eu nunca senti
[02:39.84] O amor e a paixão jogando flechas em mim
[02:43.89] Nem mais uma dúvida
[02:49.27] Descobri que a minha outra metade é você
[02:52.58] Quero te dizer: "Te amo, te amo"
[03:01.38] Tá na cara que eu te quero já não dá pra esconder
[03:04.90] Preciso de você, te amo, te amo
[03:13.83] Como eu poderia um dia imaginar
[03:17.27] Que de repente eu fosse me apaixonar
[03:20.56] Era o começo de um amor sem fim
[03:26.46] Perto de você não vejo mais ninguém
[03:30.01] Quero esse teu beijo que me faz tão bem
[03:33.24] O meu coração vive dizendo assim: "I Love You"
[03:39.32] Só eu sei como eu te amo
[03:43.07] Te amo tanto assim
[03:46.01] Só eu sei como eu te amo
[03:49.75] Te amo
[03:52.58] Te amo
[03:57.13] Te amo
[03:59.29] Te amo
[04:01.47] `,
        lyricsTranslation: ``
    },
    {
        id: 34,
        title: "Pão de Mel",
        artist: "Zezé Di Camargo & Luciano",
        album: "Zezé Di Camargo & Luciano 1995",
        cover: "assets/covers/34.png",
        audio: "music/musica34.mp3",
        message: "Você adoçou a minha vida de um jeito que eu jamais conseguiria explicar. Se a vida fosse feita de pequenos momentos, eu escolheria viver todos eles com você.",
        duration: "4:00",
        favorite: false,
        lyrics: `[00:15.94] Você é minha luz, estrada, meu caminho
[00:20.88] Sem você não sei andar sozinho
[00:24.66] Sou tão dependente de você
[00:31.42] Chama que alimenta o fogo da paixão
[00:36.17] Chuva que molhou meu coração
[00:40.02] Sou tão dependente de você
[00:46.56] Vem, meu céu, meu pão de mel
[00:49.61] Meu bem querer
[00:53.97] Vem, meu céu, meu pão de mel
[00:57.24] Meu bem querer
[01:02.26] Ai, ai, ai, ai, ai, ai, ai
[01:04.47] Esse amor é bom demais
[01:09.92] Ai, ai, ai, ai, ai, ai, ai
[01:12.40] Esse amor marcou demais
[01:17.63] Ai, ai, ai, ai, ai, ai, ai
[01:19.83] Esse amor ficou em mim
[01:24.97] Ai, ai, ai, ai, ai, ai, ai
[01:27.52] Esse amor não vai ter fim
[01:32.68] 
[01:48.23] Você é minha luz, estrada, meu caminho
[01:53.24] Sem você não sei andar sozinho
[01:57.04] Sou tão dependente de você
[02:03.70] Chama que alimenta o fogo da paixão
[02:08.50] Chuva que molhou meu coração
[02:12.50] Sou tão dependente de você
[02:18.76] Vem, meu céu, meu pão de mel
[02:21.86] Meu bem querer
[02:26.43] Vem, meu céu, meu pão de mel
[02:29.55] Meu bem querer
[02:34.44] Ai, ai, ai, ai, ai, ai, ai
[02:36.93] Esse amor é bom demais
[02:42.08] Ai, ai, ai, ai, ai, ai, ai
[02:44.58] Esse amor marcou demais
[02:50.00] Ai, ai, ai, ai, ai, ai, ai
[02:52.14] Esse amor ficou em mim
[02:57.40] Ai, ai, ai, ai, ai, ai, ai
[02:59.87] Esse amor não vai ter fim
[03:05.16] Ai, ai, ai, ai, ai, ai, ai
[03:07.78] Esse amor é bom demais
[03:13.08] Ai, ai, ai, ai, ai, ai, ai
[03:15.33] Esse amor marcou demais
[03:20.50] Ai, ai, ai, ai, esse amor
[03:23.04] Esse amor ficou em mim
[03:28.11] Ai, ai, ai, ai, esse amor
[03:30.52] Esse amor não vai ter fim
[03:35.13] Esse amor não vai ter fim
[03:42.94] Esse amor não vai ter fim
[03:51.74] `,
        lyricsTranslation: ``
    },
    {
        id: 35,
        title: "So Into You",
        artist: "Atlanta Rhythm Section",
        album: "A Rock And Roll Alternative",
        cover: "assets/covers/35.png",
        audio: "music/musica35.mp3",
        message: "Quanto mais eu conheço você, mais apaixonado eu fico. É impossível estar perto de você e não querer me perder ainda mais nesse amor.",
        duration: "4:20",
        favorite: false,
        lyrics: `[00:17.67] When you walked into the room
[00:21.91] There was voodoo in the vibes
[00:26.46] 
[00:29.05] I was captured by your style
[00:33.28] But I could not catch your eyes
[00:40.33] Now I stand here, helplessly
[00:44.79] Hoping you'll get into me
[00:47.65] I am so into you
[00:51.86] I can't think of nothing else
[00:56.68] 
[00:58.81] I am so into you
[01:03.08] I can't think of nothing else
[01:07.38] Thinking how it's gonna be
[01:11.49] Whenever I get you next to me
[01:15.71] It's gonna be good, don't you know
[01:21.10] From your head to toe
[01:24.02] Gonna love you all over, over and over
[01:30.59] Me into you, you into me, me into you
[01:35.80] 
[01:54.86] When you walked into the room
[02:05.52] There was voodoo in the vibes
[02:09.32] 
[02:12.44] I was captured by your style
[02:16.55] But I could not catch your eyes
[02:20.61] And now I stand here, helplessly, yeah
[02:25.11] Hoping you'll get into me
[02:27.74] I am so into you
[02:31.81] I can't get to nothing else
[02:36.60] 
[02:38.74] I am so into you, baby
[02:42.92] I can't get to nothing else
[02:47.07] No, no, no come on baby
[02:51.01] I'm so into you
[02:57.63] Love the things you do
[03:00.92] Listen baby, driving me crazy
[03:04.82] `,
        lyricsTranslation: `Quando você entrou naquela sala,
parecia que havia algo diferente no ar.
Uma energia que me envolveu completamente.

Fiquei encantado pelo seu jeito,
pela sua beleza e pela maneira como você chegou.
Talvez eu nem tenha conseguido encontrar seu olhar naquele momento,
mas alguma coisa em mim já tinha sido conquistada por você.

E hoje eu estou aqui,
completamente apaixonado,
esperando apenas para ter você cada vez mais perto de mim.

Eu estou tão apaixonado por você
que parece impossível pensar em qualquer outra coisa.
Minha mente sempre acaba voltando para você,
para o seu sorriso, seu jeito e tudo aquilo que me faz te amar.

Fico imaginando como será ter você ao meu lado,
poder sentir sua presença,
abraçar você e simplesmente aproveitar cada momento juntos.

Eu quero conhecer cada detalhe seu,
amar você por inteiro,
do seu jeito, da sua cabeça aos seus pés,
e continuar escolhendo você todos os dias.

Eu em você,
você em mim,
e nós dois construindo algo que seja só nosso.

Desde que você apareceu,
é difícil não pensar em você.
Você entrou nos meus pensamentos
e acabou conquistando um espaço enorme no meu coração.

Eu amo o seu jeito,
amo as pequenas coisas que você faz,
amo a maneira como você consegue mexer comigo
sem nem perceber.

Você me deixa completamente apaixonado,
e quanto mais eu conheço você,
mais eu quero estar perto.

Porque, no fim,
eu só quero você comigo. ❤️
`
    },
    {
        id: 36,
        title: "You Give Good Love",
        artist: "Whitney Houston",
        album: "Whitney Houston",
        cover: "assets/covers/36.png",
        audio: "music/musica36.mp3",
        message: "Você me mostrou como é bom ser amado de verdade. O seu amor me faz sentir especial, querido e completo.",
        duration: "4:10",
        favorite: false,
        lyrics: `[00:14.00] I found out what I've been missing
[00:20.00] Always on the run
[00:25.96] I've been looking for someone
[00:35.68] Now you're here like you've been before
[00:42.17] And you know just what I need
[00:48.20] It took some time for me to see
[00:58.62] That you give good love to me, baby
[01:04.51] So good, take this heart of mine into your hands
[01:10.38] You give good love to me (you give good love to me)
[01:14.17] It's never too much (never too much, will never be)
[01:22.14] Baby, you give good love (ah)
[01:31.50] Never stopping, I was always searching
[01:36.77] For that perfect love
[01:42.59] The kind that girls like me dream of
[01:53.95] Now you're here like you've been before
[01:59.38] And you know just what I need
[02:05.43] It took some time for me to see
[02:15.57] That you give good love to me, baby
[02:21.51] It's so good, take this heart of mine into your hands
[02:27.40] You give good love to me (you give good love to me)
[02:31.08] It's never too much (never too much, will never be)
[02:38.98] Baby, you give good love, ooh
[02:47.06] Now I, I can't stop looking around
[02:56.00] It's not what this love's all about
[03:02.82] Our love is here to stay, to stay
[03:08.12] Baby, you give good love
[03:11.28] (You give good love to me) you give
[03:13.48] (Never too much, will never be)
[03:16.37] So good
[03:17.78] Take this heart of mine
[03:19.95] Into your hands
[03:22.04] You give good love to me (you give good love to me)
[03:24.90] Never, never too much (never too much, will never be)
[03:30.36] No, no, no, no, no
[03:34.99] You give good love to me (you give good love to me)
[03:38.32] So good, so good (you give good love, baby)
[03:42.42] (You give good love, darlin')
[03:46.41] (You give, you give, give me)
[03:49.26] (You give good love, honey)
[03:53.16] (You give good love, baby)
[03:56.51] (You give good love, darlin')
[03:58.96] (You give, you give, give me)
[04:02.50] (You give good love to me)
[04:04.00] You give me good love (you give good love, baby)
[04:06.19] Good love, good love (you give good love, darlin')
[04:10.23] Yeah, you do
[04:12.60] You know what I need (You give, you give, give me)
[04:14.84] (You give good love to me) (you give good love, honey)
[04:17.65] (Never too much, will never be) (You give, you give, give me)
[04:21.66] (You give good love, darlin')
[04:24.91] (You give, you give, give me)
[04:28.21] (You give good love to me)`,
        lyricsTranslation: `Eu finalmente descobri o que estava faltando na minha vida.
Passei tanto tempo seguindo em frente,
sempre procurando por alguém que pudesse preencher esse espaço no meu coração.

Então você chegou,
como se sempre tivesse feito parte da minha vida.
Você simplesmente apareceu
e soube exatamente aquilo que eu precisava.

Demorei um pouco para perceber,
mas hoje eu sei:
você me ensinou o que é receber um amor de verdade.

O seu amor me faz tão bem, meu amor.
É tão bonito sentir esse carinho vindo de você.
Eu entrego meu coração nas suas mãos
porque sei que ele está seguro com você.

O amor que você me dá nunca é demais.
Pelo contrário,
é exatamente o amor que eu sempre sonhei encontrar.

Passei muito tempo procurando
por aquele amor perfeito,
aquele sentimento que a gente imagina encontrar um dia.

E então encontrei você.

Hoje eu não preciso mais procurar.
Não preciso olhar para os lados,
nem me perguntar se existe algo melhor.
Porque entendi que o amor não é sobre procurar eternamente.

É sobre encontrar alguém
e perceber que é ali que você quer ficar.

E eu quero ficar com você.

O nosso amor está aqui para ficar.
Quero cuidar dele, viver cada momento
e continuar descobrindo todos os dias
o quanto é bom amar você.

Você sabe exatamente do que eu preciso.
Seu carinho, seu jeito, sua presença...
tudo em você me faz sentir amado.

E se existe uma coisa que eu quero receber pelo resto da minha vida,
é esse amor que vem de você.

Porque você me dá um amor tão bonito,
tão verdadeiro e tão especial
que eu só consigo agradecer por ter encontrado você.

Eu te amo, meu amor. ❤️
`
    },
    {
        id: 37,
        title: "Its For You",
        artist: "Player",
        album: "A Room With A View",
        cover: "assets/covers/37.png",
        audio: "music/musica37.mp3",
        message: "Tudo aquilo que eu sinto, tudo aquilo que eu sonho e tudo aquilo que existe de bonito em mim, eu quero compartilhar com você.",
        duration: "4:17",
        favorite: false,
        lyrics: `[00:14.14] Sometimes at the end of a day
[00:17.61] Another battle won
[00:20.88] I sit down
[00:21.95] Take a look at my life
[00:23.89] And all the things I have done
[00:28.03] Even if I had the chance
[00:31.29] I wouldn't change a thing
[00:33.61] It's For You
[00:38.77] It's For You
[00:41.66] The world has gone crazy
[00:45.16] Trying to compete
[00:48.63] Got my eyes on a better life
[00:51.56] But I'm still trying to make ends meet
[00:55.63] If I make some head way
[00:58.22] Just one small step at a time
[01:01.55] It's For You
[01:05.70] Nobody but You
[01:09.50] I can hear the rain outside
[01:12.21] As You turn and touch my face
[01:15.62] All the worries of the day
[01:19.43] Are gone without a trace
[01:22.09] When I feel my love inside You
[01:26.38] Everithing's allright
[01:29.28] And I wish that I could always feel
[01:35.15] The way I feel tonight
[01:39.70] Oh darling
[01:44.23] When I look in the mirror babe
[01:47.75] I see these lines of doubt
[01:51.17] I can't help wondering what could have been
[01:53.89] But I know what's truly, truly mine...
[01:58.19] And everithing I did today
[02:01.00] Did with all my heart
[02:04.09] It's For You
[02:08.26] Nobody but You
[02:11.75] 2 o'clock in the morning
[02:14.50] You turn and touch my face
[02:18.50] All the worries of the day
[02:21.94] Are gone without a trace
[02:24.81] When I feel my arms around You
[02:29.16] Everithing's allright
[02:32.40] Because only You can make me feel
[02:37.97] The way I feel tonight
[02:42.30] Oh Darling
[03:15.04] 2 o'clock in the morning babe
[03:18.00] You turn and touch my face
[03:21.41] All the worries of the day
[03:24.10] Gone without a trace
[03:27.81] When I feel my arms around You
[03:31.92] Everithing's allright
[03:35.11] And I wish that I could always feel
[03:40.74] The way I feel tonight
[03:45.26] Oh Darling
[03:48.40] It's For You...
[04:00.42] `,
        lyricsTranslation: `Às vezes, no fim de um dia,
depois de mais uma batalha vencida,
eu paro por um instante e olho para a minha vida,
para tudo aquilo que já vivi e conquistei.

E mesmo que eu pudesse voltar atrás,
eu não mudaria nada.

Porque tudo me trouxe até você.

Cada passo que eu dei,
cada escolha, cada momento,
cada pequena conquista...
no fundo, tudo foi por você.

O mundo pode estar cheio de coisas acontecendo,
todo mundo correndo atrás de uma vida melhor,
e eu também sigo tentando dar meus passos,
um de cada vez.

Mas quando penso no motivo de tudo isso,
é você.

Ninguém além de você.

Posso ouvir a chuva lá fora,
enquanto você se aproxima e toca meu rosto,
e de repente todas as preocupações do dia
desaparecem sem deixar nenhum sinal.

Quando sinto o meu amor dentro de você,
tudo parece ficar bem.

E, sinceramente,
eu gostaria de poder guardar para sempre
a maneira como me sinto quando estou ao seu lado.

Meu amor...

Às vezes olho para mim mesmo
e vejo as marcas das dúvidas,
penso em tudo que poderia ter sido diferente.

Mas então lembro do que realmente importa,
daquilo que é verdadeiramente meu.

E tudo o que fiz hoje,
eu fiz com todo o meu coração.

Por você.

Ninguém além de você.

E mesmo no meio da madrugada,
quando tudo está em silêncio,
você se vira e toca meu rosto,
e todas as preocupações desaparecem novamente.

Quando sinto meus braços envolvendo você,
eu sei que está tudo bem.

Porque é você quem consegue fazer meu coração
sentir exatamente aquilo que estou sentindo esta noite.

Paz.
Amor.
Felicidade.

E se eu pudesse escolher um sentimento
para levar comigo pelo resto da vida,
seria esse:

estar ao seu lado,
com você nos meus braços,
sabendo que tudo o que eu faço,
tudo o que eu sou
e tudo o que ainda quero conquistar...

É por você. ❤️
`
    },
    {
        id: 38,
        title: "Just the Two of Us",
        artist: "Grover Washington Jr. & Bill Withers",
        album: "Anthology",
        cover: "assets/covers/38.png",
        audio: "music/musica38.mp3",
        message: "No fim, não preciso de muita coisa para ser feliz. Se tiver você ao meu lado, nós dois podemos construir o nosso próprio mundo.",
        duration: "7:18",
        favorite: false,
        lyrics: `[00:21.44] I see the crystal raindrops fall
[00:24.61] And the beauty of it all
[00:27.59] Is when the sun comes shining through
[00:31.73] To make those rainbows in my mind
[00:34.99] When I think of you sometime
[00:37.55] And I wanna spend some time with you
[00:41.12] Just the two of us
[00:43.52] We can make it if we try
[00:46.22] Just the two of us
[00:48.50] (Just the two of us)
[00:50.47] Just the two of us
[00:53.16] Building castles in the sky
[00:55.55] Just the two of us
[00:57.92] You and I
[01:01.46] We look for love, no time for tears
[01:04.00] Wasted water's all that is
[01:06.48] And it don't make no flowers grow
[01:10.66] Good things might come to those who wait
[01:13.69] Not for those who wait too late
[01:16.65] We gotta go for all we know
[01:20.29] Just the two of us
[01:22.72] We can make it if we try
[01:25.45] Just the two of us
[01:27.56] (Just the two of us)
[01:29.91] Just the two of us
[01:33.46] Building them castles in the sky
[01:36.15] Just the two of us
[01:38.53] You and I
[01:42.58] Just the two of us
[01:42.84] We can make it, just the two of us
[01:43.19] Just the two of us
[01:43.32] We can make it, just the two of us
[01:43.64] Just the two of us
[01:43.98] We can make it, just the two of us
[01:44.15] Just the two of us
[01:44.43] We can make it, just the two of us
[01:44.73] Just the two of us
[01:44.98] We can make it, just the two of us
[01:45.55] Just the two of us
[01:46.05] We can make it, just the two of us
[01:46.57] Just the two of us
[01:47.12] We can make it, just the two of us
[01:47.61] Just the two of us
[01:48.21] We can make it, just the two of us
[02:12.64] I hear the crystal raindrops fall
[02:16.76] On the window down the hall
[02:19.12] And it becomes the morning dew
[02:23.43] And darling when the morning comes
[02:26.53] And I see the morning sun
[02:29.12] I wanna be the one with you
[02:32.47] Just the two of us
[02:35.12] We can make it if we try
[02:38.03] Just the two of us
[02:40.44] (Just the two of us)
[02:42.59] Just the two of us
[02:45.25] Building big castles way up high
[02:47.90] Just the two of us
[02:50.85] You and I
[02:52.70] (Just the two of us)
[02:55.37] Just the two of us
[02:57.98] (We can make it, just the two of us)
[03:00.19] Let's get it together, baby, yeah
[03:02.81] (Just the two of us)
[03:04.84] Just the two of us
[03:07.58] (We can make it, just the two of us)
[03:10.06] (Just the two of us)
[03:15.36] (We can make it, just the two of us)
[03:22.61] (Just the two of us)
[03:27.14] (We can make it, just the two of us)
[03:32.42] (Just the two of us)
[03:37.07] (We can make it, just the two of us)
[03:42.71] (Just the two of us)
[03:47.65] (We can make it, just the two of us)
[03:51.68] (Just the two of us)
[03:54.23] (We can make it, just the two of us)
[03:55.39] (Just the two of us)
[03:56.15] (We can make it, just the two of us)
[03:56.96] (Just the two of us)
[03:57.11] (We can make it, just the two of us)
[03:57.48] `,
        lyricsTranslation: `Eu vejo as gotas de chuva cristalinas caindo,
e existe tanta beleza em tudo isso.
Principalmente quando o sol aparece
e transforma a chuva em arco-íris.

E quando penso em você,
só consigo imaginar o quanto quero passar meu tempo ao seu lado.

Só nós dois.

Porque, juntos, podemos fazer dar certo,
se acreditarmos no nosso amor e caminharmos na mesma direção.

Só nós dois,
você e eu,
construindo nossos sonhos,
criando nosso próprio mundo
e imaginando tudo aquilo que ainda podemos viver juntos.

Não quero perder tempo com lágrimas ou tristezas.
Quero aproveitar cada momento que a vida nos dá
e fazer cada instante ao seu lado valer a pena.

Talvez as coisas boas cheguem para quem sabe esperar,
mas quando encontramos alguém especial,
não podemos deixar a oportunidade passar.

E eu quero viver tudo isso com você.

Só nós dois.

Eu e você,
construindo nossos sonhos lá no alto,
fazendo planos para o futuro
e transformando cada sonho em realidade.

Quando ouço a chuva caindo na janela,
penso em como tudo se transforma depois dela.
A noite vira manhã,
a chuva vira orvalho,
e um novo dia começa.

E quando o sol nascer,
eu quero estar ao seu lado.

Quero ser a pessoa que acorda com você,
que compartilha seus dias,
seus sonhos, suas conquistas
e até os momentos mais simples.

Porque não preciso de um mundo perfeito.

Se eu tiver você,
já tenho tudo o que preciso.

Só nós dois.

Você e eu.

Construindo nossa história,
sonhando juntos
e fazendo dar certo, um dia de cada vez.

Enquanto eu tiver você ao meu lado,
eu acredito que podemos chegar a qualquer lugar.

Só nós dois. ❤️
`
    },
    {
        id: 39,
        title: "O Ultimo dos Apaixonados",
        artist: "Zezé Di Camargo & Luciano",
        album: "Zezé Di Camargo & Luciano 1999",
        cover: "assets/covers/39.png",
        audio: "music/musica39.mp3",
        message: "No fim de tudo, se existe alguém por quem eu quero continuar apaixonado, esse alguém é você. Eu te amo. ❤️",
        duration: "3:22",
        favorite: false,
        lyrics: `[00:20.39] Eu sou do tipo que ainda sai na madrugada
[00:22.97] Mas não trai a sua amada num momento de ilusão
[00:29.39] E no amor eu sou do tipo de homem
[00:31.61] Que ainda perde a fome quando sofre de paixão
[00:38.10] Eu sou do tipo que se diz fora de moda
[00:41.02] Mas isso não me incomoda quando se sabe o que quer
[00:47.19] Eu sou do tipo que ainda escreve poesia
[00:51.16] E faz amor todo dia sempre com a mesma mulher
[00:54.72] Eu sou um dos últimos dos apaixonados
[00:59.53] Do tipo que ainda faz serenata pra um grande amor
[01:04.85] Se o romantismo ficou no passado
[01:09.21] Posso ser careta, ser antiquado, ser o que for
[01:14.31] Eu sou um dos últimos dos apaixonados
[01:18.25] Em cada mil existe um igual a mim
[01:23.40] Pode até falar quem quiser que eu sou quadrado
[01:27.04] Mas quando eu me entrego
[01:28.32] Numa paixão eu sou mesmo assim
[01:31.49] 
[01:51.57] Eu sou do tipo que segue as regras do jogo
[01:55.51] Posso até ficar de fogo quando abraço a solidão
[02:00.43] Eu sou daqueles que amanhece na zoeira
[02:04.52] Mas sempre com a companheira
[02:06.33] Dentro do seu coração
[02:09.31] Eu sou do tipo que nunca briga por nada
[02:13.34] Mas pela pessoa amada enfrento tudo que vier
[02:18.08] Sou na verdade, do tipo de homem que assume
[02:22.80] Que ainda morre de ciúme
[02:23.38] Pelo amor de uma mulher
[02:25.88] Eu sou um dos últimos dos apaixonados
[02:30.75] Do tipo que ainda faz serenata pra um grande amor
[02:36.64] Se o romantismo ficou no passado
[02:40.49] Posso ser careta, ser antiquado, ser o que for
[02:44.94] Eu sou um dos últimos dos apaixonados
[02:49.51] Em cada mil existe um igual a mim
[02:53.19] Pode até falar quem quiser que eu sou quadrado
[02:58.25] Mas quando eu me entrego
[02:59.52] Numa paixão eu sou mesmo assim
[03:03.62] Pode até falar quem quiser que eu sou quadrado
[03:07.14] Mas quando eu me entrego
[03:08.58] Numa paixão eu sou mesmo assim
[03:13.44] `,
        lyricsTranslation: ``
    }
];

// Exporta se estiver em ambiente Node/CommonJS (para testes futuros, caso necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PLAYLIST_DATA;
}
