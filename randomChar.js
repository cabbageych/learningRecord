/**
 * str.charCodeAt():将字符转换成ascii码值
 * String.fromCharCode(str):将ascii码值转换成字符
 */

//console.log('s'.charCodeAt());
let arr = [];
for (let i = 0; i < 9; i++) {
    if (i >= 0 && i < 9)
        arr[i] = (i + 1).toString();
}

for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCharCode(i));
}

for (let i = 97; i <= 123; i++) {
    arr.push(String.fromCharCode(i));
}


function randomChar(){
    let ans=[];
    for(let i = 0;i<5;i++){
        ans.push(arr[Math.floor(Math.random()*arr.length)]);
    }
    console.log(ans.join(""));
}
randomChar();
