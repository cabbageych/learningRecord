const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let len;
let data;

input.on('line', function (line) {
    if (first) {
        len = parseInt(line);
        first = false;
    } else {
        data = line;
        data = data.split(" ");
        for (let i = 0; i < data.length; i++) {
            data[i] = parseInt(data[i]);
        }
    }
});


let flag = false;
let ans = true;
function reverseArr() {
    for (let i = 0; i < data.length; i++) {
        if (i < data.length - 1 && data[i] > data[i + 1]) {
            if (flag == false) {
                let j = i + 1;
                for (; j < data.length; j++) {
                    if (j < data.length - 1 && data[j] < data[j + 1]) {
                        break;
                    }
                }
                if (i > 0) {
                    if (data[j] < data[i - 1]) {
                        return 'no';
                    }
                }
                if (j != data.length - 1) {
                    if (data[j + 1] < data[i]) {
                        return 'no';
                    }
                }
                flag = true;
                i = j + 1;
            } else {
                console.log(data[i], data[i + 1]);
                console.log(i);
                console.log('emmm');
                return 'no';
            }

        }
    }
    return 'yes';
}

input.on('close', function () {
    console.log(reverseArr());
    process.exit(0);
})

