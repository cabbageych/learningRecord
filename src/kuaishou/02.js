const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n;
let num;


function fn(num, time) {
    if (num == 1) {
        console.log(true);
        return;
    }
    if (time > 1000) {
        console.log(false);
        return;
    }
    let str = num.toString();
    str = str.split("");
    str = str.map(val => parseInt(val));
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += str[i] * str[i];
    }
    if (result == 1) {
        console.log(true);
        return;
    } else {
        fn(result, time + 1);
    }
}

input.on('line', (line) => {
    if (n == undefined) {
        n = parseInt(line.trim());
    } else {
        --n;
        line = line.trim();
        num = parseInt(line);
        fn(num, 0);
        if (n == 0) {
            n = undefined;
        }
    }
})


input.on('close', () => {
    process.exit(0);
});