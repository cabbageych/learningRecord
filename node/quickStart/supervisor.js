let http = require('http');
let url = require('url');
let fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8;" });
    response.write('<h1>内容更新自动重启程序！</h1>');
    response.end();
}).listen(8080);

console.log('Http server is listening at port 8080!');