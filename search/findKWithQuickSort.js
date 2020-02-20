let arr = [11, 23, 44, 5, 66, 8, -9];
let pos = Math.floor(Math.random() * arr.length);

function findK(arr, k, start, end) {
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
    if (left == k) {
        return temp;
    }
    if (left < k) {
        return findK(arr, k, left + 1, end);
    } else {
        return findK(arr, k, start, left - 1);
    }
}
console.log(arr);
console.log("pos: " + pos);
console.log(findK(arr, pos, 0, arr.length - 1));