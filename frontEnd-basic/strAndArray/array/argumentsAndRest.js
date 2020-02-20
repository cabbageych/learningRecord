'use strict'
//arguments是参数的类数组化表现，它包含所有可用参数。
//rest是非定义的多余变量数组。
var a = [1,2,3];
var b = {name:"cabbage",age:22};
var c = 666;
function f(a,...rest){
    console.log(arguments.length+": ",arguments);
    console.log(rest.length+": ",rest);
}
f(a,b,c);