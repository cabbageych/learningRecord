//m[i,j] = min{m[i,k]+m[k+1,j]+p(i-1)*p(k)*p(j)}
//(5*10 10*3)*((3*12 12*5) (5*50 50*6))
let arr = [5, 10, 3, 12, 5, 50, 6];
//相乘次数与加括号位置
let m = [];
let s = [];
for (let i = 0; i < arr.length - 1; i++) {
    m[i] = new Array(arr.length - 1);
    s[i] = new Array(arr.length - 1);
}
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        m[i][j] = 0;
    }
}

function matricTrain() {
    let len = arr.length - 1;
    for (let l = 1; l < len; l++) {
        for (let i = 0; i < len - l; i++) {
            let j = i + l;
            m[i][j] = 999999999;
            for (let k = i; k < j; k++) {
                //console.log(m[i][k] + m[k + 1][j] + arr[i] * arr[j + 1] * arr[k + 1]);
                if (m[i][j] > m[i][k] + m[k + 1][j] + arr[i] * arr[j + 1] * arr[k + 1]) {
                    m[i][j] = m[i][k] + m[k + 1][j] + arr[i] * arr[j + 1] * arr[k + 1];
                    s[i][j] = k;
                }
            }
        }
    }
    console.log(m);
    console.log(s);
}

let str = '';
function parens(s, i, j) {
    //console.log(str);
    if (i == j) {
        str += i;
    } else {
        str += "(";
        //console.log("i:" + i + ", j:" + j);
        parens(s, i, s[i][j]);
        parens(s, s[i][j] + 1, j);
        str += ")";
    }
}

matricTrain();
parens(s, 0, 5);
console.log(str);