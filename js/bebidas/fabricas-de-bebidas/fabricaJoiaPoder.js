class FabricaJoiaPoder extends FabricaBebidasMae {
	constructor() {
		super();
	}
	static criarBebida(pos) {
		return new JoiaDoPoder('poder', pos);
	}
}