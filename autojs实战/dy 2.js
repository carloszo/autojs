

function watchAd(){
    while(text("广告").exists() || desc("返回").exists()){
        //toast(text("广告").exists() || desc("返回").exists())
        if(text("后可领取奖励").exists()){
            toast("广告时间")        
            sleep(1000) 
        }else if(text("领取成功").exists()){
            toast("领取成功")
            click(random(622,688),random(32,98)) //关闭
            sleep(2000)
  
        }else if(desc("返回").exists()){
            //click(random(12,100),random(56,144))
            toast("返回")
            back()
            sleep(2000)
            click(random(622,688),random(32,98)) //关闭
        }else{

            click(random(622,688),random(32,98)) //关闭
        }
      

        if(text("继续观看").exists()){
            click(random(296,424),random(807,845)) //点广告 
            sleep(10000)
        }
        if(text("继续观看领取奖励").exists()){
            click(random(296,424),random(807,845)) //点广告 
            sleep(10000)
        }
        if(text("领取奖励").exists()||text("恭喜您已经获得奖励，是否要继续观看视频，再得超值奖励").exists()){
            toast("领取奖励")
            click(random(140,580),random(778,874)) //点广告
        }
        sleep(5000)
    }
}
        
function treasureBox(){

    if(text("开宝箱得金币").exists()){       
        click(random(547,682),random(1176,1276)) //点击宝箱按钮
        sleep(random(1000,5000))        
        click(random(130,590),random(791,883)) //第一次看广告
        watchAd()
    }else if(text("广告").exists()){
        watchAd()
    }else{
        toast("宝箱未开启")
    }
    
}
function runTask(){
    click(random(572,665),random(529,566))
    watchAd()       
}

    

    
    
    
treasureBox()
runTask()


