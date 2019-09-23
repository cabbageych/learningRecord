/*输出数组里所有的最长单调递增子序列*/

let arr = [123, -10, 34, 5, 6, 7, 11, 23, -1, 1, 2, 4, 5, 123, 666];

function maxLen(arr) {
    let temp = [];
    let startPos = 0, startTemp = 0, maxLen = 1, maxTemp = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            ++maxTemp;
        } else {
            startTemp = i;
            maxTemp = 1;
        }
        if (maxTemp > maxLen) {
            maxLen = maxTemp;
            startPos = startTemp;
        }
    }
    let ans = arr.slice(startPos, startPos + maxLen);
    console.log(ans);
    console.log(startPos, maxLen);
}
maxLen(arr);
