function test() {
    this.name = 'cabbage';
    this.hello = function () {
        console.log('hello ', this.name);
    }
}

function New(target) {
    let obj = {};
    obj.__proto__ = target.prototype;
    let temp = target.call(obj);
    //console.log(temp);
    return temp ? temp : obj;
}

let a = New(test);
a.hello();