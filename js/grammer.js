'use strict'
function a(){
    console.log("a");
}
function b(){
    console.log("b");
}
if(0<100<0){  //0<100返回true，true<0 ==> 1<0  结果为false
    a();
}else{
    b();
}
if(0<1<1){   //0<1返回true， true<1 ==> 1<1 结果为false
    a();
}else{
    b();
}
