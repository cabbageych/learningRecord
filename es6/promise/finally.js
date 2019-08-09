let a = new Promise((resolve,reject)=>{
    console.log('start!');
    resolve('then01...');
}).then(val=>{
    console.log(val);
}).finally(()=>{
    console.log('finally!');
}).then(val=>{
    console.log('shit...');
})