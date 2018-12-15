const express = require("express");
const server = express();

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
	obstacles = [
		{
			angle: 40,
			dist: 100
		},
		{
			angle: 100,
			dist: 600
		}
	]

	res.send(obstacles);
}
