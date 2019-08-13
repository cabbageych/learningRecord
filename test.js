const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * 3
 * 5 0
 * 6 0
 * 7 0
 * 59
 * 6 59
 */
//6 0

let alarmNums = undefined;
let alarmArr = [];
let ttClass = undefined;
let ddl = undefined;
let ans = {
    h: 0,
    min: 0
}


function fn() {
    //console.log(alarmArr);
    //console.log(ddl);
    for (let i = 0; i < alarmArr.length; i++) {
        let temp = alarmArr[i][1] + ttClass;
        if (temp > 59) {
            let addNum = Math.floor(temp / 60);
            let mins = temp % 60;
            alarmArr[i][0] += addNum;
            alarmArr[i][1] = mins;
        } else {
            alarmArr[i][1] = temp;
        }
        if (alarmArr[i][0] < ddl[0] || (alarmArr[i][0] == ddl[0] && alarmArr[i][1] <= ddl[1])) {
            let h = Math.floor(ttClass / 60);
            let mins = ttClass % 60;
            ans.h = ddl[0] - h;
            if (ddl[1] >= mins) {
                ans.min = ddl[1] - mins;
            } else {
                ans.h = ans.h - 1;
                ans.min = 60 - (mins - ddl[1]);
            }
        }

    }
    console.log(ans.h, ans.min);
}

input.on('line', (line) => {
    if (alarmNums == undefined) {
        alarmNums = parseInt(line.trim());
        alarmArr = [];
        ttClass = undefined;
        ddl = undefined;
    } else {
        if (alarmNums) {
            --alarmNums;
            line = line.trim().split(" ");
            line = line.map(val => {
                return parseInt(val);
            })
            alarmArr.push(line);
        } else if (ttClass == undefined) {
            ttClass = parseInt(line.trim());
        } else if (ddl == undefined) {
            line = line.trim().split(" ");
            ddl = line.map(val => {
                return parseInt(val);
            })

            fn();
            alarmNums == undefined;
        }
    }
})



input.on('close', () => {
    process.exit(0);
})