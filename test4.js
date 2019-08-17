const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n,q,arr,target;
let countArr = [];

function fn(num) {
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>=num){
            --arr[i];
            ++count;
        }
    }
    console.log(count);
}

input.on('line', (line) => {
    if(n == undefined){
        let temp = line.trim();
        temp = temp.split(" ");
        n = parseInt(temp[0]);
        q = parseInt(temp[1]);
    }else if(arr == undefined){
        arr = line.trim();
        arr = arr.split(" ");
        arr = arr.map((val)=>{
            return parseInt(val);
        })
    }else if(q>0){
        target = parseInt(line.trim());
        fn(target);
        --q;
        if(q == 0){
            
            n = undefined;
            arr = undefined;
            countArr = [];
        }
    }
})


input.on('close', () => {
    process.exit(0);
});