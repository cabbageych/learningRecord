const http = require('http');
const url = require('url');
const fs = require('fs');
const bodyParser = require('body-parser');

var results = [];

var server = http.createServer(function(request,response){
    let pathname = url.parse(request.url).pathname;
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    if(request.method == 'GET'){
        console.log("get connection...");
        //response.writeHead(404,{"Content-Type":"text/html"});
        response.write("fetch connection test.");
        response.end();
    }else if(request.method == "POST"){
        console.log("post connection...");
        request.on("data",function(message){
            results.push(JSON.parse(message));
        });
        request.on('end',function(){
            console.log(results[0].name);
            response.write("connection end.");
            response.end();
        });
    }else{
        response.end();
    }
});
server.listen(8080);