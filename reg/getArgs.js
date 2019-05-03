var str = "jkerj:/344?a=66&b=99";
var reg = /\?/;
var str02 = str.split(reg)[1];
console.log(str02);

var temp = str02.split("&");
console.log(temp);