const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    pathname = pathname.substr(1);
    let data = '';
    if(request.method == 'GET'){
        fs.readFile(pathname,(err,data)=>{
            if(err){
                response.writeHead(404,{"Content-Type":"text/html"});
                response.end();
            }else{
                response.writeHead(200,{"Content-Type":"text/html"});
                response.write(data.toString());
            }
        })
    }
    if(request.method == 'POST'){
        request.on('data',(val)=>{
            data +=val;
        });
        request.on('end',()=>{
            console.log(data);
            console.log(JSON.parse(data));
            //response.writeHead(404,{"Content-Type":"text/html"});
            response.write('connection ending...');
            response.end();
        })
    }
});

server.listen(8080);