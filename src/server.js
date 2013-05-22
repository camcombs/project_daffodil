var http = require("http");

var server = http.createServer(function(req, res) {
    res.end("hello world");
});

var port = process.env.PORT || 5000;

server.listen(port);
console.log("server running");