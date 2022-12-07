

var 金币总量 //本轮获得金币总数
var 任务页
var 视频页
var 广告页
var 宝箱领奖页

function click_bounds(obj){
    var point = obj.bounds()
    try{
        click(point.centerX()+random(0,10),point.centerY()+random(0,10))
        //log(`控件点击成功,坐标为:[${point.centerX()},${point.centerY()}]`)
    }catch(error){
        console.log("点击失败")
    }
    
}



function watchAd(num){
    var adNum = 0
    var 领取成功
    var 关闭   
    var 再看一个
    var 领取奖励
    var 当前无新视频
    var 奖励加载
    var startTime = new Date().getTime() //看广告开始时间
    var endTime
    var 已看广告 = false
    log("开始看广告")
    while(true){
        
        //var 关闭图标 = className("com.lynx.tasm.behavior.ui.view.UIView").indexInParent(38).findOnce()
        
        
       
        
        // 广告页 = text("广告").findOnce()  //广告页面

        // 领取成功 = text("领取成功").findOne(500)
        // 关闭 = text("关闭，按钮").findOne(500)
        // //var 关闭图标 = className("com.lynx.tasm.behavior.ui.view.UIView").indexInParent(38).findOnce()
        // 任务页 = text("去提现").findOne(500) //判断任务页
        // 再看一个 = textContains("再看一个获取").findOne(500) 
        // 领取奖励 = text("领取奖励").findOne(500) //领取奖励界面
        // 当前无新视频 = text("当前无新视频").findOne(500)
        // 视频页 = id("dwa").findOnce()  // 视频页面
        // 奖励加载 = text("数据加载中").findOne(500) //领取奖励后加载
        // log(`领取成功:${Boolean(领取成功)}`)
        // log(`关闭:${Boolean(关闭)}`)
        // log(`关闭图标:${Boolean(关闭图标)}`)
        if(text("广告").findOnce()){
            广告页 = true
            视频页 = false
            任务页 = false
            宝箱领奖页 = false
        }
        if(text("去提现").findOnce()){
            任务页 = true
            广告页 = false
            视频页 = false
            宝箱领奖页 = false
        }   
        // log(`广告页：${广告页}`)
        if(广告页){
            领取奖励 = text("领取奖励").findOnce() //领取奖励界面
            奖励加载 = text("数据加载中").findOnce() //领取奖励后加载
            当前无新视频 = text("当前无新视频").findOnce()
            if(领取奖励){        
                //click(random(140,580),random(778,874)) //领取奖励
                var 金币 = Number(textMatches("\\d+").findOnce().text())
                金币总量+=金币
                sleep(random(1000,3000))    
                click_bounds(领取奖励)
                sleep(random(1000,3000))
                if(!奖励加载||!当前无新视频){
                    adNum+=1
                    已看广告 = false
                    toastLog(`成功领取${金币}金币`) 
                    sleep(random(1000,3000))
                }
                
                领取成功 = false
                关闭 = false
                关闭图标 = false  
                
            }
            
            if(当前无新视频){
                if(id('com.ss.android.ugc.aweme.lite:id/b').findOnce()){
                    click_bounds(id('com.ss.android.ugc.aweme.lite:id/b').findOnce())
                } 
                if(text('关闭，按钮').findOnce()){
                    click_bounds(text('关闭，按钮').findOnce()) 
                }
               
                sleep(random(1000,3000))
            }

            领取成功 = text("领取成功").findOnce()
            关闭 = text("关闭，按钮").findOnce()
            var img =  images.captureScreen()
            var close = images.read("/sdcard/脚本/close1.jpg")
            var p = findImage(img,close) //截图中判断关闭按钮是否存在
        
            if(领取成功||关闭||p){ 

                var 广告内容页 = text("查看详情").findOnce()
                // log(`中间-领取成功:${Boolean(领取成功)}`)
                // log(`中间-关闭:${Boolean(关闭)}`)
                //浏览广告详情页面
                sleep(random(1000,3000))
                if(广告内容页&&!已看广告){
                    toastLog("查看广告详情")
                    sleep(random(1000,3000)) 
                    click_bounds(广告内容页)
                    sleep(random(3000,5000)) 
                    //广告跳转到其他app
                    if(currentPackage()=="com.ss.android.ugc.aweme.lite"){
                        
                        for(var i=0;i<5;i++){
                            swipe(303, 1000, 335, 500, 500);
                            sleep(random(3000,5000))
                        }
                        sleep(random(2000,3000))
                        back()
                        sleep(random(2000,3000))
                        back()
                    }else{
                        log("跳到其他APP界面")
                        for(var i=0;i<5;i++){
                            swipe(303, 1000, 335, 500, 500);
                            sleep(random(3000,5000))
                        }
                        app.launch("com.ss.android.ugc.aweme.lite")
                        sleep(random(5000,8000))
                        back()
                        sleep(random(2000,3000))
                    }
                    
                    toastLog("广告详情查看完毕")
                    已看广告 = true
                }else{
                    back()
                    toastLog("关闭广告")
                    已看广告 = true
                    sleep(random(2000,5000))        
                }
                //看直播
                
            }
            再看一个 = textContains("再看一个获取").findOnce()  
            if(再看一个){        
                //click(random(140,580),random(778,874)) //领取奖励
                var 金币 = Number(再看一个.text().match(/\d+/g)[0])
                金币总量+=金币
                sleep(random(1000,3000))
                adNum+=1;
                click_bounds(再看一个)
                sleep(random(1000,3000))
                toastLog("成功领取金币："+金币) 
                sleep(random(3000,5000))
            }

            if(desc("返回").exists()&&!text("日常任务").exists()){
                sleep(random(1000,3000))
                back()
                sleep(random(1000,3000))
                back()
                toastLog("关闭当前广告。")
                sleep(random(1000,3000))                    
            }

            if(text("继续观看").exists()){
                sleep(random(1000,3000))
                click_bounds(text("继续观看").findOnce())
                sleep(20000)
                console.log("继续观看广告")
            }
            if(text("继续观看领取奖励").exists()){
                sleep(random(1000,3000))
                click_bounds(textContains("继续观看").findOnce())
                sleep(random(1000,3000))
                //click(random(296,424),random(807,845)) //点广告 
                toastLog("继续观看广告")
                sleep(2000)
            }
        }else if(视频页){
            广告页 = false
            jumpToTaskPage() //跳转到任务页面  
            break      
        }else if(任务页){
            广告页 = false
            break      
        }else if(currentPackage()!=="com.ss.android.ugc.aweme.lite"){
            app.launch("com.ss.android.ugc.aweme.lite")
            sleep(random(2000,3000))
        }

        if(adNum==num||text("去提现").exists()){
            console.log(`本轮任务共获得${金币总量}金币`)
            break
            
        }
        endTime = new Date().getTime() //获取循环结束时间
        if(endTime-startTime>5*60*1000){ //循环超过5分钟跳出循环
            log("程序出现卡死，跳出当前循环.")
            break
        }
        //log(`已经看广告${(endTime-startTime)/1000}秒`)
              
    }
    log("广告观看结束")
}
//宝箱任务
function treasureBox(){  
    金币总量 = 0 //本轮金币总量初始化
    var 开宝箱 = text("开宝箱得金币").findOnce()  
    if(开宝箱){ 
        toastLog("开始执行宝箱任务")
        sleep(3000)
        click_bounds(开宝箱) //点击宝箱图标
        toastLog("点击宝箱")
        sleep(random(2000,5000))
    }else{
        toastLog("宝箱任务尚未开启")
        sleep(random(2000,5000)) 
    } 
    // textContains("看广告视频再赚").waitFor()
    var 开广告 =textContains("看广告视频再赚").findOnce()
    if(开广告){
        sleep(3000)
        click_bounds(开广告)
        toastLog('领取广告') 
        sleep(random(2000,5000))
        watchAd(4)
        toastLog("宝箱任务执行完毕")
    }
    
}     

