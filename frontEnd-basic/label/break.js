let count1 = 0;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        ++count1;
    }
}
console.log(count1);//100

let count2 = 0;
breakPoint:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 3 && j == 5)
            break breakPoint;
        ++count2;
    }
}
console.log(count2);//35