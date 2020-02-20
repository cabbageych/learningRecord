var str = "jkerj:/344?a=66&b=99";
var reg = /\?/;
var str02 = str.split(reg)[1];
var ans = [];
console.log(str02);

var temp = str02.split("&");
console.log(temp);
for (let i = 0; i < temp.length; i++) {
    ans[i] = {};
    let t = temp[i];
    let tArr = t.split("=");
    ans[i][tArr[0]] = tArr[1];
}
console.log(ans);