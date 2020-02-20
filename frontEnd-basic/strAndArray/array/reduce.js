Array.prototype.reduce = function (fn) {
    let temp = this[0];
    for (let i = 1; i < this.length; i++) {
        temp = fn(temp, this[i]);
    }
    console.log('ans: ', temp);
}
let arr = [1, 4, 6, 7, 8, 1, 23];
arr.reduce((pre, cur) => pre * cur);
