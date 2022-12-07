var excutionObject = engines.execScriptFile("/sdcard/脚本/demo.js");
sleep(1500);
var engineObject =excutionObject.getEngine()
log(engineObject.isDestroyed())
log(engineObject.cwd())
log(engineObject.getSource())
//engineObject.forceStop()