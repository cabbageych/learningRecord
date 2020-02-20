const http = require('http');
const fs = require('fs');
const url = require('url');
const resHORI = require('./htmlAndImage');
const fileDownload = require('./fileDownload');
const fileUpload = require('./fileUpload');

const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    if (request.method == "OPTIONS") {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end();
    }
    if (request.method == 'GET') {
        let reg = /[jpg|jpeg|gif|png|html|txt]/;
        if (reg.test(pathname)) {
            resHORI.resHtmlOrImage(request, response, pathname.substr(1));
        } else {
            fileDownload.fd(request, response, pathname);
        }
    }
    if (request.method == 'POST') {
        fileUpload.fu(pathname, request, response);
    }
});


server.listen(8080);