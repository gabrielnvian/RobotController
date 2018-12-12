class Obstacle {
	constructor(dist, deg) {
		this.x = round(Math.cos(deg * Math.PI/180) * dist);
		this.y = round(Math.sin(deg * Math.PI/180) * dist);
		this.deg = deg - 5;

		if (this.deg < 0) {
			this.deg = 360 + this.deg;
		}
	}

	check(deg) {
		return this.deg == deg;
	}

	show() {
		point(this.x, this.y)
	}
}
