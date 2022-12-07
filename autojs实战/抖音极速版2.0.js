
// var w = floaty.rawWindow(
//     <card cardBackgroundColor="#99000000" cardCornerRadius="0">
//         <horizontal w="250" h="35" paddingLeft="10" paddingRight="10" >
//             <text id="log" size="12dp" color="white" w="180" h="35" layout_gravity="center" gravity="center||left">脚本启动中</text>
//         </horizontal>
//     </card>
// );
// w.setSize(-1,-1)
// w.setTouchable(false)
// // ui.run(() => {
// //     w.setPosition(100, 100)
// // })

// _log = log
// function log(text){
//     if(w){
//         ui.run(function(){
//             w.log.setText(text)
//         })
//     }
// }
// setInterval(()=>{},1000)
var currentPage  //当前页面:任务页/广告页/广告内容页/视频页
function click_bounds(obj){
    if(!obj||typeof obj==undefined){
        return false
    }
    var point = obj.bounds()
    try{
        click(point.centerX()+random(0,10),point.centerY()+random(0,10))
    }catch(error){
        console.log("点击失败")
    }
    
}

function 签到(){
    text("每日签到").waitFor()
    var qiandaoBtn = textContains("立即签到").findOnce()
    if(qiandaoBtn){
        click_bounds(qiandaoBtn)
        sleep(random(3000,5000))
        var watchAdBtn = textContains("看广告视频再赚").findOnce()
        if(watchAdBtn){
            log("开始执行签到任务")
            click_bounds(watchAdBtn)
            //sleep(random(5000,8000))
            text("广告").waitFor()
            log("开始签到")
            看广告()
            sleep(random(2000,4000))
            log("今天已完成签到")
            return true
        }else{
            log("没有广告可看")
            return false
        }       
    }else{
        log("签到任务已结束")
        return false
    }   
}

// function 看广告(){
//     var adTime = 0
//     var watchedAd = false //是否观看广告
//     log("进入广告界面")
//     while(true){           
//         //观看广告时跳到直播节目，返回广告播放页面
//         if(text("直播中").exists()){
//             log("进入直播界面")
//             sleep(30*1000)      
//             back()
//         }

//         //出现10次以上广告播放中，表示最后广告未退出
//         if(adTime>10){  
//             back()
//             return true
//         }
//         //继续广告
//         if(text("继续观看").exists()){
//             sleep(random(1000,3000))
//             click_bounds(text("继续观看").findOnce())
//             sleep(2000)
//             console.log("继续观看广告")
//         }
//         //关闭广告
//         var lingQuBtn = text("领取成功").findOnce() //领取成功
//         lingQuBtn = !lingQuBtn?desc("关闭，按钮").findOnce():lingQuBtn
//         if(lingQuBtn){
//             //查看广告详情
//             var adDetail = text("查看详情").findOnce()
//             sleep(random(1000,3000))
//             if(adDetail&&!watchedAd){
//                 log("查看广告详情")
//                 sleep(random(1000,3000)) 
//                 click_bounds(adDetail)
//                 sleep(random(3000,5000)) 
//                 //广告未跳转到其他app
//                 if(currentPackage()=="com.ss.android.ugc.aweme.lite"){    
//                     for(var i=0;i<5;i++){
//                         swipe(303, 1000, 335, 500, 500);
//                         sleep(random(3000,5000))
//                     }
//                     sleep(random(2000,3000))
//                     //跳转到广告页面
//                     back()
//                     sleep(random(2000,3000))
//                     //跳转到领取奖励页面，如果是最后一个广告，则返回到任务页
//                     back()                        
//                     //检测是否返回到任务页
//                     if(text("赚钱任务").exists()){
//                         log("广告任务执行完毕")
//                         return true
//                     }
//                 }else{
//                     log("跳到其他APP界面")
//                     for(var i=0;i<5;i++){
//                         swipe(303, 1000, 335, 500, 500);
//                         sleep(random(3000,5000))
//                     }
//                     //返回抖音极速版
//                     app.launch("com.ss.android.ugc.aweme.lite")
//                     sleep(random(5000,8000))
//                     //跳转到广告页
//                     back()
//                     sleep(random(2000,3000))
//                     //跳转到领取奖励页面，如果是最后一个广告，则返回到任务页
//                     back()  
//                     //检测是否返回到正确页面
//                     //检测是否返回到任务页
//                     if(text("赚钱任务").exists()){
//                         log("广告任务执行完毕")
//                         return true
//                     }
//                 }
                
