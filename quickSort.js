let arr = [11, 23, 55, 2, 66, 8];
function quickSort(arr, start, end) {
    if (end >= start) {
        return;
    }
    let left = start;
    let right = end;
    let temp = arr[left];
    while (left < right) {
        while(arr[right]>temp&&left<right){
            --right;
        }
        arr[right] = arr[left];
    }
}