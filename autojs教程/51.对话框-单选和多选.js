/*
dialogs.singleChoice(title, items[, index, callback])
title {string} 对话框的标题。
items {Array} 对话框的选项列表，是一个字符串数组。
index {number} 对话框的初始选项的位置，默认为0。
callback {Function} 回调函数，可选。当用户点击确定时被调用,一般用于ui模式。
显示一个单选列表对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。

在ui模式下该函数返回一个Promise。

*/
var education = ["大专","本科","硕士","博士"]
dialogs.singleChoice("请选择你的学历",education,1,sel=>{
    if(sel>0){
        log("你的学历非常好")
    }else{
        log("还要继续努力")
    }
})

/*
dialogs.multiChoice(title, items[, indices, callback])
title {string} 对话框的标题。
items {Array} 对话框的选项列表，是一个字符串数组。
indices {Array} 选项列表中初始选中的项目索引的数组，默认为空数组。
callback {Function} 回调函数，可选。当用户点击确定时被调用,一般用于ui模式。
显示一个多选列表对话框，等待用户选择，返回用户选择的选项索引的数组。如果用户取消了选择，返回[]。

在ui模式下该函数返回一个Promise。
*/