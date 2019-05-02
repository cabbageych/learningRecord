'use strict'
var http = require('http');
var fs = require('fs');
var url = require("url");

//创建httpserver并传入回调函数
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    fs.readFile(pathname.substr(1), function (err, data) {
        if(err){
            console.log(err);
            response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
});
server.listen(8080);
