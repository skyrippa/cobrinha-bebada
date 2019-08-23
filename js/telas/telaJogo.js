class TelaJogo {
	constructor(tamCanvas, musica) {
		this.snake;
		this.bar;
		this.estadoPartida;
		this.tamCanvas = tamCanvas;
		this.musica = musica
	}

	beber() {
	  	if (this.snake.beber(this.bar.bebidaAtual)) {
	    	this.bar.foiConsumida = true;
	    	this.bar.bebidaAtual = undefined;
	  	}
	}

	jogo() {
		// cobrinha
	  	this.estadoPartida = this.snake.update();
	  	this.snake.display();

	  	// ver se cobra bateu em algo
	  	if (!this.estadoPartida) {
	  		this.musica.stop()
	    	return 1;
	  	}

	  	// bebidas
	 	this.estadoPartida = this.bar.update();
	  	this.bar.display();

	  	// ver se acabaram as bebidas
	  	if (!this.estadoPartida) {
	  		this.musica.stop()
	    	return 2;
	  	}

	  	this.beber();
	  	// caso o jogo corra bem
	  	return 0;
	}

	resetGame(images) {
		this.snake = new Snake(this.tamCanvas);
		this.bar = new ControleBebidas(this.tamCanvas);

		this.snake.img = images.cobra;
	  	this.bar.images.alma = images.alma;
	  	this.bar.images.lokal = images.lokal;
	  	this.bar.images.espaco = images.espaco;
	  	this.bar.images.mente = images.mente;
	  	this.bar.images.poder = images.poder;
	  	this.bar.images.realidade = images.realidade;
	  	this.bar.images.tempo = images.tempo;

	  	this.bar.gerarNova();
	  	this.musica.setVolume(0.5)
	  	this.musica.loop()
	}
	
}