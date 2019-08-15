class Snake {
	constructor() {
		// cobra instancia cabeça
		this.head = new No();
		this.body = [this.head];
		this.xspeed = 1;
		this.yspeed = 0;
		this.scale = 20;
	}

	checarBatida = function() {
		for (let i = 1; i < this.body.length; ++i) {
			let pos = createVector(this.body[i].x, this.body[i].y);
			let d = dist(this.head.x, this.head.y, pos.x, pos.y);
			if (d < 1) {
				console.log('morri!');
				return true;
			}
		}
		return false;
	}

	beber(pos) {
		let d = dist(this.head.x, this.head.y, pos.x, pos.y);
		if (d < 1) {
			let no = new No(pos.x, pos.y);
			this.body.push(no);
			return true;
		} else {
			return false;
		}
	}

	display() {
		for (let node of this.body) {
			let x = node.x;
			let y = node.y;
			fill(255);
			stroke(0);
			square(x, y, this.scale);
		}
	}

	direcao(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	update() {
		for (let i = 0; i < this.body.length; ++i) {
			this.body[i] = this.body[i+1];
		}
		this.body[this.body.length-1] = createVector(this.head.x, this.head.y);

		this.head.x += this.xspeed*this.scale;
		this.head.y += this.yspeed*this.scale;

		this.head.x = constrain(this.head.x, 0, width-this.scale);
		this.head.y = constrain(this.head.y, 0, height-this.scale);
	}
}