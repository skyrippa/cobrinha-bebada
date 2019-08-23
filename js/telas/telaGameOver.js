class TelaGameOver extends Tela {
	constructor(img, btnText = 'Voltar ao Menu') {
		super(img, btnText);
		this.pontuacao = createP('0');
	}

	setPontuacao(pontuacao) {
		let p = select('p');
		p.elt.innerText = "Pontuação: " + pontuacao + " pontos!"
	}

	config() {
		// css img
		this.img.position(0,0)
		this.img.style('width', '100%');
		this.img.style('max-width', '600px')
  	this.img.style('height', 'auto')

  	// css pontuacao
  	let largura = 200
  	this.pontuacao.position(largura, 410)
  	this.pontuacao.style("color: white")
  	this.pontuacao.style("font-size: 20px")
  	// console.log(this.pontuacao)

  	// css botao
  	largura = 235 - this.botao.width / 2
  	let altura = 470
  	this.botao.position(largura, altura)
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
		this.pontuacao.show();
	}

	hide() {
		this.img.hide();
		this.botao.hide();
		this.pontuacao.hide();	
	}
}