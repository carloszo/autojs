

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

function 看广告(){
    //判断进入广告页面
    var guangGaoBtn = text("广告").exists()
    if(guangGaoBtn){
        log("进入广告界面")
        while(true){
            //关闭广告
            var lingQuBtn = text("领取成功").findOnce() //领取成功
            lingQuBtn = !lingQuBtn?desc("关闭，按钮").findOnce():lingQuBtn
            if(lingQuBtn){
                click_bounds(lingQuBtn)
                sleep(500)
                click_bounds(lingQuBtn)
                log("关闭广告")
                sleep(random(3000,5000))
                //领取奖励
                var lingQuJiangLiBtn = text("领取奖励").findOnce()
                if(lingQuJiangLiBtn){
                    click_bounds(lingQuJiangLiBtn)
                    sleep(500)
                    click_bounds(lingQuJiangLiBtn)
                    log("领取奖励")
                    sleep(random(3000,5000))
                }
            }else{
                log("广告观看中")
                sleep(5000)
            }
            
            guangGaoBtn = text("广告").exists()
            sleep(500)
            if(!guangGaoBtn){
                log("广告播放完毕")
                return true
            }
            
        }
    }else{
        log("未进入广告页面")
        return false
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
        sleep(500)
        click(point.x,point.y)
        sleep(random(3000,5000))
        sleep(10*1000)
        if(text("广告").exists()){
            log("广告开启成功")
            看广告()
            return true
        }else if(text("赚钱任务").exists()){
            log("任务未到开启时间，请稍后再试。")
            return false
        }
        
    }else{
        log("没有找到广告任务")
        return false
    }   
}

function 开宝箱(){
    var baoxiangBtn = text("开宝箱得金币").findOnce()
    if(baoxiangBtn){
        click_bounds(baoxiangBtn)
        sleep(500)
        click_bounds(baoxiangBtn)
        sleep(random(3000,5000))
        var kanGuangGaoBtn = textContains("看广告视频再赚").findOnce()
        if(kanGuangGaoBtn){
            click_bounds(kanGuangGaoBtn)
            text("广告").waitFor()
            log("开始执行宝箱任务")
            看广告()
            sleep(2000)
            log("当前宝箱任务执行完毕")
            return true
        }else{
            log("没有进入正确页面，请稍后重试")
            back()
            sleep(2000)
            return false
        }
    }else{
        log("宝箱任务尚未开启，请稍后再试。")
        return false
    }
    
}

function 逛街(){

}


function 走路(){
    var imgUrl = "/sdcard/脚本/zoulu.jpg"
    var point = 找图(imgUrl)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
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
                    log("返回任务页")
                    return true
                    
                }else{
                    log("没有浏览商品选项")
                    sleep(2000)
                    back()
                    log("返回任务页")
                    return false
                }   
            }else{
                log("没有浏览爆款选项")
                sleep(2000)
                back()
                log("返回任务页")
                return false
            }
                    
        }else{
            log("走路任务-没有金币可领")
            sleep(2000)
            back()
            log("返回任务页")
            return false
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
                sleep(random(3000,5000))
                var watchAdBtn = textContains("看视频再领").findOnce()
                if(watchAdBtn){
                    log(watchAdBtn.text())
                    click_bounds(watchAdBtn)
                    sleep(500)
                    click_bounds(watchAdBtn)
                    sleep(random(3000,5000))
                    看视频()
                    sleep(2000)
                    log("当前吃饭任务执行完毕")
                    return true
                    
                }else{
                    log("没有视频可以领取")
                    sleep(2000)
                    back()
                    log("返回任务页")
                    return false

                }                
            }else{
                log("未到吃饭时间，没有金币可以领取")
                sleep(2000)
                back()
                log("返回任务页")
                return false
            }
            
        }else{
            log("没有进入吃饭任务界面，请返回再试。")
            sleep(2000)
            back()
            log("返回任务页")
            return false
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
    return point
       
}

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
    var imgUrl = "/sdcard/脚本/liulangbaokuan.jpg"
    var point = 找图(imgUrl)
    log(point)
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
        sleep(random(3000,5000))
        if(!text("明天可领").exists()){
            log("开始浏览爆款商品")
            for(var i=0;i<60;i++){
                swipe(303, 1000, 335, 500, 1500)
                sleep(500)
            }  
            sleep(2000)
            log("浏览爆款任务执行完毕")  
            back()
            log("返回任务页")
            return true
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
        sleep(2000)
        text("开宝箱").waitFor()
        var kaiBaoXiangBtn = text("开宝箱").findOnce()
        if(kaiBaoXiangBtn){
        
            log("开始执行直播任务")
            while(true){
                var kaiBaoXiangBtn = text("开宝箱").findOnce()
                if(kaiBaoXiangBtn){               
                    click_bounds(kaiBaoXiangBtn)
                    sleep(500)
                    click_bounds(kaiBaoXiangBtn)
                    sleep(1000)
                    text("恭喜获得宝箱").waitFor()
                    log(`开启第${zhiBoNum+1}个宝箱`)
                    var zhiboCloseImgUrl =  "/sdcard/脚本/zhiboClose.jpg"
                    var zhiBoClosePoint = 找图(zhiboCloseImgUrl)
                    if(zhiBoClosePoint){
                        click(zhiBoClosePoint.x,zhiBoClosePoint.y)
                        sleep(500)
                        click(zhiBoClosePoint.x,zhiBoClosePoint.y)
                        log("关闭宝箱")
                        zhiBoNum+=1
                        sleep(90*1000)
                    }else{
                        log("未成功关闭")
                        sleep(2000)
                    }
                    // var mingRiBtn =  text("明日可领").findOnce()
                    // if(mingRiBtn){
                    //     log("今日直播宝箱已经领取完毕，明天再来吧。")
                    //     break
                    //     sleep(2000)
                    //     log("返回任务页")
                    //     return true
                    // }
                }else{
                    log("宝箱尚未开启，请稍后片刻。")
                    sleep(20*1000)
                }
                if(zhiBoNum>10){
                    log("直播任务已执行完毕")
                    sleep(2000)
                    log("返回任务页")
                    back()
                    sleep(2000)
                    back() 
                    return true  
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
            }
            log("浏览视频任务执行完毕")
            sleep(2000)
            log("返回任务页")
            return true
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
                        sleep(2000)
                        back()  //此处需要后续测试
                        sleep(2000)
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

if(text("广告").exists()){
    看广告()
}
function main(){
    if(text("广告").exists()){
        看广告()
    }else if(text("赚钱任务").exists()){
        开广告()
        开宝箱()
    }

}
main()
setInterval(main,2*60*1000)
// 浏览爆款()
// 看直播()

console.timeEnd()