/*
engines.execScript(name, script[, config])
name {string} 要运行的脚本名称。这个名称和文件名称无关，只是在任务管理中显示的名称。
script {string} 要运行的脚本内容。
config {Object} 运行配置项
delay {number} 延迟执行的毫秒数，默认为 0
loopTimes {number} 循环运行次数，默认为 1。0 为无限循环。
interval {number} 循环运行时两次运行之间的时间间隔，默认为 0
path {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。
在新的脚本环境中运行脚本 script。返回一个ScriptExectuion对象。

所谓新的脚本环境，指定是，脚本中的变量和原脚本的变量是不共享的，并且，脚本会在新的线程中运行。

最简单的例子如下：

engines.execScript("hello world", "toast('hello world')");
*/
//engines.execScript('back to home','home();toast("返回桌面")')
// engines.execScript("hello world", "toastLog('hello world')",{
//     delay:2000,
//     loopTimes:3,
//     interval:1000
// });
// 用字符串来编写脚本非常不方便，可以结合 Function.toString()的方法来执行特定函数:
function fun(){
    toastLog("你好")
}
engines.execScript("hello world", "fun();\n"+fun.toString(),{
    delay:2000,
    loopTimes:3,
    interval:1000
});