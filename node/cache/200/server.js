const http = require('http');
const fs = require('fs');
const url = require('url');
const mime = require('mime');

//强制缓存
let server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log(pathname);
    pathname = pathname.substr(1);
    fs.stat(pathname, (err, stat) => {
        if (err) {
            console.log(err);
            return response.end('Not Found');
        } else {
            response.setHeader("Content-Type", mime.getType(pathname));
            //在http1.1中，使用max-age替代expires
            //设置文件过期时间
            response.setHeader('Cache-Control', 'max-age=30');
            fs.createReadStream(pathname).pipe(response);
            //response.end();
        }
    });
    //response.end();
});
server.listen(8080);