//                 log("广告详情查看完毕")
//                 watchedAd = true
//             }
//             //关闭广告
//             click_bounds(lingQuBtn)
//             sleep(500)
//             click_bounds(lingQuBtn)
//             sleep(random(3000,5000))
//             /*关闭广告后会出现3种情况：
//             1.进入领取奖励界面。
//             2.完成广告任务，进入任务页。
//             3.没有成功关闭广告，还停留在当前页面。
//             */
//             //领取奖励。
//             text("领取奖励").waitFor()
//             sleep(1000)
//             click_bounds(text("领取奖励").findOnce())
//             text("广告").waitFor()
//             sleep(1000)
//             log("领取奖励")
//             // if(lingQuJiangLiBtn){                   
//             //     click_bounds(lingQuJiangLiBtn)
//             //     sleep(random(5000,8000))
//             //     //检测是否进入到广告界面或者任务界面
//             //     if(text("广告").exists()){
//             //         log("关闭广告")
//             //         sleep(2000)
//             //         log("领取奖励")
//             //     }
//             // }else if(text("赚钱任务").exists()){
//             //     log("广告任务执行完毕")
//             //     //结束广告任务，返回了任务页。
//             //     return true
//             // }
//         }else{
//             var zhiBoimgUrl = "/sdcard/脚本/zhiBo.jpg"
//             var zhiBoPoint = 找图(zhiBoimgUrl)
//             if(zhiBoPoint||desc('返回').findOne()){
//                 back()
//                 sleep(2000)
//             }
//             log("广告观看中")
//             sleep(5000)
//             adTime+=1
//         }
//         //退出广告条件
//         guangGaoBtn = text("广告").exists()
//         sleep(500)
//         if(!guangGaoBtn){
            
//                 log("广告播放完毕")
//                 sleep(2000)
//                 return true
                
//         }
        
        
//     }
    
// }
function 看广告(){
    var adTime = 0
    var watchedAd = false //是否观看广告
    log("开始看广告")
    while(true){           
        // sleep(30*1000)
        //关闭广告
        log("开头")
        var lingQuBtn = text("领取成功").findOnce() //领取成功
        lingQuBtn = !lingQuBtn?desc("关闭，按钮").findOnce():lingQuBtn
        log("领取成功:"+lingQuBtn)
        if(lingQuBtn){
            log("可以关闭广告")
            //查看广告详情
            var adDetail = text("查看详情").findOnce()
            sleep(random(1000,3000))
            if(adDetail&&!watchedAd){
                log("查看广告详情")
                sleep(random(1000,3000)) 
                click_bounds(adDetail)
                sleep(random(3000,5000)) 
                //广告未跳转到其他app
                if(currentPackage()=="com.ss.android.ugc.aweme.lite"){    
                    for(var i=0;i<5;i++){
                        swipe(303, 1000, 335, 500, 500);
                        sleep(random(3000,5000))
                    }
                    sleep(random(2000,3000))
                    //跳转到广告页面
                    back()
                    sleep(random(2000,3000))
                    //跳转到领取奖励页面，如果是最后一个广告，则返回到任务页
                    back()                        
                    //检测是否返回到任务页
                    if(text("赚钱任务").exists()){
                        log("广告任务执行完毕")
                        return true
                    }
                }else{
                    log("跳到其他APP界面")
                    for(var i=0;i<5;i++){
                        swipe(303, 1000, 335, 500, 500);
                        sleep(random(3000,5000))
                    }
                    //返回抖音极速版
                    app.launch("com.ss.android.ugc.aweme.lite")
                    sleep(random(5000,8000))
                    //跳转到广告页
                    back()
                    sleep(random(2000,3000))
                    //跳转到领取奖励页面，如果是最后一个广告，则返回到任务页
                    back()  
                    //检测是否返回到正确页面
                    //检测是否返回到任务页
                    if(text("赚钱任务").exists()){
                        log("广告任务执行完毕")
                        return true
                    }
                }
                
                log("广告详情查看完毕")
                watchedAd = true
                
            }
            
            //关闭广告
            sleep(2000)
            click_bounds(lingQuBtn)
            sleep(2000)
            log("关闭广告")
            if(text("领取奖励").exists){
                //text("领取奖励").waitFor()
                click_bounds(text("领取奖励").findOnce())
                log("领取奖励")
                sleep(2000)
            }
            /*关闭广告后会出现3种情况：
            1.进入领取奖励界面。
            2.完成广告任务，进入任务页。
            3.没有成功关闭广告，还停留在当前页面。
            */
            //领取奖励。 
        }else{
            var zhiBoimgUrl = "/sdcard/脚本/zhiBo.jpg"
            var zhiBoPoint = 找图(zhiBoimgUrl)
            log("直播"+zhiBoPoint)
            if(zhiBoPoint||desc('返回').findOnce()){
                back()
                sleep(2000)
            }
            log("广告观看中")
            
            
        }
        //继续广告
        if(text("继续观看").exists()){
            sleep(random(1000,3000))
            click_bounds(text("继续观看").findOnce())
            sleep(2000)
            console.log("继续观看广告")
        }
        //退出广告条件
        if(textContains("开心收下").exists()){
            textContains("开心收下").waitFor()
            click_bounds(textContains("开心收下").findOnce())
            sleep(1000)
            log("广告观看结束")
            return true

        }
        // guangGaoBtn = text("广告").exists()
        // sleep(500)
        // if(!guangGaoBtn){
            
        //         log("广告播放完毕")
        //         sleep(2000)
        //         return true
                
        // }
        
        
    }
    
}

