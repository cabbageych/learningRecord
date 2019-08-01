let a = Symbol('test');
let b = Symbol('test');

//let a = 666;  //error


console.log(a, b, a == b);   //Symbol(test) Symbol(test) false
Symbol.for(val=>console.log('test'));