const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    request.encoding = "utf-8";
    if (request.method == "GET") {
        let content = url.parse(request.url).query;
        content = content.replace(/\s/g,'');
        content = content.split(";");
        for (let i = 0; i < content.length; i++) {
            content[i] = content[i].split("=");
        }
        console.log(content);
        response.write("end...");
        response.end();
    }
});

server.listen(8083);