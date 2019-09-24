const http = require('http');
const url = require('url');
const fs = require('fs');
let receiver = '';

const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    file = pathname.substr(1);
    fs.readFile(file, (err, data) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data.toString());
            response.end();
        }
    });
    if (request.method == 'POST') {
        request.on('data', (data) => {
            receiver += data;
        });
        request.on('end', () => {
            console.log(receiver);
            receiver = '';
        })
    }

});

server.listen(8080);
