//事件的注册触发
let eventEitter = require('events').EventEmitter;
let event = new eventEitter();

event.on('hello', () => {
    console.log('hello cabbage!');
});

setTimeout(() => {
    event.emit('hello');
});