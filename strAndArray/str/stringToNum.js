var temp = "1234";
console.log(+temp + 0); //1234
var bigNum = "1234567891123120837822";
console.log(parseInt(bigNum)); //数字过大采用科学计数法
console.log((new Number(bigNum)).toLocaleString());  //还是会去掉最后几位

//toString进制转换
let a = 66;
console.log(a.toString(2));
console.log(a.toString(3));