const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((request,response)=>{
    var pathname = url.parse(request.url).pathname;
    response.setHeader("Access-Control-Allow-Origin","*");
    if(request.method == 'GET'){
        fs.readFile(pathname.substr(1),(err,data)=>{
            if(err){
                response.writeHead(404,{"Content-Type":"text/html"});
            }else{
                response.writeHead(200,{"Content-Type":"text/html"});
                response.write(data.toString());
            }
            response.end();
        })
    }
});

server.listen(8080);