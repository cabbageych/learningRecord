'use strict'
var a,b,rest;
[a,b] = [10,20];
console.log(a,b);
[a,b,...rest] = [10,20,30,40,50];
console.log(a,b,rest);
var c,d,e;
var [c,d,...e] = [1,2,3,4,5];
console.log(c,d,e);
