console.log('a'.charCodeAt());
console.log(String.fromCharCode(97));

const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

input.on('line', (line) => {
    console.log(line);
})

input.on('close', function(){
    console.log('exit');
    process.exit(0);
});