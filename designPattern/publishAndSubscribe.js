/*发布订阅模式*/
/*
发布订阅模式指的是希望接收通知的对象（Subscriber）基于一个主题通过自定义事件订阅主题，
被激活事件的对象（Publisher）通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。
*/
//发布者
var pub = {
    publish: function () {
        dep.notify();
    }
}

//三个订阅者subscrib
var sub1 = { update: function () { console.log(1) } };
var sub2 = { update: function () { console.log(2) } };
var sub3 = { update: function () { console.log(3) } };

//一个主题对象
function Dep() {
    this.subs = [sub1, sub2, sub3];
}
Dep.prototype.notify = function () {
    this.subs.forEach(function (sub) {
        sub.update();
    });
}

//发布者发布消息，主题对象执行notify方法，进而触发订阅者执行update方法
var dep = new Dep();
pub.publish();