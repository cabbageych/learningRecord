/**
 * a1=new A();
 * a2=new A();
 * console.log(a1.value);//1
 * console.log(a2.value);//2
 * 即每new一次value加1
 */

function A() {
    let count = 0;
    ++A.prototype.value;
    this.value = A.prototype.value;
}

A.prototype = {
    value: 0,
}

let a1 = new A();
let a2 = new A();
console.log(a1.value);//1
console.log(a2.value);//2