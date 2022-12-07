if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
while(true){
    var img = captureScreen()
    var point = images.findColorInRegion(img,"#fe405f",100,100,500,800)
    if(point){
        log("找到颜色，坐标为("+point.x+","+point.y+")")
    }else{
        log("没找到")
    }
    sleep(2000)
}