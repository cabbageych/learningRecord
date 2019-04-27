/*
如果一个对象可以添加新的属性，则这个对象是可扩展的。
让这个对象变的不可扩展，也就是不能再有新的属性
我们都知道，我们可以通过属性描述符创建属性不可配置对象 如何让对象属性不可配置或枚举,
在这里我们可以创建不可扩展属性的对象
*/
/** 
扩展特性
Object.isExtensible 方法
Object.preventExtensions 方法
*/
var object01 = {};
console.log(Object.isExtensible(object01));  //true(默认可扩展)


//Object.isExtensible
object01 = Object.create({},{
    "a":{
        value:"cabbage01",
        configurable:true, //可配置
        enumerable:true, //可枚举
        writable:true //可写
    }
});
//对象是否可以扩展和对象的属性是否可以配置无关
object01 = Object.create({},{
    "a":{
        value:"cabbage02",
        configurable:false,
        enumerable:true,
        writable:true
    }
});
console.log(Object.isExtensible(object01));  //true
console.log(object01);

//Object.preventExtensions

Object.preventExtensions(object01);
console.log(Object.isExtensible(object01));  //false
try{
    Object.defineProperty(object01,"attr01",{value:"cabbage01"});
}catch(e){
    console.log("Error:cant't definedProperty!");
}
