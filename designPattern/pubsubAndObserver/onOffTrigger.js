function Event() {
    this.callbacks = {};
    this.onces = {};
    this.oncesCount = {};
}
Event.prototype = {
    on: function (name, callback) {
        this.callbacks[name] = callback;
        this.onces[name] = false;
        this.oncesCount[name] = 1;
    },
    emit: function (name) {
        if (typeof this.callbacks[name] == 'function') {
            if (this.onces[name]) {
                this.oncesCount[name] = ++this.oncesCount[name];
            }
            if (this.oncesCount[name] <= 2) {
                this.callbacks[name](arguments[1]);
            }else{
                console.log('for only once!');
            }
        } else {
            console.log('Not a function!');
        }

    },
    remove: function (name) {
        delete this.callbacks[name];
    },
    once: function (name) {
        this.onces[name] = true;
    }
}

let e1 = new Event();
e1.on('hello', () => {
    console.log('hello cabbage!');
});
e1.on('print', function (arg) {
    console.log('print: ' + arg);
})
e1.once('print');
e1.emit('print', 'arg001');
e1.emit('hello');
e1.remove('hello');
e1.emit('hello');
e1.emit('print');
