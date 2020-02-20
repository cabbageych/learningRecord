let a = {};
console.log(a instanceof Object,{1:3} instanceof Object);  //true

console.log([] instanceof Object,[] instanceof Array);  //true true


let fn = function(){};
console.log(function(){} instanceof Object,fn instanceof Object);   //true true

console.log(1 instanceof Object,'cabbage' instanceof Object);  //false false