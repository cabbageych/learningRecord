setTimeout(()=>{
    console.log('time-out');
});



(async()=>{
    console.log('async');
    let str = await promise;
    console.log(str);
})();

var promise = new Promise((resolve)=>{
    console.log('promise');
    resolve('promise-resolve');
});

promise.then(()=>{
    console.log('then');
});

console.log('end');

/**
 * promise声明在async之后
 * async
 * promise
 * end
 * undefined
 * then
 * time-out
 */

/**promise声明在async之前
 * promise
 * async
 * end
 * then
 * promise-resolve
 * time-out
 */



