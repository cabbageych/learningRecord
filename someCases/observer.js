//一道相关测试题
/*var Event = {
    on: function (eventName, callback) {
        if(!this.events){
            this.events = [];
        }
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    },
    emit: function (eventName) {
        for(let i = 0;i<this.events[eventName].length;i++){
            this.events[eventName][i](arguments[1]);
        }
    }
};
Event.on('test', function (result) {
    console.log(result);
});
Event.on('test', function () {
    console.log('test');
});
Event.emit('test', 'hello world'); // 输出 'hello world' 和 'test'*/
//题目二
var Event = {
    on: function (eventName, callback) {
        if(!this.events){
            this.events = [];
        }
        this.events[eventName] = callback;
    },
    emit: function (eventName) {
        if(typeof this.events[eventName] == 'function'){
            this.events[eventName]();
        }
        
    }
};

var person1 = {};
var person2 = {};
Object.assign(person1, Event);
Object.assign(person2, Event);
person1.on('call1', function () {
    console.log('person1');
});
person2.on('call2', function () {
    console.log('person2');
});
person1.emit('call1'); // 输出 'person1'
person1.emit('call2'); // 没有输出
person2.emit('call1'); // 没有输出

//添加一个取消订阅
person1.remove = function(callback){
    for(let i in this.events){
        if(i === callback){
            delete this.events[i];
        }
    }
}
person1.remove("call1");
person1.emit('call1');


