//Object.hasOwnProperty()
//只可以检测构造函数内的属性，无法识别prototype中的属性
function fn() {
    this.name = 'cabbage';
    this.play = function () {
        console.log('play basketball!');
    }
}
fn.prototype.sex = 'man';
fn.prototype.say = function () {
    console.log('hello world!');
}

let a = new fn();

console.log(a.hasOwnProperty('name'), a.hasOwnProperty('play'));  //true true
console.log(a.hasOwnProperty('say'), a.hasOwnProperty('sex'));   //false false

//Object.isPrototypeOf()
console.log(fn.prototype.isPrototypeOf(a)); //true


//getOwnPropertyDescriptor
let obj = {
    name: 'cabbage',
    age: 18,
    fu: function () {
        console.log('hello world!');
    }
}

let obj02 = Object.create({},{
    name:{
        value:'cabbage',
        writable:true
    },
    hobby:{
        value:'basketball',
        configurable:true
    }
})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));//{ value: 'cabbage', writable: true,enumerable: true,configurable: true }
console.log(Object.getOwnPropertyDescriptor(obj02,'hobby'));//{ value: 'basketball', writable: false,enumerable: false,configurable: true }
