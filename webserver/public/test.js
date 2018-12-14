function setup() {
	createCanvas(900, 900)
	angleMode(DEGREES)
}

function draw() {
	translate(width/2, height/2)
	rotate(-90)
	background(0)
	strokeWeight(5)
	stroke(255)
	noFill()
	ellipse(0, 0, 80, 80)
	point(0, 0)
	point(-100, -100)
}