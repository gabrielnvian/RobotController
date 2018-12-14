class Obstacle {
	constructor(angle, dist) {
		dist = constrain(map(dist, 0, max, 70, width), -max, max)
		this.x1 = getCoords(angle, dist).x
		this.y1 = getCoords(angle, dist).y
		this.angle = angle + 360

		let dist2 = map(dist, 0, max, 70, width) + 50
		this.x2 = getCoords(angle, dist2).x
		this.y2 = getCoords(angle, dist2).y
	}

	draw() {
		line(this.x1, this.y1, this.x2, this.y2)
	}

	check(rotation) {
		return this.angle <= rotation
	}
}