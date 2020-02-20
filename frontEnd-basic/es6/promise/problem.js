new Promise(() => {
    let a = new Promise(resolve => {
        resolve(10);
    });
    let b = new Promise(resolve => {
        let c = new Promise.resolve(10);
        resolve(c);
    });
    console.log(a);
    console.log(b);
    Promise.resolve(0).then(() => {
        console.log('micro1');
        console.log(b);
    }).then(() => {
        console.log('micro2');
        console.log(b);
    });
    setTimeout(() => {
        console.log('macro');
        console.log(b);
    })
})