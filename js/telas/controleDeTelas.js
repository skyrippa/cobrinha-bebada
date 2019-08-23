class ControleDeTelas {
	constructor(imgs, tamCanvas, sounds) {
		this.telaInicial;
		this.telaGameOver;
		this.telaPT;
		this.telaJogo;
		this.telaAtual;
		this.tamCanvas = tamCanvas;
		this.imgs = imgs;
		this.sounds = sounds
	}

	iniciar() {
		this.sounds.gameOver = loadSound('soundtracks/game-over-boate-azul.mp3')
  		this.sounds.perdaTotal = loadSound('soundtracks/pt-globo-esporte.mp3')
		this.telaInicial = new TelaInicial(this.imgs.telaInicial, this.sounds.intro);
		this.telaInicial.config();
		this.telaInicial.show();
		this.telaGameOver = new TelaGameOver(this.imgs.gameOver, this.sounds.gameOver);
		this.telaGameOver.config();
		this.telaGameOver.hide();
		this.telaPT = new TelaPT(this.imgs.perdaTotal, this.sounds.perdaTotal);
		this.telaPT.config();
		this.telaPT.hide();
	}

	menu() {
		this.telaInicial.show();
		this.telaGameOver.hide();
		this.telaPT.hide();
	}

	startGame() {
		this.telaInicial.hide();
		this.telaPT.hide();
		this.telaJogo = new TelaJogo(this.tamCanvas, this.sounds.game);
		this.telaJogo.resetGame(this.imgs);
	}

	play() {
		switch(this.telaJogo.jogo()) {
			case 1:
				this.gameOver();
			break;
			case 2:
				this.perdaTotal()
			break;
		}
	}

	gameOver() {
		let pontuacao = this.telaJogo.snake.pontuacao;
		this.telaJogo = null;
		this.telaGameOver.setPontuacao(pontuacao)
		this.telaGameOver.show();
	}

	perdaTotal() {
		let pontuacao = this.telaJogo.snake.pontuacao;
		this.telaJogo = null
		this.telaPT.show();
	}
}