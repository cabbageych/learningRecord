'use strict'
let arr = [30, 35, 15, 5, 10, 20, 25];

function matricTrain(arr) {
    let len = arr.length - 1;
    let m = new Array(len);
    for (let i = 0; i < len; i++) {
        m[i] = new Array(len);
    }
    let s = new Array(len);
    for (let i = 0; i < len; i++) {
        s[i] = new Array(len);
    }

    for (let i = 0; i < len; i++) {
        m[i][i] = 0;
    }

    for (let l = 1; l < len; l++) {
        for (let i = 0; i < len - l; i++) {
            let j = i + l;
            m[i][j] = 0x7fffffff;
            for (let k = i; k < j; k++) {
                let temp = m[i][k] + m[k + 1][j] + arr[i] * arr[j + 1] * arr[k + 1];
                if (temp < m[i][j]) {
                    m[i][j] = temp;
                    s[i][j] = k;
                }
            }
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            console.log(m[i][j],i,j);
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            console.log(s[i][j]);
        }
    }
}

matricTrain(arr);