function click_bounds(obj){
    var point = obj.bounds()
    click(point.centerX()+random(0,10),point.centerY()+random(0,10))
}

function tt_watchAd(){
    while(text("广告").exists() || desc("返回").exists()){

        
        if(textContains("s后可领取奖励").exists()){  
            toast("广告时间")        
            sleep(1000)     
        }else{
            toast("关闭广告")
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
        click(text("开宝箱得金币").findOnce()) //点击宝箱按钮
        sleep(random(1000,5000)) 
        if(text('看视频领').exists()){
            click(text('看视频领').findOnce()) //第一次看广告
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
        // var adNum=0 //广告数量
    // for(var i=1;i<9999;i++){
        // if(textContains("s后可领取奖励").exists()){
        //     toast("广告时间") 
        //     console.log("进入广告时间")       
        //     sleep(1000) 
        // }else 
        if(text("领取成功").exists()){
            sleep(1000)           
            //click(random(622,688),random(32,98)) //关闭
            back()
            //toast("关闭当前广告。")
            console.log("领取成功，关闭当前广告。")
            sleep(random(1000,3000))
        }else if(desc("返回").exists()){
            sleep(1000)
            //click(random(12,100),random(56,144))
            toast("返回")
            back()
            sleep(random(1000,3000))
            //click(random(622,688),random(32,98)) //关闭
            back()
            //toast("关闭当前广告。")
            console.log("返回，关闭当前广告。")
            sleep(random(1000,3000))
            
            
        }
        if(text("继续观看").exists()){
            sleep(1000)
            click(random(296,424),random(807,845)) //继续看广告
            //click_bounds(text("继续观看").findOnce())
            //toast("继续观看广告")
            console.log("继续观看广告")
            sleep(10000)
        }
        if(text("继续观看领取奖励").exists()){
            sleep(1000)
            //click_bounds(text("继续观看").findOnce())
            click(random(296,424),random(807,845)) //点广告 
            //toast("继续观看广告")
            console.log("继续观看广告")
            sleep(10000)
        }
        if(text("领取奖励").exists()||text("恭喜您已经获得奖励，是否要继续观看视频，再得超值奖励。").exists()){        
            sleep(1000)
            click(random(140,580),random(778,874)) //领取奖励
            //click_bounds(text("领取奖励").findOnce())
            // adNum+=1;
            //toast("成功领取金币")
            console.log("成功领取金币")
            
        }
        // if(adNum>4){
        //     return
        // }
        //console.log(adNum)
        
        //sleep(1000)
    }
}
        
function dy_treasureBox(){
    if(text("开宝箱得金币").exists()){  
        console.log('开始执行宝箱任务')    
        toast('开始执行宝箱任务') 
        //click(random(547,682),random(1176,1200)) //点击宝箱按钮
        click_bounds(text("开宝箱得金币").findOnce())      
        sleep(random(1000,5000))          
        click_bounds(textContains("看广告视频再赚").findOnce())
        console.log('宝箱开启成功')    
        toast('宝箱开启成功') 
        //click(random(130,590),random(791,883)) //第一次看广告
        sleep(random(3000,5000))           
        dy_watchAd()
    }else if(textContains("看广告视频再赚").exists()){
        click_bounds(textContains("看广告视频再赚").findOnce())
        console.log('程序意外停止，将继续执行开宝箱任务。')    
        toast('程序意外停止，将继续执行开宝箱任务。') 
        //click(random(130,590),random(791,883)) //第一次看广告
        sleep(random(1000,3000))           
        dy_watchAd()
    }else if(text("广告").exists()|| desc("返回").exists()){
        toast("程序意外终止，继续执行广告任务。")
        console.log("程序意外终止，继续执行广告任务。")
        dy_watchAd()  
    }else{
        toast("宝箱尚未开启")
        console.log("宝箱尚未开启")
    }
    
    
}


function dy_runTask(){
    if(text("看广告赚金币").exists()){
        console.log("成功领取广告")
        // click(random(547,689),random(517,579))
        click(random(547,689),random(548,609))
        click_bounds(text("去领取").findOnce())
        
        sleep(random(3000,5000))   
        dy_watchAd()  
    } else if(text("广告").exists()|| desc("返回").exists()){
        toast("程序意外终止，继续执行广告任务。")
        console.log("程序意外终止，继续执行广告任务。")
        dy_watchAd()  
    }else if(text("已按时吃饭").exists()){
        back()
        sleep(20000)
    }else{
        toast("今日广告任务已经领取完毕")
        console.log("今日广告任务已经领取完毕")
    }   
         
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







launch("com.ss.android.ugc.aweme.lite")
waitForPackage("com.ss.android.ugc.aweme.lite")
dy_runTask()
toast("抖音广告任务执行完毕")
sleep(2000)
dy_treasureBox()
toast("抖音宝箱任务执行完毕")
console.log("抖音宝箱任务执行完毕")


// launch("com.ss.android.article.lite")
// waitForPackage("com.ss.android.article.lite")
// if(text("关注").exists()){
//     toast('今日头条极速版已经打开')
//     click(random(339,381),random(1327,1356))
//     sleep(10000)
//     tt_treasureBox()
//     toast("头条宝箱任务执行完毕")

// }else{
//     tt_treasureBox()
//     toast("头条宝箱任务执行完毕")
// }
