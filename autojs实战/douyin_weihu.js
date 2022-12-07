function click_bounds(obj){
    var point = obj.bounds()
    click(point.centerX()+random(0,10),point.centerY()+random(0,10))
}

var funs = textContains('关注').find()
console.show()
for(var i=0;i<funs.length;i++){
    click_bounds(funs[i])
    sleep((2000))
}
