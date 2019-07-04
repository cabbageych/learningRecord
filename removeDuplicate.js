let arr = [11, 23, 2, 33, 34, 23, 66];
let arr1 = [11, 23, 2, 33, 34, 23, 66];
let arr2 = [11, 23, 2, 33, 34, 23, 66];
function removeDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
            console.log(arr[i]);
            arr.splice(i, 1);
        }
    }
}

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
