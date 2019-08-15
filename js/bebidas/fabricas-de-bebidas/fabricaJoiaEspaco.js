class FabricaJoiaEspaco extends FabricaBebidasMae {
	constructor() {
		super();
	}
	static criarBebida(pos) {
		return new JoiaDoEspaco('espaco', pos);
	}
}