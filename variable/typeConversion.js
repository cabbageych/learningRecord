
/*
四则运算符
只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。其他运算只要其中一方是数字，
那么另一方就转为数字。并且加法运算会触发三种类型转换：将值转换为原始值，转换为数字，转换为字符串。
*/
console.log(1 + '1'); //'11'
console.log(2 * '2'); //4
console.log([1, 2] + [2, 1]); // '1,22,1'
// [1, 2].toString() -> '1,2'
// [2, 1].toString() -> '2,1'
// '1,2' + '2,1' = '1,22,1'
console.log('a' + +'b');//aNaN +'b'试图将字符串转换成number类型
console.log(Boolean([]), Boolean({})); //将所有对象包括空对象转成布尔值都会返回true(不包括null)。
console.log(Boolean(null));  //false
console.log([] == ![]); //true
/*步骤如下
[] 转成 true，然后取反变成 false
[] == false
[] == ToNumber(false)
[] == 0
ToPrimitive([]) == 0
// [].toString() -> ''
'' == 0
0 == 0 // -> true
*/
//console.log("abcd567"++); //报错
console.log(1 + '2' + '2');  //122
console.log(-1 + '2' + +2);  //-122
console.log(-1 + 2 + +'2');  //3