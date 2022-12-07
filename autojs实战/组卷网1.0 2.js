// ==UserScript==
// @name         组卷网
// @version      0.11
// @namespace
// @description  【2022/11/22 更新版】自动组卷网组卷中心与试卷界面，使其能够直接打印
// @author       Carlos
// @match        https://zujuan.xkw.com/zujuan
// @match        https://zujuan.xkw.com/*
// @icon         https://zujuan.xkw.com/favicon.ico
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @homepage
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    var username = document.getElementsByClassName('user-info')[0].innerText;
    console.log("%c组卷网打印处理程序 %cBy CodeZhangBorui Version 0.10\n%c组卷网用户 %s，欢迎您使用本脚本", 'font-size: large; font-family: "微软雅黑"', 'font-size: large; font-family: "Consolas"', 'font-size: large; font-family: "微软雅黑"', username);
    GM_registerMenuCommand("处理后自动刷新", () => {
        if (localStorage.getItem("EnableAutoRefresh") == 'N'){
            localStorage.setItem("EnableAutoRefresh", 'Y');
            GM_notification("处理后自动刷新：已开启");
        } else {
            localStorage.setItem("EnableAutoRefresh", 'N');
            GM_notification("处理后自动刷新：已关闭");
        }
    })
    if(localStorage.getItem("EnableAutoRefresh") == null) {
        localStorage.setItem("EnableAutoRefresh", 'Y');
    }  
    function deleteElementByClassName(ClassName) {
        while(1) {
            var obj = document.getElementsByClassName(ClassName)[0];
            if(obj == undefined) {
                return;
            }
            obj.remove();
        }
    }
    function deleteElementById(Id) {
        var obj = document.getElementById(Id);
        if(obj == undefined) {
            return;
        }
        obj.remove();
    }
    function removeBorderByClassName(ClassName) {
        var obj = document.getElementsByClassName(ClassName);
        for(var i = 0; i < obj.length; i++) {
            obj[i].setAttribute('style', 'margin-bottom: 0;');
        }
    }
    function changeCssByClassName(ClassName,css){
        var obj = document.getElementsByClassName(ClassName);
        for(var i = 0; i < obj.length; i++) {
            obj[i].setAttribute('style', css);
        }
    }
    console.log("🔹 创建按钮对象...");
    var page = document.getElementsByClassName('link-box')[0]; 
    page = !page?document.getElementsByClassName('global-ctrl')[0]:page
    var printButton //添加打印试卷按钮
    if(page==undefined){
        console.error("❌ 没有可以打印的试卷");
    }else if(page.className == 'link-box clearfix '){
        printButton = document.createElement('a');
        printButton.className = "btnTestDown link-item anchor-font3"
        // printButton.href = "javascript: void 0"
        printButton.innerHTML =`<i class="icon icon-download1"></i><span>打印试卷</span>`
        printButton.onclick = function() {
            /*
             * 打印完成后自动刷新：true/false
             */
            var EnableAutoRefresh = localStorage.getItem("EnableAutoRefresh")=='Y'?true:false;           
            //获取提示用信息
            var papertitle = document.getElementsByClassName('title-txt')[7].innerText;
            var subject = document.getElementsByClassName('subject-menu__title')[0].innerText
            //外部框架
            deleteElementByClassName('header');
            deleteElementByClassName('bread-nav');
            deleteElementByClassName('fiexd-nav');
            deleteElementByClassName('footer');
            deleteElementByClassName('other-info');
            //Content里内容
            deleteElementByClassName('info-list');
            deleteElementByClassName('exam-item__info');
            deleteElementByClassName('add-sec-ques');
            deleteElementById(" paperAnalyze")
            deleteElementByClassName("exam-analyze")
            changeCssByClassName("selected-mask","opacity: 1;")
            //通知并打印
            console.log("✅ 处理成功！");
            GM_notification(subject + '| ' + papertitle, "✅ 试卷处理成功！");
            window.print();
            //自动刷新
            if(EnableAutoRefresh) {
                window.location.reload();
            }          
        }
    }else if(page.className=='global-ctrl'){
        printButton = document.createElement('div');
        printButton.className = "ctrl-bar"
        printButton.innerHTML =`<a class="download-btn" href="javascript:void 0">打印试卷</a>`
        printButton.onclick = function(){
            /*
             * 打印完成后自动刷新：true/false
             */
            var EnableAutoRefresh = localStorage.getItem("EnableAutoRefresh")=='Y'?true:false;
            //获取提示用信息
            var papertitle = document.getElementById('pui_maintitle').innerText
            var subject = document.getElementsByClassName('subject-menu__title')[0].innerText
            //外部框架
            deleteElementByClassName('header');
            deleteElementByClassName('bread-nav');
            deleteElementByClassName('fiexd-nav');
            deleteElementByClassName('footer');
            //Content里内容
            deleteElementByClassName('seal-line');
            deleteElementByClassName('tools');
            changeCssByClassName("paper-cnt","max-width:100%;")
            changeCssByClassName("ques-item","margin-bottom:0;")
            deleteElementByClassName("deleted-box")
            //去除每道题外面的边框
            removeBorderByClassName('ques-item');
            //通知并打印
            console.log("✅ 处理成功！");
            GM_notification(subject + '| ' + papertitle, "✅ 试卷处理成功！");
            window.print();
            //自动刷新
            if(EnableAutoRefresh) {
                window.location.reload();
            }
        }
    } 
    console.log("🔹 查找将要添加的位置...");
    var willAppendPlace = document.getElementsByClassName('link-box')[0];
    willAppendPlace = !willAppendPlace?document.getElementsByClassName('global-ctrl')[0]:willAppendPlace
    if(willAppendPlace == undefined) {
        console.log("❌ 无法找到将要添加的位置 ClassName:'btn-igroup-box'，程序现在将停止");
        showMessage('❌ 出错了<br/>脚本无法找到将要添加的位置 ClassName: btn-igroup-box，程序现在将停止。请联系脚本作者更新！', false);
    } else {
        // willAppendPlace.appendChild(tipP);
        willAppendPlace.appendChild(printButton);
        // willAppendPlace.appendChild(settingsButton);
        console.log("✅ 程序已就绪！");
    }
})();