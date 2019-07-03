let arr = [1, 2, ['3', [4]], 5];
let ans = [];

function arrFlatten(arr) {
    arr.forEach(el => {
        if (Array.isArray(el)) {
            arrFlatten(el);
        } else {
            if(typeof(el) == 'string'){
                el = +el;
            }
            ans.push(el);
        }
    });
}

console.log(arr);
arrFlatten(arr);
console.log(ans);