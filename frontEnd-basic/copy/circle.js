var object = {
    name: "cabbage",
    age: 22
};
object.to = object;
//console.log(object.to);
var arr = [];
var circle = false;
function isCircle(obj) {
    for (let i in obj) {
        if (typeof obj[i] == 'object') {
            if (arr.indexOf(obj[i]) != -1) {
                //console.log(arr,obj[i]);
                circle = true;
                return;
            } else {
                arr.push(obj[i]);
                isCircle(obj[i]);
            }
        }
    }
}
isCircle(object);
//console.log(circle);

//clone with circle
var b = {};
function clone(temp, object) {
    if (typeof temp != 'object') {
        throw new Error("argA isn't a object!");
    }
    if (typeof object != 'object') {
        throw new Error("argB isn't a object!");
    }
    for (let i in object) {
        if (typeof object[i] == 'object') {
            //判断是否循环，循环则不进入下一次递归，直接赋值
            isCircle(object[i]);
            if (circle) {      
                temp[i] = object[i];
                circle = false;
            } else {
                temp[i] = {};
                clone(temp[i], object[i]);
            }
        } else {
            temp[i] = object[i];
        }
    }
}

clone(b,object);
console.log(object);
console.log(b);