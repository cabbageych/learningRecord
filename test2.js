const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, k, str;
let len;


function fn() {
    let arr = [];
    let count = 0;
    let temp;
    while (true) {
        for (let i = 0; i < k; i++){
            arr.push(count<<i);
        }
        temp = arr[0]^arr[1];
        for(let i=2;i<arr.length;i++){
            temp = temp^arr[i];
        }
        if(temp == str){
            console.log(count);
            return;
        }
    }
}

input.on('line', (line) => {
    if (n == undefined) {
        line = line.trim().split(" ");
        line = line.map(val => {
            return parseInt(val);
        });
        n = line[0];
        k = line[1];
    } else {
        line = line.trim();
        str = parseInt(line, 2);
        fn();
        n = undefined;
    }
})



input.on('close', () => {
    process.exit(0);
})