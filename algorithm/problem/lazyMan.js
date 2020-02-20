/**
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
以此类推。 
*/

function lazyMan(name) {
    let cbArgs = [];
    //console.log(name);
    let _this = this;
    let isSleep = false;
    let consoleName = false;
    let isSleepFirst = false;


    this.sayHello = function () {
        if (!consoleName) {
            console.log("Hi! This is " + name);
            consoleName = !consoleName;
        }
    }


    this.sleepFirst = function (interval) {
        isSleepFirst = !isSleepFirst;
        setTimeout(() => {
            console.log("wake up after " + interval + "ms");
            _this.sayHello();
            for (let i = 0; i < cbArgs.length; i++) {
                console.log("eat " + cbArgs[i]);
            }
        }, interval);
        return this;
    }

    this.sleep = function (interval) {
        _this.sayHello();
        isSleep = !isSleep;
        setTimeout(() => {
            console.log("weak up after " + interval + "ms!");
            if (cbArgs.length) {
                for (let i = 0; i < cbArgs.length; i++) {
                    console.log("eat " + cbArgs[i]);
                }
            }
        }, interval);
        return _this;
    }

    this.eat = function (food) {
        if (isSleep || isSleepFirst) {
            cbArgs.push(food);
        } else {
            _this.sayHello();
            console.log("eat " + food);
        }

        return _this;
    }
    return this;
}

lazyMan("cabbage1").eat("hamburgers").eat("fruit");
lazyMan("cabbage2").sleep(2000).eat("something");
lazyMan("cabbage3").sleepFirst(3000).eat("something");
