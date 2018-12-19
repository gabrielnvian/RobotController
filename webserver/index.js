const express = require("express");
const random = require("random");
const server = express();

let rotation = 0;
let obstacles = [];

server.get("/", function(req, res) {
	res.send('<a href="/index.html">index.html</a>');
})

server.get("/get-obstacles", function(req, res) {
	sendradar(req, res);
})


server.use(express.static("public"));
 
server.listen(80);
console.log("Server listening...");

function sendradar(req, res) {
	let obstacle;
	//if (random.int(0, 1) < 0.1) {
		obstacle = random.int(-50, 1400)
	//} else {
	//	obstacle = 1500
	//}

	//obstacle = mapint(obstacle, 0, 1500, 0, 10);

	res.json({rot: rotation, dist: obstacle});

	obstacles[rotation] = obstacle
	rotation += 0.5;
}

function mapint(n, start1, stop1, start2, stop2) {
	return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}
