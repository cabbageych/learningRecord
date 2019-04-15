'use strict'
 var http = require('http');


 // 创建httpserver并传入回调函数
 var server = http.createServer(function(request,response){
    //获取http请求的url和methods
    console.log(request.method+": "+request.url);
    //将http响应200写入response，同时设置content-type：text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    //将http响应的html内容写入response
    response.end('<h1>hello node</h1>');
 });

 //让服务器监听8080端口
 server.listen(8080);

 console.log('server is running at http://127.0.0.1:8080/');