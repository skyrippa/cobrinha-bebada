class FabricaJoiaTempo extends FabricaBebidasMae {
	constructor() {
		super();
	}
	static criarBebida(pos) {
		return new JoiaDoTempo('tempo', pos);
	}
}