function fn1(){ };
function fn2(){ };

let a = new fn1();
let b = new fn2();

Object.defineProperty(a,'name',{
    set:function(val){
        console.log('set a.name:',val);
        b.name = val;
    }
})
console.log('b.name:',b.name);
a.name = 'cabbage';
console.log('b.name:',b.name);
