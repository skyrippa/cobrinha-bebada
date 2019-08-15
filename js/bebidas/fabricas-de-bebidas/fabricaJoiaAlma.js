class FabricaJoiaAlma extends FabricaBebidasMae {
	constructor() {
		super();
	}
	static criarBebida(pos) {
		return new JoiaDaAlma('alma', pos);
	}
}