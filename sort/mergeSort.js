let arr = [11, 23, 55, -6, 8, 102, 55, 66, 99, -10];

function merge(arr, start, end) {
    let mid = (start + end) / 2;
    mid = Math.floor(mid);
    let temp1 = [], temp2 = [];
    for (let i = 0, j = start; i <= mid; i++ , j++) {
        temp1[i] = arr[j];
    }
    for (let i = 0, j = mid + 1; i < end - mid; i++ , j++) {
        temp2[i] = arr[j];
    }
    //console.log(start + " " + end);
    //console.log(temp1);
    //console.log(temp2);
    let count1 = 0, count2 = 0;
    for (let i = start; i <= end; i++) {
        if (count1 >= temp1.length) {
            arr[i] = temp2[count2];
            ++count2;
        } else if (count2 >= temp2.length) {
            arr[i] = temp1[count1];
            ++count1;
        } else {
            if (temp1[count1] >= temp2[count2]) {
                arr[i] = temp2[count2];
                ++count2;
            } else {
                arr[i] = temp1[count1];
                ++count1;
            }
        }
    }
}

function mergeSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    let mid = (start + end) / 2;
    mid = Math.floor(mid);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, end);
}

console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);