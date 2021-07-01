/**
function counter(){...}
let a = counter(3);
a.add();//4
a.sub();//3
a.add();//4
a.add();//5
 */

function counter(arg) {
    this.num = arg;
    this.add = function () {
        ++this.num;
        console.log(this.num)
    }
    this.sub = function () {
        --this.num;
        console.log(this.num)
    }
    return this;
}

let a = counter(3);

a.add();
a.sub();
a.add();
a.add();