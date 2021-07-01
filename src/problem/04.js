//实现一个简单的链式调用：when('#id').then(console.log, console.error)
function when(arg) {
    this.choose = 0;
    this.then = function (fn1, fn2) {
        if (this.choose == 1) {
            fn1();
        } else {
            fn2();
        }
    };

    if (arg) {
        this.choose = 1;
    } else {
        this.choose = 2;
    }
    return this;
}




when(false).then(() => { console.log(1) }, () => { console.log(2) });
