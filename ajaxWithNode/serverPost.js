'use strict'
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer((req, response) => {

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    response.setHeader("Access-Control-Expose-Headers", "*");
    //面对post提交，nodejs用监听的写法处理
    //data是一个事件，表示一个小包传输完毕后做的事情
    var result = "";
    req.on("data", function (chunk) {
        console.log("小包传输完毕");
        result += chunk;
    });
    //end也是一个事件，表示所有的包传输完毕
    req.on("end", function () {
        //所有的包传输完毕
        result = querystring.parse(result);
        console.log(result.name);
    });
    response.write("hello node");
    response.end();
});
server.listen(8080);