let url = "http://localhost:8008/index.jsp";
let reg = /\/([\.|\w]*$)/;
console.log(url.match(reg)[1]);