var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    //console.log(pathname);
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, { "Content-Type": "text/html" });
        } else {
            var reg = /jpg|png|gif|jpeg/;
            if (reg.test(pathname)) {
                response.writeHead(200, { "Content-Type": "image/jpeg" });
                response.write(data);
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
            }
        }
        response.end();
    });
});
server.listen(8080);