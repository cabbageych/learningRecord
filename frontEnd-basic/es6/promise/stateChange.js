let test = new Promise((resolve, reject) => {
    resolve('resolve');
    reject('reject');
});

test.then(val => console.log(val), val => console.log(val));