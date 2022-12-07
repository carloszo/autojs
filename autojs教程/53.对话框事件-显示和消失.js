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
    //cancelable: true
    
}).on("show",(dialog)=>{
    log("对话框显示了")
}).show()