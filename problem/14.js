/**
 * 找出数组中不重复的元素（数组中的数两两成对出现，只有两个数单独出现）
 */

//方法一，利用对象

let arr = [11, 2, 3, 4, 2, 4, 22, 22, 11, 7];

let ans = [];
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
        ans.push(parseInt(i));
    }
}
console.log(ans[0], ans[1]);
/*ans.forEach(el => {
    console.log(el);
});*/





console.log('---------------------');

//方法二
let arr1 = [], arr2 = [], arrTemp = [];
let temp = arr[0];
for (let i = 1; i < arr.length; i++) {
    temp = temp ^ arr[i];
}
let len = 0;
while (temp > 0) {
    ++len;
    temp = temp >> 1;
}
--len;
for (let i = 0; i < arr.length; i++) {
    arrTemp[i] = arr[i] >> len;
    if (arrTemp[i] & 1) {
        arr1.push(arr[i]);
    } else {
        arr2.push(arr[i]);
    }
}
let ans1 = arr1[0], ans2 = arr2[0];
for (let i = 1; i < arr1.length; i++) {
    ans1 = ans1 ^ arr1[i];
}
for (let i = 1; i < arr2.length; i++) {
    ans2 = ans2 ^ arr2[i];
}
console.log(ans1, ans2);
