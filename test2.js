const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let a, b;

function fn() {
    if (a % b == 0) {
        console.log(b);
        return;
    } else if (b % a == 0) {
        console.log(a);
        return;
    }
    let ans = [];
    let temp = a > b ? b : a;
    let flag = true;
    while (flag) {
        for (let i = 2; i < temp; i++) {
            if(i == temp-1){
                flag = false;
                break;
            }
            if (a % i == 0 && b % i == 0) {
                ans.push(i);
                a = a / i;
                b = b / i;
                break;
            }
        }
    }
    console.log(ans.reduce((pre,cur)=>{
        return pre*cur;
    }))
}

input.on('line', (line) => {
    if (a == undefined) {
        a = parseInt(line);
    } else if (b == undefined) {
        b = parseInt(line);
        fn();
        a = undefined;
        b = undefined;
    }
})


input.on('close', () => {
    process.exit(0);
});