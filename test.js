let arr = [11, 25, 2, 8, 66, 15, 123, 20];
console.log(arr);

function sort(arr, start, end) {
    let left = start;
    let right = end;
    let mid = Math.floor((start + end) / 2);
    let arr1 = [], arr2 = [];
    let count1 = 0, count2 = 0;
    for (let i = left; i <= mid; i++) {
        arr1[count1++] = arr[i];
    }
    for (let i = mid + 1; i <= right; i++) {
        arr2[count2++] = arr[i];
    }
    for (let i = left; i <= right; i++) {
        if (!arr1.length) {
            arr[i] = arr2.shift();
        } else if (!arr2.length) {
            arr[i] = arr1.shift();
        } else if (arr1[0] > arr2[0]) {
            arr[i] = arr2.shift();
        } else {
            arr[i] = arr1.shift();
        }
    }
}

function mergesort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let mid = Math.floor((start + end) / 2);
    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);
    sort(arr, start, end);
}

mergesort(arr, 0, arr.length - 1);
console.log(arr);
