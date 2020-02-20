/**
 * package.json,commonJS规范用于描述包
 * Node.js 在调用某个包时，会首先检查包中 package.json 文件的 main 字段，将其作为
 * 包的接口模块，如果 package.json 或 main 字段不存在，会尝试寻找 index.js 或 index.node 作 为包的接口。
 */
let myPackage = require('./somePackage');

myPackage.hello();