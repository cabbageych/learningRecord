let a = 'abcbdab';
let b = 'bdcaba';

function LCSequence(a, b) {
    let strA = ' ' + a;
    let strB = ' ' + b;
    let lenA = strA.length;
    let lenB = strB.length;
    let result = new Array(lenA);
    for (let i = 0; i < lenA; i++) {
        result[i] = new Array(lenB);
    }
    let choose = new Array(lenA);
    for (let i = 0; i < lenA; i++) {
        choose[i] = new Array(lenB);
    }
    //首行，首列置零
    for (let i = 0; i < strA; i++) {
        result[i][0] = 0;
    }
    for (let i = 0; i < strB; i++) {
        result[0][i] = 0;
    }

    for (let i = 1; i < lenA; i++) {
        for (let j = 1; j < lenB; j++) {
            if (strA[i] == strB[j]) {
                result[i][j] = result[i - 1][j - 1] + 1;
                choose[i][j] = 2;
            } else {
                if (result[i - 1][j] > result[i][j - 1]) {
                    result[i][j] = result[i - 1][j];
                    choose[i][j] = 1;
                } else {
                    result[i][j] = result[i][j - 1];
                    choose[i][j] = 0;
                }
            }
        }
        
    }
    console.log(result[lenA-1][lenB-1]);
}

LCSequence(a, b);