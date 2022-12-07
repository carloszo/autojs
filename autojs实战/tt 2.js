
function watchAd(){
    while(text("广告").exists() || desc("返回").exists()){

        //toast(text("广告").exists() || desc("返回").exists())
        if(text("s后可领取奖励").exists()){  
            toast("广告时间")        
            sleep(1000)  
        }else{      
            toast("关闭广告")
            click(random(623,687),random(33,95))  //关闭
            sleep(1000)  
        }
        if(text("继续观看").exists()){
            toast("继续观看")
            click(random(196,524),random(815,903)) //点广告 
            sleep(15000)
            
            
        }
        if(text("恭喜您已经获得奖励").exists()){
            toast("领取奖励")
            click(random(196,524),random(815,903)) //点广告
        }
        sleep(1000)
    }
}
function treasureBox(){
    if(text("开宝箱得金币").exists()){       
        click(random(502,658),random(1274,1322)) //点击宝箱按钮
        sleep(random(1000,5000)) 
        if(text('看视频领').exists()){
            click(random(215,355),random(927,962)) //第一次看广告
            sleep(1000)
            watchAd()
        }         
        
    }else if(text("广告").exists()){
        watchAd()
    }else{
        toast("宝箱未开启")
    }
    
    
    
}
treasureBox()
//watchAd()
