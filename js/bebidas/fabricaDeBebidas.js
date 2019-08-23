class FabricaDeBebidas {
	constructor() {
		this.numBebidasGeradas = 0;
		this.bebidaSorteada;
		this.joiasDisponiveis = [1,2,3,4,5,6];
	}

	estoqueZerado() {
		if (this.numBebidasGeradas === 12) {
			return true;
		}
		return false;
	}

	gerarBebida(pos) {
		// checando se ainda pode gerar joias
		let numSorteado;
		if (this.joiasDisponiveis.length > 0){
			numSorteado = this.sortearBebida();
		} else {
			numSorteado = -1;
		}
		
		this.numBebidasGeradas++;
		// caso lokal seja sorteada
		if (numSorteado === -1) {
			this.bebidaSorteada = FabricaLokal.criarBebida(pos);
			return this.bebidaSorteada;
		}
		// caso joia seja sorteada
		return this.gerarJoia(pos, numSorteado);
	}

	gerarJoia(pos, numSorteado) {
		switch(this.joiasDisponiveis[numSorteado]) {
			case 1:
				this.bebidaSorteada = FabricaJoiaAlma.criarBebida(pos);
				this.joiasDisponiveis.splice(numSorteado, 1);
				return this.bebidaSorteada;
			break;
			case 2:
				this.bebidaSorteada = FabricaJoiaEspaco.criarBebida(pos);
				this.joiasDisponiveis.splice(numSorteado, 1);
				return this.bebidaSorteada;
			break;
			case 3:
				this.bebidaSorteada = FabricaJoiaMente.criarBebida(pos);
				this.joiasDisponiveis.splice(numSorteado, 1);
				return this.bebidaSorteada;
			break;
			case 4:
				this.bebidaSorteada = FabricaJoiaPoder.criarBebida(pos);
				this.joiasDisponiveis.splice(numSorteado, 1);
				return this.bebidaSorteada;
			break;
			case 5:
				this.bebidaSorteada = FabricaJoiaRealidade.criarBebida(pos);
				this.joiasDisponiveis.splice(numSorteado, 1);
				return this.bebidaSorteada;
			break;
			case 6:
				this.bebidaSorteada = FabricaJoiaTempo.criarBebida(pos);
				this.joiasDisponiveis.splice(numSorteado, 1);
				return this.bebidaSorteada;
			break;
		}
	}

	sortearBebida() {
		if (this.numBebidasGeradas % 2 === 0) {
			return floor(random(this.joiasDisponiveis.length));
		}
		return -1;
	}
}