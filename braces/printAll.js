const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num;
let temp1 = [];
let temp2 = [];
input.on('line', (line) => {
    num = parseInt(line);
    printAll(num);
});

function pushHalf(half, count) {
    if (count < 0) {
        return;
    }
    if (half == 0) {
        for (let i = 0; i < temp1.length; i++) {
            if (temp1[i] == '(') {
                temp2.push(')');
            } else {
                temp2.push('(')
            }
        }
        console.log(temp1.join('') + temp2.reverse().join(''));
        temp2 = [];
        return;
    }
    temp1.push('(');
    pushHalf(half - 1, count + 1);
    temp1.pop();
    temp1.push(')');
    pushHalf(half - 1, count - 1);
    temp1.pop();
}

function printAll(num) {
    if (num % 2 !== 0) {
        console.log('error!');
    } else {
        temp1 = [];
        temp2 = [];
        let half = num / 2;
        let count = 0;
        pushHalf(half, count);
    }
}




input.on('close', () => {
    process.exit(0);
})