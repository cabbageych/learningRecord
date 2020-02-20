/**
 * 1.export与export default均可用于导出常量、函数、文件、模块等
 * 2.你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
 * 3.在一个文件或模块中，export、import可以有多个，export default仅有一个
 * 4.通过export方式导出，在导入时要加{ }，export default则不需要
 */

 /**
  * 使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名
  * 本质上，export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
  * import any from "./a.js"
  */