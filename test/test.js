let a = [
    { age: 16, name: 'cabbage' },
    { age: 11, name: 'cabbage' },
    { age: 15, name: 'cabbage' },
    { age: 1, name: 'cabbage' }
];

function fn(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (fn(arr[i]) == fn(arr[j])) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

console.log(fn(a, (a) => a.age));