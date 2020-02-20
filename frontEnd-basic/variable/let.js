let a = 66;
function print() {
    let a = 77;
    console.log(a);
}
function print02(a) {
    var a = 88;
    console.log(a);
}
/*
function print02(){
    let a = 100;
    console.log(a);
}*/

function print03() {
    console.log(a);
}

print();
print02(99);
print02();
print03();
