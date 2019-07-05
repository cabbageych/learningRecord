var http = require('http');
var fs = require('fs');
var url = require('url');

var formidable = require("formidable"); //引入npm包处理表单数据
var form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = "temp";     //设置文件上传目录


var server = http.createServer(function (request, response) {
    if (request.method == 'GET') {
        let pathname = url.parse(request.url).pathname;
        pathname = pathname.substr(1);
        fs.readFile(pathname, (err, data) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
            }
            response.end();
        });
    }
    if (request.method == 'POST') {
        console.log('post');
        form.parse(request, (error, fields, files) => {
            for (let key in files) {
                let file = files[key];
                //console.log(file);
                //过滤空文件
                if (file.size == 0 && file.name == "") continue;

                let fileType = file.type.split('/')[1],
                    oldPath = file.path,
                    newPath = 'file/' + Date.now() + Math.random() + '.' + fileType;
                //移动文件到新的文件夹
                try {
                    fs.rename(oldPath, newPath, (error) => {
                        //if (error) throw error;
                        console.info('done');
                    })
                } catch (e) {
                    console.log(e);
                }
            }
        });
        response.end();
    }
    if (request.method == 'OPTIONS') {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end();
    }

});
server.listen(8080);