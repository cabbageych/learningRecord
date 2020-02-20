Function.prototype.myBind = function (target) {
    let _this = this;
    let arg = Array.from(arguments);
    arg.shift();
    console.log(arg);
    return function(){
        _this.apply(target,arg);
    }
}

let a = {
    name: 'test'
}

var name = 'cabbage';
function fn(a,b,c) {
    console.log(this.name,a,b,c);
}

fn();
let temp = fn.myBind(a,1,2,3);
temp();