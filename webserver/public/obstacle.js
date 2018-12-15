class Obstacle {
	constructor(angle, dist) {
		this.dist = constrain(map(dist, 0, max, 120, width), -width/2/3, width/2)
		this.x1 = getCoords(angle, this.dist).x
		this.y1 = getCoords(angle, this.dist).y
		this.angle = angle + 360

		//let dist2 = map(this.dist, 0, max, 70, width) + 50
		//this.x2 = getCoords(angle, dist2).x
		//this.y2 = getCoords(angle, dist2).y
	}

	draw() {
		push()
		strokeWeight(5)
		if (this.dist < width/2/3) {
			stroke(255, 0, 0) // red
		} else if (this.dist > width/2/3 && this.dist < width/2/3*2) {
			stroke(238, 255, 50) // yellow
		} else {
			stroke(89, 206, 74) // green
		}
		// line(this.x1, this.y1, this.x2, this.y2)
		// point(252, 58, 239) // DIL
		point(this.x1, this.y1)
		pop()
	}

	check(rotation) {
		return this.angle <= rotation
	}
}