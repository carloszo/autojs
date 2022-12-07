/*
press(x, y, duration)
x {number} 要按住的坐标的x值
y {number} 要按住的坐标的y值
duration {number} 按住时长，单位毫秒
模拟按住坐标(x, y), 并返回是否成功。只有按住操作执行完成时脚本才会继续执行。
*/

for(var i =0;i<10;i++){
    press(200,300,1)
}