function myPromise(fn) {
    let _this = this;
    this.state = 'pending';
    this.resolveArg = '';
    this.resolveCallback = [];
    this.then = function (cb) {
        console.log('enter then!');
        _this.resolveCallback.push(cb);
        return _this;
    }
    this.resolve = function (arg) {
        setTimeout(() => {
            _this.resolveCallback.forEach(el => {
                el(arg);
            });
        })
    }
    fn(_this.resolve);
}


new myPromise((resolve) => {
    console.log('enter myPromise!');
    resolve('enter resolve!');
}).then(val => {
    console.log(val);
})/*.then(val => {
    console.log('then02');
});*/


/*
console.log('-------------')

let a = new Promise((resolve,reject)=>{
    console.log('promise01');
    resolve("enter 02")
});
a.then(val=>{
    console.log(val);
    return new Promise(resolve=>{
        console.log("promise02")
        resolve('enter 02')
    })
}).then(val=>{
    console.log(val);
})*/
/**
promise01
enter 02
promise02
enter 02
 */