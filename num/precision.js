let a = 99;
//console.log(a.toPrecision(0)); //RangeError: toPrecision() argument must be between 1 and 100
console.log(a.toPrecision(1)); //1e+2    结果为100，丢失精度1
console.log(a.toPrecision(2));  //99
console.log(a.toPrecision(3));  //99.0