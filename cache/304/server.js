const http = require('http');
const fs = require('fs');
const url = require('url');
const mime = require('mime');

//协商（对比）缓存
let server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log(pathname);
    pathname = pathname.substr(1);
    //查看文件状态信息，决定返回304还是200
    fs.stat(pathname, (err, stat) => {
        if (err) {
            console.log(err);
            return response.end('Not Found');
        } else {
            //再次请求时问服务器自从上次修改之后有没有改过
            let ifModifiedSince = request.headers['if-modified-since'];
            console.log(request.headers);
            let lastModified = stat.ctime.toGMTString();
            console.log(lastModified);
            if(ifModifiedSince == lastModified){
                response.writeHead('304');
                response.end();
            }else{
                //设置传输文件类型
                response.setHeader('Content-Type',mime.getType(pathname));
                response.setHeader('Last-Modified',stat.ctime.toGMTString());
                fs.createReadStream(pathname).pipe(response);
            }     
        }
    });
});
server.listen(8080);