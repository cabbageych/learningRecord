let arr = [];
let obj = {
    name: 'cabbage',
    age: 20,
    name: 'cabbage',
    inner: {
        age: 20
    }
}

console.log(Object.keys(obj));

function isCircle(obj) {
    for (let i in obj) {
        if (typeof obj[i] == 'object') {
            if (arr.indexOf(obj[i]) != -1) {
                return false;
            } else {
                arr.push(obj[i]);
                return isCircle(obj[i]);
            }
        }
    }
    return true;
}

console.log(isCircle(obj));