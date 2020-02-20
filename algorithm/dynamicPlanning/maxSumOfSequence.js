let arr = [-2, 5, -4, 13, -5, -2];
console.log(arr);

function maxSum(arr) {
    let maxSum = arr[0];
    let tempMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (tempMax > 0) {
            tempMax += arr[i];
        } else {
            tempMax = arr[i];
        }
        if (maxSum < tempMax) {
            maxSum = tempMax;
        }
    }
    return maxSum;
}

console.log(maxSum(arr));