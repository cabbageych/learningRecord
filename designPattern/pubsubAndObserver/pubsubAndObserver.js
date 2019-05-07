//观察者
/**
 * 观察者模式 在软件设计中是一个对象，维护一个依赖列表，当任何状态发生改变自动通知它们。
 *  */
function subject(){
    this.observers = [];
}

subject.prototype = {
    addObservers:function(observer){
        this.observers.push(observer);
    },
    notify:function(){
        console.log("通知:状态发生改变。")
        this.observers.forEach(function(observer){
            observer.update();
        })
    }
};

var observer01 = {update:function(){console.log("observer01 接收到通知。")}};
var observer02 = {update:function(){console.log("observer02 接收到通知。")}};
var observer03 = {update:function(){console.log("observer03 接收到通知。")}};

var Subject = new subject();
Subject.addObservers(observer01);
Subject.addObservers(observer02);
Subject.addObservers(observer03);
//Subject.notify();

//发布订阅
/**
 * 在发布-订阅模式，消息的发送方，叫做发布者（publishers），消息不会直接发送给特定的接收者，叫做订阅者。
 */

 //两者区别
 /**
  * 1、在观察者模式中，观察者是知道Subject的，Subject一直保持对观察者进行记录。然而，在发布订阅模式中，
  * 发布者和订阅者不知道对方的存在。它们只有通过消息代理进行通信。2、在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。
  * 3、观察者模式大多数时候是同步的，比如当事件触发，Subject就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的
  *（使用消息队列）。4、观察者模式需要在单个应用程序地址空间中实现，而发布-订阅更像交叉应用模式。
  */

function Dep(){
    this.subs = [];
}

Dep.prototype = {
    addSub:function(sub){
        this.subs.push(sub);
    },
    notify:function(){
        console.log("发布新的变更消息!");
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}

var dep = new Dep();

function sub(name){
    this.name = name;
}
sub.prototype = {
    update:function(){
        console.log(this.name+" 收到更新的消息!");
    }
}

dep.addSub(new sub("sub01"));
dep.addSub(new sub("sub02"));
dep.addSub(new sub("sub03"));

var pub = {
    publish:function(){
        dep.notify();
    }
}
pub.publish();