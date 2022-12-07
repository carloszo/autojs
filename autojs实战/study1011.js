function click_bounds(obj){
    var point = obj.bounds()
    click(point.centerX()+random(0,10),point.centerY()+random(0,10))
}
// home();
// sleep(1500);
// click('浏览器')
click_bounds(text("立即观看").findOnce())
//click_bounds()