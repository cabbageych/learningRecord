/**
 * set类似数组，但是成员的值都是唯一的。
 * Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化
 * Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）
 */
/**
 * 属性：
 * size: 返回个数
 * 操作方法：
 * add(value)：添加某个值，返回Set结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * clear()：清除所有成员，没有返回值。
 */
let a = new Set([1, 2, 3, 5, 5, 6, 4, 6, 7]); //Set {1,2,3,5,6,4,7}
console.log(a.size);  //7

console.log(a.add('cabbage'));
console.log(a.add(4));//无效

console.log(a.delete(1));  //true
console.log(a.delete('dada')); //false

console.log(a.has(1));   //false
console.log(a.has('cabbage'));  //true

console.log(a.clear()); //undefined
console.log(a);//Set {}

/**
 * Set的遍历顺序就是插入顺序
 * 遍历方法：
 * .keys()：返回键名的遍历器
 * .values()：返回键值的遍历器
 * .entries()：返回键值对的遍历器(键名与键值相同)
 * .forEach()：使用回调函数遍历每个成员
 */
console.log('---------------');
a = new Set([1, 2, 3, 5, 5, 6, 4, 6, 7, 'cabbage']); //Set {1,2,3,5,6,4,7,'cabbage'}
for(let i of a){
    console.log(i);
}
let b = a.keys();
for(let i of b){
    console.log(i);
}
console.log(a.values());
a.forEach(val => {
    console.log(val);
})
console.log(a.entries());
b = a.entries();
for (let i of b) {
    console.log(i);
}
