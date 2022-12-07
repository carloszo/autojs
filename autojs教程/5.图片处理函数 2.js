// images.resize(img, size[, interpolation])
// [v4.1.0新增]

// img {Image} 图片

// size {Array} 两个元素的数组[w, h]，分别表示宽度和高度；如果只有一个元素，则宽度和高度相等

// interpolation {string} 插值方法，可选，默认为"LINEAR"（线性插值），可选的值有：

// NEAREST 最近邻插值
// LINEAR 线性插值（默认）
// AREA 区域插值
// CUBIC 三次样条插值
// LANCZOS4 Lanczos插值 参见InterpolationFlags
// 返回 {Image}

// 调整图片大小，并返回调整后的图片。例如把图片放缩为200*300：images.resize(img, [200, 300])。
// var img = images.read('/sdcard/脚本/猎上网.jpg')
// var resizedimg = images.resize(img,[100,200])
// resizedimg.saveTo("/sdcard/脚本/猎上网_1.jpg")

// images.scale(img, fx, fy[, interpolation])
// [v4.1.0新增]

// img {Image} 图片

// fx {number} 宽度放缩倍数

// fy {number} 高度放缩倍数

// interpolation {string} 插值方法，可选，默认为"LINEAR"（线性插值），可选的值有：

// NEAREST 最近邻插值
// LINEAR 线性插值（默认）
// AREA 区域插值
// CUBIC 三次样条插值
// LANCZOS4 Lanczos插值 参见InterpolationFlags
// 返回 {Image}

// 放缩图片，并返回放缩后的图片。例如把图片变成原来的一半：images.scale(img, 0.5, 0.5)。
var img = images.read('/sdcard/脚本/猎上网.jpg')
var imgscale = images.scale(img,0.5,0.5)
imgscale.saveTo("/sdcard/脚本/猎上网_缩放.jpg")