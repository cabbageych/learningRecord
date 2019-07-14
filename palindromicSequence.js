const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let str;

function palindromic() {
    let arr = str.split("");
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let len = 0;
        while (true) {
            if (i == len) {
                return;
            }
        }
    }
}

input.on('line', function (line) {
    str = line;
    console.log(palindromic());
});

input.on('close', function () {
    process.exit(0);
})