//看广告赚金币
function runTask(){
    金币总量 = 0 //本轮金币总量初始化   
    if(任务页){
        var 领取按钮 = text("去领取").find()
        var 明日再来 = text("明日再来").findOnce()
        if(明日再来){
            toastLog("今日广告任务已经领取完毕")
            sleep(2000)
        }else{
            toastLog("开始执行看广告赚金币任务")
            sleep(2000)
            /*
            星期二：去领取按钮 10
            */
            //截图判断”看广告赚金币“任务是否存在
            var img =  images.captureScreen()
            var adImg = images.read("/sdcard/脚本/task.jpg")
            var point = findImage(img,adImg)
            point = !point?findImage(img,images.read("/sdcard/脚本/taskImg.jpg")):point
            if(point){
                toastLog("领取广告")
                sleep(2000)
                click(point.x,point.y)     
                sleep(random(3000,5000))

                if(text("广告").findOnce()){
                    广告页 = true
                    视频页 = false
                    任务页 = false
                    宝箱领奖页 = false
                }
                if(广告页){
                    watchAd(4) 
                    toastLog("看广告赚金币任务执行完毕") 
                }  
            }else{
                toastLog("广告尚未开启")
                sleep(2000)
            }

            // if(领取按钮.size()==10||领取按钮.size()==8||领取按钮.size()==6){
            //     toastLog("领取广告")
            //     sleep(2000)
            //     click_bounds(领取按钮[0])       
            //     sleep(random(3000,5000))
            //     if(广告页){
            //         watchAd(4) 
            //         toastLog("看广告赚金币任务执行完毕") 
            //     }  
            // }else{
            //     toastLog("广告尚未开启")
            //     sleep(2000)
            // }
    
               
        } 
    }else{
        toastLog("继续执行任务。")
        sleep(2000)
        watchAd(4) 
    }
   
}

