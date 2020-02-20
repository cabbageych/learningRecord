//arguments.callee
function test(arg) {
    if (arg > 10) {
        return;
    } else {
        console.log(arg);
        arguments.callee(arg + 1);
    }
}

test(0);


//arguments.callee.caller

function call(){
    fn('from call!')
}

function fn(arg){
    console.log('fn',arg,arguments.callee.caller);
}
call();