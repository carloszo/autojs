// if(auto.serivce==null){
//     auto.waitFor()
// }
// sleep(1000)
// //launch("com.ss.android.ugc.aweme.lite")
// app.launch("今日头条极速版")
// waitForPackage(com.ss.android.article.lite,200 )
// log(currentPackage())
// sleep(500)
// exit()
// log("脚本还没停止吗")
// console.show()
// toastLog(app.versionCode);
// toastLog(app.versionName);
// toastLog(app.openAppSetting("com.ss.android.ugc.aweme.lite"))
// toastLog(app.uninstall("com.weipaitang.wpt")) //卸载应用
// launch("com.ss.android.ugc.aweme.lite")
// app.openUrl("www.baidu.com")//打开百度
// app.startActivity("console");//打开autojs日志界面
// setClip("17362952113");//设置剪贴板内容
// toastLog("剪贴板内容为:"+getClip())
// for(var i = 0; i < 100; i++){
//     toast(i);
// }
//气泡消息为异步，遇到循环，会出现关闭脚本后仍有气泡消息出现。比较保险的做法为，保证气泡消息出现后再继续执行循环。
// for(var i = 0; i < 10; i++){
//     toast(i);
//     sleep(2000)
// }
//console.time() //记录运算时间
// for(var i=0;i<20;i++){
//     log(i);
// }
//console.timeEnd() //记录运算时间
//sleep(2000)

//console.clear() // 清除console界面信息
// var num = console.input("请输入一个数字") //输入文本
// toastLog(num)
// var num = console.rawInput("请输入一个数字") //输入文本
// toastLog(num)
// console.setSize(device.width/2,device.height/2)//设置宽和高

// console.setPosition(100,100 ) //设置位置
// // print("hello world")
// log(device.width)
// log(device.height)
// log(device.buildId) //修订版本号
// log(device.broad) // 主板型号
// log(device.brand) // 品牌名
// log(device.getBrightness())//当前亮度
// log(device.getMusicVolume())//当前媒体音量
// log(confirm("需要关机吗？"))//confirm()会弹出一个对话框并让用户选择"是"或"否"
//ui模式
// confirm("要清除所有缓存吗?", function(clear){
//     if(clear){
//          alert("清除成功!");
//     }
// });
// var name = dialogs.rawInput('请输入姓名', 'carlos' )
// alert(name)
// dialogs.build({
//     title: "标题"
// }).on("show", (dialog)=>{
//     toast("对话框显示了");
// }).show();
// dialogs.build({
//     title: "标题",
//     positive: "确定",
//     negative: "取消"
// }).on("cancel", (dialog)=>{
//     toast("对话框取消了");
// }).show();
// events.observeKey()//启动按键监听
// events.onKeyDown('volume_up',function(event){
//     log('音量上键被按下')
// })
// var window = floaty.rawWindow(
//     <frame gravity="center" bg="#ff00ff">
//       <button id="action" w="300dp" h="300dp">
//         按钮
//       </button>
//     </frame>
//   );
// click('扫一扫')
// click('发现')
// sleep(1000)
// click('朋友圈')
// longClick('湖北电信');
// sleep(2000)
// while(!click('不再关注'));
// sleep(2000)
// while(!click('不再关注'));

//scrollUp(0);
// scrollDown()
// setText("你好")
// sleep(1000)
// click('发送')
// input(1,'hello world')
// var app = textStartsWith('快手').find()

// toastLog(app[0].text())
// toastLog(app[1].text())
// console.log(textContains("微信").waitFor())
var name = id('hg4').find().findOne(text('Anni'))
// for(var i=0;i<name.size();i++){
//     log(name[i].text())
// }
log(name.text())
//click(name)
