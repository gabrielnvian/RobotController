class Radar {
	constructor() {
		this.velocity = 0.5;
		this.limit = 45;
		this.degs = [];
		this.deg = 0;
		for (let i = 0; i < 360; i++) {
			this.degs.push(random(1, 200));
		}
	}

	show() {
		background(0);
		translate(width / 2, height / 2);
		rotate(180);
		this.addData();
		stroke(255);
		strokeWeight(2);
		rotate(this.deg);
		fill(255);
		ellipse(0, 0, 5, 5);
		noFill();
		ellipse(0, 0, width, height);
		line(0, 0, 0, height / 2);
	}

	rotateRadar() {
		this.deg += this.velocity;

		if (this.deg > this.limit) {
			this.velocity = this.velocity * -1;
			this.deg = this.limit;
		} else if (this.deg < this.limit * -1) {
			this.velocity = this.velocity * -1;
			this.deg = this.limit * -1;
		}
	}

	addData() {
		let cosx = Math.cos((this.deg + 10) * Math.PI/180);
		let siny = Math.sin((this.deg + 10) * Math.PI/180);
		point(100 * cosx, 100 * siny);
	}
}

//Math.atan(1) * 180/Math.PI



//dist = Math.tan(45 * (Math.PI/180)) // con questo trovo il coefficiente angolare dell'equazione
// imposto l'equazione di una retta con coefficiente angolare calcolato prima
// girando la formula della distanza (conosciuta) trovo x e y
// dist = sqrt(x^2 + y^2)
// x = sqrt(dist^2 - y^2)
// devo impostare un sistema in modo da risolvere quell'equazione