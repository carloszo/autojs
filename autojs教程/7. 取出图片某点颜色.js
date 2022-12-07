// images.pixel(image, x, y)
// image {Image} 图片
// x {number} 要获取的像素的横坐标。
// y {number} 要获取的像素的纵坐标。
// 返回图片image在点(x, y)处的像素的ARGB值。

// 该值的格式为0xAARRGGBB，是一个"32位整数"(虽然JavaScript中并不区分整数类型和其他数值类型)。

// 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
var img = images.read("/sdcard/脚本/抖音极速版2.png") //fe95a9 fe2c55
var color = images.pixel(img,90,439)
log(colors.toString(color))
