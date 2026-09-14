/*
Run a node.js fule on the command line via localjost 127.0.0.1 without neding and html file
*/

var http = require("http")

// Rememeber callback functions best return in arrow sintax
http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end("Hello, World! Server is up and running!");
}).listen(8080)