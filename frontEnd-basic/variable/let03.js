let arr = [];
for (var i = 0; i < 3; i++) {
    arr.push(() => i);
}
let newArr = arr.map(el => el());
console.log(newArr); // 3,3,3

let arr2 = [];
for (let i = 0; i < 3; i++) {
    arr2.push(() => i);
}
let newArr2 = arr2.map(el => el());
console.log(newArr2);  //0,1,2