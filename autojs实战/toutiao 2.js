function treasureBox(){

    if(text("开宝箱得金币").exists()){
        click(random(502,658),random(1274,1322)) //点击宝箱按钮
        sleep(random(1000,5000))        
        click(random(101,619),random(874,1015)) //第一次看广告
        sleep(18000)
        click(random(623,687),random(33,95)) //关闭广告
        sleep(2000)

        for(var i=0;i<4;i++){
            
            if(text("恭喜您已经获得奖励").exists()){
                click(random(196,524),random(815,903))
                sleep(18000)
                click(random(623,687),random(33,95)) //关闭广告
                
                sleep(2000) 
                toast(i);
            } 
                            
        }
    }else{
        toast("宝箱尚未开启")
    }
    
}
function runTask(){

    while(text("领福利").exists()){
        click(random(535,628),random(677,714))
        sleep(20000)
        if(text("查看详情").exists()||text("关闭").exists()){
            click(random(623,687),random(33,95)) //关闭广告
        }
        for(var i=0;i<3;i++){
            if(text("再看一个获得").exists()){
                click(random(196,524),random(815,903))
                sleep(20000)
                click(random(623,687),random(33,95)) //关闭广告
            } 
                           
        }
    
    
    }
}

function main(){
    while(!text("开宝箱得金币").exists()){
        toast("请打开任务界面")
    }
    treasureBox()
}
main()
setInterval(main,20000)


