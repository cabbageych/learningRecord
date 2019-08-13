const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n;
let arr;


function fn() {
    let min = Math.min.apply(this, arr);
    let pos = arr.indexOf(min);
    let ans = [];
    ans.push(100);
    for (let i = pos + 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            ans.push(ans[ans.length - 1] + 100);
        } else if (arr[i] == arr[i - 1]) {
            ans.push(ans[ans.length - 1]);
        } else {
            ans.push(ans[ans.length - 1] - 100);
        }
    }

    for (let i = pos - 1; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            ans.unshift(ans[0] + 100);
        } else if (arr[i] == arr[i - 1]) {
            ans.unshift(ans[0]);
        } else {
            ans.unshift(ans[0] - 100);
        }
    }
    console.log(ans.reduce((pre, cur) => pre + cur));
}

input.on('line', (line) => {
    if (n == undefined) {
        line = line.trim();
        n = parseInt(line);
        arr = [];
    } else {
        line = line.trim();
        arr = line.split(" ");
        arr = arr.map(val => {
            return parseInt(val);
        });
        fn();
        n = undefined;
    }
})



input.on('close', () => {
    process.exit(0);
})