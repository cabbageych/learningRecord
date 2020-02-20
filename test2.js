const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let year;

function fn() {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log(29);
    } else {
        console.log(28);
    }
}

input.on('line', (line) => {
    line = line.trim();
    if (year == undefined) {
        year = parseInt(line);
        fn();
        year = undefined;
    }
})


input.on('close', () => {
    process.exit(0);
});