function b(name, age) {
    this.name = name;
    this.age = age;
}
b.prototype.say = function(){
    console.log('Hello world!');
}

function newTest(b, arg1, arg2) {
    let temp = {};
    temp.__proto__ = b.prototype;
    let obj = b.call(temp, arg1, arg2);
    return temp;
    //return obj == undefined ? temp : obj;
}

let a = newTest(b, 'cabbage', 21);
console.log(a);
a.say();

