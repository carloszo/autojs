function 找图(imgUrl,threshold){ 
    threshold = threshold||0.9  
    var point
    var img =  images.captureScreen()
    if(!img||typeof img==undefined){
        return false
    }
    if(imgUrl){
        var template = images.read(imgUrl)
        if(template){
            point = findImage(img,template,{threshold:threshold})
        }
    }
    return point
       
}
if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
sleep(2000)
function main(){
    var imgUrl = "/sdcard/脚本/close.jpg"
var point = 找图(imgUrl)
log(point)
}



swipe(303, 1000, 335, 500, 500);