/*
images.detectsColor(image, color, x, y[, threshold = 16, algorithm = "diff"])
image {Image} 图片

color {number} | {string} 要检测的颜色

x {number} 要检测的位置横坐标

y {number} 要检测的位置纵坐标

threshold {number} 颜色相似度临界值，默认为16。取值范围为0~255。

algorithm {string} 颜色匹配算法，包括:

"equal": 相等匹配，只有与给定颜色color完全相等时才匹配。

"diff": 差值匹配。与给定颜色的R、G、B差的绝对值之和小于threshold时匹配。

"rgb": rgb欧拉距离相似度。与给定颜色color的rgb欧拉距离小于等于threshold时匹配。

"rgb+": 加权rgb欧拉距离匹配(LAB Delta E)。

"hs": hs欧拉距离匹配。hs为HSV空间的色调值。

返回图片image在位置(x, y)处是否匹配到颜色color。用于检测图片中某个位置是否是特定颜色。

一个判断微博客户端的某个微博是否被点赞过的例子：
*/

if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
var img =  images.captureScreen()
if(images.detectsColor(img,"#fe466f", 77, 457)){
    log("视频页")
}
