/**
 * 寄生组合式继承（避免组合继承中的两次调用超类构造函数）
 */

function parent(name, age) {
    this.name = name;
    this.age = age;
    this.arr = [1, 2, 3, 4, 5];

    this.addArr = (arg) => {
        this.arr.push(arg);
    }
    this.pritnArr = () => {
        console.log(this.arr);
    }
    this.print = () => {
        console.log('name:', this.name, ', age:', this.age);
    }
    this.hello = function (name) {
        console.log('hello', name);
    }
    this.change = (name, age) => {
        this.name = name;
        this.age = age;
    }
}

parent.prototype.pMethod = function () {
    console.log('method in parent\'s prototype!');
}


function child(name, age) {
    parent.call(this, name, age);
}
//避免二次调用超类构造函数
inherit(child, parent);

function inherit(child, parent) {
    let proto = Object.create(parent.prototype);
    proto.constructor = child;
    child.prototype = proto;
}



let test = new child('cabbage', 18);
let test02 = new child('cabbage02', 18);

test.pritnArr(); ////[ 1, 2, 3, 4, 5 ]
test02.addArr(666);
test02.pritnArr(); //[ 1, 2, 3, 4, 5, 666 ]
test.pritnArr(); //[ 1, 2, 3, 4, 5 ]

console.log(child.prototype === test.__proto__); //true
test.pMethod();  //method in parent's prototype!