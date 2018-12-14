class Radar {
	constructor() {
		this.data = [];
		this.deg = 0;

		for (let i = 0; i < 360; i++) {
			this.data.push(false);
		}
		this.data[0] = new Obstacle(150, 0);
	}

	show() {
		translate(width / 2, height / 2);
		rotate(180);
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
		this.deg += 1;

		// if (this.deg == 360) {
		// 	this.deg = 0;
		// }
	}
}
