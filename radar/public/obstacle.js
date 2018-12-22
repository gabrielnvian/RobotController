class Obstacle {
	constructor(angle, dist) {
		this.dist = constrain(map(dist, 0, max, 120, width), -width/2/3, width/2)
		this.x1 = getCoords(angle, this.dist).x
		this.y1 = getCoords(angle, this.dist).y
		this.angle = angle + 360 - 2

		this.x2 = getCoords(angle, width/2).x
		this.y2 = getCoords(angle, width/2).y
	}

	draw() {
		push()
		//strokeWeight(5)
		strokeWeight(1)
		if (this.dist < width/2/3) {
			stroke(255, 0, 0) // red
		} else if (this.dist > width/2/3 && this.dist < width/2/3*2) {
			stroke(238, 255, 50) // yellow
		} else {
			stroke(89, 206, 74) // green
		}
		//point(this.x1, this.y1)
		line(this.x1, this.y1, this.x2, this.y2)
		pop()
	}

	check(rotation) {
		return this.angle <= rotation
	}
}