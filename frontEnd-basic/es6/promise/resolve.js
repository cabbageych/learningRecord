function fn() {
    return Promise.resolve().then(fn);
}

let a = 666;
let b = 777;
console.log(a);
fn();
console.log(b);