class Radar {
	constructor() {
		this.toRender = [];
		this.data = [];
		this.deg = 0;

		for (let i = 0; i < 360; i++) {
			this.data.push(false);
			this.toRender.push(false);
		}
		this.data[30] = new Obstacle(150, 30);
		this.data[90] = new Obstacle(100, 90);
		this.data[200] = new Obstacle(120, 200);
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

		if (this.deg == 360) {
			this.deg = 0;
		}
	}

	parseData() {
		if (this.toRender[this.deg]) {
			this.data[this.deg] = new Obstacle(this.toRender[this.deg], this.deg);
		}
	}
}
