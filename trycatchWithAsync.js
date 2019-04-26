var test = new Promise((resolve, reject) => {
    try {
        console.log("enter try...");
        resolve("resolve!");
        //reject("reject!");
        throw new Error("this is an error!");
    } catch (e) {
        console.log(e.message);
    }
});
test.then((val)=>console.log(val),(val)=>console.log(val)).catch((e)=>{console.log("promise catch...")});
function test01(){
    try{
        new Promise(()=>{
            throw new Error("error test02...");
        }).catch((e)=>{console.log(e.message)});
    }catch(e){
        console.log(e.message);
    }
}
test01();