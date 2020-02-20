const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((request, response) => {
    let pathname = (url.parse(request.url).pathname).substr(1);
    console.log(pathname);
    if (pathname.indexOf("html") != -1) {
        fs.readFile(pathname, (err, data) => {
            if (err) {
                console.log(err);
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
            }
            response.end();
        });
    }else{
        response.end();
    }

});

server.listen(8081);