//node中的export(commonJS规范)
/**
 * 用一句话来说明就是，require方能看到的只有module.exports这个对象，它是看不到exports对象的，
 * 而我们在编写模块时用到的exports对象实际上只是对module.exports的引用。
 */

//在node中，module.exports初始的时候置为{},exports也指向这个空对象。

module.exports.hello = function (arg) {
    console.log('module.exports hello', arg);
}
exports.hello = function (arg) {
    console.log('exports hello', arg);
}
//上述两种写法效果一致，两者均指向同一个地址块

module.exports = function (arg) {
    console.log('module.exports hello02', arg);
}

exports = function (arg) {
    console.log('exports hello02', arg);
}
//上述两种写法效果不一致，两者指向不同的地址块，require只能对module.exports中的内容进行引用

