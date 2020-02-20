var http = require('http');
var fs = require('fs');
var url = require('url');

var formidable = require("formidable"); //引入npm包处理表单数据
var form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = "form";     //设置文件上传目录


var server = http.createServer(function (request, response) {
    if (request.method == 'GET') {
        var data = url.parse(request.url, true).query;
        console.log(data.name, data.age);
    }
    if (request.method == 'POST') {
        form.parse(request, (error, fields, files) => {
            for (let key in files) {
                let file = files[key];
                //过滤空文件
                if (file.size == 0 && file.name == "") continue;

                let fileType = file.type.split('/')[1],
                    oldPath = file.path,
                    newPath = 'img/' + Date.now() + Math.random() + '.' + fileType;
                    //移动文件到新的文件夹
                fs.rename(oldPath, newPath, (error) => {
                    if (error) throw error;
                    console.info('done');
                })
            }
        });
        console.log("test");
    }
    response.end();
});
server.listen(8080);