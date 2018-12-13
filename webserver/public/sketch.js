currentRotation = 0

function setup() {
	angleMode(DEGREES)
	createCanvas(900, 900)
	translate(width/2, height/2)
	rotate(180)
}

function draw() {
	background(0)
	transformRadar()	// Crea piano cartesiano mettendo l'origine al centro e ruotando di 180°
	drawRadar()			// Disegna circonferenza e indicatore
	drawObstacles()
	rotateRadar()		// Ruota l'indicatore di n gradi
}



function rotateRadar() {
	currentRotation += 1
}

function drawRadar() {
	noFill()
	stroke(255)
	strokeWeight(5)
	point(0, 0)
	strokeWeight(2)
	ellipse(0, 0, width, height)
	line(0, 0, getCoords(currentRotation, width/2)[0], getCoords(currentRotation, height/2)[1])
}

function transformRadar() {
	translate(width / 2, height / 2)
	rotate(180)
}

function getCoords(deg, dist) {
	let x = Math.cos(deg * Math.PI/180) * dist
	let y = Math.sin(deg * Math.PI/180) * dist
	return [x, y]
}

function drawObstacles() {
	
}