function printMatrix(matrix) {
    if (matrix.length == 0) {
        return [];
    }
    let ans = [];
    let lenX = matrix[0].length, lenY = matrix.length;
    let total = lenX * lenY;
    lenX -= 1, lenY -= 1;
    let tempX, tempY;
    let x = 0, y = 0;
    while (true) {
        tempX = lenX;
        tempY = lenY;
        if (total <= 1) {
            break;
        }
        //向右
        while (tempX&&total>1) {
            --total;
            ans.push(matrix[x][y++]);
            matrix[x][y-1] = undefined;
            --tempX;
        }
        //向下
        tempY = lenY;
        while (tempY&&total>1) {
            --total;
            ans.push(matrix[x++][y]);
            matrix[x-1][y] = undefined;
            --tempY;
        }
        //向左
        tempX = lenX;
        while (tempX&&total>1) {
            --total;
            ans.push(matrix[x][y--]);
            matrix[x][y+1] = undefined;
            --tempX;
        }
        //向上
        tempY = lenY;
        while (tempY&&total>1) {
            --total;
            ans.push(matrix[x--][y]);
            matrix[x+1][y] = undefined;
            --tempY;
        }
        ++x;
        ++y;
        lenX -= 2;
        lenY -= 2;
    }
    for(let i=0;i<matrix.length;i++){
        for(let j = 0;j<matrix[i].length;j++){
            if(matrix[i][j]){
                ans.push(matrix[i][j]);
                break;
            }
        }
    }
    return ans;
}

let arr = [[1], [2], [3], [4], [5]];
/**
 * let n = 5;
 let arr = [];
 let count= 1;
 for(let i =0;i<n;i++){
     arr[i] = new Array(n);
 }
 for(let i = 0;i<n;i++){
     for(let j = 0;j<n;j++){
         arr[i][j] = count++;
     }
 }
 */
console.log(printMatrix(arr));
console.log(!undefined);