function 开广告(){
    var imgUrl_5mins = "/sdcard/脚本/taskImg1.jpg"
    var imgUrl_10mins = "/sdcard/脚本/taskImg2.jpg"
    var point = 找图(imgUrl_5mins)
    point = !point?找图(imgUrl_10mins):point

    log(point)
    if(point){
        click(point.x,point.y)
        sleep(random(3000,5000))
        text("广告").waitFor()
        sleep(1000)
        看广告()
        // if(text("广告").exists()){
        //     log("广告开启成功")
        //     看广告()
        //     return true
        // }else if(text("赚钱任务").exists()){
        //     log("任务未到开启时间，请稍后再试。")
        //     return false
        // }
        
    }else{
        log("没有找到广告任务")
        return false
    }   
}

function 开宝箱(){
    var baoxiangBtn = text("开宝箱得金币").findOnce()
    if(baoxiangBtn){
        click_bounds(baoxiangBtn)
        textContains("看广告视频再赚").waitFor()
        sleep(random(3000,5000))
        var kanGuangGaoBtn = textContains("看广告视频再赚").findOnce()
        click_bounds(kanGuangGaoBtn)
        sleep(1000)
        text("广告").waitFor()
        sleep(1000)
        log("开始执行宝箱任务")
        看广告()
        // if(kanGuangGaoBtn){
        //     click_bounds(kanGuangGaoBtn)
        //     text("广告").waitFor()
        //     log("开始执行宝箱任务")
        //     看广告()
        //     sleep(2000)
        //     log("当前宝箱任务执行完毕")
        //     sleep(2000)
        //     return true
        // }else{
        //     log("没有进入正确页面，请稍后重试")
        //     if(text("赚钱任务").exists()){
        //         return false
        //     }
        //     back()
        //     sleep(2000)
        //     return false
        // }
    }else{
        log("宝箱任务尚未开启，请稍后再试。")
        sleep(2000)
        return false
    }
    
}

function 逛街(){
    for(var j=0;j<15;j++){
        for(var i=0;i<40;i++){
            if(i>20){
                swipe(303, 120, 335, 1200, 500)               
                sleep(7000) 
                log("逛街任务执行中")
            }else{
                swipe(303, 1200, 335, 120, 500)
                sleep(7000) 
                log("逛街任务执行中")
            }
            
        }
        log(`完成第${j+1}次任务,还剩${15-j-1}次`)
    }
}


