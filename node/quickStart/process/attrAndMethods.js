//process用于描述当前 Node.js 进程状态 的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要和它打交道
console.log(process.argv);



process.stdin.on('data', (data) => {
    process.stdout.write('read from console: ' + data.toString());
});
console.log('process.stdin 是宏任务')

//nextick微任务
function next() {
    process.nextTick(()=>console.log('second'));
    console.log('first');
}
next();
