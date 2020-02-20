'use strict'

var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
    response.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    var params = url.parse(request.url, true).query;
    console.log(params.data);
});

server.listen(8080);