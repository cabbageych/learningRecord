let a = 666;

function fn() {
    console.log(this.a);
}

new fn();  //undefined

let b = new fn();  //undefined
console.log(b); //fn{}