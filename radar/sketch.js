let radar;

function setup() {
	angleMode(DEGREES)
	createCanvas(700, 700);
	radar = new Radar();
}

function draw() {
	radar.show();
	radar.rotateRadar();
}