const http = require('http');
const url = require('url');
const fs = require('fs');
const bodyParser = require('body-parser');


var server = http.createServer(function(request,response){
    console.log(bodyParser.text());
    let pathname = url.parse(request.url).pathname;
    response.setHeader("Access-Control-Allow-Origin","*");
    if(request.method == 'GET'){
        console.log("get connection...");
        response.write("fetch connection test.");
        response.end();
    }
});
server.listen(8080);