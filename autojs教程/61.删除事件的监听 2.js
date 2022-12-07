events.observeKey()
events.onKeyDown('volume_down',(keyEvent)=>{
    log(keyEvent)
})
setTimeout(function(){
    events.removeAllKeyDownListeners('volume_down')
},5000)
