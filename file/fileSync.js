'use strict'
var fs = require('fs');
//同步读取文件
var data = fs.readFileSync('sample.txt','utf-8');
console.log(data);

//需要用try..catch..实现出错捕获
try{
    var data02 = fs.readFileSync('sample.txt','utf-8');
    console.log(data);
}catch(e){
    console.log(e);
}