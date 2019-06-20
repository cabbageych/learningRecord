let arr1 = [];
let arr2 = [];
let len1 = Math.floor(Math.random() * 10) + 1;
let len2 = Math.floor(Math.random() * 20) + 1;
arr1[0] = Math.floor(Math.random() * 10);
arr2[0] = Math.floor(Math.random() * 10);
for (let i = 1; i < len1; i++) {
    arr1[i] = arr1[i - 1] + Math.floor(Math.random() * 10) + 1;
}
for (let i = 1; i < len2; i++) {
    arr2[i] = arr2[i - 1] + Math.floor(Math.random() * 10) + 1;
}
//寻找第k大数
let k = Math.floor(Math.random() * (len1 + len2));

function findK(arr1, arr2, k, s1, e1, s2, e2) {
    let l1 = s1;
    let r1 = e1;
    let l2 = s2;
    let r2 = e2;
    let mid1 = Math.floor((l1 + r1) / 2);
    let mid2 = Math.floor((l2 + r2) / 2);
    if (arr1[mid1] > arr2[mid2]) {
        if (k > mid1 + mid2) {
            return findK(arr1,arr2,k,)
        }
    }
}


console.log(arr1);
console.log(arr2);
console.log(k);
findK(arr1, arr2, 0, arr1.length - 1, 0, arr2.length - 1);