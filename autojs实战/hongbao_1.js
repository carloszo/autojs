function tt_watchAd(){
    while(text("广告").exists() || desc("返回").exists()){

        toast(text("广告").exists() || desc("返回").exists())
        if(text("s后可领取奖励").exists()){  
            toast("广告时间")        
            sleep(1000)  
        }else if(text("13s").exists()){      
            toast("13s广告")
            sleep(15000)  
            click(random(623,687),random(33,95))  //关闭
            
        }else{
            toast("关闭广告")
            sleep(5000)
            click(random(623,687),random(33,95))  //关闭
        }
        if(text("继续观看").exists()){
            toast("继续观看")
            click(random(196,524),random(815,903)) //点广告 
            sleep(10000)
            
            
        }
        if(text("恭喜您已经获得奖励").exists()){
            toast("领取奖励")
            click(random(196,524),random(815,903)) //点广告
        }
        sleep(1000)
    }
}
function tt_treasureBox(){
    if(text("开宝箱得金币").exists()){       
        click(random(540,680),random(1176,1276)) //点击宝箱按钮
        sleep(random(1000,5000)) 
        if(text('看视频领').exists()){
            click(random(215,355),random(877,912)) //第一次看广告
            sleep(random(2000,5000))
            tt_watchAd()
        }         
        
    }else if(text("广告").exists()){
        tt_watchAd()
    }else{
        toast("宝箱未开启")
    }
    
}

function dy_watchAd(){
    while(text("广告").exists() || desc("返回").exists()){
        toast(text("广告").exists() || desc("返回").exists())
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
        
function dy_treasureBox(){

    if(text("开宝箱得金币").exists()){       
        click(random(547,682),random(1176,1200)) //点击宝箱按钮
        sleep(random(1000,5000))        
        click(random(130,590),random(791,883)) //第一次看广告
        dy_watchAd()
    }else if(text("广告").exists()){
        dy_watchAd()
    }else{
        toast("宝箱未开启")
    }
    
}


function dy_runTask(){
    click(random(547,689),random(517,579))
    dy_watchAd()       
}

/* 抖音签到*/ 
function dy_signin(){
    if(text("签到").exists()){
        click(random(547,689),random(517,579)) //签到按钮
        if(text("看广告视频再赚金币").exists()){
            click(random(137,583),random(821,897)) //点击看广告
        }else{
            toast("无法签到")
        }
    }else{
        toast("今日已经签到")
    }   
}


launch("com.ss.android.article.lite")
sleep(10000)
if(text("关注").exists()){
    toast('今日头条极速版已经打开')
    click(random(339,381),random(1327,1356))
    sleep(10000)
    tt_treasureBox()
    toast("头条宝箱任务执行完毕")

}else{
    tt_treasureBox()
    toast("头条宝箱任务执行完毕")
}



launch("com.ss.android.ugc.aweme.lite")
sleep(10000)
if(text("朋友").exists()){
    toast('抖音极速版已经打开')
    click(random(285,435),random(1240,1360))
    sleep(15000)
    //dy_runTask()
    toast("抖音广告任务执行完毕")
    sleep(2000)
    dy_treasureBox()
    toast("抖音宝箱任务执行完毕")
}else{
    //dy_runTask()
    //toast("抖音广告任务执行完毕")
    //sleep(2000)
    dy_treasureBox()
    toast("抖音宝箱任务执行完毕")
}
