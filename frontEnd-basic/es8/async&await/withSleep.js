function sleep() {
    return new Promise((resolve) => { setTimeout(resolve, 2000); });
}
async function sleepTest() {
    let a = 10;
    await sleep();
    console.log(666);
}
sleepTest();