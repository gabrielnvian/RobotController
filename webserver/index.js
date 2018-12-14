const express = require("express");
const server = express();

server.get("/", function(req, res) {
	res.send("Hello World");
})

server.get("/robot-radar", function(req, res) {
	sendradar(req, res);
})

server.use(express.static("public"));
 
server.listen(80);
console.log("Server listening...");

function sendradar(req, res) {
	res.send(":D:D:D:D");
}