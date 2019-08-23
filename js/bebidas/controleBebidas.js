class ControleBebidas {
	constructor(tamCanvas) {
		this.scale = tamCanvas/10;
		this.foiConsumida = false;
		this.bebidaAtual = undefined;
		this.fabricaDeBebidas = new FabricaDeBebidas();
		this.images = {
			lokal: undefined,
			alma:undefined,
			mente: undefined,
			realidade: undefined,
			espaco: undefined,
			poder: undefined,
			tempo: undefined
		};
	}

	addImagem() {
		let nome = this.bebidaAtual.nome;
		let img;
		switch(nome) {
			case 'lokal':
				this.bebidaAtual.img = this.images.lokal;
			break;
			case 'alma':
				this.bebidaAtual.img = this.images.alma;
			break;
			case 'espaco':
				this.bebidaAtual.img = this.images.espaco;
			break;
			case 'mente':
				this.bebidaAtual.img = this.images.mente;
			break;
			case 'poder':
				this.bebidaAtual.img = this.images.poder;
			break;
			case 'realidade':
				this.bebidaAtual.img = this.images.realidade;
			break;
			case 'tempo':
				this.bebidaAtual.img = this.images.tempo;
			break;
		}
	}

	checkConsumo() {
		return this.foiConsumida;
	}

	display() {
		let img = this.bebidaAtual.img;
		let x = this.bebidaAtual.pos.x;
		let y = this.bebidaAtual.pos.y;
		let scl = this.scale;
		image(img, x, y, scl, scl);
	}

	gerarNova() {
		let pos = this.sortearPosicao();
		this.bebidaAtual = this.fabricaDeBebidas.gerarBebida(pos);
		this.addImagem();
		this.foiConsumida = false;
	}

	horaDeGerar() {
		if (this.bebidaAtual === undefined && this.foiConsumida === true) {
			return true;
		}
		return false;
	}

	sortearPosicao() {
		let cols = floor(width/this.scale);
		let rows = floor(height/this.scale);
		let pos = createVector(floor(random(cols)), floor(random(rows)));
		return pos.mult(this.scale);
	}

	update() {
		if (this.horaDeGerar()) {
			this.gerarNova();
			return true;
		}
		if (this.fabricaDeBebidas.estoqueZerado()) {
			return false;
		}
		return true;
	}
}