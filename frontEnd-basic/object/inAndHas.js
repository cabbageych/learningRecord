function obj() {
    this.name = 'cabbage';
    this.age = 18;
    this.play = function (arg) {
        console.log('play ' + arg);
    }
}
obj.prototype={
    attr:'hello cabbage!',
    eat:function(arg){
        console.log('eat '+arg);
    }
}

let a = new obj();
//in可以检测prototype中的属性
console.log('attr' in a,a.hasOwnProperty('attr')); //true false
console.log('name' in a,a.hasOwnProperty('name'));  //true true