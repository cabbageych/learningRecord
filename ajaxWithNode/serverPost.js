'use strict'

var http = require('http');
var querystring = require('querystring');


var body = '';
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end',function(){
        body = querystring.parse(body);
        console.log(body);
    });
    //console.log(body.name);
});
server.listen(8080);