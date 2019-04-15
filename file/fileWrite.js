'use strict'
var fs = require('fs');

var data = 'hello node.js';
//异步实现
//如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。
fs.writeFile('output.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('everything is ok!');
    }
});

var data02 = "hello node.js 02";
//同步实现
fs.writeFileSync('output.txt',data02);
