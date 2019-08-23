class Tela {
	constructor(src, musica, btnText, creditos = 'Desenvolvido por Banco de Gados, 2019') {
		this.img = createImg(src);
		this.botao = createButton(btnText);
		this.creditos = createP(creditos)
		this.musica = musica;
	}
	config() {
		// css img
		this.img.position(0,0)
		this.img.style('width', '100%');
		this.img.style('max-width', '600px')
	  	this.img.style('height', 'auto')

	  	// css creditos
	  	this.creditos.style("font-size: 10px")
	  	this.creditos.position(200, 570)
	  	this.creditos.style("color: white")

	  	// css botao
	  	let tam = 250 - this.botao.width / 2
	  	this.botao.position(tam, 410)
	  	this.botao.style("background-color: #4CAF50")
	  	this.botao.style("padding", "15px 25px");
	  	this.botao.style("font-size", "24px");
	  	this.botao.style("outline: none")
	  	this.botao.style("cursor: pointer")
	  	this.botao.style("color: white")
	  	// let font = loadFont('Retro Gaming.ttf');
	  	// this.botao.style("font-family", font)
	}
	show() {
		this.botao.mouseOver(()=> this.botao.style("background-color: #3e8e41"))
	  	this.botao.mouseOut(()=> this.botao.style("background-color: #4CAF50"))
		this.img.show();
		this.botao.show();
		this.creditos.show();
		this.musica.setVolume(0.5)
		this.musica.loop()
	}
	hide() {
		this.img.hide();
		this.botao.hide();
		this.creditos.hide();
		this.musica.stop()
	}
}