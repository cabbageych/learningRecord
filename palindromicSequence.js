const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let str;

function palindromic() {
    let arr = str.split("");
    let max = 0, tempMax = 0;
    let pos, tempPos;
    let ansStr, tempAnsStr;
    for (let i = 0; i < arr.length; i++) {
        let len = 0;
        let flag = true;
        tempMax = 0;
        tempAnsStr = [];
        while (true) {
            if (i - len == 0) {
                break;
            }
            if (arr[i - len] == arr[i + len]) {
                if (arr[i] != '#' && flag) {
                    tempAnsStr.push(arr[i]);
                    flag = false;
                    ++len;
                } else {
                    if (arr[i - len] != '#') {
                        tempAnsStr.push(arr[i - len]);
                        tempAnsStr.unshift(arr[i + len]);
                    }
                    ++len;
                    ++tempMax;
                    tempPos = i;
                }
            } else {
                break;
            }
        }
        max = max > tempMax ? max : tempMax;
        pos = max > tempMax ? pos : tempPos;
        ansStr = max > tempMax ? ansStr : tempAnsStr;
    }
    console.log(max, pos, ansStr);
}

input.on('line', function (line) {
    str = line;
    str = line.split("");
    str = str.join("#");
    str = str.split('');
    str.unshift('#');
    str.push('#');
    str = str.join("");
    console.log(str);
    palindromic();
});

input.on('close', function () {
    process.exit(0);
})