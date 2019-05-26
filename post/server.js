const http = require('http');
const fs = require('fs');
const url = require('url');

var dataContainer = [];

var server = http.createServer((request,response)=>{
    //response.setHeader("Access-Control-Allow-Origin","*");
    if(request.method == 'GET'){
        let pathname = url.parse(request.url).pathname;
        fs.readFile(pathname.substr(1),(err,data)=>{
            if(err){
                response.writeHead(404,{"Content-Type":"text/html"});
            }else{
                response.writeHead(200,{"Content-Type":"text/html"});
                response.write(data.toString());
            }
            response.end();
        })
    }else if(request.method == 'POST'){
        request.on('data',function(message){
            dataContainer.push(JSON.parse(message));
        });
        request.on('end',function(){
            console.log(dataContainer);
            response.write('connection end...');
            response.end();
        })
    }else{
        response.end();
    }
});

server.listen(8080);