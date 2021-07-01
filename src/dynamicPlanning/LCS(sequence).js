let str01 = "cabbag90e";
let str02 = "c2a3b45b6a7ge";
console.log("str01:" + str01 + " str02:" + str02);

let ans = [];
let choose = [];
for (let i = 0; i <= str01.length; i++) {
    ans[i] = new Array(str02.length + 1);
    choose[i] = new Array(str02.length + 1);
}
for (let i = 0; i <= str01.length; i++) {
    for (let j = 0; j <= str02.length; j++) {
        ans[i][j] = 0;
        choose[i][j] = 0;
    }
}

function LCS(str01, str02) {
    str01 = ' ' + str01;
    str02 = ' ' + str02;
    let len01 = str01.length;
    let len02 = str02.length;
    for (let i = 1; i < len01; i++) {
        for (let j = 1; j < len02; j++) {
            if (str01[i] == str02[j]) {
                ans[i][j] = ans[i - 1][j - 1] + 1;
                choose[i][j] = 1;
            } else if (str01[i] != str02[j]) {
                if (ans[i][j - 1] > ans[i - 1][j]) {
                    ans[i][j] = ans[i][j - 1];
                    choose[i][j] = 2;
                } else {
                    ans[i][j] = ans[i - 1][j];
                    choose[i][j] = 3;
                }
            }
        }
    }
}

function findSequence() {
    let row = str01.length;
    let column = str02.length;
    let char = [];
    while (true) {
        if (choose[row][column] == 1) {
            char.push(str01[row - 1]);
            column -= 1;
            row -= 1;
        } else if (choose[row][column] == 2) {
            column -= 1;
        } else if (choose[row][column] == 3) {
            row -= 1;
        }
        if (char.length == ans[str01.length][str02.length]) {
            break;
        }
    }
    console.log(char.reverse().join(""));
}

LCS(str01, str02);
console.log(ans);
console.log(choose);
findSequence()


