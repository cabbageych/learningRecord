const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n;
let result;
input.on('line', (line) => {
    if (n == undefined) {
        result = 0;
        line = line.trim();
        n = parseInt(line);
        fn(n);
        //console.log(result);
        n = undefined;
        result = 0;
    }
})


function fn(n) {
    if (n <= 3) {
        console.log(n);
        return;
    }
    let arr = ['1', '2'];
    for (let i = 2; i < n; i++) {
        arr[i] = add(arr[i - 1], arr[i - 2]);
    }
    console.log(arr[arr.length - 1]);
}


function add(x, y) {
    let a = x.split("");
    let b = y.split("");
    let arr = [];
    while (a.length < b.length) { a.unshift('0'); }
    while (b.length < a.length) { b.unshift('0'); }
    let temp = 0;
    for (let i = b.length - 1; i >= 0; i--) {
        arr[i] = (((+a[i]) + (+b[i]) + temp) % 10).toString();
        //console.log(arr[i]);
        if ((+a[i]) + (+b[i]) + temp >= 10) {
            temp = 1;
        } else {
            temp = 0;
        }
    }
    if (temp == 1) {
        arr.unshift('1');
    }
    //console.log(arr.join(""));
    return arr.join("");

}


input.on('close', () => {
    process.exit(0);
});

/**
 * 1 1
 * 2 2
 * 3 3
 * 4 5
 * 5 8
 * 6 13
 * 7 21
 * 8 34
 * 9 55
 * 10 89
 *
 * 100 573147844013817200000
 */