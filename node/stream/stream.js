'use strict'
var fs = require('fs');

//打开一个流
var rs = fs.createReadStream('sample.txt','utf-8');

//data表示流已经可以读取了
//要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
rs.on('data',function(chunk){
    console.log('DATA:');
    console.log(chunk);
});

//end表示流已经读取到末尾了
rs.on('end',function(){
    console.log('END');
})

//出错
rs.on('error',function(err){
    console.log("ERROR: "+err);
})