// images.findColorEquals(img, color[, x, y, width, height])
// img {Image} 图片
// color {number} | {string} 要寻找的颜色
// x {number} 找色区域的左上角横坐标
// y {number} 找色区域的左上角纵坐标
// width {number} 找色区域的宽度
// height {number} 找色区域的高度
// 返回 {Point}
// 在图片img指定区域中找到颜色和color完全相等的某个点，并返回该点的左边；如果没有找到，则返回null。

// 找色区域通过x, y, width, height指定，如果不指定找色区域，则在整张图片中寻找。

// 该函数也可以作为全局函数使用。

if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
while(true){
    var img = captureScreen()
    var point = images.findColorEquals(img,"#fe405f")
    if(point){
        log("找到颜色，坐标为("+point.x+","+point.y+")")
    }else{
        log("没找到")
    }
    sleep(2000)
}