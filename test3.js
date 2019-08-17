const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let len;
let arr;

function compare(a, b) {

}

function fn() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let n1 = parseInt(arr[i]);
                let n2 = parseInt(arr[j]);
                if ((n1 + n2) % 2 != 0) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}

input.on('line', (line) => {
    if (len == undefined) {
        len = parseInt(line);
    } else if (arr == undefined) {
        arr = line.trim();
        arr = line.split(" ");
        fn();
        len = undefined;
        arr = undefined;
    }
})


input.on('close', () => {
    process.exit(0);
});
