'use strict'

var url = require('url');
var fs = require('fs');
var path = require('path');
var http = require('http');

//从命令行获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('static root dir: '+root);

//创建服务器
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    //读取文件状态
    fs.stat(filepath,function(err,stats){
        if(!err && stats.isFile()){
            console.log('200 '+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404 '+request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);
console.log('server is running at http://127.0.0.1:8080/');