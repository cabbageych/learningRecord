const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n;
let arr = [];

input.on('line', (line) => {
    if (n == undefined) {
        line = line.trim();
        n = parseInt(line);
        arr = [];
    } else {
        --n;
        line = line.trim();
        line = line.split(" ");
        let a = line[0];
        let b = line[1];
        a = a.split(".");
        b = b.split(".");
        a = a.map(val => parseInt(val));
        b = b.map(val => parseInt(val));
        while (a.length < 4) {
            a.push(0);
        }
        while (b.length < 4) {
            b.push(0);
        }
        for(let j = 0;j<4;j++){
            if(a[j] < b[j]){
                console.log(true);
                break;
            }else if(a[j] > b[j]){
                console.log(false);
                break;
            }else{
                if(j == 3){
                    console.log(false);
                }
                continue;
            }
        }
    }
})


function fn() {
    for(let i = 0;i<arr.length;i++){
        let a = arr[i][0];
        let b = arr[i][1];
        
    }
}

input.on('close', () => {
    process.exit(0);
});
