// images.save(image, path[, format = "png", quality = 100])
// image {Image} 图片
// path {string} 路径
// format {string} 图片格式，可选的值为:
// png
// jpeg/jpg
// webp
// quality {number} 图片质量，为0~100的整数值
// 把图片image以PNG格式保存到path中。如果文件不存在会被创建；文件存在会被覆盖。

// //把图片压缩为原来的一半质量并保存
// var img = images.read("/sdcard/1.png");
// images.save(img, "/sdcard/1.jpg", "jpg", 50);
// app.viewFile("/sdcard/1.jpg");
var img = images.load("https://cdnstatic.hunteron.com/c/home/images/act/jobTopic57@3x.jpg")
// img.saveTo("/sdcard/脚本/猎上网.jpg")
//images.save(img,"/sdcard/脚本/猎上网.png",'png',50);
app.viewFile("/sdcard/脚本/猎上网.png");