// var img = images.read('/Users/carlos/Downloads/i.jpeg')
// // Image对象通过调用recycle()函数来回收。
// img.recycle()
//读取网络图片
var img = images.load('https://image0.lietou-static.com/big/55080fec0cf21f9a34820cf702c.jpg')
log(img.getWidth())