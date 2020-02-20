let arg = 1234567890;

let reg = /(\d)(?=(\d{3})+$)/g;
console.log(arg.toString().replace(reg,'$1,'));