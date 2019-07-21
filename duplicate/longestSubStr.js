let str = 'c12345c63bc98w7b';

let len = [];
let pos = 0, maxLen = 0;
for (let i = 0; i < str.length; i++) {
    let mark = [];
    mark[str[i]] = 1;
    len[i] = 1;
    for (let j = i + 1; j < str.length; j++) {
        if (mark[str[j]] == 1) {
            break;
        } else {
            mark[str[j]] = 1;
            len[i]++;
            maxLen = maxLen > len[i] ? maxLen : len[i];
            pos = maxLen > len[i] ? pos : i;
        }
    }
}
console.log(len);
console.log(pos, maxLen);
console.log(str.substr(pos, maxLen));