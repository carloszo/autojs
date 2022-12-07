/*
app.openAppSetting(packageName)
packageName {string} 应用包名
return {Boolean}
打开应用的详情页(设置页)。如果找不到该应用，返回false; 否则返回true。

该函数也可以作为全局函数使用。

app.startActivity(name)
name {string} 活动名称，可选的值为:
console 日志界面
settings 设置界面
启动Auto.js的特定界面。该函数在Auto.js内运行则会打开Auto.js内的界面，在打包应用中运行则会打开打包应用的相应界面。

app.startActivity("console");

app.openUrl(url)
url {string} 网站的Url，如果不以"http://"或"https://"开头则默认是"http://"。
用浏览器打开网站url。

如果没有安装浏览器应用，则抛出ActivityNotException。
 */
app.openAppSetting("com.ss.android.ugc.aweme.lite")
//跳转到抖音极速版设置界面