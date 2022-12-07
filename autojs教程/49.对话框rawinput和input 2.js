/* 
dialogs.rawInput(title[, prefill, callback])
title {string} 对话框的标题。
prefill {string} 输入框的初始内容，可选，默认为空。
callback {Function} 回调函数，可选。当用户点击确定时被调用,一般用于ui模式。
显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
*/
// var name = rawInput("请输入姓名","小明")
// log(name)

rawInput("请输入姓名","小明",name=>{
    if(name=="左江华"){
        log("你好主人")
    }else{
        log("你好")
    }
})