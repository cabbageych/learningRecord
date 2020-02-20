let arr = [];
let column = [];
//标记每一行中皇后对应的列
for (let i = 0; i < 8; i++) {
    column[i] = -1;
}
//初始化棋盘
for (let i = 0; i < 8; i++) {
    arr[i] = [];
}
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr[i][j] = 0;
    }
}

function check(n, i) {
    for (let j = 0; j < n; j++) {
        if (column[j] == i || Math.abs(n - j) == Math.abs(column[j] - i)) {
            return false;
        }
    }
    return true;
}

function eightQueen(n) {
    if (n >= 8) {
        console.log(arr);
        return;
    }
    for (let i = 0; i < 8; i++) {
        if (check(n, i)) {
            arr[n][i] = 1;
            column[n] = i;
            eightQueen(n + 1);
            arr[n][i] = 0;
            column[n] = -1;
        }
    }
}

console.log(arr);
eightQueen(0);