function 走路(){
    var imgUrl = "/sdcard/脚本/zoulu.jpg"
    var point = 找图(imgUrl)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        // click(point.x,point.y)
        sleep(random(3000,5000))
        var lingJinBiBtn = textContains("金币").findOnce()
        var haiChaBtn = textContains("还差").findOnce()
        if(lingJinBiBtn&&!haiChaBtn){
            click_bounds(lingJinBiBtn)
            sleep(500)
            click_bounds(lingJinBiBtn)
            sleep(random(3000,5000))
            var lingliulangBtnJinBiBtn = textContains("浏览爆款").findOnce()
            if(lingliulangBtnJinBiBtn){
                click_bounds(lingliulangBtnJinBiBtn)
                sleep(500)
                click_bounds(lingliulangBtnJinBiBtn)
                sleep(random(3000,5000))
                //此处检测不准，需要修改
                if(text("上滑继续浏览").exists()){
                    log("开始浏览商品")
                    for(var i=0;i<50;i++){
                        swipe(303, 1000, 335, 500, 1500)
                        sleep(100)
                    }
                    sleep(2000)
                    log("当前走路任务执行完毕")
                    sleep(2000)
                    back()
                    if(text("赚钱任务").exists){
                        log("返回任务页")
                        return true
                    }       
                }else{
                    log("没有浏览商品选项")
                    sleep(2000)
                    //返回任务界面
                    back()
                    sleep(2000)
                    //返回任务页
                    back()
                    sleep(2000)
                    back() 
                    sleep(5000)
                    if(text("赚钱任务").exists){
                        log("返回任务页")
                        return false
                    } 
                }   
            }else{
                log("没有浏览爆款选项")
                sleep(2000)
                back()
                if(text("赚钱任务").exists){
                    log("返回任务页")
                    return true
                } 
            }
                    
        }else{
            log("走路任务-没有金币可领")
            sleep(2000)
            back()
            if(text("赚钱任务").exists){
                log("返回任务页")
                return false
            } 
        }
        
    }else{
        log("走路任务定位失败，请重新再试。")
        sleep(2000)
        
    }   
}

function 吃饭(){
    var imgUrl = "/sdcard/脚本/chifan.jpg"
    var point = 找图(imgUrl)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
        sleep(random(3000,5000))
        if(textContains("已按时吃饭").exists()){
            log("开始执行吃饭任务")      
            var chifanBtn = textContains("领取").findOnce()
            if(chifanBtn){
                click_bounds(chifanBtn)
                sleep(500)
                click_bounds(chifanBtn)
                sleep(random(5000,8000))
                var watchAdBtn = textContains("看视频再领").findOnce()
                if(watchAdBtn){
                    log(watchAdBtn.text())
                    click_bounds(watchAdBtn)
                    sleep(500)
                    click_bounds(watchAdBtn)
                    sleep(random(3000,5000))
                    看广告()
                    sleep(2000)
                    log("当前吃饭任务执行完毕")
                    return true
                    
                }else{
                    log("没有视频可以领取")
                    sleep(2000)
                    back()
                    sleep(2000)
                    if(text("赚钱任务").exists()){
                        log("返回任务页")
                        return false
                    }
                    

                }                
            }else{
                log("未到吃饭时间，没有金币可以领取")
                sleep(2000)
                back()
                sleep(2000)
                if(text("赚钱任务").exists()){
                    log("返回任务页")
                    return false
                }
            }
            
        }else{
            log("没有进入吃饭任务界面，请返回再试。")
            sleep(2000)
            back()
            sleep(2000)
            if(text("赚钱任务").exists()){
                log("返回任务页")
                return false
            }
        }   
    }else{
        log("控件定位失败，请重新再试。")
        return false
    }

    
}
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
    template.recycle()
    return point
       
}

