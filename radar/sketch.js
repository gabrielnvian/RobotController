let radar;

function setup() {
	angleMode(DEGREES)
	createCanvas(700, 700);
	radar = new Radar();
}

function draw() {
	background(0);
	radar.show();
	radar.rotateRadar();
	radar.parseData();

	for (let i = 0; i < 360; i++) {
		if (radar.data[i]) {
			if (!radar.data[i].check()) {
				radar.data[i] = false;
			}
		}
	}
}
