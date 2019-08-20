var snake;
var bar;
let estadoPartida;

function preload() {
  snake = new Snake();
  snake.img = loadImage('images/Cobra.jpeg');

  // loading imagens das bebidas
  bar = new ControleBebidas();
  bar.images.alma = loadImage('images/Alma.jpeg');
  bar.images.lokal = loadImage('images/Lokal.jpeg');
  bar.images.espaco = loadImage('images/Espaco.jpeg');
  bar.images.mente = loadImage('images/Mente.jpeg');
  bar.images.poder = loadImage('images/Poder.jpeg');
  bar.images.realidade = loadImage('images/Reality.jpeg');
  bar.images.tempo = loadImage('images/Tempo.jpeg');
}

function setup() {
  createCanvas(600,600);
  frameRate(6);
  // gerando 1a bebida
  bar.gerarNova();
  estadoPartida = true;
}

function draw() {
  background(0);

  // cobrinha
  estadoPartida = snake.update();
  snake.display();

  // ver se cobra bateu em algo
  if (!estadoPartida) {
    console.log('game over');
    noLoop();
  }

  // bebidas
  estadoPartida = bar.update();
  bar.display();

  // ver se acabaram as bebidas
  if (!estadoPartida) {
    console.log('game over');
    noLoop();
  }

  beber();
}

function beber() {
  if (snake.beber(bar.bebidaAtual)) {
    bar.foiConsumida = true;
    bar.bebidaAtual = undefined;
  }
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.direcao(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.direcao(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		snake.direcao(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		snake.direcao(-1, 0);
	}
}