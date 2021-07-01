//记录每个物品的价值
let value = [20, 30, 65, 40, 60];
//记录每个物品的重量
let weight = [10, 20, 30, 40, 50];
//记录性价比
let vDw = [2, 1.5, 2.1, 1, 1.2];
//背包容量
let total = 100;
//记录每个物品的拿与不拿
let take = new Array(weight.length);
for (let i = 0; i < weight.length; i++) {
    take[i] = 0;
}
let ansTake = [];
//背包容量剩余
let left = 100;
//最终拿取物品总价值
let getValue = 0;
//当前拿取物品的总价值
let tempGetValue = 0;

//按性价比排序
for (let i = 0; i < vDw.length; i++) {
    for (let j = i; j < vDw.length; j++) {
        if (vDw[i] < vDw[j]) {
            temp = vDw[j];
            vDw[j] = vDw[i];
            vDw[i] = temp;

            temp = value[j];
            value[j] = value[i];
            value[i] = temp;

            temp = weight[j];
            weight[j] = weight[i];
            weight[i] = temp;
        }
    }
}

function knapsack(i) {
    if (i == weight.length) {
        //console.log(take);
        if(tempGetValue > getValue){
            getValue = tempGetValue;
            for(let j = 0;j<take.length;j++){
                ansTake[j] = take[j];
            }
        }
        //console.log(tempGetValue);
        return ;
    }
    //剩下的物品价值上限加起来<getValue则剪枝
    let temp = 0;
    for(let j = i;j<weight.length;j++){
        if(left >= weight[j]){
            temp += value[j];
        }else{
            temp += left*weight;
        }
    }
    if(tempGetValue+temp<getValue){
        return ;
    }

    if (left >= weight[i]) {
        take[i] = 1;
        left -=weight[i];
        tempGetValue += value[i];
        knapsack(i + 1);
        left += weight[i];
        take[i] = 0;
        tempGetValue -= value[i];
        knapsack(i + 1)
    }else{
        take[i] = 0;
        knapsack(i+1);
    }

}

knapsack(0);
console.log(ansTake);
console.log(getValue);