const express = require("express");
const server = express();

let rotation

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
	obstacle = 1500

	if (rotation == 100) {
		obstacle = 100
	} else if (rotation == 400) {
		obstacle = 500
	}

	res.send([rotation, obstacle]);

	rotation += 1
}
