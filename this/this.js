let a = 666;

function fn(){
    console.log(this.a);
}

new fn();  //undefined

console.log(typeof fn.prototype); //object


let test = {
    name:'cabbage',
    fn:function(){
        console.log(this.name);
    }
}

let fun = test.fn;

new fun(); //undefined