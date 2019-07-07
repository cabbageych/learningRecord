//Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
var object = {};
console.log(object);
object = Object.create({}, {
    "attr01": {
        value: "cabbage01",
        configurable: true,
        writable: true,
        enumerable: true
    },
    "attr02": {
        value: "cabbage02",
        writable: false,
        configurable: false,
        enumerable: true
    }
});
console.log(object);//{ attr01: 'cabbage01', attr02: 'cabbage02' }
object.attr01 = "writable 01";
object.attr02 = "writable 02";
console.log(object);//{ attr01: 'writable 01', attr02: 'cabbage02' }
delete object.attr02;  //configurable为false，则无法删除
console.log(object);  //{ attr01: 'writable 01', attr02: 'cabbage02' }