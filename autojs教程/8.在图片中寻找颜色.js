// images.findColor(image, color, options)
// image {Image} 图片
// color {number} | {string} 要寻找的颜色的RGB值。如果是一个整数，则以0xRRGGBB的形式代表RGB值（A通道会被忽略）；如果是字符串，则以"#RRGGBB"代表其RGB值。
// options {Object} 选项包括：
// region {Array} 找色区域。是一个两个或四个元素的数组。(region[0], region[1])表示找色区域的左上角；region[2]*region[3]表示找色区域的宽高。如果只有region只有两个元素，则找色区域为(region[0], region[1])到屏幕右下角。如果不指定region选项，则找色区域为整张图片。
// threshold {number} 找色时颜色相似度的临界值，范围为0255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.01.0)的换算为 similarity = (255 - threshold) / 255.
// 在图片中寻找颜色color。找到时返回找到的点Point，找不到时返回null。
// if(!requestScreenCapture()){
//     toastLog("截图权限获取失败")
//     exit()
// }


/*
var img = images.read("/sdcard/脚本/抖音极速版.png")
var color = images.pixel(img,577,963) //读取某点颜色
log(colors.isSimilar(colors.toString(color),"#fe9cad")) //判断颜色是否相似
*/
//截屏，判断某个区域的颜色
/*


while(true){
    var img = captureScreen()
    sleep(2000)
    var color = images.pixel(img,566,1037) //读取某点颜色
    if(colors.isSimilar(colors.toString(color),"#fe405f")){
        log("可以领取广告")
    }else{
        log("广告未开启")
    }
    
}
*/
/*
if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
while(true){
    var img = captureScreen()
    var point = images.findColor(img,"#fe405f")
    if(point){
        log("找到颜色，坐标为("+point.x+","+point.y+")")
    }
    sleep(2000)
}
*/
//区域找色
//读取本地图片/sdcard/1.png
var img = images.read("/sdcard/脚本/抖音极速版2.png");
//判断图片是否加载成功
if(!img){
    toast("没有该图片");
    exit();
}
//在该图片中找色，指定找色区域为在位置(400, 500)的宽为300长为200的区域，指定找色临界值为4
var point = findColor(img, "#fe405f", {
     region: [400, 500, 300, 200],
     threshold: 4
 });
if(point){
    toast("找到啦:" + point);
}else{
    toast("没找到");
}
