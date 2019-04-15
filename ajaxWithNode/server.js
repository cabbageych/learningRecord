'use strict'
var http = require('http');

var server = http.createServer(function(request,response){
    //response.header('Access-Control-Allow-Origin', '*');
    response.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    response.write('output testing');
    response.end();
});
server.listen(8080);