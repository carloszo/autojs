function click_bounds(obj){
    var point = obj.bounds()
    click(point.centerX()+random(0,10),point.centerY()+random(0,10))
}

function watchAd(num){
    var adNum = 0
    while(true){
        var jianlibutton = className("com.lynx.tasm.behavior.ui.view.UIView").text("领取奖励").findOnce()
        if(jianlibutton||text("恭喜您已经获得奖励，是否要继续观看视频，再得超值奖励。").exists()){        
            //click(random(140,580),random(778,874)) //领取奖励
            adNum+=1;
            click_bounds(jianlibutton)
            sleep(random(1000,3000))
            console.log("成功领取金币") 
        }
        if(desc("返回").exists()){
            sleep(1000)
            back()
            sleep(random(1000,3000))
            back()
            console.log("返回，关闭当前广告。")
            sleep(random(1000,3000))                    
        }
        if(text("继续观看").exists()){
            click_bounds(text("继续观看").findOnce())
            sleep(random(1000,3000))
            console.log("继续观看广告")
        }
        if(text("继续观看领取奖励").exists()){
            click_bounds(text("继续观看").findOnce())
            sleep(random(1000,3000))
            //click(random(296,424),random(807,845)) //点广告 
            console.log("继续观看广告")
        }
        if(text("领取成功").exists()||text("关闭，按钮").exists()){
            back()
            console.log("关闭广告")
            sleep(random(1000,3000))  
        }
        // if(text("关闭，按钮").exists()){
        //     back()
        //     console.log("关闭广告按钮")
        //     sleep(random(1000,3000))
        // }
        if(adNum==num||text("去提现").exists()){
            console.log("当前广告已全部观看，等待下一次任务。")
            break
            
        }
    }
}

function runtask(){
    for(var i=0;i<10;i++){
        if(text("立即观看").exists()){
            click_bounds(text("立即观看").findOnce()) //看视频赚金币
            console.log("第"+i+"次看广告")
            sleep(random(2000,5000))
            if(text("广告").exists()){
                console.log("看视频赚金币任务成功开启")
                while(true){
                    if(text("领取成功").exists()){
                        back();
                        console.log("金币领取成功")
                        sleep(1000)
                        break
                    }
                }
            }
        }else if(text("去观看").exists()){
            click_bounds(text("去观看").findOnce()) //看视频赚金币
            sleep(random(2000,5000))
            if(text("广告").exists()){
                console.log("看视频赚金币任务成功开启")
                while(true){
                    if(text("领取成功").exists()){
                        back();
                        console.log("金币领取成功")
                        sleep(1000)
                        break
                    }
                }
            }
        }
        sleep(random(3000,5000))
    }
    
}
function treasureBox(){
    if(text("开宝箱得金币").exists()){
        click_bounds(text("开宝箱得金币").findOnce()) //点击宝箱图标
        sleep(random(2000,5000))
    }
    if(id("gq").exists()){
        click_bounds(id("gq").findOnce()) //点击看视频再领金币
        console.log("开宝箱得金币任务成功开启")
        var adNum = 1
        while(true){
            if(text("领取奖励").exists()){
                click_bounds(text("领取奖励").findOnce())
                adNum+=1
            }
            
            if(text("领取成功").exists()){
                back()
                console.log("金币领取成功")
                sleep(random(2000,5000))
                
        
            }
            
            if(className("com.lynx.tasm.behavior.ui.view.UIView").textContains("再看一个最高再得").exists()){
                click_bounds(className("com.lynx.tasm.behavior.ui.view.UIView").textContains("再看一个最高再得").findOnce())
                adNum+=1
                console.log("看第"+adNum+"广告")
            }
            if(adNum==4){
                break
                console.log("广告已经全部观看完毕")
            }
        }
    }else if(textContains("看视频最高再领").exists()){
        click_bounds(className("com.lynx.tasm.behavior.ui.text.FlattenUIText").textContains("看视频最高再领").findOnce()) //点击看视频再领金币
        console.log("开宝箱得金币任务成功开启")
    }
}

function qiandao(){
    if(textContains("立即签到").exists()){
        click_bounds(textContains("立即签到").findOnce())
        console.log("开始签到")
        sleep(random(1000,3000))
    }
    if(textContains("看视频再领").exists()){
        click_bounds(textContains("看视频再领").findOnce())
        console.log("签到看视频") 
        while(true){
            if(text("领取成功").exists()){
                back();
                sleep(random(1000,3000));
                break;
            }
        }
    }
    if(textContains("再看一个获取最高").exists()){
        click_bounds(textContains("再看一个获取最高").findOnce())
        console.log("继续看广告") 
    }
    
}

function listenBook(){
    var linquButton = text("立即领取").findOnce()
    if(linquButton){
        click_bounds(linquButton)
        console.log('听书赚金币任务领取成功')
        sleep(random(1000,3000))
        if(textContains("看视频再领").exists()){
            click_bounds(textContains("看视频再领").findOnce())
            console.log("成功领取广告")
            sleep(random(1000,3000))
            watchAd(4)
        }
    }
}
console.show()
// runtask()
//listenBook()
treasureBox()

