//主题对象，发布者与订阅者之间的桥梁
function Dep(){
    this.subs = [];
}
Dep.prototype = {
    add:function(sub){
        this.subs.push(sub);
    },
    notify:function(){
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}

//订阅者
var sub1 = {update:function(){console.log("sub1 订阅XX一份")}};
var sub2 = {update:function(){console.log("sub2 订阅XX一份")}};
var sub3 = {update:function(){console.log("sub3 订阅XX一份")}};

//发布者
var pub = {
    publish:function(){
        console.log("XX发布！");
        dep.notify();
    }
};

var dep = new Dep();
dep.add(sub1);
dep.add(sub2);
dep.add(sub3);
pub.publish();