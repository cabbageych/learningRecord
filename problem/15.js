/**
 * [1,2,3].repeat(3) ==》 [1,2,3,1,2,3,1,2,3]
 */

let arr = [1, 2, 3];

Array.prototype.repeat = function (n) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp[i] = this[i];
    }
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < temp.length; j++) {
            this.push(temp[j]);
        }
    }
}

console.log("before:", arr);
arr.repeat(3);
console.log("after:",arr);