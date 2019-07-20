let a = {
    ['window']: 'test',
    print: function () {
        console.log(this['window']);
    }
}
a.print();
let b = a.print;
b();