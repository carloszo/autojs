//返回最近一次监测到的正在运行的应用的包名
log(currentPackage())

//返回最近一次监测到的正在运行的Activity的名称
log(currentActivity())

// 设置剪贴板内容
setClip("hello world")

// 返回系统剪贴板的内容。
log("剪贴板内容为:"+getClip())

//toast停留2秒
var _toast_=toast;
toast = function(message){
    _toast_(message);
    sleep(2000)
}
for(var i=0;i<20;i++){
    toast(i)
}