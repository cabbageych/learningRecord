/**
 * await对返回值进行Promise.resolve(returnVal)操作
 */


async function async1() {
    console.log('async1 start')
    let a = await async2()
    console.log(a)
    console.log('async1 end')
}
function async2() {
    return 666;
}
async1();
console.log('emmm');
Promise.resolve('test').then(val => {
    console.log(val);
});