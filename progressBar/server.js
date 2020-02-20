const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const util = require('util');

var server = http.createServer((request, response) => {
    request.setEncoding('utf-8');
    if (request.method == 'OPTIONS') {
        response.setHeader("Access-Control-Allow-Origin", "null");
        response.end();
    }
    //console.log(request.headers);
    if (request.headers['content-type'].indexOf('multipart/form-data') != -1) {
        parseFile(request, response);
    } else {
        console.log('其它提交方式!');
    }
});

server.listen(8080);

function parseFile(req, res) {
    req.setEncoding('binary');
    var body = '';   // 文件数据
    var fileName = '';  // 文件名
    // 边界字符串
    var boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        var file = querystring.parse(body, '\r\n', ':');
        console.log(file);
        // 只处理图片文件
        if (file['Content-Type'].indexOf("image") !== -1) {
            //获取文件名
            var fileInfo = file['Content-Disposition'].split('; ');
            for (value in fileInfo) {
                if (fileInfo[value].indexOf("filename=") != -1) {
                    fileName = fileInfo[value].substring(10, fileInfo[value].length - 1);

                    if (fileName.indexOf('\\') != -1) {
                        fileName = fileName.substring(fileName.lastIndexOf('\\') + 1);
                    }
                    console.log("文件名: " + fileName.toString('utf-8'));
                }
            }

            // 获取图片类型(如：image/gif 或 image/png))
            var entireData = body.toString();
            var contentTypeRegex = /Content-Type: image\/.*/;

            contentType = file['Content-Type'].substring(1);

            //获取文件二进制数据开始位置，即contentType的结尾
            var upperBoundary = entireData.indexOf(contentType) + contentType.length;
            var shorterData = entireData.substring(upperBoundary);

            // 替换开始位置的空格
            var binaryDataAlmost = shorterData.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

            // 去除数据末尾的额外数据，即: "--"+ boundary + "--"
            var binaryData = binaryDataAlmost.substring(0, binaryDataAlmost.indexOf('--' + boundary + '--'));

            // 保存文件
            fs.writeFile(fileName, binaryData, 'binary', function (err) {
                res.end('图片上传完成');
            });
        } else {
            res.end('只能上传图片文件');
        }
    });
}