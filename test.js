let str = '1234567890';
let reg = /(\d)(?=((\d{3})+$))/g;
console.log(str.replace(reg, '$1,'));