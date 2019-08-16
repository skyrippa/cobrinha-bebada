var snake;
var bar;

function setup() {
  createCanvas(600,600);
  frameRate(10);
  snake = new Snake();
  bar = new ControleBebidas();
  bar.gerarNova();
}

function draw() {
  background(51);
  // cobrinha
  snake.update();
  snake.display();
  if (snake.checarBatida()) {
  	noLoop();
  }

  // bebidas
  if (bar.checkConsumo && bar.bebidaAtual === undefined) {
    bar.gerarNova();
  }
  bar.display();
  // checar se bebida foi consumida
  if (snake.beber(bar.bebidaAtual)) {
  	// snake.efeito = bar.bebidaAtual.efeito;
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