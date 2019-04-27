/*****
 * 一个对象是冻结的（frozen）是指它不可扩展，所有属性都是不可配置的（non-configurable），
 * 且所有数据属性（data properties）都是不可写的（non-writable）。
 * 或者说 冻结对象是指那些不能添加新的属性，不能修改已有属性的值，不能删除已有属性，
 * 以及不能修改已有属性的可枚举性、可配置性、可写性的对象。也就是说，这个对象永远是不可变的。
 * ******/
var object01 = {
    name:"cabbage",
    age:22,
    child:{
        name:"cabbage child"
    }
}

//Object.isFrozen

//默认非冻结
console.log(Object.isFrozen(object01)); //false

console.log(object01.name,object01.age); //cabbage 22


//Object.freeze
Object.freeze(object01);
//修改无效
object01.name = "cabbage change";
object01.age = 21;
console.log(Object.isFrozen(object01));  //true
console.log(object01.name,object01.age);  //cabbage 22