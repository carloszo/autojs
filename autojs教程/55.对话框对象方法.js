var d =dialogs.build({
    title: "进度条",
    progress:{
        max: 100
    },
    positive:"确定"
}).show()
log(d.getProgress())
log(d.getActionButton("positive"))

/*
dialog.getProgress()
返回 {number}
获取当前进度条的进度值，是一个整数

dialog.getMaxProgress()
返回 {number}
获取当前进度条的最大进度值，是一个整数

dialog.getActionButton(action)
action {string} 动作，包括:
positive
negative
neutral
*/