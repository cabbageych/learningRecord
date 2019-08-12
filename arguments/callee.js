function fn(){
    let a = 0;
    (function(){
        if(a<10){
            ++a;
            console.log(a);
            arguments.callee();
        }
    })();
}

fn();