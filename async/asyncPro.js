setTimeout(()=>{
    console.log('time-out');
});

const promise = new Promise((resolve)=>{
    console.log('promise');
    resolve('promise-resolve');
});

(async()=>{
    console.log('async');
    let str = await promise;
    console.log(str);
})();

promise.then(()=>{
    console.log('then');
});

console.log('end');


