let fn = console.log;

console.log = function(){
    fn.apply(this,arguments);
}

let a = {
    name:'cabbage',
    age:18
}
console.log('cabbage',123,a);