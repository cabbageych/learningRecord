/**
 * Object 结构提供了“字符串—值”的对应，
 * Map结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
 */
/**
 * 属性与方法：
 * size
 * set(key,value)
 * get(key),
 * has(key)
 * delete(key)
 * clear()
 */
let a = new Map();
console.log(a);  //Map {}

a.set('name', 'cabbage');
a.set('age', 18);
console.log(a.size, a);  //2 Map { 'name' => 'cabbage', 'age' => 18 }

console.log(a.get('name'));  //cabbage
console.log(a.has('name'));   //true

console.log(a.set('test', 'temp'));
console.log(a.delete('test'), a.has('test'));  //true false

console.log(a.clear(), a);  //undefined Map{}


/**
 * 遍历方法同Set
 */
console.log('-------------');
a.set('name', 'cabbage');
a.set('age', 18);

a.forEach(val => {  //输出键值
    console.log(val);
})
console.log('-------keys---------')
for (let i of a.keys()) {
    console.log(i, a.get(i));
}
console.log('-------values---------')
for (let i of a.values()) {
    console.log(i);
}

console.log('-------entries---------')
for (let i of a.entries()) {
    console.log(i);
}







let test = new Map([['name', 'cabbage']]);
console.log(test);  //Map { 'name' => 'cabbage' }