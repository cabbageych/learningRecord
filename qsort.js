'use strict'
var arr = [11, 23, 44, 5, 666, -1];
function sort(a, l, r) {
    if (l >= r) {
        return;
    }
    let start = l;
    let end = r;
    let temp = a[start];
    while (start < end) {
        while (a[end] > temp && start < end) {
            end--;
        }
        a[start] = a[end];
        while (a[start] < temp && start < end) {
            ++start;
        }
        a[end] = a[start];
    }
    a[start] = temp;
    sort(a, l, start - 1);
    sort(a, start + 1, r);
}
sort(arr, 0, arr.length - 1);
console.log(arr);