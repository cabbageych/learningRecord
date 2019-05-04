var a = 66;
var b = 77;
//console.log(`a+b: ${a+b}`);

//实现模版字符串
var str = "~b-a: ${b-a}~";
var reg = /\$\{([\w+-\\*\\]*)\}/;
var temp = str.match(reg)[1];
var result = str.replace(reg,eval(temp));
result = result.substr(1,result.length-2);
console.log(result);