let arr = [11, 23, 45, 2, 6, 10, 9];

function merge(arr, start, end) {
    let arr1 = [];
    let arr2 = [];
    let count1 = 0, count2 = 0;
    let mid = Math.floor((start + end) / 2);
    for (let i = start; i <= mid; i++) {
        arr1.push(arr[i]);
    }
    for (let i = mid + 1; i <= end; i++) {
        arr2.push(arr[i]);
    }
    for (let i = start; i <= end; i++) {
        if (count1 > arr1.length - 1) {
            arr[i] = arr2[count2++];
        } else if (count2 > arr2.length - 1) {
            arr[i] = arr1[count1++];
        } else {
            arr[i] = arr1[count1] > arr2[count2] ? arr1[count1++] : arr2[count2++];
        }
    }
}


function mergeSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, end);
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);