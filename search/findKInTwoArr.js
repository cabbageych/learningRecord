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


//???k???k?0??
let k = Math.floor(Math.random() * (len1 + len2));

/*
let arr1 = [ 9, 16, 26 ];
let arr2 = [ 5, 15, 25, 34, 36, 44, 52, 54, 55, 61, 70, 79, 81, 83, 91, 97, 106, 107, 114 ];

let len1 = arr1.length;
let len2 = arr2.length;
let k = 0;*/

function findK(arr1, arr2, k, s1, e1, s2, e2) {
    //console.log(s1 + " " + e1 + " " + s2 + " " + e2 + " " + k);
    if(s1>e1){
        return arr2[s2+k];
    }
    if(s2>e2){
        return arr1[s1+k];
    }
    /*if (k == 0) {
        if (e1 - s1 >= 0 && e2 - s2 >= 0) {
            if (arr1[s1] <= arr2[s2]) {
                return arr1[s1];
            } else {
                return arr2[s2];
            }
        } else if (e1 - s1 < 0) {
            return arr2[s2];
        } else {
            return arr1[s1];
        }
    }*/
    if (arr1[e1] <= arr2[s2]) {
        if (k > e1 - s1) {
            return arr2[s2 + k - (e1 - s1)-1];
        } else {
            return arr1[s1 + k];
        }
    }
    if (arr1[s1] > arr2[e2]) {
        if (k > e2 - s2) {
            return arr1[s1 + k - (e2 - s2)-1];
        } else {
            return arr2[s2 + k];
        }
    }

    let l1 = s1;
    let r1 = e1;
    let l2 = s2;
    let r2 = e2;
    let mid1 = Math.floor((l1 + r1) / 2);
    let mid2 = Math.floor((l2 + r2) / 2);

    console.log(mid1 + " " + mid2);
    console.log("mid1: " + arr1[mid1] + " mid2: " + arr2[mid2]);
    if (arr1[mid1] >= arr2[mid2]) {
        if (k >= (mid1 - l1) + (mid2 - l2) + 1) {
            return findK(arr1, arr2, k - (mid2 - l2) - 1, s1, e1, mid2 + 1, e2);
        } else {
            return findK(arr1, arr2, k, s1, mid1 - 1, s2, e2);
        }
    } else {

        if (k >= (mid1 - l1) + (mid2 - l2) + 1) {
            return findK(arr1, arr2, k - (mid1 - l1) - 1, mid1 + 1, e1, s2, e2);
        } else {
            return findK(arr1, arr2, k, s1, e1, s2, mid2 - 1);
        }
    }
}


console.log(arr1);
console.log(arr2);
console.log(k);
console.log(findK(arr1, arr2, k, 0, arr1.length - 1, 0, arr2.length - 1));
