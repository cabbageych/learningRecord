const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;

input.on('line', function (line) {
    n = parseInt(line);
    printMatric(n);
});

input.on('close', function () {
    process.exit(0);
});

function printMatric(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            result[i][j] = -1;
        }
    }
    let x = 0, y = 0;
    let count = 0, circle = 1;
    while (count < n * n - 1) {
        //向右
        if (circle == 1) {
            while (y < n - 1 && count < n * n - 1) {
                result[x][y] = ++count;
                ++y;
            }
        } else {
            while (result[x][y + 1] == -1 && count < n * n - 1) {
                result[x][y] = ++count;
                ++y;
            }
        }
        //向下
        if (circle == 1) {
            while (x < n - 1 && count < n * n - 1) {
                result[x][y] = ++count;
                ++x;
            }
        } else {
            while (result[x + 1][y] == -1 && count < n * n - 1) {
                result[x][y] = ++count;
                ++x;
            }

        }
        //向左
        if (circle == 1) {
            while (y > 0 && count < n * n - 1) {
                result[x][y] = ++count;
                --y;
            }
        } else {
            while (result[x][y - 1] == -1 && count < n * n - 1) {
                result[x][y] = ++count;
                --y;
            }

        }
        //向上
        if (circle == 1) {
            while (x - 1 > 0 && count < n * n - 1) {
                result[x][y] = ++count;
                --x;
            }
        } else {
            while (result[x - 1][y] == -1 && count < n * n - 1) {
                result[x][y] = ++count;
                --x;
            }

        }
        ++circle;
    }
    result[x][y] = ++count;
    for (let i = 0; i < n; i++) {
        console.log(result[i].join(" "));
    }
}