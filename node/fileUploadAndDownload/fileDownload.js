const path = require('path');
const fs = require('fs');

function fd(request, response, pathname) {
    //从命令行获取root目录，默认为当前目录
    let root = path.resolve(process.argv[2] || '.');
    let filePath = path.join(root, pathname);
    //读取文件
    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
            let size = stats.size;
            response.writeHead(200,{"Content-Length":size});
            fs.createReadStream(filePath).pipe(response);
        }else{
            response.writeHead(404,{"Content-Type":"text/html"});
            response.end();
        }
    })
}

module.exports = {
    fd
}