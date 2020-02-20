//使用Object.assign实现浅拷贝
let a = {
    name: 'cabbage',
    age: 18,
    say: 'hello'
}

let b = {
    name: 'cabbage02',
    play: 'backetball',
    inner: {
        name: 'inner name',
        age: 'inner age'
    }
}

Object.assign(a, b);
console.log(a); //...age:'inner age'...
a.inner.age = 18;
console.log(a); //...age:18...