dialogs.build({
    title:'按钮事件',
    positive:'确定',
    negative:'取消',
    neutral:'中性按钮'

}).on('positive',function(dialog){
    log("点击了确定按钮")
}).on('negative',function(dialog){
    log("点击了取消按钮")
}).on('neutral',function(dialog){
    log("点击了中性按钮")
}).on("cancle",function(dialog){
    log("点击了取消按钮")
}).show()
