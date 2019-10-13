/**
 * sqrt
 */
const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 0.0000001;
let target;

input.on('line', (line) => {
    line = line.trim();
    target = parseInt(line);
    sqrt(0, target);
})

function sqrt(left, right) {
    let mid = (left + right) / 2;
    if (Math.abs(mid * mid - target) < min) {
        console.log("ans:", mid);
    } else if (mid * mid < target) {
        sqrt(mid, right);
    } else {
        sqrt(left, mid);
    }
}

input.on('end', () => {
    process.exit(0);
})
//console.log(Number.MIN_VALUE);
