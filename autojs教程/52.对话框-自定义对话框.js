// dialogs.build({
//     //对话框标题
//     title: "发现新版本",
//     //对话框内容
//     content: "更新日志: 新增了若干了BUG",
//     //确定键内容
//     positive: "下载",
//     //取消键内容
//     negative: "取消",
//     //中性键内容
//     neutral: "到浏览器下载",
//     //勾选框内容
//     checkBoxPrompt: "不再提示"
// }).on("positive", ()=>{
//     //监听确定键
//     toast("开始下载....");
// }).on("neutral", ()=>{
//     //监听中性键
//     app.openUrl("https://www.autojs.org");
// }).on("check", (checked)=>{
//     //监听勾选框
//     log(checked);
// }).show();
dialogs.build({
    title: '调查问卷',
    titleColor: '#ff0000',
    items: ["男","本科","猎头"],
    itemsSelectMode: 'multi',
    itemsSelectedIndex:[1,2],
    positive: "确定",
    neutral: "详情",
    negative: "取消",
    checkBoxPrompt: "已婚",
    checkBoxChecked: true,
    cancelable: true
    
}).show()