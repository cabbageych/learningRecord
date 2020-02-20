'use strict'
var fs = require('fs');

var rs = fs.createReadStream('from.txt');
var ws = fs.createWriteStream('to.txt');

rs.pipe(ws);

//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数
rs.pipe(ws, { end: false });