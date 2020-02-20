const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let m, n;
let keys, boxes;

input.on('line', (line) => {
    line = line.trim();
    if (n == undefined) {
        line = line.split(" ");
        line = line.map(val => parseInt(val));
        n = line[0];
        m = line[1];
        keys = undefined;
        boxes = undefined;
    } else if (boxes == undefined) {
        line = line.split(" ");
        line = line.map(val => parseInt(val));
        boxes = line;
    } else {
        line = line.split(" ");
        line = line.map(val => parseInt(val));
        keys = line;
        fn();
        n = undefined;
    }
})


function fn() {
    let ans = 0;
    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if ((boxes[i] + keys[j]) % 2 != 0) {
                ++ans;
                keys.splice(j, 1);
                break;
            }
        }
    }
    console.log(ans);
}

input.on('close', () => {
    process.exit(0);
});
