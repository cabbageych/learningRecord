function people() {
    this.name = 'cabbage',
        this.eat = function (arg) {
            console.log('eat ' + arg);
            return this;
        },
        this.play = function (arg) {
            console.log('play ' + arg);
            return this;
        },
        this.sleep = function () {
            console.log('sleep!');
        }
}

let cabbage = new people();
cabbage.eat('beef').play('backetball').sleep();