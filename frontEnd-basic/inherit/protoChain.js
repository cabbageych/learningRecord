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
    //...
}
//实现继承
child.prototype = new parent('cabbage', 18);
child.prototype.constructor = child;

let test = new child();
test.pMethod();
test.print();

/***
 * 使用字面量添加新方法会导致原来的继承无效，例“
 * child.prototype = new parent('cabbage',18);
 * child.prototype = {
 *    eat:function(food){
 *     //...}
 * }
 * 该操作使得child的prototype指向字面量
 */

/**
 * 存在的问题：
 * 1、
 * 在创建子类的时候，无法向超类（父类）的构造函数中提供参数，以本页面中的代码为例
 *
 * 2、
 * 子类创建的实例都指向同一个__proto__（child.prototype = new parent(name,age)),一处修改共享变量的值，引起多处的值修改，如下。
 */
console.log('---------------');
let test02 = new child();
test.pritnArr(); ////[ 1, 2, 3, 4, 5 ]
test02.addArr(666);
test02.pritnArr(); //[ 1, 2, 3, 4, 5, 666 ]
test.pritnArr(); //[ 1, 2, 3, 4, 5, 666 ]