//有bug,改为图片识别
function 搜索(){
    var souSuoBtn = text("去搜索").findOnce()
    if(souSuoBtn){
        click_bounds(souSuoBtn)
        sleep(500)
        click_bounds(souSuoBtn) 
        sleep(random(3000,5000))
        var searchIcon = desc("搜索").findOnce()
        if(searchIcon){
            log("开始执行搜索任务")
            click_bounds(searchIcon)
            sleep(500)
            click_bounds(searchIcon)  
            sleep(random(3000,5000))
            input(0,"123")
            log("输入内容")
            var searchBtn = desc('搜索').findOnce()
            if(searchBtn){
                click_bounds(searchBtn)
                sleep(500)
                click_bounds(searchBtn) 
                sleep(random(3000,5000))
                log("开始浏览")
                for(var i=0;i<15;i++){
                    swipe(303, 1000, 335, 500, 1000)
                    sleep(500)
                }
                log("搜索任务执行完毕")
                //返回任务页
                sleep(2000)
                back()
                jumpToTaskPage
                return true
            }else{
                log("未成功定位搜索按钮，请返回重试。")
                return false
            }

        }else{
            log("未成功进入搜索页面，请返回重试")
            return false
        } 

    }else{
        log("搜索任务定位失败，请返回再试")
        return false
    }
    
     
}

function 浏览爆款(){
    var imgUrl = "/sdcard/脚本/baoKuan.jpg"
    var point = 找图(imgUrl,0.9)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
        sleep(random(3000,5000))
        if(text("天天秒杀").exists()){
            log("开始浏览爆款商品")
            for(var i=0;i<60;i++){
                swipe(303, 1000, 335, 500, 1500)
                sleep(500)
            }  
            sleep(2000)
            log("浏览爆款任务执行完毕") 
            back()
            sleep(2000)
            if(text("赚钱任务").exists()){
                log("返回任务页")
                return true
            } 
            
            
        }else{
            log("今日浏览任务已执行，请明日再试")  
            back()
            log("返回任务页")
            return false
        }
       
    } else{
        log("没有找到浏览爆款任务")
        return false
    }   
}

function 看直播(){
    // var imgUrl = "/sdcard/脚本/kanzhibo.jpg"
    // var point = 找图(imgUrl)
    var zhiBoNum = 0
    var zhiBoBtn = text("去看看").findOnce()
    if(zhiBoBtn){
        // click(point.x,point.y)
        // sleep(500)
        // click(point.x,point.y)
        click_bounds(zhiBoBtn)
        sleep(500)
        click_bounds(zhiBoBtn)
        // sleep(random(10*1000,12*1000))
        sleep(20*1000)
        var mingRiImgUrl =  "/sdcard/脚本/mingRi.jpg"
        var mingRiPoint = 找图(mingRiImgUrl,0.95)
        if(mingRiPoint){
            log("今日直播任务完成，明天再来。")
            sleep(2000)
            log("返回任务页")
            back()
            sleep(2000)
            back() 
            return true  
        }
        text("开宝箱").waitFor()
        var kaiBaoXiangBtn = text("开宝箱").findOnce()
        if(kaiBaoXiangBtn){
        
            log("开始执行直播任务")
            while(true){
                //如果出现明日可领图标，表示任务结束，无需继续执行
                var mingRiImgUrl =  "/sdcard/脚本/mingRi.jpg"
                var mingRiPoint = 找图(mingRiImgUrl,0.94)
                log(mingRiPoint)
                if(zhiBoNum>10||mingRiPoint){
                    log("直播任务已执行完毕")
                    sleep(2000)
                    log("返回任务页")
                    back()
                    sleep(2000)
                    back() 
                    return true  
                }

                var kaiBaoXiangBtn = text("开宝箱").findOnce()
                if(kaiBaoXiangBtn){               
                    click_bounds(kaiBaoXiangBtn)
                    sleep(500)
                    click_bounds(kaiBaoXiangBtn)
                    sleep(2000)
                    log(`开启第${zhiBoNum+1}个宝箱`)
                    var zhiboCloseImgUrl =  "/sdcard/脚本/zhiboClose.jpg"
                    var zhiBoClosePoint = 找图(zhiboCloseImgUrl)
                    sleep(2000)
                    if(zhiBoClosePoint){
                        click(zhiBoClosePoint.x,zhiBoClosePoint.y)
                        sleep(2000)
                        // click(zhiBoClosePoint.x,zhiBoClosePoint.y)
                        if(!text("恭喜获得宝箱").exists()){
                            log("关闭宝箱")
                            zhiBoNum+=1
                            sleep(90*1000)
                        }else{
                            click(zhiBoClosePoint.x,zhiBoClosePoint.y)
                            sleep(2000)  
                        }
                        
                    }else{
                        log("未成功关闭")
                    }
                }else{
                    log("宝箱尚未开启，请稍后片刻。")
                    sleep(20*1000)
                }
                
                

            }
            log("直播任务已执行完毕")
            sleep(2000)
            log("返回任务页")
            back()
            sleep(2000)
            back() 
            return true     
        }else{
            log("未进入正确直播任务页面")
            sleep(2000)
            back()
            log("返回任务页")

            return false
        }
    } else{
        log("没有找到直播任务")
        sleep(2000)
        return false
    }   
}

