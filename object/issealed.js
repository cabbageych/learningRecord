/*
 密封对象是指那些不可 扩展 的，且所有自身属性都不可配置的（non-configurable）对象。
或则说 密封对象是指那些不能添加新的属性，不能删除已有属性，以及不能修改已有属性的可枚举性、
可配置性、可写性，但可能可以修改已有属性的值的对象。
*/

/*******
 * 将一个对象密封后仅能保证该对象不被扩展且属性不可重配置，但是原属性值却是有可能被修改的
 * *********/
var empty = {};

//Object.isSealed()

//新建对象默认不是密封的
console.log(Object.isSealed(empty));//false

//如果把一个空对象变得不可扩展，则它同时也会变成密封对象
Object.preventExtensions(empty);
console.log(Object.isSealed(empty));  //true
console.log(empty); //{}
empty.test = "emm";
console.log(empty); //{}
//但如果对象不是空对象，则它不会变成密封对象，因为密封对象的所有自身属性必须是不可配置的
var object01 = {test:"emmm"};
Object.preventExtensions(object01);
console.log(Object.isSealed(object01));  //false

//如果把这个属性变得不可配置,则这个对象也就成了密封对象.
Object.defineProperty(object01,"test",{configurable:false});
console.log(Object.isSealed(object01));  //true
console.log(object01); //emmm
object01.test="emm";
console.log(object01); //emm

//Object.seal
var object02 = {name:"cabbage"};
console.log(Object.isSealed(object02));  //false
Object.seal(object02);
console.log(object02);
object02.secondName = "cabbage 02";
console.log(object02.secondName);  //undefined
console.log(Object.isSealed(object02));  //true
