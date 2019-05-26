const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((request, response) => {
    //根据referee判断是否同源并设置跨域
    //console.log(request.headers['referer']);
    //console.log(request.headers);

    if(request.headers.host == 'localhost:8080'){
        //直接浏览器打开html文件时设置相应头信息如下
        response.setHeader('Access-Control-Allow-Origin',"null");
        response.setHeader("Access-Control-Allow-Credentials","true");
        response.setHeader('Set-Cookie',['test=666']);
    }

    let pathname = url.parse(request.url).pathname;
    if ((pathname.substr(1)).indexOf('.html') != -1) {
        fs.readFile(pathname.substr(1), (err, data) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html",
                    'Set-Cookie': ['name=18', 'age=cabbage']   //设置cookie
                });
                response.write(data.toString());
            }
            response.end();
        });
    } else {
        //获取cookie
        console.log(request.headers.cookie);
        let data = url.parse(request.url, true).query;
        console.log(data);
        let responseData = { responseData: "has received data!", data };
        response.write(JSON.stringify(responseData));
        response.end();
    }

});
server.listen(8080);