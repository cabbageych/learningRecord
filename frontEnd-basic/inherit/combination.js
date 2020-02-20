/**
 * 组合继承（结合构造函数继承和原型链继承，解决两者问题，使用较多）
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

//将构造函数与原型链结合实现继承
function child(name, age) {
    parent.call(this, name, age);
}
child.prototype = new parent();
child.prototype.constructor = child;
let test = new child('cabbage', 18);
let test02 = new child('cabbage02', 18);

test.pritnArr(); ////[ 1, 2, 3, 4, 5 ]
test02.addArr(666);
test02.pritnArr(); //[ 1, 2, 3, 4, 5, 666 ]
test.pritnArr(); //[ 1, 2, 3, 4, 5 ]

console.log(child.prototype === test.__proto__); //true
test.pMethod();  //method in parent's prototype!