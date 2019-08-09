function singleton(arg) {
    this.name = arg;
    this.instance = null;
}

singleton.getInstance = function (arg) {
    if (!this.instance) {
        this.instance = new singleton(arg);
    }
    return this.instance;
}

let a = singleton.getInstance('cabbage');
let b = singleton.getInstance('xixihaha');

console.log(a.name, b.name, a === b);