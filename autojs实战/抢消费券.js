auto;
function taskstart(){
    console.time()
    //waitForPackage("com.unionpay");
    log("正在打开云闪付app");
    //sleep(2000);
    // press(random(0,720),random(136,496),3)
    // log("正在打开消费劵");
    // sleep(2000);
    var dy = className("android.view.View").indexInParent(7).text("满240元").findOnce().bounds()

    // toast("元素在屏幕上的中心点" + dy.centerX()+" "+dy.centerY());
    var i=1
    while(i<11){
        press(dy.centerX(),dy.centerY(),1)
        log("点击第" + i+"次");
        i++;
    }
    console.timeEnd()
    exit();
}


setInterval(function(){
    //console.show()
    var  curTime=new Date();
    if(curTime.getHours()==20&&curTime.getMinutes()==0){
            taskstart(); 
    }
    log("抢券脚本执行中。。。"+curTime.getHours()+":"+curTime.getMinutes()+":"+curTime.getSeconds);
    //console.clear()
}, 1000);





