var b = 666;
function fnTest(a,b,c){
    console.log(this.b);
}

let a = 666;

function fn() {
    this.b = 999;
    //this.a = 111;
    console.log(this.a);
    fnTest();
}

fn();  

console.log(typeof fn.prototype); //object


let test = {
    name: 'cabbage',
    fn: function () {
        console.log(this.name);
    }
}

let fun = test.fn;

new fun(); //undefined