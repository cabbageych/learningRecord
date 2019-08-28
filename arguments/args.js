function fn() {
    console.log(arguments);
    [...a] = arguments;
    console.log(a);
    console.log(arguments.length);
}

fn(1, 2, 3, 4, 5, 6, 7, 8);