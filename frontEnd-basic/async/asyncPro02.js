/*
await语句后面的代码，相当于回调函数。（即：await的下一行开始，都视作回调函数的内容）
回调函数会被压入microtask队列，当主线程调用栈被清空时，去microtask队列里取出各个回调函数，逐个执行。
*/

async function async1(){
    console.log('async1 start')
    let a = await async2()
    console.log(a)
    console.log('async1 end')
}
function async2(){
    return new Promise(resolve=>{
        console.log('enter async2')
        resolve('async2')
    })
}
console.log('script start')
setTimeout(function(){
    console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function(){
    console.log('promise2')
})
console.log('script end')

/**
 * script start
 * async1 start
 * enter async2
 * promise1
 * script end
 * promise2
 * async2
 * async1 end
 * setTimeout
 */