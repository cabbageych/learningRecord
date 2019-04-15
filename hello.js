'use strict'
var s = "hello";
function greet01(name) {
    console.log(s + ', ' + name + '!');
}
function greet02(name){
    console.log("hello "+name);
}
module.exports = {
    greet01:greet01,
    greet02:greet02
};