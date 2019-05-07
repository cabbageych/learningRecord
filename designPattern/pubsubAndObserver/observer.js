/**
 * 观察者模式指的是一个对象（Subject）维持一系列依赖于它的对象（Observer），
 * 当有关状态发生变更时 Subject 对象则通知一系列 Observer 对象进行更新。
 */

 //被观察对象
function Subject() {
    this.observers = [];
}
Subject.prototype = {
    add: function (observer) {
        this.observers.push(observer);
    },
    remove: function (observer) {
        for (let i = 0; i < this.observers.length; i++) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
            }
        }
    },
    //更新通知
    notify: function () {
        console.log("发生内容更新!");
        let temp = this.observers;
        for (let i = 0; i < temp.length; i++) {
            temp[i].update();
        }
    }
}

//观察者
function Observer(name){
    this.name = name;
}

Observer.prototype = {
    update:function(){
        console.log("事件订阅者 "+this.name);
    }
}

//定义观察者
var observer01 = new Observer("cabbage01");
var observer02 = new Observer("cabbage02");
var observer03 = new Observer("cabbage03");

//定义被观察者
var subject = new Subject();
subject.add(observer01);
subject.add(observer02);
subject.add(observer03);

//执行更新
subject.notify();

//移除观察者
subject.remove(observer02);
subject.notify();