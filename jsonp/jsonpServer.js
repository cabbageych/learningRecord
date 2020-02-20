'use strict'

var http = require('http');
var url = require('url');

var server = http.createServer((request,response)=>{
    //response.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    var path = url.parse(request.url,true).query;
    var data = {name:"cabbage"};
    response.writeHead(200,{
        "Content-Type":"text/html",
        "Set-Cookie":['name=cabbage','age=18; HttpOnly']
    });
    response.write(path.name+"("+JSON.stringify(data)+");"+"console.log(document.cookie);");
    response.end();
});
server.listen(8080);