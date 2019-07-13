let readline = require('readline');

let input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let nums = 0;
var data = [];
input.on('line', function (line) {
    if(first){
        nums = parseInt(line);
        first = false;
    }else{
        data.push(line);
    }
    
});

function clock() {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            //console.log(data[i][j]);
            let str = data[i];
            let arr = str.split("");
            if (j != 2 && j != 5) {
                switch (j) {
                    case 0: if (data[i][j] > '2') {
                        arr[j] = '0';
                        data[i] = arr.join("");
                    };
                        break;
                    case 1: if (data[i][j] > '3') {
                        if(data[i][0]=='2'){
                            arr[0] = '0';
                        }
                        data[i] = arr.join("");
                    }
                        break;
                    case 3: if (data[i][j] > '5') {
                        arr[j] = '0';
                        data[i] = arr.join("");
                    }
                        break;
                    case 4: if (data[i][j] > '9') {
                        arr[j] = '0';
                        data[i] = arr.join("");
                    }
                        break;
                    case 6: if (data[i][j] > '5') {
                        arr[j] = '0';
                        data[i] = arr.join("");
                    }
                        break;
                    case 7: if (data[i][j] > '9') {
                        arr[j] = '0';
                        data[i] = arr.join("");
                    }
                        break;
                }
            }
        }
    }
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

input.on('close', function () {
    clock();
    process.exit(0);
})