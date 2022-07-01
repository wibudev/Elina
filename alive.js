

var http = require('http');
var fs = require('fs')
http.createServer(function (req, res) {
res.setHeader('Content-type', 'text/html');
    fs.readFile('./index.html', (err, html) => {
        if(err)
           res.write("Error");    
        else
           res.write(html);    
        res.end();
   })
}).listen(8080);
