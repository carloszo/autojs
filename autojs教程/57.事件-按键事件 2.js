//启动监听
events.observeKey()

//监听按键
events.onKeyDown('back', (keyEvent)=>{
    log("返回键被按下")
})