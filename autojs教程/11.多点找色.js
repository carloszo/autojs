/*
images.findMultiColors(img, firstColor, colors[, options])
img {Image} 要找色的图片
firstColor {number} | {string} 第一个点的颜色
colors {Array} 表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
options {Object} 选项，包括：
region {Array} 找色区域。是一个两个或四个元素的数组。(region[0], region[1])表示找色区域的左上角；region[2]*region[3]表示找色区域的宽高。如果只有region只有两个元素，则找色区域为(region[0], region[1])到屏幕右下角。如果不指定region选项，则找色区域为整张图片。
threshold {number} 找色时颜色相似度的临界值，范围为0255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.01.0)的换算为 similarity = (255 - threshold) / 255.
*/ 
//例子
// images.findMultiColors(img, "#123456", [[10, 20, "#ffffff"], [30, 40, "#000000"]])

if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
var img =  images.captureScreen()
// var color = images.pixel(img,50,1000)
// log(colors.toString(color))

//  var point = images.findMultiColors(img, "#fd1b6c", [[20, 0, "#fd1b6c"],])
//  log(point)

 images.save(img, "/sdcard/脚本/关闭.jpg", "jpg", 50);

