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
// click(91,960)// 双签领京豆
// sleep(20*1000)

// click(221,960)// 京喜得豆
// sleep(10*1000)
// click("去领取")
// sleep(2000)
// back()

// click(467,960)// 特价领豆
// sleep(10*1000)
// click("去签到")
// sleep(5000)
// click("打开京东特价版")
// sleep(10*1000)
// click("立即加速签到")
// sleep(2000)
// click("加速领红包")
back()
// click_bounds(text("立即加速签到").findOnce())
