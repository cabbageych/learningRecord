let threadTime = [15, 8, 3, 10];
let threadNum = [1, 2, 3, 4];
let temp = 0;

for(let i = 0;i<threadTime.length;i++){
    for(let j = i+1;j<threadTime.length;j++){
        if(threadTime[i]>threadTime[j]){
            temp = threadTime[i];
            threadTime[i] = threadTime[j];
            threadTime[j] = temp;

            temp = threadNum[i];
            threadNum[i] = threadNum[j];
            threadNum[j] = temp;
        }
    }
}

threadNum.forEach(ele=>{
    console.log(ele+" ->");
})
