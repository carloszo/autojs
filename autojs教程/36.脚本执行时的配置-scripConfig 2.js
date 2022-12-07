var excutionObject = engines.execScriptFile("/sdcard/脚本/demo.js",{
    loopTimes:10,
    interval:1000
});
sleep(2000)
var scripConfigObject =excutionObject.getConfig()
log(scripConfigObject.delay)
log(scripConfigObject.interval)
log(scripConfigObject.loopTimes)
log(scripConfigObject.getPath())
