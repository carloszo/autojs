events.observeKey()
events.onKeyDown('volume_down',(keyEvent)=>{
    log(keyEvent)
})

events.setKeyInterceptionEnabled('volume_down',true)
