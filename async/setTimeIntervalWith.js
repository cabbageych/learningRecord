//setInterval with setTimeOut

let a;

function interval(){
    a = setTimeout(()=>{
        console.log('...');
        interval();
    },1000);
}

interval();

setTimeout(()=>{
    clearTimeout(a);
},5000);