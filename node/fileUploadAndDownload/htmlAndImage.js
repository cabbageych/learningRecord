const fs = require('fs');
const path = require('path');
const fileDownload = require('./fileDownload');

function resHtmlOrImage(request, response, pathname) {
    fs.readFile(pathname, (err, data) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end();
        } else {
            if (pathname.indexOf('html') != -1) {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
                response.end();
            } else {
                fileDownload.fd(request, response, '/' + pathname);
            }
        }
    });
}

module.exports = {
    resHtmlOrImage
}