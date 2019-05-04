function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}
console.log(add(1)(2)(3));

function add02(){
    if(arguments.length == 1){
        var x = arguments[0];
        return function(y){
            return x+y;
        }
    }else{
        return arguments[0] + arguments[1];
    }
}

console.log(add02(1,7));