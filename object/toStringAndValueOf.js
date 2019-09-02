let arr = [1, 2, 3, 4, 5, 6];
let a = {
    name: "cabbage",
    age: 22,
    say: function () {
        console.log("hello world!");
    }
}
let temp = a.valueOf();
console.log(a.valueOf()); //{ name: 'cabbage', age: 22, say: [Function: say] }
console.log(a.toString()); //[object Object]
console.log(arr.valueOf()); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr.toString()); //1,2,3,4,5,6

//数组的tostring可用于数组拍平
let test = [1, 2, 3, 4, [1, 2, 3, 4, 5, 6, [83, 34, 6], 98], 112, [23, 45]];
test = test.toString();
test = test.split(",");
console.log(test.map(val => parseInt(val)));

console.log(Object.prototype.toString.call(null),Object.prototype.toString.call(undefined)); //[object Null] [object Undefined]