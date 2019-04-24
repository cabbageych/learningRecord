'use strict'
var o = {p:42,q:true};
var {p,q} = o;
console.log(p,q);
var a,b;
({a,b} = {a:10,b:20});
console.log(a,b);