let arr = [11, 23, 55, 2, 66, 8];
function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let left = start;
    let right = end;
    let base = arr[start];
    while (left < right) {
        while (arr[right] > base && left < right) {
            --right;
        }
        arr[left] = arr[right];
        while (arr[left] < base && left < right) {
            ++left;
        }
        arr[right] = arr[left];
    }
    arr[left] = base;
    quickSort(arr, start, left - 1);
    quickSort(arr, left + 1, end);
}
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);