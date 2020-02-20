const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    let urlArg = url.parse(request.url,true).query;
    response.write(urlArg.callback+"('xixihaha'"+")");
    response.end();
    //console.log(urlArg);
});

server.listen(8080);