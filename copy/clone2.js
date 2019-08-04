let a = {
    name: 'cabbage',
    age: '18',
    inner: {
        name: 'cabbage02',
    },
    attr01: null,
    attr02: undefined
}

function clone(a) {
    let temp = {};
    for (let i in a) {
        if (Object.prototype.hasOwnProperty.call(a, i)) {
            if (typeof a[i] == 'object') {
                temp[i] = clone(a[i]);
            } else {
                temp[i] = a[i];
            }
        }

    }
    return temp;
}
console.log(clone(a));