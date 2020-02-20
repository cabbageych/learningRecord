let pa = new Promise((resolve, reject) => {
    let temp = Math.random();
    if (temp < 0.5)
        resolve("resolve a");
    //else
        //reject("reject a");
});
let pb = new Promise((resolve, reject) => {
    let temp = Math.random();
    if (temp < 0.5)
        resolve("resolve b");
    //else
        //reject("reject b");
});

function* generatorTest() {
    try {
        let a = yield pa;
        yield pb;
    }catch(e){
        console.log("reject error.");
    }
    
}
var t = generatorTest();

Promise.resolve(t.next().value).then((val)=>console.log(val));
Promise.resolve(t.next().value).then((val)=>console.log(val));
//console.log(t.next().value);
//console.log(t.next().value);
//t.throw("emmmm");