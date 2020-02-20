let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//删除
console.log(arr.splice(3, 1), arr);

//替换
console.log(arr.splice(0, 1, 'cabbage'), arr);

//插入
console.log(arr.splice(0, 0, '21', 'xixihaha'), arr);