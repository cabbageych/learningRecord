/*
const obj = {
    id: 1,
    arr: [1, 2, 3],
    innerObj: { id: 1, value: 2 },
    objArr: [{ id: 2, value: 4 }, { id: 3, value: 6 }]
}
getValue(obj, "id")  // 1
getValue(obj, "arr0")  // 1
getValue(obj, "objArr1.id")  // 3
*/

const obj = {
    id: 1,
    arr: [6, 2, 3],
    innerObj: { id: 1, value: 2 },
    objArr: [{ id: 2, value: 4 }, { id: 3, value: 6 }]
}

function getValue(obj, arg) {
    let reg = /(\d)/;
    if (arg.indexOf('.') != -1) {
        let arr = arg.split(".");
        if (reg.test(arr[0])) {
            let num = arg.match(reg)[1];
            let attr = arr[0].replace(reg, "");
            return obj[attr][num][arr[1]];
        } else {
            return obj[arr[0]][arr[1]];
        }
    } else if (reg.test(arg)) {
        let num = arg.match(reg)[1];
        let attr = arg.replace(reg, "");
        return obj[attr][num];
    } else {
        return obj[arg];
    }
}


console.log(getValue(obj, "id"));  // 1
console.log(getValue(obj, "arr0"));  // 6
console.log(getValue(obj, "objArr1.id"));  // 3