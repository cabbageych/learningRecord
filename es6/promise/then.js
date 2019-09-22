let a = new Promise((resolve) => {
    resolve('a');
});

console.log(a.then(() => { return 1; }));  //Promise {<pending>}
console.log(a);