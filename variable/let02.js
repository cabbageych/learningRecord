//暂时性死区
let a = 666;
function fn() {
    //console.log(a); //a is not defined
    let a = 888;
    this.inner = function () {
        console.log(a);
        let a = 999;
    }
}
fn();
let test = new fn();
test.inner();