function 听书(){
    var imgUrl = "/sdcard/脚本/tingShu.jpg"
    var point = 找图(imgUrl)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
        sleep(8000)
        if(text("听过").exists()){
            log("进入听书界面")
            var playBtn = desc("播放").findOnce()
            if(playBtn){
                click_bounds(playBtn)
                sleep(500)
                click_bounds(playBtn)
                log("开始执行听书任务")
                sleep(random(5*60*1000,15*60*1000))
                log("听书时间结束")
                var tingshuHongBaoBtn = textContains("金币").findOnce()
                if(tingshuHongBaoBtn){
                    log("准备领取金币")
                    click_bounds(tingshuHongBaoBtn)
                    sleep(200)
                    click_bounds(tingshuHongBaoBtn)
                    sleep(random(3000,5000))
                    var lingQunHongBaoBtn = desc("领取金币").findOnce()
                    if(lingQunHongBaoBtn){
                        click_bounds(lingQunHongBaoBtn)
                        sleep(500)
                        click_bounds(lingQunHongBaoBtn)
                        sleep(500)
                        click_bounds(lingQunHongBaoBtn)
                        sleep(2000)
                        log("听书任务执行完毕")
                        sleep(2000)
                        log("返回任务页")
                        back()
                        sleep(2000)
                        back()
                        if(text("赚钱任务").exists()){
                            log("返回任务页")
                        }
                        return true
                    }else{
                        log("未找到金币领取按钮")
                        sleep(8000)
                        lingQunHongBaoBtn = desc("领取金币").findOnce()
                        if(lingQunHongBaoBtn){
                            click_bounds(lingQunHongBaoBtn)
                            sleep(200)
                            click_bounds(lingQunHongBaoBtn)
                            sleep(200)
                            click_bounds(lingQunHongBaoBtn)
                            sleep(2000)
                            log("听书任务执行完毕")
                            sleep(2000)
                            log("返回任务页")
                            return true
                        }else{
                            log("金币领取失败")
                            sleep(2000)
                            log("返回任务页")
                            back()
                            return false 
                        }
                    }
                }else{
                    log("未找到金币领取图标")
                    sleep(2000)
                    log("返回任务页")
                    back()
                    return false
                }
            }else{
                log("未找到播放按钮")
                sleep(2000)
                log("返回任务页")
                back()
                return false
            }    
        }else{
            log("未正确进入听书任务页面")
            sleep(2000)
            log("返回任务页")
            back()
            return false
        }
       
    }else{
        log("未找到听书任务")
        return false
    } 
    
}
function 浏览视频(){
    var imgUrl = "/sdcard/脚本/liuLangShiPin.jpg"
    var point = 找图(imgUrl)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
        sleep(random(5000,8000))
        var searchIcon = desc("搜索").findOnce()
        if(searchIcon){
            log("开始浏览视频任务") 
            for(var i =0;i<20;i++){
                swipe(350,1000,300,50,500)
                sleep(random(10*1000,15*1000))
                log(`开始观看第${i+1}个视频`)
            }
            log("浏览视频任务执行完毕")
            sleep(2000)
            //点击来赚钱按钮返回任务页
            jumpToTaskPage()
            
        }else{
            log("未进入正确浏览视频页面")
            //判断是否位于任务页，如果不是任务页则返回至任务页
            return false
        }   
    }else{
        log("未找到浏览视频任务")
    }  
}
function 看漫画(){
    var imgUrl = "/sdcard/脚本/kanmanhua.jpg"
    var point = 找图(imgUrl)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
        sleep(random(5000,8000))
        var bangDan = text("完整榜单").findOnce()
        sleep(2000)
        if(bangDan){
            log("开始执行看漫画任务") 
            sleep(2000)
            var bookTitle = className("android.view.View").scrollable(true).clickable(true).depth(22).findOnce().parent()
            if(bookTitle){
                click_bounds(bookTitle)
                sleep(500)
                sleep(random(5000,8000))
                var nextPage = text("下一话").findOnce()   
                if(nextPage){
                    for(var i=0;i<10;i++){
                        sleep(random(8000,10000))
                        click_bounds(nextPage)
                        log(`翻到第${i+1}页`)     
                    }
                    sleep(2000)
                    log("今日漫画任务执行完毕")
                    back() //返回漫画列表页
                    //领金币
                    sleep(random(5000,8000))
                    var manHuaHongBaoBtn = textContains("金币").findOnce()
                    if(manHuaHongBaoBtn){
                        log("准备领取金币")
                        click_bounds(manHuaHongBaoBtn)
                        sleep(200)
                        click_bounds(manHuaHongBaoBtn)
                        sleep(random(3000,5000))
                        var lingQuHongBaoBtn = text("立即领取").findOnce()
                        if(lingQuHongBaoBtn){
                            log("领取金币")
                            click_bounds(lingQuHongBaoBtn)
                            sleep(200)
                            click_bounds(lingQuHongBaoBtn)
                            sleep(random(3000,5000))
                        }else{
                            log("金币已领取")
                        }
                        log("漫画任务执行完毕")
                        sleep(2000)
                        log("返回任务页")
                        sleep(3000)
                        back()  //此处需要后续测试
                        sleep(3000)
                        back() 
                        return true 
                    }else{
                        log("未找到金币领取按钮")
                    }                      
                }else{
                    log("该书已经读完，请换一本")
                    sleep(2000)
                    back()  //此处需要后续测试
                    log("返回任务页")
                    
                }
            }else{
                log("没有找到漫画书")
                sleep(2000)
                back()
                log("返回任务页")
                return false
            }
            
            
        }else{
            log("没有进入到正确的漫画任务页面")
            sleep(2000)
            back()
            log("返回任务页")
            return false
        }   
    }else{
        log("没有找到漫画任务")
        return false
    }    
}
function 种树(){
    
}
function 天天礼包(){
    
}
function 看新闻(){
    
}

