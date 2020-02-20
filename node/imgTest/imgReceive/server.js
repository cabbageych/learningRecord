const http = require('http');
const url = require('url');
const fs = require('fs');


var imgUrl = "http://localhost:8080/huaji.jpg";
var server = http.createServer(function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    let pathname = url.parse(request.url).pathname;
    let reg = /jpeg|jpg|gif|png/;
    if (reg.test(pathname.substr(1))) {
        fs.readFile(pathname.substr(1), function (err, data) {
            if (err) {
                console.log(err);
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                //response.setHeader("Access-Control-Allow-Origin","*");
                response.writeHead(200, { 'Content-Type': "image/jpeg" });
                response.write(data);
            }
            response.end();
        });
    } else {
        if (request.method == "GET") {
            console.log("connecting...");
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(imgUrl);
            response.end();
        }
    }
});

server.listen(8080);