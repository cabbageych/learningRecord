console.log([] instanceof Object);
let a = [1, 2, 3, [1, 2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3], 5, 6];
console.log(JSON.parse(JSON.stringify(a)));

function fn() {
    console.log(arguments.length);
    let [...a] = arguments;
    console.log(a);
}

fn(1, 2, 3, 4, 5, 6);
