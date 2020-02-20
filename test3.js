const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let arr;
let result = [];

input.on('line', (line) => {
    line = line.trim();
    if (arr == undefined) {
        arr = JSON.parse(line);
        result = [];
        fn(arr);
        console.log(result);
        arr = undefined;
    }
})


function fn(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            fn(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
}

input.on('close', () => {
    process.exit(0);
});
