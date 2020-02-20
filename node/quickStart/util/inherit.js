//util用于弥补核心javascript的功能过于精简不足
const util = require('util');

//基于原型的继承
//util.inheirts仅仅只继承原型中定义的函数，构造函数内的属性和方法均不会被继承
function parent() {
    this.name = 'cabbage parent';
    this.age = 18;
    let _this = this;

    this.ageis = (arg)=>{
        console.log(_this.name + "'s age is " + _this.age + '.');
    }
}

parent.prototype.hello = function (arg) {
    console.log('hello', arg + "!");
}

function child() {
    this.name = 'cabbage child';
    this.age = 18;
}
util.inherits(child, parent);
let p = new parent();
let c = new child();

p.ageis();
//c.ageis();//error
p.hello('parent');
c.hello('child');
