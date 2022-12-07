"ui";
"Auto";
ui.layout(
    <vertical padding="16">
        <text id="title" text="李彦宏今天又亏钱了" textSize="18sp" textColor="#ffffff" bg="#000000" w="*" gravity="center"></text>
        <text text = "预防虚假广告从我做起！" textSize="16sp" textColor = "#ffffff" bg="#000000" w="*" gravity="center"></text>
        <text text = "如果你的账号被百度ban了，那与本脚本无关。" textSize="12sp" textColor = "#ffffff" bg="#7B68EE" w="*" gravity="center"></text>
        <text text = "此脚本完全免费！如果倒卖脚本我祝福你全家！" textSize="12sp" textColor = "#ffffff" bg="#DC143C" w="*" gravity="center"></text>
        <button id="test_b" text="点击下载呸吐激素版" w="*"/>
        <text text="提示：下面打勾选择功能,启动脚本前请先停留在 我的 页面" w="*" gravity="center"></text>
        <text text="只能勾选一个功能" w="*" gravity="center"></text>
        <radiogroup>
            <radio id="kangshitwen_ck" text="启用看新闻" w="auto"/>
            <radio id="kanduanshiping" text="启用看短视频" w="auto"/>
            <radio id="kanguanggao_ck" text="启用看广告" w="auto"/>
            <radio id = "baoxiang" text="只领取宝箱并看广告(不能和上面的一起勾选)" w="auto"/>
        </radiogroup>
        <text text="请先保存后再去启动脚本！" w="auto" gravity="center"></text>
        <button id="enable_b" text="启动脚本" w="auto"/>
        <button id="save_b" text="保存配置" w="auto"/>
        <button id="test1_b" text="读取配置" w="auto"/>
        <button id="delfile_b" text="删除配置文件" w="auto"/>
    </vertical>
);

ui.test_b.on("click",()=>{
    toast("正在前往网页下载！");
    app.openUrl("https://gdown.baidu.com/appcenter/pkg/upload/d1c5c32b36f74e9f6c1c106ba58b35ad");
});
ui.enable_b.on("click",()=>{
    toast("已启动脚本！请设置启动权限以确保正常启动！");
    threads.start(function(){
        sleep(1000);
        click("立即开始");
    });
    if(ui.kangshitwen_ck.checked){
        var rdnz = require("readnewz.js");
        rdnz.launch();
    }
    if(ui.kanduanshiping.checked){
        var sv = require("shortvideo.js");
        sv.launch();
    }
    if(ui.kanguanggao_ck.checked){
        var wtad = require("watchad_.js");
        wtad.launch();
        threads.start(function(){
        sleep(5000);
        click("看广告赚钱");
            if(wtad.close_ad() == true){
                while(wtad.next_ad() == true){
                    if (wtad.close_ad() == false)
                {
                        toastLog("脚本停止运行！ 断点:找不到叉");
                    }
                }
                var aa = true
                while(aa){
                    if(wtad.agian_ad() == false){
                        aa = false;
                        toastLog("找不到box叉");
                    }
                }
            }else{
                toastLog("脚本停止运行！断点:看完广告点击了残忍离开");
            }
            toastLog("--自动看广告脚本运行完毕--");
        });
    }
    
});
