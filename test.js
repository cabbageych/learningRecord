const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


input.on('line', (line) => {
    console.log(line);
})


input.on('close', () => {
    process.exit(0);
});