let a = new Promise((resolve,reject)=>{
    let a = Math.random();
    console.log(a);
    if(a>0.5){
        resolve('succeed!');
    }else{
        reject('failed!');
    }
});

//不可改变状态
Promise.resolve(a).then(val=>{
    console.log(val);
});