function watchVideo(min){
    var 评论数
    for(var i=1;i<5*min;i++){
        log(`开始观看第${i}个视频`)
        //log(评论.desc())
        var 随机数 = Math.random() //设置一定概率，某些视频不用看评论
        // log(评论.desc())
        // log(/\d/.test(评论.desc()))
        评论数 = !id('tz').findOnce()?0:id('tz').findOnce().text()
        sleep(2000)
        if(评论数){

            if(评论数.desc().match(/\d+/)){
                评论数 = 评论数.desc().match(/\d+/)[0]
            }else{
                评论数 = 0
            }           
        }else{
            评论数 = 0
        }
        //log(`第${i}条视频的评论数为${评论数},随机数为${随机数}`)
        var img =  images.captureScreen()
        var point = images.findMultiColors(img, "#fd1b6c", [[20, 0, "#fd1b6c"],]) //屏蔽直播，找到直播中红色图标
        //log(point)
        if(评论数<10||point){
            sleep(3000,5000)       
        }else{
            sleep(10000,20000) 
            if(随机数<0.7){ // 设定70%的视频可以浏览评论
                click(650,750) //点击评论按钮
                log("进入评论界面")
                sleep(2000)
                for(var j=0;j<10;j++){ //翻看评论
                    if(text("暂时没有更多了").exists()||!id('avatar').exists()){ 
                        log("没有更多评论，退出评论界面。")
                        back() //返回视频界面
                        sleep(1000)
                        break
                    }
                    log("浏览评论")
                    swipe(350,1000,300,50,500)  
                    sleep(random(1000,3000))                                    
                }
                sleep(random(1000,3000)) 
                back() //返回视频界面
                sleep(1000)                
            }  
        }        
        log("划到下一条视频")
        swipe(350,1000,300,50,500) //划到下一条视频  
    }
}

