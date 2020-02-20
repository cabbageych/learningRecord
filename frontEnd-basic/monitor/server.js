const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((request,response)=>{
    let arg = url.parse(request.url,true).query;
    response.setHeader('Access-Control-Origin-Allow',"*");
    if(request.method == 'GET'){
        console.log('get connection...');
        console.log(arg.ans);
    }
});
server.listen(8080);