var http = require('http');
http.createServer(function (req, res) {
  res.write("Elina Ready!");
  res.end();
}).listen(8080);

