//实现一个事件类Event，包含下面功能：绑定事件、解绑事件和派发事件

function Event() {
    this.CB = [];
    this.onCB = function (name, fn) {
        if (name in this.CB) {
            console.log('registed!')
        } else {
            this.CB[name] = fn;
        }
    }
    this.rmCB = function (name) {
        if (!name in this.CB) {
            console.log('error!');
        } else {
            delete this.CB[name];
        }
    }
    this.emitCB = function (name) {
        this.CB[name]();
    }
    return this;
}

let a = Event();

a.onCB('hello', () => console.log('hello cabbage!'));
a.emitCB('hello');
a.onCB('hello', () => { 'test' });
a.rmCB('hello');
