class FabricaJoiaRealidade extends FabricaBebidasMae {
	constructor() {
		super();
	}
	static criarBebida(pos) {
		return new JoiaDaRealidade('realidade', pos);
	}
}