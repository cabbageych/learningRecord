const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let num;
let list;

function fn() {
    let swap, ans = 0;
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i][0] < list[j][0]) {
                swap = list[i];
                list[i] = list[j];
                list[j] = swap;
            } else if (list[i][0] == list[j][0]) {
                if (list[i][1] > list[j][1]) {
                    swap = list[i];
                    list[i] = list[j];
                    list[j] = swap;
                }
            }
        }
    }
    let temp;
    for (let i = 0; i < list.length; i++) {
        temp = i * list[i][0] + (list.length - i - 1) * list[i][1];
        ans += temp;
    }
    console.log(ans);
}

input.on('line', (line) => {
    line = line.trim();
    if (num == undefined) {
        num = parseInt(line);
        list = [];
    } else {
        --num;
        line = line.split(" ");
        line = line.map(val => parseInt(val));
        list.push(line);
        if (num == 0) {
            //ans = 0;
            fn();
            num = undefined;
        }
    }
})


input.on('close', () => {
    process.exit(0);
});