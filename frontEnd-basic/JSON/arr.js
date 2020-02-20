let arr = [1, 2, 3, 4, [1, 2, 3, 4, 5, [23, 45, 6], 6]];

console.log(JSON.stringify(arr));  //[1,2,3,4,[1,2,3,4,5,[23,45,6],6]]

let str = JSON.stringify(arr);
console.log(str.replace(/[\[\]]/g,""));