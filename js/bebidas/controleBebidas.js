class ControleBebidas {
	constructor() {
		this.scale = 20;
		this.foiConsumida = false;
		this.bebidaAtual = undefined;
		this.fabricaDeBebidas = new FabricaDeBebidas();
	}

	sortearPosicao() {
		let cols = floor(width/this.scale);
		let rows = floor(height/this.scale);
		let pos = createVector(floor(random(cols)), floor(random(rows)));
		return pos.mult(this.scale);
	}

	checkConsumo() {
		return this.foiConsumida;
	}

	gerarNova() {
		if (this.fabricaDeBebidas.joiasDisponiveis.length === 0) {
			console.log('TODAS AS JOIAS GERADAS');
			noLoop();
		}
		let pos = this.sortearPosicao();
		this.bebidaAtual = this.fabricaDeBebidas.gerarBebida(pos);
		this.foiConsumida = false;
		console.log(this.bebidaAtual);
	}

	display() {
		let colors;
		switch(this.bebidaAtual.nome) {
			case 'lokal':
				colors = createVector(255,0,0);
			break;
			case 'alma':
				colors = createVector(255,0,255);
			break;
			case 'espaco':
				colors = createVector(0, 128, 155);
			break;
			case 'mente':
				colors = createVector(255,255,0);
			break;
			case 'poder':
				colors = createVector(204,0,204);
			break;
			case 'realidade':
				colors = createVector(255,51,51);
			break;
			case 'tempo':
				colors = createVector(0,255,0);
			break;
		}
		fill(colors.x, colors.y, colors.z);
		stroke(255);
		square(this.bebidaAtual.pos.x, this.bebidaAtual.pos.y, this.scale);
	}
}