let arr = [1, 2, 3, 'cabbage', 4, 5, 6, 7, 9, 0, NaN];

//Array.from
//Array.of
/**
 * new Array(arg)会因为参数的个数导致结果不同，具体表现为：只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。
 * 而Array.of始终返回一个数组，参数为数组元素
 */

console.log(new Array()); //[]
console.log(new Array(1)); //[ <1 empty item> ]
console.log(new Array(2)); //[ <2 empty item> ]
console.log(1, 2, 3); //1 2 3

console.log(Array.of()); //[]
console.log(Array.of(1)); //[1]
console.log(Array.of(2)); //[2]
console.log(Array.of(1, 2)); //[1,2]


//find&findIndex
//可借助Object.is()识别NaN
/**
 * 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，
 * 直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
 * 
 * find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
 */
console.log(arr.find((arg) => arg == 'cabbage')); //cabbage
console.log(arr.find((arg, index) => index > arg));  //0
console.log(arr.find(arg => arg > 100));  //undefined

/**
 * 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，
 * 如果所有成员都不符合条件，则返回-1。
 */
console.log(arr.findIndex((arg) => arg == 'cabbage')); //3
console.log(arr.findIndex((val, index) => Object.is(NaN, val))); //10
console.log(arr.findIndex((val, index) => val < index - 100));  //-1


//fill数组填充
/**
 * fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
 * fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
 */
let a = [1,2,3,];
console.log(a.fill(6)); //[6,6,6]
console.log(new Array(10).fill(2)); //[2,2,...2];
console.log(new Array(5).fill(6,1,4)); //[ <1 empty item>, 6, 6, 6, <1 empty item> ]