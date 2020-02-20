let a = {
    name: 'cabbage',
    age: 18,
    inner: {
        name: 'cabbage inner',
        age: 18
    },
    fn:function(){
        console.log("hello cabbage!");
    }
}

let b = {
    name: 'cabbage',
    age: undefined,
    inner: {
        name: 'cabbage inner',
        age: 18
    }
}



console.log(JSON.stringify(a)); //转为字符串时，自动去掉函数
console.log(JSON.stringify(b)); //转为字符串时，自动去掉键值为undefined的属性