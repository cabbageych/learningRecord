self.addEventListener('message', function (e) {
    //let temp = e.data[0](e.data[1].a,e.data[1].b);
    let temp = eval(e.data[0]+"("+e.data[1].a+","+e.data[1].b+")");
    self.postMessage('Answer: ' + temp);
    //worker内部自身关闭线程
    //self.close();
}, false);
function plus(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}