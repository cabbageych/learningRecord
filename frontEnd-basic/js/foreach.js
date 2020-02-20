let arr = [11, 22, 3, 5, 66];

arr.forEach((ele) => {
    console.log(ele);
})

/*arr.forEach((element) => {
    if (element == 3) { //在3处断开，之后继续输出
        return;
    }
    console.log(element);
});*/

console.log("......");
console.log(arr.forEach((ele) => {
    
}))
console.log("......");

/*arr.forEach((ele) => {
    if (ele == 22) {
        break;  //Illeagle break statement
    }
    console.log(ele);
});*/


let arg = 'cabbage';
let temp = arr.forEach((ele)=>{
    console.log(ele*2);
    console.log(arg);
},arg);
console.log(temp);  //undefined

