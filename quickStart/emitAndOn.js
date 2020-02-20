const events = require('events');

let emitter = new events.EventEmitter();
emitter.on('hello', () => {
    console.log('hello cabbage!');
})
emitter.on('hello', (arg) => {
    console.log('hello', arg);
});
emitter.on('hello02', () => {
    console.log('singing dancing rap basketball!');
})
emitter.emit('hello', 'world');
emitter.emit('hello02');

//EventEmitter.once()
emitter.once('one', () => {
    console.log('once function.');
})
//只触发一次
emitter.emit('one');
emitter.emit('one');


//EventEmitter.removeAllListener()
emitter.removeAllListeners();
emitter.emit('hello'); //没有输出

