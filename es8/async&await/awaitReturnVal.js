async function fun() {
    console.log('enter...');
    let a = await 1;
    console.log(a);
    let b = await doSomething();
    console.log(b);
}

function doSomething() {
    console.log('enter doSomething...');
}

fun();