const http = require('http');
const url = require('url');
const fs = require('fs');

var server = http.createServer((request,response)=>{
    let pathname = url.parse(request.url).pathname;
    fs.readFile(pathname.substr(1),(err,data)=>{
        if(err){
            console.log(err);
            response.writeHead(404,{"Content-Type":"text/html"});
        }else{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data.toString());
        }
        response.end();
    });
})


server.listen(8081);