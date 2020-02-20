/**
 * 原型式继承(适用于对象继承)
 */
function inherit(parent) {
    function fn() { }
    fn.prototype = parent;
    return new fn();
}

let parent = {
    name: 'cabbage',
    age: 18,
    arr: [1, 2, 3, 4, 5, 6]
}

let child = inherit(parent);
console.log('parent:', parent.name, parent.age, parent.arr);
console.log('child:', child.name, child.age, child.arr);


child.arr.push('child push!'); //包含引用类型值的属性始终都会共享相应的值
child.name = 'cabbage child'; //简单类型数据则不会
console.log(child);
console.log('parent:', parent.name, parent.age, parent.arr);
console.log('child:', child.name, child.age, child.arr);





/**
 * 使用ECMAscript自带create函数实现，不带第二个参数实现的结果和inherit函数一样
 */
console.log('------Object.create----------');
let child02 = Object.create(parent);
console.log(child02);    //{}
console.log('child02:', child02.name, child02.age, child02.arr);


console.log('-----create使用第二个参数覆盖父类属性------');
let child03 = Object.create(parent, {
    name: {
        value: 'cabbage child 03',
    },
    arr: {
        value: [1, 2, 3]
    }
});
console.log(child03);
console.log('child03:', child03.name, child03.age, child03.arr);
console.log('parent:', parent.name, parent.age, parent.arr);
