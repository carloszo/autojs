var img = images.load('https://image0.lietou-static.com/big/55080fec0cf21f9a34820cf702c.jpg')
if(img){
    log(img.getWidth(),img.getHeight())
}
// Image.saveTo(path)
// path {string} 路径
// 把图片保存到路径path。（如果文件存在则覆盖）
// img.saveTo('/sdcard/脚本/test.jpg')
// Image.pixel(x, y)
// x {number} 横坐标
// y {number} 纵坐标
// 返回图片image在点(x, y)处的像素的ARGB值。
var color = img.pixel(100,100)
log(colors.toString(color))