'use strict'
var s = "hello";
function greet01(name) {
    console.log(s + ', ' + name + '!');
}
function greet02(name){
    console.log("hello "+name);
}
let object = function(name){
    this.name = "cabbage";
    this.print = function(){
        console.log(this.name);
    }
}

function test(){
    console.log("exports test.");
}

exports.test = test;
module.exports = {
    greet01,
    greet02,
    str:s,
    object
};