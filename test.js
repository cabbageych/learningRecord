function qs(arr, l, r) {
    if (l >= r) {
        return;
    }
    let start = l;
    let end = r;
    let temp = arr[l];
    while (start < end) {
        while (arr[end] > temp && end > start) {
            --end;
        }
        arr[start] = arr[end];
        while (arr[start] < temp && start < end) {
            ++start;
        }
        arr[end] = arr[start];
    }
    arr[start] = temp;
    qs(arr, l, start - 1);
    qs(arr, start + 1, r);
}
let arr = [11,23,5,66,33,2];
qs(arr,0,arr.length-1);
console.log(arr);