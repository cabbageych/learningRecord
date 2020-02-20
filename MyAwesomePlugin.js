module.exports = class MyAwesomePlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        console.log('Hello world!');
        compiler.hooks.compilation.tap('HelloCompilationPlugin', compilation => {
            // 现在，通过 compilation 对象，我们可以 tap(触及) 到各种可用的 hooks 了
            compilation.hooks.finishModules.tap('HelloCompilationPlugin', (module) => {
                console.log('hello webpack!');
            });
        });
    }
};
