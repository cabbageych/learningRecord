var a = 66;
function test() {
    var a;
    setTimeout(() => {
        console.log(a);
        a = 5;
    },1000);
    a = 2;
    setTimeout(() => {
        console.log(a);
        a = 7;
    },1000);
    a = 6;
}
test();
console.log(a);
/**
 * result:
 * 66
 * 6
 * 5
 */
