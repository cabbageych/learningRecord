/**
 * KMP算法原理
 * "部分匹配"的实质是，有时候，字符串头部和尾部会有重复。
 * 比如，"ABCDAB"之中有两个"AB"，那么它的"部分匹配值"就是2（"AB"的长度）。
 * 搜索词移动的时候，第一个"AB"向后移动4位（字符串长度-部分匹配值），就可以来到第二个"AB"的位置。
 */

let str = "BBC ABCDAB ABCDABCDABDE";
let template = "ABCDABD";
let matchArr = [];

//计算部分匹配表
function calMatch(template) {
    let count = 0;
    for (let i = 0; i < template.length; i++) {
        count = 0;
        for (let j = 0; j < i; j++) {
            if (template.slice(0, j + 1) == template.slice(i - j, i + 1)) {
                count = j + 1;
            }
        }
        matchArr[i] = count;
    }
}

//开始匹配
function match(str, template) {
    let ans;
    let pos = 0, i = 0;
    while (i < str.length) {
        if (str[i] == template[pos]) {
            ++i;
            ++pos;
            if (pos == template.length) {
                ans = i - template.length;
                break;
            }
        } else {
            if (pos == 0) {
                ++i;
            } else {
                pos -= pos - matchArr[pos - 1];
            }
        }
    }

    return ans;
}


calMatch(template);
let ans = match(str, template);
console.log(ans);


