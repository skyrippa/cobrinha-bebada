class Tela {
	constructor(src, btnText) {
		this.img = createImg(src);
		this.botao = createButton(btnText);
	}
	config() {
		// css img
		this.img.position(0,0)
		this.img.style('width', '100%');
		this.img.style('max-width', '600px')
	  	this.img.style('height', 'auto')

	  	// css botao
	  	let tam = 235 - this.botao.width / 2
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
	}
	hide() {
		this.img.hide();
		this.botao.hide();
	}
}