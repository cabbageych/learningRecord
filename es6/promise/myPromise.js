function myPromise(fn) {
    let _this = this;
    this.state = 'pending';
    this.resolveArg = '';
    this.resolveCallback = [];
    this.then = function (cb) {
        console.log('enter then!');
        _this.resolveCallback.push(cb);
    }
    this.resolve = function (arg) {
        _this.resolveArg = arg;
        setTimeout(() => {
            _this.resolveCallback[0](_this.resolveArg);
        });
    }
    fn(_this.resolve);
}


new myPromise((resolve) => {
    console.log('enter myPromise!');
    resolve('enter resolve!');
}).then(val => {
    console.log(val);
});
