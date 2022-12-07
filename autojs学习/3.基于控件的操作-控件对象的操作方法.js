// text("微信").findOnce().click()
// app.launchApp("微信")
// log(id('hg4').find().findOne(text('Anni')))
//效果等同于
// id('hg4').find().forEach(child=>{
//     if(child.text() == 'Anni'){
//         log(child)
//     }
// })
// id('hg4').find().forEach(child=>{
//     log(child)
// })
//效果等同于
var list = id('hg4').find()
for(var i=0;i<list.size();i++){
	log(list[i])
}