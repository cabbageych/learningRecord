
//console.log(window.getComputedStyle(document.getElementById('test'))['width']);
var a =      '121234354657343524';
var b = '48912312312345467586798';
function bigInt(x, y) {
    let a = x.toString().split("");
    let b = y.toString().split("");
    let arr = [];
    while (a.length < b.length) { a.unshift('0'); }
    while (b.length < a.length) { b.unshift('0'); }
    let temp = 0;
    for (let i = b.length - 1; i >= 0; i--) {
        arr[i] = (((+a[i]) + (+b[i]) + temp) % 10).toString();
        //console.log(arr[i]);
        if ((+a[i]) + (+b[i]) + temp >= 10) {
            temp = 1;
        } else {
            temp = 0;
        }
    }
    if (temp === '1') {
        arr.unshift('1');
    }
    console.log(a.join(""));
    console.log(b.join(""));
    console.log(arr.join(""));
}
bigInt(a, b);
