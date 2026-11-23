var http = require('http');

var d = new Date();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Matteo Sandholzer</h1>');
  res.write('<h1>Kiebitzweg 30<h1>');
  res.write(d.toLocaleString());
  res.end();
}).listen(8080);