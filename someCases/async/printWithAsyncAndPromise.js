/*用promise和async实现每间隔1s,2s,3s...打印i*/
async function print() {
    for (let i = 0; i < 5; i++) {
        let temp = await timer(i);
        console.log(temp);
    }
}

function timer(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(i) }, (i + 1) * 1000);
    })
}

print();