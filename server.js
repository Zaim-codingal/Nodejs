var http = require("http");

http.createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
}).listen(8080);
console.log("Server running at http://localhost:8080");