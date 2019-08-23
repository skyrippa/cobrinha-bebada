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

function preload() {
  // carregar imagens
  loadImages();
  //setSize();
}

function setup() {
  createCanvas(600,600);
  frameRate(6);
  jogo = new ControleDeTelas(images, 600);
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
  images.cobra = loadImage('images/Cobra.jpeg');
  images.alma = loadImage('images/Alma.jpeg');
  images.lokal = loadImage('images/Lokal.jpeg');
  images.espaco = loadImage('images/Espaco.jpeg');
  images.mente = loadImage('images/Mente.jpeg');
  images.poder = loadImage('images/Poder.jpeg');
  images.realidade = loadImage('images/Reality.jpeg');
  images.tempo = loadImage('images/Tempo.jpeg');
  images.gameOver = 'images/Game Over.jpg';
  images.perdaTotal = 'images/Perda Total.jpg';
  images.telaInicial = 'images/Tela Inicial.jpg';
  loadFont('Retro Gaming.ttf');
}

// function setSize() {
//   if (windowWidth > windowHeight) {
//     tamCanvas = windowHeight - 10;
//   } else {
//     tamCanvas = windowWidth - 10;
//   }
// }