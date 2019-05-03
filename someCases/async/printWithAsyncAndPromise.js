/*用promise和async实现每间隔1s,2s,3s...打印i*/
//var temp;
async function print() {
    for (let i = 0; i < 5; i++) {
        const temp = await func(i);
        console.log(temp);
    }
}
function func(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>resolve(i), (i + 1) * 1000);
    });
}
print();