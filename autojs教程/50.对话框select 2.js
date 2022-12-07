/*
dialogs.select(title, items, callback)
title {string} 对话框的标题。
items {Array} 对话框的选项列表，是一个字符串数组。
callback {Function} 回调函数，可选。当用户点击确定时被调用,一般用于ui模式。
*/
var options = ["选项A", "选项B", "选项C", "选项D"]
// var i = dialogs.select("请选择一个选项", options);
// if(i >= 0){
//     toast("您选择的是" + options[i]);
// }else{
//     toast("您取消了选择");
// }
dialogs.select("请选择一个选项", options,i=>{
    if(i >= 0){
        toast("您选择的是" + options[i]);
    }else{
        toast("您取消了选择");
    }
});
