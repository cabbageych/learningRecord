let obj = {
    name: 'cabbage',
    age: 18
}

let a = {
    name: 'test1'
}

let b = {
    name: 'test2'
}

obj[a] = 666;
obj[b] = 888;
console.log(obj[a]);  //888
/**
 * 对象键值只能是string类型，obj[a] = 666时，调用toString()方法，将a转化成字符串[object Object]
 * obj[b] = 888时也是同样操作
 * 因此，最终的操作实际为obj['[object Object]']=...
 */