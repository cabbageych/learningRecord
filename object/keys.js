//Object.keys()
//传入对象，返回属性名
let a = { name: 'cabbage', age: 22 };
console.log(Object.keys(a)); //[ 'name', 'age' ]

//传入字符串，返回索引
let b = "cabbage";
console.log(Object.keys(b)); //[ '0', '1', '2', '3', '4', '5', '6' ]

//传入数组，返回索引
let c = [1, 2, 'ca', 3, 4, 5];
console.log(Object.keys(c)); //[ '0', '1', '2', '3', '4', '5' ]

//传入构造函数，返回空数组或是属性名
function d(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
console.log(Object.keys(d)); //[]

let e = new d('cabbage', 21, 'man');
console.log(Object.keys(e)); //[ 'name', 'age', 'gender' ]

let f = new d('cabbage', 21);
console.log(Object.keys(f)); //[ 'name', 'age', 'gender' ]


let g = null;
console.log(g == null);
//console.log(Object.keys(g)); //error