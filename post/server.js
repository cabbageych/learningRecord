const http = require('http');
const fs = require('fs');
const url = require('url');

var dataContainer = '';

var server = http.createServer((request, response) => {
    //response.setHeader("Access-Control-Allow-Origin","*");
    if (request.headers.host == 'localhost:8080') {
        response.setHeader("Access-Control-Allow-Origin", "null");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Set-Cookie", ['name=cabbage', 'age=18; HttpOnly']);
    }
    if (request.method == 'GET') {
        let pathname = url.parse(request.url).pathname;
        fs.readFile(pathname.substr(1), (err, data) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
            }
            response.end();
        })
    } else if (request.method == 'POST') {
        console.log(request.headers.cookie);
        request.on('data', function (message) {
            //console.log(message);
            //dataContainer.push(JSON.parse(message));
            dataContainer += message;
        });
        request.on('end', function () {
            if(isJSON(dataContainer)){
                console.log(JSON.parse(dataContainer));
            }else{
                console.log(dataContainer);
            }
            //response.write(JSON.stringify({resopnseText:"connection end..."}));
            response.write('connection end...');
            response.end();
            dataContainer = '';
        })
    } else {
        response.end();
    }
});

server.listen(8080);

function isJSON(str){
    try{
        if(JSON.parse(str)){
            return true;
        }
    }catch{
        return false;
    }
}