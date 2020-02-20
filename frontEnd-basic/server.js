const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    let fileName = pathname.substr(1);
    fs.readFile(fileName, (err, data) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data.toString());
            response.end();
        }
    })
})

server.listen(8080);