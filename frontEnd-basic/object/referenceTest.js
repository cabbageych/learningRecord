let temp = {};
let arr = [];
let arr1 = [];
//每次都是对同一个引用进行操作，即对同一块内存地址进行值的修改
for (let i = 0; i < 3; i++) {
    temp.name = "cabbage";
    temp.age = i;
    arr.push(temp);
}
console.log(arr);  //三个元素一样，都是{ name: 'cabbage', age: 2 }


//每次对不同的引用进行操作
for(let i = 0;i<3;i++){
    temp.name = 'cabbage'+i;
    temp.age = i;
    arr1.push(temp);
    //更新temp的内存地址
    temp = {};
}
console.log(arr1); //三个不同的值