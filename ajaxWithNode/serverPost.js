'use strict'
var http = require('http');
var url = require('url');
var querystring = require('querystring');


var arr = [];
var server = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    //response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    //response.setHeader("Access-Control-Expose-Headers", "*");
    //面对post提交，nodejs用监听的写法处理
    //data是一个事件，表示一个小包传输完毕后做的事情
    
    //console.log(request.method);
    if (request.method == "POST") {
        request.on('data', function (message) {
            //console.log(message);
            arr.push(JSON.parse(message));
            //arr.push(eval('(' + message + ')'));
        });
        request.on('end', function () {
            console.log(arr[0].name);
            response.write("connection end.");
            response.end();
        });
    }
    if (request.method == 'OPTIONS') {
        response.end();
    }

});


server.listen(8080);