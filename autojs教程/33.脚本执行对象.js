var excutionObject = engines.execScriptFile("/sdcard/脚本/demo.js");
sleep(1500);
log("这是引擎对象:"+excutionObject.getEngine());
log("这是引擎配置对象:"+excutionObject.getConfig());