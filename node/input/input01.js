let readline = require('readline');

let input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//输入一行
input.on('line', function (line) {
    switch (line.trim()) {
        case '01': console.log(line);
            break;
        case '02': console.log(line);
            break;
        default: console.log('default');
            break;
    }
});

//输入结束
input.on('close',function(){
    console.log('end');
    process.exit(0);
});