const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    if (pathname.substr(1)) {
        fs.readFile(pathname.substr(1), (err, data) => {
            if (err) {
                console.log(err);
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, 
                    { "Content-Type": "text/html" },
                    {"Set-Cookie":['name=cabbage','age=18']}
                );
                response.write(data.toString());
            }
            response.end();
        });
    }else{
        console.log(request.url);
        console.log(request.headers);
        response.end();
    }
});

server.listen(8080);