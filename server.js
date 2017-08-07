var http = require('http');
var fs = require('fs');

http.createServer(function (req, response) {

    response.writeHead(200, { 'Content-Type' : 'text/html' });
    var read = fs.createReadStream(__dirname + '/webpage.html');
    read.pipe(response);

}).listen(process.env.PORT || 10);
