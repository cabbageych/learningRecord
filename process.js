'use strict'
//在下一轮事件响应中执行代码，process.nextTick
process.nextTick(function(){
    console.log('nextTick callback!');
})
console.log("nextTick was set!");
setTimeout(()=>{
    console.log('timeout 1000ms!');
},1000);
//程序即将退出时的回调函数
process.on('exit',function(code){
    console.log('about to exit with code: '+code);
});

//判断js执行环境（浏览器中还是在服务器中）
if(typeof(window) === 'undefined'){
    console.log('node.js');
}else{
    console.log('browser!');
}