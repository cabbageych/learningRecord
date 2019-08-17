
/**
 * 箭头函数的this指向外层函数，如果箭头函数没有外层函数，则指向window。
 */
var name = 'window'

var person1 = {
    name: 'person1',
    show1: function () {
        console.log(this.name)
    },
    show2: () => console.log(this.name),
    show3: function () {
        return function () {
            console.log(this.name)
        }
    },
    show4: function () {
        return () => console.log(this.name)
    }
}
var person2 = { name: 'person2' }
//node环境下，window换成undefined
person1.show1()  //person1
person1.show1.call(person2)  //person2

person1.show2()  //window
person1.show2.call(person2)  //window

person1.show3()()  //window
person1.show3().call(person2)  //person2
person1.show3.call(person2)()  //window

person1.show4()()  //person1
person1.show4().call(person2)  //person1
person1.show4.call(person2)()  //person2


var a = 'cabbage';
function test() {
    this.a = 'emmmm';
    this.fn = () => {
        console.log(this.a);  
    }
    this.fn();
}
test();
