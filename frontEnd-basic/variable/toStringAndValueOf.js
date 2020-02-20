/**
 * 将一个复合对象与简单数据进行比较时，总会先调用对象的valueOf返回自身， 
 * valueOf方法返回不是一个标量的话还会接着调用toString方法
 */
let test = {
    name: 'cabbage',
    age: 18
}

let obj = {
    toString: function () {
        console.log('valueOf 没有返回原始数据类型，调用我。');
    },
    valueOf: function () {
        console.log('先调用valueOf方法。');
        return {};
    }
}
console.log(test.valueOf(), obj.valueOf());
console.log(1 == obj);


console.log('------undefined--false--null-----------');
console.log(null == undefined, false == undefined, false == null);  //true false false
//console.log(undefined.valueOf())
