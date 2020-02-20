/**
 * 找出数组中不重复的元素（数组中的数两两成对出现，只有一个数单独出现）
 */

//方法一，利用异或
let arr = [11, 2, 3, 4, 2, 4, 22, 22, 11];

let ans = arr[0];
for (let i = 1; i < arr.length; i++) {
    ans = ans ^ arr[i];
}
console.log(ans);


//方法二，利用对象
let obj = [];
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
    } else {
        obj[arr[i]] = 0;
    }
}
for (let i in obj) {
    if (obj[i] == 1) {
        ans2 = parseInt(i);
    }
}
console.log(ans2);