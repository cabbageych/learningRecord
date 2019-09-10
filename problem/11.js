/**
竖线最少会穿过多少个横线
Input: 
[
[1,2,2,1],
[3,1,2],
[1,3,2],
[2,4],
[3,1,2],
[1,3,1,1]
]

1 1-1 1-1 1
1-1-1 1 1-1
1 1-1-1 1-1
1-1 1-1-1-1
1-1-1 1 1-1
1 1-1-1 1 1


Output:2
*/
let ans = [];
let data = [
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1]
];
for (let i = 0; i < data.length; i++) {
    let temp = new Array(5);
    temp.fill(0);
    let count = 0;
    for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] != 1) {
            let t = data[i][j];
            while (t > 1) {
                temp[count++] = 1;
                --t;
            }
            if (count < temp.length)
                temp[count++] = 0;

        } else {
            ++count;
        }
    }
    ans.push(temp);
}

let min = Infinity;
for (let i = 0; i < ans[0].length; i++) {
    let num = 0;
    for (let j = 0; j < ans.length; j++) {
        if (ans[j][i] == 1) {
            ++num;
        }
    }
    min = min > num ? num : min;
}


console.log(min);
