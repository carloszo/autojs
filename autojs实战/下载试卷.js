// ==UserScript==
// @name         è¯å·ä¸è½½
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

    console.log("ð¹ åå»ºæé®å¯¹è±¡...");
    // var tipP = document.createElement('p');
    // tipP.innerText = "----- è¯å·æå°å¤çç¨åº -----";
    var centerPrintButton = document.createElement('div');
    centerPrintButton.className = "ctrl-bar"
    centerPrintButton.innerHTML =`<a class="download-btn" href="javascript:void 0">ä¸è½½è¯å·</a>`
    // printButton.innerHTML = `<a href="javascript:void(0)" style="width:130px;" class="mr15"><i class="icon i-paper-07"></i><em class="m5 vm">æå°è¯å·</em></a>`;
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
            a.download =`${i}.jpg` || 'ä¸è½½å¾çåç§°'
            a.href = downloadUrl
            a.dispatchEvent(event)
            
            
  
        }
  
    }

    var willAppendPlace = document.getElementsByClassName('miniTitle')[0];
    if(willAppendPlace == undefined) {
        console.error("â æ æ³æ¾å°å°è¦æ·»å çä½ç½® ClassName:'btn-igroup-box'ï¼ç¨åºç°å¨å°åæ­¢");
        showMessage('â åºéäº<br/>èæ¬æ æ³æ¾å°å°è¦æ·»å çä½ç½® ClassName: btn-igroup-boxï¼ç¨åºç°å¨å°åæ­¢ãè¯·èç³»èæ¬ä½èæ´æ°ï¼', false);
    } else {
        // willAppendPlace.appendChild(tipP);
        willAppendPlace.appendChild(centerPrintButton);
        // willAppendPlace.appendChild(settingsButton);
        console.log("â ç¨åºå·²å°±ç»ªï¼");
    }
    
    

    // Your code here...
})();