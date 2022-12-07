// images.requestScreenCapture([landscape])
// landscape {boolean} 截屏方向
// true 横屏截图
// false 竖屏截图
// 不指定值，由当前设备屏幕方向决定截图方向
// return {boolean}
// 向系统申请屏幕截图权限，返回是否请求成功,仅需执行一次

// 建议在本软件界面运行该函数，在其他软件界面运行时容易出现一闪而过的黑屏现象。

// 示例:

// //请求截图
// //每次使用该函数都会弹出截图权限请求，建议选择“总是允许”。
// if(!requestScreenCapture()){
//     toast("请求截图失败");
//     exit();
// }
// //连续截图 10 张图片(间隔 1 秒)并保存到存储卡目录
// for(var i = 0; i < 10; i++){
//     captureScreen("/sdcard/screencapture" + i + ".png");
//     sleep(1000);
// }
if(!requestScreenCapture()){
    toastLog("截图权限获取失败")
    exit()
}
captureScreen("/sdcard/脚本/抖音极速版3.png")