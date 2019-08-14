class Snake {
	constructor() {
		// cobra instancia cabeça
		this.head = new Head();
		this.body = [this.head];
		this.xspeed = 1;
		this.yspeed = 0;
		this.scale = 20;
	}

	display() {
		for (let node of this.body) {
			let x = node.x;
			let y = node.y;
			fill(255);
			square(x, y, this.scale);
		}
	}
	dir(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}
	update() {
		// Alterar o sentido da cobrinha de acordo 
		//com a tecla pressionada
		for (let node of this.body) {
			node.x += this.xspeed * this.scale;
			node.y += this.yspeed * this.scale;
		}
		// Para o nó não sair do grid
		this.head.x = constrain(this.head.x, 0, width - this.scale);
		this.head.y = constrain(this.head.y, 0, height - this.scale);
	}
	checarBatida() {}
	beber() {}
}