let arr = [1,2,3,4,5,6,NaN,'',,,];
/**
 * args：
 * (index value,start pos)
 */
//with indexOf
/**
 * 区别：
 * 返回值
 * NaN
 * undefined
 */
console.log(arr.includes(2),arr.indexOf(2)); //true 1
console.log(arr.includes(2,2),arr.indexOf(2,2)); //false -1
console.log(arr.includes(NaN),arr.indexOf(NaN)); //true -1
console.log(arr.includes(undefined),arr.indexOf(undefined)); //true,-1
console.log(arr.length);