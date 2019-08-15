class FabricaJoiaMente extends FabricaBebidasMae {
	constructor() {
		super();
	}
	static criarBebida(pos) {
		return new JoiaDaMente('mente', pos);
	}
}