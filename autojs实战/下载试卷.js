// ==UserScript==
// @name         试卷下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Carlos
// @match        http://dzs.hongkewangluo.com/Index/article/aid/*.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hongkewangluo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("🔹 创建按钮对象...");
    // var tipP = document.createElement('p');
    // tipP.innerText = "----- 试卷打印处理程序 -----";
    var centerPrintButton = document.createElement('div');
    centerPrintButton.className = "ctrl-bar"
    centerPrintButton.innerHTML =`<a class="download-btn" href="javascript:void 0">下载试卷</a>`
    // printButton.innerHTML = `<a href="javascript:void(0)" style="width:130px;" class="mr15"><i class="icon i-paper-07"></i><em class="m5 vm">打印试卷</em></a>`;
    centerPrintButton.onclick = function(){
        var url = window.basepathh;
        var pageCount = window.bcount;
        for(var i=1;i<=pageCount;i++){
            var downloadUrl = `http://dzs.hongkewangluo.com/${url}${i}.jpg`
            console.log(downloadUrl)
            setTimeout(()=>{                
            },2000)
            var a = document.createElement('a')
            var event = new MouseEvent('click')
            a.download =`${i}.jpg` || '下载图片名称'
            a.href = downloadUrl
            a.dispatchEvent(event)
            
            
  
        }
  
    }

    var willAppendPlace = document.getElementsByClassName('miniTitle')[0];
    if(willAppendPlace == undefined) {
        console.error("❌ 无法找到将要添加的位置 ClassName:'btn-igroup-box'，程序现在将停止");
        showMessage('❌ 出错了<br/>脚本无法找到将要添加的位置 ClassName: btn-igroup-box，程序现在将停止。请联系脚本作者更新！', false);
    } else {
        // willAppendPlace.appendChild(tipP);
        willAppendPlace.appendChild(centerPrintButton);
        // willAppendPlace.appendChild(settingsButton);
        console.log("✅ 程序已就绪！");
    }
    
    

    // Your code here...
})();