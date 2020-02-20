const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer((request, response) => {
    let file = url.parse(request.url).pathname;
    file = file.substr(1);
    if (request.method == 'POST') {
        let temp = '';
        request.on('data',function(data){
            temp += data; 
        });
        request.on('end',()=>{
            console.log(temp);
        })
    } else {
        fs.readFile(file, (err, data) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
                response.end();
            }
        })
    }
});

server.listen(8080);