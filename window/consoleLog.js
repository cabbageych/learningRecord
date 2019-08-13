let fn = console.log;

console.log = function () {
    let [...a] = arguments;
    a.unshift('hello');
    fn.apply(this, a);
}

let a = {
    name: 'cabbage',
    age: 18
}

console.log('cabbage', 18, a);