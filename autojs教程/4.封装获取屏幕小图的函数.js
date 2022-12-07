// images.clip(img, x, y, w, h)
// img {Image} 图片
// x {number} 剪切区域的左上角横坐标
// y {number} 剪切区域的左上角纵坐标
// w {number} 剪切区域的宽度
// h {number} 剪切区域的高度
// 返回 {Image}
// 从图片img的位置(x, y)处剪切大小为w * h的区域，并返回该剪切区域的新图片。

// var src = images.read("/sdcard/1.png");
// var clip = images.clip(src, 100, 100, 400, 400);
// images.save(clip, "/sdcard/clip.png");
//获取截图权限
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

function getImg(x1,y1,x2,y2,path){
    var screen = images.captureScreen() //截图
    var img = images.clip(screen,x1,y1,x2-x1,y2-y1)
    img.saveTo(path)
    img.recycle()
}
getImg(556,929,665,984,"/sdcard/脚本/支付宝.png")