//看抖音视频
// function watchVideo(min){
//     for(var i=1;i<5*min;i++){
//         log(`开始观看第${i}个视频`)
//         var 评论 = id('tz').findOnce()
//         //log(评论.desc())
//         var 随机数 = Math.random() //设置一定概率，某些视频不用看评论
//         sleep(10000,20000)
//         if(评论){
//             if(/\d/.test(评论.desc())){ //判断是否有评论
//                 if(随机数<0.7){ // 设定70%的视频可以浏览评论
//                     click(650,750) //点击评论按钮
//                     log("进入评论界面")
//                     sleep(2000)
//                     for(var j=0;j<10;j++){ //翻看评论
//                         log("浏览评论")
//                         swipe(350,1000,300,50,500)
//                         sleep(random(1000,3000)) 
//                         if(text("暂时没有更多了").exists()||!id('avatar').exists()){ 
//                             log("没有更多评论，退出评论界面。")
//                             back() //返回视频界面
//                             sleep(1000)
//                             break
//                         }
//                     }
//                     back() //返回视频界面
//                     sleep(1000)
//                 }
                
//                 sleep(random(5000,10000)) 
//             }else{
//                 sleep(random(3000,5000)) //评论数为0直接跳到一条视频
//                 log("评论数为0")
//                 continue
//             }       
//         }
//         log("划到下一条视频")
//         swipe(350,1000,300,50,500) //划到下一条视频
          
        
//     }
// }
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

//跳转到任务页面
function jumpToTaskPage(){

    // if(!requestScreenCapture()){
    //     toastLog("截图权限未开启")
    //     exit()
    // }

    var img = captureScreen() //截屏
    //var point = findColor(img, "#fe466f") //识别红包颜色
    var point = images.findMultiColors(img, "#fe466f", [[0, -20, "#fee2be"],])
    if(point){
        // log(point.x,point.y)
        click(point.x,point.y)
        sleep(random(1000,3000))
        click(point.x,point.y)
        sleep(1000)
        log("跳转到任务页")

        if(text("去提现").findOnce()){
            任务页 = true
            广告页 = false
            视频页 = false
            宝箱领奖页 = false
        }
    }

}

