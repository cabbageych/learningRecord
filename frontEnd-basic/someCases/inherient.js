function Parent(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.say = function (arg) {
        console.log('hello', arg);
    }
    this.eat = function (arg) {
        console.log('eat', arg);
    }
}
Parent.prototype = {
    play: function (arg) {
        console.log('play', arg);
    }
}

function child(parent, name, age, sex) {
    this.parent = parent;
    Parent.call(this, name, age, sex);
}

child.prototype = Parent.prototype;
child.prototype.constructor = child;

let temp = new child('cabbage', 'cabbage02', '18', 'man');
//console.log(child.prototype.constructor);
console.log(temp.parent, temp.name, temp.sex, temp.age);
temp.play('basketball');
temp.eat('vegetables');