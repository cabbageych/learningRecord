const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

var server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    if (request.method == 'GET') {
        if (pathname.indexOf('html') != -1) {
            fs.readFile(pathname.substr(1), (err, data) => {
                if (err) {
                    response.writeHead(404, { "Content-Type": "text/html" });
                } else {
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.write(data.toString());
                }
                response.end();
            });
        } else {
            //从命令行获取root目录，默认是当前目录
            var root = path.resolve(process.argv[2] || '.');
            var filepath = path.join(root, pathname);
            //读取文件状态
            fs.stat(filepath, function (err, stats) {
                if (!err && stats.isFile()) {
                    //console.log('200 ' + request.url);
                    let size = stats.size;
                    response.writeHead(200,{"Content-Length":size});
                    fs.createReadStream(filepath).pipe(response);
                } else {
                    console.log('404 ' + request.url);
                    response.writeHead(404);
                    response.end('404 Not Found');
                }
            });
        }
    } else if (request.method == 'POST') {
        response.end();
    } else if (request.method == 'OPTIONS') {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end();
    }
});

server.listen(8080);