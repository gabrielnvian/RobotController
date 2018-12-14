let currentRotation = 0
let obstacles = []
let max = 1500

function setup() {
	createCanvas(900, 900)
	angleMode(DEGREES)
	translate(width/2, height/2)
	rotate(-90)
}

function draw() {
	background(0)

	translate(width/2, height/2)
	rotate(-90)
	
	noFill()
	stroke(255)
	strokeWeight(10)
	point(0, 0)
	strokeWeight(2)
	ellipse(0, 0, width, height)
	line(0, 0, getCoords(currentRotation, width/2).x, getCoords(currentRotation, width/2).y)

	//obstacles = getObstacles()

	for (let i = 0; i < obstacles.length; i++) {
		obstacles[i].draw()
		if (obstacles[i].check(currentRotation)) {
			obstacles.splice(i, 1)
		}
	}

	currentRotation += 1

	if (mouseIsPressed) {
		obstacles.push(new Obstacle(currentRotation, random(70, width/2)))
	}
}

function getCoords(deg, dist) {
	let x = Math.cos(deg * Math.PI/180) * dist
	let y = Math.sin(deg * Math.PI/180) * dist
	return createVector(x, y)
}

function transCoords(x, y) {
	x = x - width / 2
	y = -1 * y - height / 2
	return createVector(x, y)
}

function getObstacles() {
	
}
