'use strict'

var http = require('http');
var url = require('url');

var server = http.createServer((request,response)=>{
    response.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    var path = url.parse(request.url,true).query;
    var data = {name:"cabbage"};
    response.end(path.name+"("+JSON.stringify(data)+")");
});
server.listen(8080);