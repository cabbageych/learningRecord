let arr = [11, 23, 55, 2, 66, 8];
function quickSort(arr, start, end) {
    if (end <= start) {
        return;
    }
    let left = start;
    let right = end;
    let temp = arr[left];
    while (left < right) {
        while (arr[right] > temp && left < right) {
            --right;
        }
        arr[left] = arr[right];
        while (arr[left] < temp && left < right) {
            ++left;
        }
        arr[right] = arr[left];
    }
    arr[right] = temp;
    quickSort(arr, start, right - 1);
    quickSort(arr, right + 1, end);
}
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);