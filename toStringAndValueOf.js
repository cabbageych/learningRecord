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