//启动监听
events.observeKey()

//监听按键
events.onKeyDown('volume_up', (keyEvent)=>{
    log(keyEvent.getAction())
    log(keyEvent.getKeyCode())
    log(keyEvent.getEventTime())
    log(keyEvent.getDownTime())
    log(keyEvent.keyCodeToString(24))
})

// { 
//     action=ACTION_DOWN, 
//     keyCode=KEYCODE_VOLUME_UP, 
//     scanCode=115, 
//     metaState=0, 
//     flags=0x8, 
//     hwFlags=0x0, 
//     repeatCount=0, 
//     eventTime=154077824, 
//     downTime=154077824, 
//     deviceId=5, 
//     source=0x101 
// }