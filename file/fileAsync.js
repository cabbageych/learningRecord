'use strict'
var fs = require('fs');
//同步读取文件
//读取文本文件
fs.readFile('sample.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
//读取二进制文件不传文件编码ß
fs.readFile('huaji.jpg',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
    }
});
