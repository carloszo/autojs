/*
engines.execScriptFile(path[, config])
path {string} 要运行的脚本路径。
config {Object} 运行配置项
delay {number} 延迟执行的毫秒数，默认为 0
loopTimes {number} 循环运行次数，默认为 1。0 为无限循环。
interval {number} 循环运行时两次运行之间的时间间隔，默认为 0
path {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。
在新的脚本环境中运行脚本文件 path。返回一个ScriptExecution对象。
*/
engines.execScriptFile("/sdcard/脚本/抖音极速版.js")