function jumpToTaskPage(){
    //点击来赚钱按钮返回任务页
    var laiZhuanQianimgUrl = "/sdcard/脚本/hongbao.jpg"
    var laiZhuanQianPoint = 找图(laiZhuanQianimgUrl)
    log(laiZhuanQianPoint)
    if(laiZhuanQianPoint){
        click(laiZhuanQianPoint.x,laiZhuanQianPoint.y)
        sleep(100)
        // click(laiZhuanQianPoint.x,laiZhuanQianPoint.y)
        sleep(random(3000,5000))
        return true
        // if(text("赚钱任务").exists()){
        //     log("返回任务页")
        //     return true
        // }
        
    }

}

//截图权限
if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
sleep(2000)
console.time()

//看漫画()
//签到()
// var pageName = ['任务页','广告页','视频页']


function adTask(){
    try{
        log("开始任务")
        if(currentPackage()!=="com.ss.android.ugc.aweme.lite"){
            app.launch("com.ss.android.ugc.aweme.lite")
            // text("推荐").waitFor()
            jumpToTaskPage()
            sleep(5000)
        } 
        
        if(textContains("每日签到").exists()){
            签到()
        }

        
        
        if(text("广告").exists()){
            看广告()
        }else{
            var jinbiSum = textMatches("\\d+").findOnce(); 
            if(jinbiSum){
                jinbiSum = Number(jinbiSum.text())
                sleep(2000)
            }
            log(`当前共有${jinbiSum}金币，约${(jinbiSum/10000).toFixed(2)}元`)
            sleep(2000)
            var 宝箱倒计时 = textMatches(/\d{2}分\d{2}秒/).findOnce()
            var imgUrl_5mins = "/sdcard/脚本/taskImg1.jpg"
            var imgUrl_10mins = "/sdcard/脚本/taskImg2.jpg"
            var point = 找图(imgUrl_5mins)
            point = !point?找图(imgUrl_10mins):point
            if(宝箱倒计时){
                宝箱倒计时 = Number(宝箱倒计时.text().slice(0,2))
            }
            if(宝箱倒计时>5&&!point){
                back()
                sleep(random(3000,5000))
                log("开始刷视频")
                watchVideo(2)
                log("视频已刷完")
                jumpToTaskPage()
            }else{
                开广告()
                开宝箱()
            }
        }
    }catch(error){

    }
}

function nomalTask(){
    签到()
    sleep(2000)
    走路()
    sleep(5000)
    // 吃饭()
    swipe(303, 1000, 335, 500, 500);
    sleep(5000)
    // 看直播()
    搜索()
    浏览爆款()
    swipe(303, 1000, 335, 500, 500);
    swipe(303, 1000, 335, 500, 500);
    swipe(303, 1000, 335, 500, 500);
    swipe(303, 1000, 335, 500, 500);
    sleep(5000)
    听书()
    浏览视频()
    swipe(303, 1000, 335, 500, 500);
    sleep(5000)
    看漫画()
    swipe(303, 1000, 335, 500, 500);
    sleep(5000)
    看新闻()
}

// nomalTask()
adTask()
setInterval(adTask,20*1000)
// 开宝箱()
// 看广告()
// 开广告()
// 浏览爆款()
// 看直播()
// 逛街()
// 
// jumpToTaskPage()
// log("任务冷却中")
//         for(var i=0;i<60;i++){
//             var zhiBoimgUrl = "/sdcard/脚本/zhiBo.jpg"
//             var zhiBoPoint = 找图(zhiBoimgUrl)
//             log(`直播：${zhiBoPoint}`)
//             if(zhiBoPoint){
//                 back()
//                 sleep(2000)
//             } 
//             sleep(2000)
//         }


// 搜索()
// 听书()
// 浏览视频()
// 看漫画()   
// 走路()
// click(32,652)
console.timeEnd()
