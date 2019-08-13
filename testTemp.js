const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n;
let arr;
let result = 0;

function fn(pos) {

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
        if(ans[ans.length-1] == 0){
            return;
        }
    }
    //console.log(ans);
    for (let i = pos - 1; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            ans.unshift(ans[0] + 100);
        } else if (arr[i] == arr[i + 1]) {
            ans.unshift(ans[0]);
        } else {
            ans.unshift(ans[0] - 100);
        }
        if(ans[0] == 0){
            return;
        }
    }
    //console.log(ans);
    let t = ans.reduce((pre, cur) => pre + cur);
    if(result == 0){
        result = t;
    }else{
        result = result > t ? t : result;
    }
    
}

input.on('line', (line) => {
    if (n == undefined) {
        line = line.trim();
        n = parseInt(line);
        arr = [];
        result = 0;
    } else {
        line = line.trim();
        arr = line.split(" ");
        arr = arr.map(val => {
            return parseInt(val);
        });
        for (let i = 0; i < arr.length; i++) {
            fn(i);
        }
        console.log(result);
        n = undefined;
    }
})



input.on('close', () => {
    process.exit(0);
})