var w = floaty.window(
    <vertical gravity="center">
        <text id="text">悬浮文字</text>
        <button>按钮</button>
    </vertical>
);
ui.run(function(){
    w.text.setText("你好")
})

w.setPosition(100,500)
var w1 = floaty.rawWindow(
    <vertical gravity="center">
        <text id="text">悬浮文字</text>
        <button>按钮</button>
    </vertical>
);
w1.setPosition(100,700)

// setInterval(()=>{},1000)
// setTimeout(()=>{
//     w.close();
// }, 2000);
setTimeout(()=>{
    floaty.closeAll()
},5000)
