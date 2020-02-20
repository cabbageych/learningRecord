const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let a;
let b;

function fn() {
    let count = 0;
    let pos = 0;
    for (let i = 0; i < a.length; i++) {

        if (count % 4 == 0 && count != 0) {
            if (b.length != 0) {
                let temp = b.shift();
                a.splice(i, 0, temp);
                i++;
            }

        }
        ++count;
    }
    if (b.length != 0) {
        a = a.concat(b);
    }
    console.log(a.join(" "));
}

input.on('line', (line) => {
    if (a == undefined) {
        a = line.trim();
        a = a.split(" ");
        b = undefined;
    } else {
        b = line.trim();
        b = b.split(" ");
        fn();
        a = undefined;
    }
})


input.on('close', () => {
    process.exit(0);
});
