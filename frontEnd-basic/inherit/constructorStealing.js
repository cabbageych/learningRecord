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

//借用构造函数实现继承
function child(name, age) {
    parent.call(this, name, age);
}
let test = new child('cabbage', 18);
let test02 = new child('cabbage02', 18);

test.pritnArr(); ////[ 1, 2, 3, 4, 5 ]
test02.addArr(666);
test02.pritnArr(); //[ 1, 2, 3, 4, 5, 666 ]
test.pritnArr(); //[ 1, 2, 3, 4, 5 ]

console.log(child.prototype === test.__proto__); //true

/**
 * 存在的问题：
 * 父类原型中定义的属性方法对子类不可见(实例原型指向child原型而不是parent原型)，如下。
 */
//test.pMethod(); //test.pMethod is not a function