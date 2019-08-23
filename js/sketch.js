let estadoPartida;
let jogo;
let images = {
  cobra: undefined,
  alma: undefined,
  lokal: undefined,
  espaco: undefined,
  mente: undefined,
  poder: undefined,
  realidade: undefined,
  tempo: undefined,
  gameOver: undefined,
  telaInicial: undefined,
  perdaTotal: undefined,
};
let sounds = {
  intro: undefined,
  game: undefined,
  gameOver: undefined,
  perdaTotal: undefined,
}

function preload() {
  // carregar imagens
  loadImages();
  sounds.intro = loadSound('soundtracks/intro-grande-familia.mp3')
  sounds.game = loadSound('soundtracks/game-orgia-de-traveco.mp3')
  //loadSounds()
  //setSize();
}

function setup() {
  createCanvas(600,600);
  frameRate(6);
  jogo = new ControleDeTelas(images, 600, sounds);
  jogo.iniciar();
  let btnJogar = jogo.telaInicial.botao;
  let btnMenu1 = jogo.telaGameOver.botao;
  let btnMenu2 = jogo.telaPT.botao;

  btnJogar.mousePressed(() => jogo.startGame());
  btnMenu1.mousePressed(() => jogo.menu());
  btnMenu2.mousePressed(() => jogo.menu());
}

function draw() {
  background(0);
  try  {
    jogo.play();
  } catch(e) {
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    jogo.telaJogo.snake.direcao(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    jogo.telaJogo.snake.direcao(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    jogo.telaJogo.snake.direcao(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    jogo.telaJogo.snake.direcao(-1, 0);
  }
}

function loadImages() {
  images.cobra = loadImage('images/Cobra.jpg');
  images.alma = loadImage('images/Alma.jpg');
  images.lokal = loadImage('images/Lokal.jpg');
  images.espaco = loadImage('images/Espaco.jpg');
  images.mente = loadImage('images/Mente.jpg');
  images.poder = loadImage('images/Poder.jpg');
  images.realidade = loadImage('images/Reality.jpg');
  images.tempo = loadImage('images/Tempo.jpg');
  images.gameOver = 'images/Game Over.jpg';
  images.perdaTotal = 'images/Perda Total.jpg';
  images.telaInicial = 'images/Tela Inicial.jpg';
  //loadFont('Retro Gaming.ttf');
}

// function loadSounds() {
//   sounds.intro = loadSound('soundtracks/intro-grande-familia.mp3')
//   sounds.game = loadSound('soundtracks/game-orgia-de-traveco.mp3')
//   sounds.gameOver = loadSound('soundtracks/game-over-boate-azul.mp3')
//   sounds.perdaTotal = loadSound('soundtracks/pt-globo-esporte.mp3')
// }

// function setSize() {
//   if (windowWidth > windowHeight) {
//     tamCanvas = windowHeight - 10;
//   } else {
//     tamCanvas = windowWidth - 10;
//   }
// }