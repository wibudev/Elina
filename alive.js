var http = require('http');

http.createServer(function (req, res) {
  res.write("Elina Ready Cok!");
  res.end();
}).listen(8080);

