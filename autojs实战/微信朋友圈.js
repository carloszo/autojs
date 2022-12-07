function click_bounds(obj){
    if(!obj||typeof obj==undefined){
        return false
    }
    var point = obj.bounds()
    try{
        click(point.centerX()+random(0,10),point.centerY()+random(0,10))
    }catch(error){
        console.log("点击失败")
    }
    
}

function longClick_bounds(obj){
    if(!obj||typeof obj==undefined){
        return false
    }
    var point = obj.bounds()
    try{
        longClick(point.centerX()+random(0,10),point.centerY()+random(0,10))
    }catch(error){
        console.log("点击失败")
    }
    
}

function wechatSendMoments(content){
    text("通讯录").waitFor();
    sleep(1000)
    var obj = text("发现").id("f2s").findOne()
    click_bounds(obj)
    text("朋友圈").waitFor();
    sleep(1000)
    obj = text("朋友圈").id("android:id/title").findOne()
    click_bounds(obj)
    id("com.tencent.mm:id/by3").waitFor();
    sleep(1000)
    obj = id("com.tencent.mm:id/by3").findOne()
    longClick_bounds(obj)
    text("这一刻的想法...").waitFor();
    sleep(1000)
    obj = text("这一刻的想法...").findOne()
    click_bounds(obj)
    setText(content)
    click("发表")
}
wechatSendMoments("又到周末了")
