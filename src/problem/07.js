/**
依赖模块的排序

模块结构为{id:1,deps:[2,3]},id即模块的唯一标识，deps包含该模块所依赖模块的id，
要求对模块进行排序，结果中任何元素都要在它的依赖模块之后
 
输入:
let target = [
    {id: 1, deps: [2,3],}
    {id: 2},
    {id: 3, deps:[2]}
]
输出：
{
    {id: 2},
    {id: 3,deps:[2]},
    {id: 1,deps:[2,3]}
}
 */

let target = [
    { id: 1, deps: [2, 3] },
    { id: 2 },
    { id: 3, deps: [2] }
]

function sort(arr) {
    console.log("Before sort:");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let temp = arr[j].deps;
            if (!temp) {
                //console.log(i,j,temp,arr[j]);
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            } else if (temp.indexOf(arr[i].id) == -1) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }



    console.log("After sort:");
    console.log(arr);
}

sort(target);