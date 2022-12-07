var emitter = events.emitter()
emitter.on('foo',()=>{
    log('foo事件被调用')
})


setTimeout(()=>{
    emitter.emit('foo')
},3000)

//脚本间通信调用
events.broadcast.emit('demo')