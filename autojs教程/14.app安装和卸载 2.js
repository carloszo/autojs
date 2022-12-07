/* 
app.uninstall(packageName)
packageName {string} 应用包名
卸载应用。执行后会会弹出卸载应用的提示框。如果该包名的应用未安装，由应用卸载程序处理，可能弹出"未找到应用"的提示。

//卸载QQ
app.uninstall("com.tencent.mobileqq");

//安装
app.viewFile(path)
path为apk文件地址
例子：
app.viewFile("/sdcard/脚本/1.apk")
*/