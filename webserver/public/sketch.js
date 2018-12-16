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
	// Girando il piano e traslando l'origine le coordinate non sono X, Y ma Y, X
	// Essendo una circonferenza non fa differenza in questo caso
	background(0)

	translate(width/2, height/2)
	rotate(-90)
	
	noFill()
	stroke(255)
	strokeWeight(10)
	point(0, 0)
	
	strokeWeight(0.3)
	ellipse(0, 0, width/3, height/3)
	ellipse(0, 0, width/3*2, height/3*2)
	
	strokeWeight(2)
	ellipse(0, 0, width, height)
	line(0, 0, getCoords(currentRotation, width/2).x, getCoords(currentRotation, width/2).y)

	getObstacles()

	if (mouseIsPressed) {
		for (let j = 0; j < 5; j++) {
			obstacles.push(new Obstacle(currentRotation, random(-50, width)))
		}
	}

	for (let i = 0; i < obstacles.length; i++) {
		obstacles[i].draw()
		if (obstacles[i].check(currentRotation)) {
			obstacles.splice(i, 1)
		}
	}

	//currentRotation += 1
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
	response = loadJSON("/get-obstacles")
	currentRotation = response[0]
	obstacles.push(new Obstacle(currentRotation, response[1]))
}
