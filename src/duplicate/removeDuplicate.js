let arr1 = [11, 23, 2, '2', 34, 23, NaN, NaN];
let arr2 = [11, 23, 2, '2', 34, 23, NaN, NaN];
function removeDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) { //如果同时存在两个NaN则无法检测重复
            //console.log(arr[i]);
            arr.splice(i, 1);
        }
    }
}

console.log(arr1.indexOf(NaN),arr1.lastIndexOf(NaN)); //-1 -1
console.log("arr1:");
console.log(arr1);
removeDuplicate(arr1);
console.log(arr1);

console.log("arr2:");
console.log(arr2);
function removeDuplicate02(arr2) {
    return Array.from(new Set(arr2));
}
console.log(removeDuplicate02(arr2));