function main(){
    // console.show()
    // console.setSize(50,30)//设置宽和高
    // console.setPosition(0,50) //设置位置    
        try{
            金币总量 = 0
            log("开始任务") 
            //每日签到
            if(textContains("立即签到").findOnce(1000)){
                click_bounds(textContains("立即签到").findOnce())
                sleep(random(1000,3000))
            }
            //签到后看视频领红包
            if(textContains("看广告视频再赚").findOnce(1000)){
                click_bounds(textContains("看广告视频再赚").findOnce())
                sleep(random(1000,3000))
                watchAd(1)
            }
            //如果跳到了金币抽奖页面
            if(text("我的金币").findOnce(1000)){
                log("抽奖页面")
                back()
                sleep(1000)
            }
            //如果跳到了吃饭页面
            if(textContains("已按时吃饭").findOnce()){
                log("吃饭页面")
                if(textContains("补贴").findOnce()){
                    log("领取补贴")
                    click_bounds(textContains("补贴").findOnce())
                    sleep(2000)
                    if(textContains("看视频").findOnce()){
                        click_bounds(textContains("看视频").findOnce()) 
                        if(广告页){
                            watchAd(4)
                        }
                    }
                }
                back()
                sleep(1000)
            }
            
      
            if(currentPackage()!=="com.ss.android.ugc.aweme.lite"){
                app.launch("com.ss.android.ugc.aweme.lite")
            }    
            if(text("广告").findOnce()){
                广告页 = true
                视频页 = false
                任务页 = false
                宝箱领奖页 = false
            }
            sleep(1000)
            if(text("去提现").findOnce()){
                任务页 = true
                广告页 = false
                视频页 = false
                宝箱领奖页 = false
            }
            sleep(1000)
            var img = captureScreen() //截屏
            var point = images.findMultiColors(img, "#fe466f", [[0, -20, "#fee2be"],])//识别红包颜色,以定位视频页
            // log(`point:${point}`)
            if(point){
                任务页 = false
                广告页 = false
                视频页 = true
                宝箱领奖页 = false  
            }

            if(任务页){
                var 领取按钮 = text("去领取").find()
                var 宝箱倒计时 = textMatches(/\d{2}分\d{2}秒/).findOnce()
                var 金币收益 = textMatches("\\d+").findOnce(); 
                广告页 = false
                视频页 = false
                宝箱领奖页 = false
                
                if(宝箱倒计时){
                    宝箱倒计时 = Number(宝箱倒计时.text().slice(0,2))
                }
       
                 //如果宝箱倒计时大于5分钟，看广告赚视频按钮未出现“已领取”，便开始刷视频。
                
                if(金币收益){
                    金币收益 = Number(金币收益.text())
                    sleep(2000)
                }
                //截图判断”看广告赚金币“任务是否存在
                // var img =  images.captureScreen()
                // var adImg = images.read("/sdcard/脚本/task.jpg")
                // var task_point = findImage(img,adImg)
                // task_point = !task_point?findImage(img,images.read("/sdcard/脚本/taskImg.jpg")):task_point
                // if(text("看广告赚金币").findOnce(500)){
                //     log(`当前共有${金币收益}金币，约${(金币收益/10000).toFixed(2)}元`)
                //     sleep(2000)
                //     runTask()
                // }
                log(`当前共有${金币收益}金币，约${(金币收益/10000).toFixed(2)}元`)
                sleep(2000)
                runTask()
                if(宝箱倒计时>5){
                    back()
                    sleep(random(3000,5000))
                    log("开始刷视频")
                    watchVideo(5)
                    log("视频已刷完")
                    jumpToTaskPage()
                }
                if(text("开宝箱得金币").findOnce()){
                    sleep(random(3000,5000))
                    treasureBox()
                    sleep(2000)
                } 
                
                

            }else if(广告页){
                任务页 = false
                视频页 = false
                宝箱领奖页 = false
                watchAd(4)
            }else if(视频页){
                广告页 = false
                任务页 = false
                宝箱领奖页 = false
                jumpToTaskPage()  
            }else if(宝箱领奖页){
                log(宝箱领奖页)
                treasureBox()
            }
            
            
            
        }catch(error){
            log(error)
            log("程序意外退出")
        }
}

// setInterval(function(){
//     //获取当前时间
//     var curTime = new Date()
//     var curHour = curTime.getHours()
//     var curMin = curTime.getMinutes()
//     if((curHour>=5&&curHour<=23)){
//         main()
//         var id = setInterval(main,20000)
//         //半小时后取消循环
//         setTimeout(function(){
//             clearInterval(id);
//         }, 5*3600 * 1000);
//     }
// },1000)
if(!requestScreenCapture()){
    toastLog("截图权限未开启")
    exit()
}
// var w = floaty.rawWindow(
//     <frame gravity="center" bg="#99000000"/>
// );
// //降低屏幕亮度
// w.setSize(-1,-1)
// w.setTouchable(false)
setInterval(main,1000)









