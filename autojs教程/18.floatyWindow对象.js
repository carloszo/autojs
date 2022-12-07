/**
window.setAdjustEnabled(enabled)
enabled {boolean} 是否启用悬浮窗调整(大小、位置)
如果enabled为true，则在悬浮窗左上角、右上角显示可供位置、大小调整的标示，就像控制台一样； 如果enabled为false，则隐藏上述标示。

window.setPosition(x, y)
x {number} x
x {number} y
设置悬浮窗位置。

window.getX()
返回悬浮窗位置的X坐标。

window.getY()
返回悬浮窗位置的Y坐标。

window.setSize(width, height)
width {number} 宽度
height {number} 高度
设置悬浮窗宽高。

window.getWidht()
返回悬浮窗宽度。

window.getHeight()
返回悬浮窗高度。

window.close()
关闭悬浮窗。如果悬浮窗已经是关闭状态，则此函数将不执行任何操作。

被关闭后的悬浮窗不能再显示。

window.exitOnClose()
使悬浮窗被关闭时自动结束脚本运行。 */

var w = floaty.window(
    <vertical gravity="center">
        <text id="text">悬浮文字</text>
        <button>按钮</button>
    </vertical>
);
w.text.setText("你好")
w.setAdjustEnabled(true)
w.setPosition(100,500 )
log(w.getX())
log(w.getY())
w.setSize(300,400)
setInterval(()=>{},1000)
// setTimeout(()=>{
//     w.close()
// },3000)
w.exitOnClose() //悬浮窗被关闭时自动结束脚本运行。