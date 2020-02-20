let arr = [];
arr[0] = Math.floor(Math.random() * 20);
for (let i = 1; i < 20; i++) {
    arr[i] = arr[i - 1] + Math.floor(Math.random() * 10);
}
let pos = Math.floor(Math.random() * 20);
let target = arr[pos];
console.log("pos: " + pos + ", target: " + target);
console.log(arr);

function binarySearch(arr, target, left, right) {
    let mid = (left + right) / 2;
    mid = Math.floor(mid);
    if (arr[mid] == target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}
console.log("pos:");
console.log(binarySearch(arr, target, 0, arr.length - 1));