/**
 * WeakSet结构与Set类似，也是不重复的值的集合，但是，它与Set有两个区别。
 * 首先，WeakSet的成员只能是对象，而不能是其他类型的值，
 * 其次，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
 */

/**
 * 方法：
 * WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
 * WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
 * WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在
 * 属性：
 * weakset没有size属性，无法进行遍历
 */

let a = new WeakSet();
let name = { name: 'cabbage' };
let age = { age: 18 };
let test = { test: 'test' };
a.add(name);
a.add(age);
a.add(test);
console.log(a.has(test));  //true
console.log(a.delete(test));  //true
console.log(a.has(test));   //false


/**
 * weakmap:
 * 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
 * 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制
 */
/**
 * WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有key()、values()和entries()方法），
 * 也没有size属性。因为没有办法列出所有键名，这个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。
 * 二是无法清空，即不支持clear方法。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
 */

 let b = new WeakMap();

 b.set(name,1);
 b.set(age,2);
 b.set(test,3);
 console.log(b.get(name));  //1
 console.log(b.has(test));   //true
 console.log(b.delete(test));  //true
 console.log(b.has(test)); //false

