Object.prototype.hello = function(){
    console.log('hello object!');
}
let arr = [];
[1,2].hello(); //hello object!

Array.prototype.hello = function () {
    console.log('hello array!');
}
arr.hello();  //hello array!

Function.prototype.hello = function () {
    console.log('hello function!');
}
let a = function () { };
a.hello();  //hello function!


Number.prototype.hello = function(){
    console.log('hello number!');
}
let num = 1;
num.hello();  //hello number!