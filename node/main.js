'use strict'
//引入hello模块
var hello = require('./moduleExports');
var hello02 = require('./exports');
var s = 'michale';
hello.greet01(s);
hello.greet02(s);
console.log(hello.str);

let objectTest = new hello.object("cabbage");
objectTest.print();
hello02.test();
hello.test();