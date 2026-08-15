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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
    },
    {
        id: 20,
        title: "Seguindo no Trem Azul",
        artist: "Doce Outono",
        album: "Roupacustico",
        cover: "assets/covers/20.png",
        audio: "music/musica20.mp3",
        message: "Se a vida é uma viagem, eu não quero chegar rápido ao destino. Quero aproveitar cada estação ao seu lado.",
        duration: "4:12",
        favorite: false
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
        favorite: false
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
        favorite: false
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
        favorite: false
    }
];

// Exporta se estiver em ambiente Node/CommonJS (para testes futuros, caso necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PLAYLIST_DATA;
}
