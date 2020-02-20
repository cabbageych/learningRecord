/**
 * 状态转移方程：
 * f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]}
 * f[i][v]表示前i件物品恰放入一个容量为v的背包可以获得的最大价值。
 */
//价值、重量、性价比、背包容量、物品拿取数组
let value = [20, 30, 65, 40, 60];
let weight = [10, 20, 30, 40, 50];
let vDw = [2, 1.5, 2.1, 1, 1.2];
let total = 100;
let take = [];
for (let i = 1; i <= weight.length; i++) {
    take[i] = 0;
}

//置零(f[i-1])
let ans = [];
for (let i = 0; i <= weight.length; i++) {
    ans[i] = new Array(total + 1);
}

for (let i = 0; i <= weight.length; i++) {
    for (let j = 0; j <= total; j++) {
        ans[i][j] = 0;
    }
}

function knapsack() {
    value.unshift(0);
    weight.unshift(0);
    for (let i = 1; i < weight.length; i++) {
        for (let j = 1; j <= total; j++) {
            if (j < weight[i]) {
                ans[i][j] = ans[i - 1][j];
            } else {
                if (ans[i - 1][j] >= ans[i - 1][j - weight[i]] + value[i]) {
                    ans[i][j] = ans[i - 1][j];
                    take[i] = 0;
                } else {
                    ans[i][j] = ans[i - 1][j - weight[i]] + value[i];
                    take[i] = 1;
                }
            }
        }
    }
    console.log(ans[ans.length - 1][ans[0].length - 1]);
    console.log(take);
}

knapsack();
//console.log(ans);
