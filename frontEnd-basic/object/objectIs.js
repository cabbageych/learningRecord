/**
 * 与===区别
 * 1.识别NaN
 * 2.区分+0，-0
 */

console.log(Object.is(0, -0));  //false
console.log(0 === -0);    //true

console.log(Object.is(NaN, NaN));  //true
console.log(NaN === NaN);   //false