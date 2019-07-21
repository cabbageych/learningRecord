let count = 0;
label:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 2 && j == 3)
            continue label;
        ++count;
    }
}
console.log(count); //93

let count2 = 0;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        ++count2;
    }
}
console.log(count2);//100