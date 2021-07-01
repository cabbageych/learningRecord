let n = 300;
let ans = [1];
function factorial(n) {
    let temp = 0;
    let pos = 0;
    for (let i = 2; i <= n; i++) {
        temp = 0;
        pos = 0;
        while (true) {
            if (pos > ans.length - 1) {
                if (temp > 0) {
                    while (temp > 0) {
                        ans.push(temp % 10);
                        temp = Math.floor(temp / 10);
                    }
                }
                break;
            }
            let t = ans[pos] * i + temp;
            ans[pos] = t % 10;
            temp = Math.floor(t / 10);
            ++pos;
        }
    }
}

factorial(n);
console.log(ans.reverse().join(""));