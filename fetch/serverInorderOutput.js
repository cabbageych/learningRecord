const http = require('http');
const url = require('url');
const fs = require('fs');


var count = 0;
var server = http.createServer(function(request,response){
    response.setHeader("Access-Control-Allow-Origin","*");
    if(request.method == "GET"){
        ++count;
        //resopnse.write()只接受string或是buffer类型参数
        response.write(count.toString());
        response.end();
    }
});
server.listen(8080);