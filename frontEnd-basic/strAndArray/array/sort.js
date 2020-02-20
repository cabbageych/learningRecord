let arr = [11, 21, 3, 11, 45, 6, 8, 3, 20];
arr.forEach(val => {
    val = val+1;
    
})
console.log(arr);
function compare(a, b) {
    if (a > b) {
        return false;
    } else if (a < b) {
        return true;
    }
}

console.log(arr.sort(compare));