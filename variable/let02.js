//暂时性死区
let a = 666;
function fn() {
    console.log(a); //a is not defined
    let a = 888;
}
fn();
