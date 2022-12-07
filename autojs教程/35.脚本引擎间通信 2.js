var e = engines.execScriptFile("/sdcard/脚本/demo.js")
sleep(2000)
var engineObject = e.getEngine()
engineObject.emit("say","你好啊")