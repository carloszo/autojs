//启动监听
events.observeKey()
events.on('key',(keyCode,keyEvent)=>{
    log(keyCode)
    log(keyEvent)
})