function maxSum(arr) {
    let len = arr.length;
    let temp = arr[0];
    let ans = arr[0];
    for (let i = 1; i < len; i++) {
        if (temp > 0) {
            temp += arr[i];
        } else {
            temp = arr[i];
        }
        if(temp > ans){
            ans = temp;
        }
    }
    console.log(ans);
}

let arr = [-2, 11, -4, 13, -5, -2];
maxSum(arr);