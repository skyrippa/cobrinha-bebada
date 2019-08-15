class FabricaLokal extends FabricaBebidasMae {
	constructor() {
		super();
	}
	static criarBebida(pos) {
		return new Lokal('lokal', pos);
	}
}