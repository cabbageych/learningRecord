let myModule = require('./myModule.js');


myModule.sayHello(); //hello null!
myModule.setName('cabbage');
myModule.sayHello(); //hello cabbage!

//require不会重复加载同一个模块， 多次调用require，获得的模块都是同一个
//效果如下：
let myModule02 = require('./myModule.js');
myModule02.setName('cabbage02');
myModule.sayHello(); //hello cabbage02!
myModule02.sayHello(); //hello cabbage02!