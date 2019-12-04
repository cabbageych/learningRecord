'use strict'
var fs = require('fs');
//同步读取文件
//读取文本文件
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    console.log('读取文本文件');
    if (err) {
        console.log(err);
    } else {
        console.log(data); //如果省略参数utf-8编码方式的声明，可使用tostring的方式进行转换
    }
});
//读取二进制文件不设置文件编码方式
fs.readFile('huaji.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + 'bytes');
    }
});
