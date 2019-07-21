let arr = [11, 3, 72, 55, 6, 8, 10, 21];
function insertSort(arr) {
    let temp, pos;
    for (let i = 0; i < arr.length; i++) {
        let j = i - 1;
        if (j < 0) {
            continue;
        }
        let temp = arr[i];
        while (j >= 0 && arr[j] > arr[i]) {
            --j;
        }
        let k = i;
        //console.log(k, j, arr);
        while (k > j && k >= 0) {
            arr[k] = arr[k - 1];
            --k;
        }
        //console.log(k);
        arr[k + 1] = temp;
    }
}
console.log('before: ',arr);
insertSort(arr);
console.log('after:  ',arr);