"ui";
var 配置 = storages.create("doodongyh");
var version = "7.2";
ui.layout(
    <ScrollView>
        <vertical>
            <appbar>
                <horizontal>
                    <toolbar id="bt" title="辅助浏览视频" gravity="left" textColor="red" layout_weight="1" />
                    <Switch id="autoService" text="无障碍" checked="{{auto.service != null}}" padding="20 20 8 8" textSize="15sp" />
                </horizontal>
                <tabs id="tabs" />
            </appbar>
            <horizontal>
                <text text="  执行任务：" gravity="left" />
                <checkbox id="tj" text="浏览推荐" checked="true" />
                <checkbox id="tc" text="浏览同城" checked="true" />
                <checkbox id="zb" text="观看直播" checked="true" />
            </horizontal>
            <button id="start" text="开始运行" style="Widget.AppCompat.Button.Colored" />
            <viewpager id="viewpager" h="2000px" padding="0" >
                <frame padding="0" h="auto">
                    <card layout_gravity="center|top" marginBottom="1" w="*" marginLeft="10" marginRight="10" h="auto" cardCornerRadius="0dp" bg="#00000000">
                        <ScrollView h="auto">
                            <vertical h="auto">
                                <horizontal>
                                    <text text="  浏览推荐时长：" gravity="left" />
                                    <input id="yhsc" hint="   时间   " textSize="15sp" inputType="number" gravity="center" />
                                    <text text="  分钟" gravity="left" />
                                </horizontal>
                                <horizontal>
                                    <text text="  喜欢作品概率：" gravity="left" />
                                    <input id="xhgl" hint="喜欢概率" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="  评论作品概率：" gravity="left" />
                                    <input id="plgl" hint="评论概率" textSize="15sp" inputType="number" gravity="center" />
                                </horizontal>
                                <horizontal>
                                    <text text="  收藏作品概率：" gravity="left" />
                                    <input id="scgl" hint="收藏概率" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="  转发作品概率：" gravity="left" />
                                    <input id="zfgl" hint="转发概率" textSize="15sp" inputType="number" gravity="center" />
                                </horizontal>
                                <horizontal>
                                    <text text="  浏览主页概率：" gravity="left" />
                                    <input id="zygl" hint="主页概率" textSize="15sp" inputType="number" gravity="center" />
                                </horizontal>
                                <horizontal>
                                    <text text="  主播设置：" gravity="left" />
                                    <checkbox id="gzzb" text="关注主播   " checked="true" />
                                    <text text="     关注概率：" gravity="left" />
                                    <input id="gzgl" hint="关注概率" textSize="15sp" inputType="number" gravity="center" />
                                </horizontal>
                                <horizontal>
                                    <text text="  评论选择：" gravity="left" />
                                    <checkbox id="pldz" text="评论点赞" checked="true" />
                                </horizontal>
                                <radiogroup orientation="horizontal" >
                                    <text text="  评论方式：" gravity="left" />
                                    <radio id="diypl" text="自定义评论" />
                                    <radio id="znpl" text="智能仿评论" />
                                </radiogroup>
                                <horizontal>
                                    <text text="  评论点赞：" gravity="left" />
                                    <text text="  点赞数量：" gravity="left" />
                                    <input id="pldzsl" hint="数量" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="  点赞概率：" gravity="left" />
                                    <input id="pldzgl" hint="概率" textSize="15sp" inputType="number" gravity="center" />
                                </horizontal>
                                <horizontal>
                                    <text text="  评论内容：" gravity="left" />
                                    <input id="plnr" hint="作品评论内容,可设置多个" textSize="15sp" gravity="left" />
                                </horizontal>
                                <horizontal>
                                    <text text="  作品关键词：" gravity="left" />
                                    <input id="key" hint="务必填写，不填写无法播放！" textSize="15sp" />
                                </horizontal>
                                <horizontal>
                                    <text text="  作品点赞数大于：" gravity="left" color="#FF8C00" />
                                    <input id="zpdzs" hint="      " textSize="15sp" />
                                    <text text="  作品评论数大于：" gravity="left" color="#FF8C00" />
                                    <input id="zppls" hint="      " textSize="15sp" />
                                </horizontal>
                                <horizontal>
                                    <text text="  关键词设置：" gravity="left" />
                                    <checkbox id="gjcsb" text="关闭关键词识别[不建议]" checked="true" />
                                </horizontal>
                                <horizontal>
                                    <text text="  浏览作品时间：" gravity="left" />
                                    <input id="jg" hint="最小值" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="----" gravity="center" />
                                    <input id="jg1" hint="最大值" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="   秒" gravity="left" />
                                </horizontal>
                                <text text="   温馨提示：" gravity="left" color="#FF0000" />
                                <text text="   1.可设置多个关键词，分隔符为英文逗号即“,”；" gravity="left" />
                                <text text="   2.例如：剪辑,影视,观影,60帧等；" gravity="left" />
 
                            </vertical>
 
                        </ScrollView>
                    </card>
                </frame>
                <frame>
                    <card layout_gravity="center|top" marginBottom="5" w="*" marginLeft="10" marginRight="10" h="auto" cardCornerRadius="0dp" bg="#00000000">
 
                        <ScrollView>
                            <vertical>
                                <horizontal>
                                    <text text="  浏览同城时间：" gravity="left" />
                                    <input id="sc1" hint="时间(分钟)" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="  分钟" gravity="left" />
                                </horizontal>
                                <horizontal>
                                    <text text="   每个作品观看：" gravity="left" />
                                    <input id="jg3" hint="最小值" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="----" gravity="center" />
                                    <input id="jg4" hint="最大值" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="   秒" gravity="left" />
                                </horizontal>
                            </vertical>
                        </ScrollView>
                    </card>
                </frame>
                <frame>
                    <card layout_gravity="center|top" marginBottom="5" w="*" marginLeft="10" marginRight="10" h="auto" cardCornerRadius="0dp" bg="#00000000">
 
                        <ScrollView>
                            <vertical>
                                <horizontal>
                                    <text text="  观看直播时间：" gravity="left" />
                                    <input id="sc2" hint="时间(分钟)" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="  分钟" gravity="left" />
                                </horizontal>
                                <horizontal >
                                    <text text="   打字速度：" gravity="left" />
                                    <spinner id="khd" entries="快速|正常|慢速" />
                                </horizontal>
                                <horizontal>
                                    <text text="   开启暖场：" gravity="left" />
                                    <checkbox id="kqpl" text="开启暖场" checked="true" />
                                </horizontal>
                                <radiogroup orientation="horizontal" >
                                    <text text="   暖场方式：" gravity="left" />
                                    <radio id="zhineng" text="自定义内容  " />
                                    <radio id="fang" text="仿公屏内容" />
                                </radiogroup>
                                <horizontal>
                                    <text text="   暖场内容：" gravity="left" />
                                    <input id="key2" hint="务必填写，不填写无法暖场！" textSize="15sp" />
                                </horizontal>
                                <horizontal>
                                    <text text="   每个直播观看：" gravity="left" />
                                    <input id="jg5" hint="最小值" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="----" gravity="center" />
                                    <input id="jg6" hint="最大值" textSize="15sp" inputType="number" gravity="center" />
                                    <text text="   秒" gravity="left" />
                                </horizontal>
                            </vertical>
                        </ScrollView>
                    </card>
                </frame>
 
            </viewpager>
 
        </vertical>
    </ScrollView>
);
ui.viewpager.setTitles(["浏览推荐", "浏览同城", "观看直播"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);
 
ui.autoService.on("check", function (checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
ui.emitter.on("resume", function () {
    ui.autoService.checked = auto.service != null;
});
readconfig();
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});
var 悬块 = function (window, view) {
    if (!window || !view) {
        throw "缺参数";
    };
    this.x = 0, this.y = 0;
    this.windowX, this.windowY;
    this.downTime = 500;
    this.Timeout = 0;
    this.Click = function () { };
    this.LongClick = function () { };
    this.setClick = function (fun) {
        //判断参数类型是否为函数？
        if (typeof fun == "function") {
            this.Click = fun;
        };
    };
    this.setLongClick = function (fun, ji) {
        //判断参数类型是否为函数？
        if (typeof fun == "function") {
            this.LongClick = fun;
            //判断参数是否可为设置数字？
            if (parseInt(ji) <= 1000) {
                this.downTime = parseInt(ji);
            };
        };
    };
 
    view.setOnTouchListener(new android.view.View.OnTouchListener((view, event) => {
        switch (event.getAction()) {
            //按下事件。
            case event.ACTION_DOWN:
                //按下记录各种坐标数据。
                this.x = event.getRawX();
                this.y = event.getRawY();
                this.windowX = window.getX();
                this.windowY = window.getY();
                //创建一个定时器用来定时执行长按操作。
                this.Timeout = setTimeout(() => {
                    this.LongClick();
                    this.Timeout = 0;
                }, this.downTime);
                return true;
            //移动事件。
            case event.ACTION_MOVE:
 
                return true;
            //抬起事件。
            case event.ACTION_UP:
                if (this.Timeout) {
                    clearTimeout(this.Timeout);
                    this.Timeout = 0;
                    this.Click();
                };
                return true;
        };
        return true;
    }));
};
var startime = Date.parse(new Date());
var 点赞数量 = 0;
var 浏览数量 = 0;
var 关注数量 = 0;
var pl点赞数量 = 0;
var config = {
    VIPARA: "0102030405060708", // IvParameterSpec
    bm: "UTF-8", // 编码
    dataPassword: 'eXVuZG9va3U2Ng==',
}
var http = fyhttp(100, 1000);
ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    saveconfig();
    xf();
    yz();
    抖音();
});
function 抖音() {
    主线程 = threads.start(function 抖音ll() {
        console.setTitle("垂直浏览");
        console.show();
        ts("执行操作：脚本开始运行");
        正版验证();
        // 首次弹窗();
        gjcjc();
        返回首页();
        sleep(3000);
        if (ui.tj.checked) {
            _养垂直();
        }
        if (ui.tc.checked) {
            同城();
        }
        if (ui.zb.checked) {
            直播间();
        }
        log("系统提示：任务结束");
        返回首页();
        home();
 
    })
}
function xf() {
    var stoptt = true;
    importClass(android.widget.TextView)
    var thread = threads.start(function op() {
        var window = floaty.window(
            <vertical alpha="1.0" h="*" w="*" >
                <frame h="40" >
                    {/* <vertical id="start1" w="40" h="40" gravity="center">
                        <img id="start" tint="green" w="30" h="30" src="@drawable/ic_play_circle_filled_black_48dp"></img>
                    </vertical> */}
                    <vertical id="quit" w="40" h="40" gravity="center" marginLeft="0">
                        {/* <img id="quit_icon" tint="red" w="30" h="30" src="@drawable/ic_cancel_black_48dp"></img> */}
                        <img id="stop" src="file://stop.png" />
                    </vertical>
                </frame>
            </vertical>
        );
        window.setPosition(10, device.height / 3)
        setInterval(() => { }, 500);
        var ad = new 悬块(window, window.stop);
        ad.setClick(function () {
            if (stoptt) {
                var yxtime = (Date.parse(new Date()) - startime) / 1000;
                yxtime = formatSeconds(yxtime);
                log("提示：用户停止运行");
                log("时间提示：运行" + yxtime);
                log("浏览作品：" + 浏览数量);
                log("点赞作品：" + 点赞数量);
                log("关注数量：" + 关注数量);
                stop.src = "@drawable/ic_play_circle_filled_black_48dp";
            } else {
 
            }
 
            exit();
        })
        // var startad = new 悬块(window, window.start);
        // startad.setClick(function () {
        //     var yxtime = (Date.parse(new Date()) - startime) / 1000;
        //     yxtime = formatSeconds(yxtime);
        //     log("提示：用户停止运行");
        //     log("时间提示：运行" + yxtime);
        //     log("浏览作品：" + 浏览数量);
        //     log("点赞作品：" + 点赞数量);
        //     log("关注数量：" + 关注数量);
        //     exit();
        // })
    })
    //创建一个新的悬浮控制模块 ad 并带入参数(所要控制的悬浮窗和用来控制悬浮窗移动的控件)。
 
}
function gjcjc() {
    var keyword = ui.key.text();
    var str = keyword.split(',');
    if (str.length <= 1) {
        var str = keyword.split('，');
    }
    log("关键词数量：" + str.length);
    for (k = 0; k < str.length; k++) {
        log("关键词" + (k + 1) + ":" + str[k]);
    }
}
function saveconfig() {
    配置.put("xhgl", ui.xhgl.text());
    配置.put("plgl", ui.plgl.text());
    配置.put("scgl", ui.scgl.text());
    配置.put("zfgl", ui.zfgl.text());
    配置.put("jg", ui.jg.text());
    配置.put("jg1", ui.jg1.text());
    配置.put("key", ui.key.text());
    配置.put("yhsc", ui.yhsc.text());
    配置.put("plnr", ui.plnr.text());
    配置.put("gzgl", ui.gzgl.text());
    配置.put("zygl", ui.zygl.text());
    配置.put("pldzsl", ui.pldzsl.text());
    配置.put("pldzgl", ui.pldzgl.text());
 
    配置.put("diypl", ui.diypl.checked);
    配置.put("gzzb", ui.gzzb.checked);
    配置.put("pldz", ui.pldz.checked);
    配置.put("gjcsb", ui.gjcsb.checked);
 
    配置.put("khd", ui.khd.getSelectedItemPosition());
    配置.put("zhineng", ui.zhineng.checked);
    配置.put("fang", ui.fang.checked);
    配置.put("kqpl", ui.kqpl.checked);
    配置.put("key2", ui.key2.text());
    配置.put("jg3", ui.jg3.text());
    配置.put("jg4", ui.jg4.text());
    配置.put("jg5", ui.jg5.text());
    配置.put("jg6", ui.jg6.text());
    配置.put("sc1", ui.sc1.text());
    配置.put("sc2", ui.sc2.text());
 
    配置.put("zppls", ui.zppls.text());
    配置.put("zpdzs", ui.zpdzs.text());
 
    配置.put("tj", ui.tj.checked);
    配置.put("tc", ui.tc.checked);
    配置.put("zb", ui.zb.checked);
 
}
function readconfig() {
    ui.xhgl.text(配置.get("xhgl", "60"));
    ui.gzgl.text(配置.get("gzgl", "30"));
    ui.plgl.text(配置.get("plgl", "50"));
    ui.scgl.text(配置.get("scgl", "3"));
    ui.zfgl.text(配置.get("zfgl", "3"));
    ui.zygl.text(配置.get("zygl", "10"));
    ui.jg.text(配置.get("jg", "15"));
    ui.jg1.text(配置.get("jg1", "40"));
    ui.jg3.text(配置.get("jg3", "15"));
    ui.jg4.text(配置.get("jg4", "40"));
    ui.jg5.text(配置.get("jg5", "30"));
    ui.jg6.text(配置.get("jg6", "120"));
    ui.yhsc.text(配置.get("yhsc", "35"));
    ui.pldzsl.text(配置.get("pldzsl", "20"));
    ui.pldzgl.text(配置.get("pldzgl", "40"));
    ui.gjcsb.checked = Boolean(配置.get("gjcsb", ""));
    ui.diypl.checked = Boolean(配置.get("diypl", false));
    ui.znpl.checked = Boolean(配置.get("znpl", true));
    ui.pldz.checked = Boolean(配置.get("pldz", true));
    ui.gzzb.checked = Boolean(配置.get("gzzb", true));
    ui.key.text(配置.get("key", "影视,剪辑,观影"));
    ui.plnr.text(配置.get("plnr", "哎呦不错哦,支持下"));
 
    ui.zpdzs.text(配置.get("zpdzs", "0"));
    ui.zppls.text(配置.get("zppls", "0"));
 
    ui.sc1.text(配置.get("sc1", "25"));
    ui.sc2.text(配置.get("sc2", "30"));
    ui.key2.text(配置.get("key2", "正能量正能量,66666,求关注"));
    ui.zhineng.checked = Boolean(配置.get("zhineng", true));
    ui.fang.checked = Boolean(配置.get("fang", true));
    ui.kqpl.checked = Boolean(配置.get("kqpl", true));
    ui.khd.setSelection(parseInt(配置.get("khd", "1")));
 
    ui.tj.checked = Boolean(配置.get("tj", true));
    ui.tc.checked = Boolean(配置.get("tc", true));
    ui.zb.checked = Boolean(配置.get("zb", true));
}
function _视频检测() {
    var jstime = new Date().getTime();
    var h = device.height;
    var keyword = ui.key.text();
    // if (!text("推荐").visibleToUser().exists()) {
    //     返回首页();
    // }
    // if (text("评论并转发").visibleToUser().exists()) {
    //     back();
    //     sleep(1000);
    // }
    var uc = textMatches(".....*").visibleToUser().boundsInside(0, device.height / 2, device.width, device.height).find();
    for (i = 0; i < uc.length; i++) {
        if (uc[i].text() == "点击进入直播间") {
            log("直播中，自动跳过");
            log("检测耗时：" + (new Date().getTime() - jstime) + "毫秒");
            return false;
        }
        if (uc[i].text().indexOf("[t]") != -1 || uc[i].text().indexOf("广告") != -1) {
            log("广告作品，自动跳过");
            log("检测耗时：" + (new Date().getTime() - jstime) + "毫秒");
            return false;
        }
    }
    if (ui.gjcsb.checked) {
        浏览数量 = 浏览数量 + 1;
        if (parseInt(ui.zpdzs.text()) > 0 || parseInt(ui.zppls.text()) > 0) {
            var a = 取点赞评论数();
            if (a["dz"] >= parseInt(ui.zpdzs.text()) && a["pl"] >= parseInt(ui.zppls.text())) {
                return true;
            } else {
                log("系统提示：点赞数或评论数不符");
                return false;
            }
        }
        return true;
    }
 
    var str = keyword.split(',');
    if (str.length <= 1) {
        var str = keyword.split('，');
    }
    str = str.filter(function (s) {
        return s && s.trim();
    });
    for (i = 0; i < uc.length; i++) {
        for (k = 0; k < str.length; k++) {
            if (uc[i].text().indexOf(str[k]) != -1) {
                log("检测成功，视频符合");
                浏览数量 = 浏览数量 + 1;
                log(uc[i].text());
                log("关键词：" + str[k]);
                log("检测耗时：" + (new Date().getTime() - jstime) + "毫秒");
                if (parseInt(ui.zpdzs.text()) > 0 || parseInt(ui.zppls.text()) > 0) {
                    var a = 取点赞评论数();
                    if (a["dz"] >= parseInt(ui.zpdzs.text()) && a["pl"] >= parseInt(ui.zppls.text())) {
                        return true;
                    } else {
                        log("系统提示：点赞数或评论数不符");
                        return false;
                    }
                }
                return true;
            }
        }
    }
    log("跳过！当前视频不包含关键词");
    log("检测耗时：" + (new Date().getTime() - jstime) + "毫秒");
    if (new Date().getTime() - jstime < 1500) {
        sleep(random(500, 1500));
    }
 
    return false;
}
function 首次弹窗() {
    var path = engines.myEngine().cwd() + "/yh" + version + ".txt";
    if (files.exists(path) == false) {
        confirm("温馨提示：", "已为您更新至" + version + "版本\n\n1.关键词不符视频调整随机延迟" + "\n\n2.由原来的2--6秒调整至1秒内\n\n3.不符的作品浏览时间会很短", (value) => {
            if (value) {
                threads.start(function () {
                    files.write(path, version);
                })
            }
        })
    }
}
function 取点赞评论数() {
    var res = {};
    var uc = textMatches("[0-9]+|[0-9].+w").clickable().visibleToUser().find();
    if (uc.length < 2) {
        // var a = text("写评论").clickable().visibleToUser().findOne(1000);
        // if (a) {
        //     res["pl"] = 0;
        // } else {
        //     a = text("赞").clickable().visibleToUser().findOne(1000);
        //     if (a) {
        //         res["dz"] = 0;
        //     } else {
        //         if (uc.length > 1) {
        //             for (i = 0; i < uc.length; i++) {
        //                 var a = uc[i].text();
        //                 if (a.indexOf("w") > 0) {
        //                     a = a.replace("w", "");
        //                     a = a * 10000;
        //                 }
        //                 if (i == 0) {
        //                     res["dz"] = a;
        //                 }
        //                 if (i == 1) {
        //                     res["pl"] = a;
        //                 }
        //             }
        //         } else {
        //             res["dz"] = 0;
        //             res["pl"] = 0;
        //         }
        //     }
        // }
        res["dz"] = 0;
        res["pl"] = 0;
    } else {
        for (i = 0; i < uc.length; i++) {
            var a = uc[i].text();
            if (a.indexOf("w") > 0) {
                a = a.replace("w", "");
                a = a * 10000;
            }
            if (i == 0) {
                res["dz"] = a;
            }
            if (i == 1) {
                res["pl"] = a;
            }
        }
    }
 
    return res;
}
function _养() {
    var W = device.width;
    var H = device.height;
    var mt = Date.parse(new Date());
    返回首页();
    if (配置.get("key", "") == "") {
        ts("系统提示：没有添加关键词。");
        ts("系统提示：请添加后重试！");
        exit();
    }
    while (true) {
        if (_视频检测()) {
            var sj = random(parseInt(ui.jg.text()), parseInt(ui.jg1.text()));
            if (!isNaN(sj)) {
                ts("浏览时间：" + sj + "秒");
                sleep(sj * 1000);
            } else {
                ts("浏览时间：10秒");
                sleep(10 * 1000);
            }
            if (ui.gzzb.checked) {
                var gzsjs = random(1, 100);
                if (parseInt(ui.gzgl.text()) > gzsjs) {
                    if (desc("关注").visibleToUser().exists()) {
                        desc("关注").visibleToUser().findOne(1000).click();
                        关注数量 = 关注数量 + 1;
                        log("关注数量：" + 关注数量);
                        sleep(1000);
                    }
                }
            }
            var sjs = random(1, 100);
            if (parseInt(ui.xhgl.text()) > sjs) {
                // console.log("执行操作：双击点赞");
                click(W / 2 + random(-50, 50), H / 2 + random(-50, 50));
                sleep(50);
                click(W / 2 + random(-50, 50), H / 2 + random(-50, 50));
                sleep(500);
                点赞数量 = 点赞数量 + 1;
                log("点赞数量：" + 点赞数量);
            }
            sjs = random(1, 100);
            if (parseInt(ui.scgl.text()) > sjs) {
                var uc = descMatches("分享，按钮").className("android.widget.ImageView").visibleToUser().find();
                for (i = 0; i < uc.length; i++) {
                    // log(uc[i])
                    uc[i].parent().click()
                    sleep(1000);
                }
                if (text("收藏").visibleToUser().exists()) {
                    text("收藏").visibleToUser().findOne().parent().click();
                    sleep(1000);
                    log("收藏成功");
                }
            } else {
                sjs = random(1, 100);
                if (parseInt(ui.zfgl.text()) > sjs) {
                    var uc = descMatches("分享，按钮").className("android.widget.ImageView").visibleToUser().find();
                    for (i = 0; i < uc.length; i++) {
                        // log(uc[i])
                        uc[i].parent().click()
                        sleep(1000);
                    }
                    if (text("转发").visibleToUser().exists()) {
                        text("转发").visibleToUser().findOne().parent().click();
                        sleep(1000);
                        if (textStartsWith("有爱转发").exists()) {
                            textStartsWith("有爱转发").findOne(1000).click();
                            sleep(1000);
                            if (setText("转发")) {
                                sleep(1000);
                            }
                            if (desc("表情").exists()) {
                                var td = desc("表情").findOne().bounds();
                                click(td.right + 50, td.centerY());
                                sleep(2000);
                                log("转发成功");
                            }
                        }
                    }
 
                }
            }
            sjs = random(1, 100);
            if (parseInt(ui.zygl.text()) > sjs) {
                log("执行操作：浏览主页");
                var uc = id("title").visibleToUser().find();
                for (i = 0; i < uc.length; i++) {
                    uc[i].click();
                    sleep(random(2000, 5000));
                    var num = random(1, 3);
                    for (i = 0; i < num; i++) {
                        var sjs = random(3, 5);
                        sml_move(device.width / 2, device.height - 260, device.width / 2, device.height / sjs, random(500, 2000))
                        var sj = random(2, 5);
                        sleep(sj * 1000);
                    }
                    back();
                    sleep(1000);
                    break;
                }
            }
            sjs = random(1, 100);
            if (sjs <= ui.plgl.text()) {
                评论();
            }
        };
        sml_move(W / 2 + random(-100, 100), H * 3 / 4 + random(-100, 10), W / 2 + random(-100, 100), H / 6 + random(-50, 100), random(300, 800));
        sleep(random(100, 1000));
        if (textMatches("编辑资料.*|.*更多主播").exists()) {
            返回首页();
        };
        if (!text("推荐").visibleToUser().exists()) {
            返回首页();
        }
        if (text("评论并转发").visibleToUser().exists()) {
            back();
            sleep(1000);
        }
        if (Date.parse(new Date()) - mt > 1000 * 60 * parseInt(配置.get("yhsc", ""))) {
            //home();
            ts("系统提示：养浩结束。");
            var yxtime = (Date.parse(new Date()) - startime) / 1000;
            yxtime = formatSeconds(yxtime);
            log("时间提示：运行" + yxtime);
            log("浏览作品：" + 浏览数量);
            log("点赞作品：" + 点赞数量);
            log("关注数量：" + 关注数量);
            return;
        }
        _弹窗();
        sleep(100);
    }
}
function 同城() {
    返回首页();
    var W = device.width;
    var H = device.height;
    var mt = Date.parse(new Date());
    while (true) {
        var a = text("同城").visibleToUser().findOne(100);
        if (a) {
            a.click();
            click(a.bounds().centerX(), a.bounds().centerY());
            log("系统提示：点击同城");
            sleep(4000);
        } else {
            var a = text("朋友").visibleToUser().findOne(100);
            if (a) {
                // a = text("关注").visibleToUser().findOne(100);
                a = className("android.widget.TextView").clickable(true).boundsInside(0, 0, device.width * 0.5, device.height * 0.3).visibleToUser(true).findOne(1000);
                if (a) {
                    // click(a.bounds().centerX() - a.bounds().width(), a.bounds().centerY());
                    a.click();
                    log("系统提示：点击上方同城");
                    sleep(4000);
                }
            } else {
                var a = text("我").visibleToUser().findOne(100);
                if (a) {
                    click(device.width * 3 / 10, a.bounds().centerY());
                    sleep(100);
                    click(device.width * 3 / 10, a.bounds().centerY());
                    log("系统提示：点击下方同城");
                    sleep(4000);
                } else {
                    log("系统提示：未检测到首页");
                }
            }
        }
        var uc = textMatches("自动定位.*|切换.*|.*[0-9]km|探索其他地区|同城红人榜").visibleToUser(true).find();
        if (uc.length > 0) {
            log("当前页面：同城首页");
            // uc[0].click();
            // sleep(3000);
            break;
        }
        sleep(100);
    }
    while (true) {
        // var uc = descMatches("距离.+千米.*").visibleToUser(true).find()
        var uc = descMatches(".+查看详情").clickable().visibleToUser(true).find();
        if (uc.length > 0) {
            if (uc.length > 5) {
                uc[5].click();
            } else {
                uc[uc.length - 1].click();
            }
            sleep(3000);
        }
        if (currentActivity() == "com.ss.android.ugc.aweme.detail.ui.DetailActivity" || currentActivity() == "com.ss.android.ugc.aweme.detail.ui.LiveDetailActivity") {
            log("系统提示：观看作品")
            //click(X, Y);
            var sj = random(parseInt(ui.jg3.text()), parseInt(ui.jg4.text()));
            if (!isNaN(sj)) {
                ts("浏览时间：" + sj + "秒");
                sleep(sj * 1000);
            } else {
                ts("浏览时间：10秒");
                sleep(10 * 1000);
            }
            // if (textMatches(".*本场点赞.*|小时榜").visibleToUser().exists()) {
            //     back();
            //     sleep(1000);
            // }
        } else {
            uc = className("android.widget.LinearLayout").boundsInside(0, device.width * 1 / 2, device.width, device.height).visibleToUser().find();
            log("uc.length=" + uc.length);
            if (uc.length < 10) {
                log("系统提示：观看作品")
                //click(X, Y);
                var sj = random(parseInt(ui.jg3.text()), parseInt(ui.jg4.text()));
                if (!isNaN(sj)) {
                    ts("浏览时间：" + sj + "秒");
                    sleep(sj * 1000);
                } else {
                    ts("浏览时间：10秒");
                    sleep(10 * 1000);
                }
            } else {
                log("系统提示：不是作品页。");
                ts("浏览时间：10秒");
                sleep(10 * 1000);
                swipe(device.width / 2, device.height * 4 / 5, device.width / 2, device.height / 6, random(300, 1400));
                sleep(1000);
            }
        }
        if (Date.parse(new Date()) - mt > 1000 * 60 * parseInt(ui.sc1.text())) {
            ts("系统提示：同城结束。");
            返回首页();
            var yxtime = (Date.parse(new Date()) - startime) / 1000;
            yxtime = formatSeconds(yxtime);
            log("时间提示：脚本已运行" + yxtime);
            return;
        }
        swipe(device.width / 2, device.height * 4 / 5, device.width / 2, device.height / 6, random(300, 1000));
        sleep(2000);
    }
}
function 直播间() {
    返回首页();
    var W = device.width;
    var H = device.height;
    var wz = 0;
    var wx = -1;
    var Yonghu = "";
    var nr = "";
    var str = "";
    var cishu = 0;
    var mt = Date.parse(new Date());
    var mt1 = Date.parse(new Date());
    var danci = random(parseInt(ui.jg5.text()), parseInt(ui.jg6.text()));
    检测弹窗 = threads.start(function jctcc() {
        while (true) {
            sleep(1000);
            if (text("立即赠送").visibleToUser().exists()) {
                sleep(random(500, 1000));
                back();
            }
            if (text("立即关注").visibleToUser().exists()) {
                sleep(random(500, 1000));
                back();
            }
            if (text("查看福袋发放记录").visibleToUser().exists()) {
                sleep(random(500, 1000));
                back();
            }
        }
    })
    while (true) {
        var a = desc("直播").className("android.widget.Button").visibleToUser().findOne(1000);
        if (a) {
            a.click();
            sleep(3000);
        } else {
            var a = desc("live").className("android.widget.Button").visibleToUser().findOne(1000);
            if (a) {
                a.parent().parent().click();
                sleep(3000);
            }
        }
        if (textMatches("小时榜|小时榜.*|说点什么.*|.*本场点赞").exists()) {
            // log("系统提示：随机增加浏览时长");
            sleep(random(5000, 15000));
            if (Date.parse(new Date()) - mt > 1000 * danci) {
                ts("系统提示：切换下一个直播间");
                swipe(W / 2, H * 4 / 5, W / 2, H / 6, random(300, 1000));
                mt = Date.parse(new Date());
                danci = random(parseInt(ui.jg5.text()), parseInt(ui.jg6.text()));
            }
            if (ui.kqpl.checked) {
                str = ui.key2.text();
                if (ui.fang.checked) {
                    var uc = textMatches(".+").visibleToUser(true).find()
                    for (i = 0; i < uc.length; i++) {
                        var a = uc[i].text();
                        if (a.indexOf("：") > 0) {
                            str = 取文本右边(a, "：");
                            break;
                        } else {
                            str = ui.key2.text();
                            str = sjstr(str);
                        }
                    }
                } else {
                    str = ui.key2.text();
                    str = sjstr(str);
                }
                var uc = textMatches("说点什么..*").find();
                for (i = 0; i < uc.length; i++) {
                    click(uc[i].bounds().centerX(), uc[i].bounds().centerY())
                    sleep(random(500, 3000));
                    break;
                }
 
                inputtxt(str);
                sleep(random(500, 1000));
                var a = desc("发送").visibleToUser().findOne(1000);
                if (a) {
                    a.click();
                    sleep(random(500, 1000));
                    ts("发送内容：" + str);
                    var sj = random(10, 20);
                    sleep(1000);
                    ts("等待时间：" + sj + "秒");
                    sleep(sj * 1000);
                } else {
                    var a = text(str).visibleToUser().findOne(1000);
                    if (a) {
                        click(device.width - 10, a.bounds().centerY());
                        sleep(random(500, 1000));
                        ts("发送内容：" + str);
                        var sj = random(10, 20);
                        sleep(1000);
                        ts("等待时间：" + sj + "秒");
                        sleep(sj * 1000);
                    }
                }
            }
        } else {
            var uc = className("android.widget.EditText").visibleToUser().find();
            if (uc.length > 0) {
                back();
                sleep(2000);
            }
 
            if (!textMatches("小时榜|小时榜.*|说点什么.*|.*本场点赞").exists()) {
                log("系统提示：请进入直播间！");
            }
            sleep(1000);
        }
        if (Date.parse(new Date()) - mt1 > 1000 * 60 * parseInt(配置.get("sc2", ""))) {
            if (检测弹窗.isAlive()) {
                检测弹窗.interrupt();
            }
            ts("系统提示：观看直播结束。");
 
            var yxtime = (Date.parse(new Date()) - startime) / 1000;
            yxtime = formatSeconds(yxtime);
            log("时间提示：运行" + yxtime);
            return;
        }
    }
}
function inputtxt(str) {
    var i = 0;
    while (true) {
        setText(str.substr(0, i));
        if (ui.khd.getSelectedItemPosition() == 0) {
            sleep(random(1, 10));
        }
        if (ui.khd.getSelectedItemPosition() == 1) {
            sleep(random(50, 300));
        }
        if (ui.khd.getSelectedItemPosition() == 2) {
            sleep(random(200, 800));
        }
        i = i + 1;
        if (i > str.length) {
            break;
        }
    }
 
}
function 取文本右边(str, a)  //取文本的中间值
{
    var w1 = str.indexOf(a);
    if (w1 < 0) {
        return false;
    };
    w1 = w1 + a.length;
    w2 = str.length;
    return str.substr(w1, w2 - w1);
}
function bezier_curves(cp, t) {
    cx = 3.0 * (cp[1].x - cp[0].x);
    bx = 3.0 * (cp[2].x - cp[1].x) - cx;
    ax = cp[3].x - cp[0].x - cx - bx;
    cy = 3.0 * (cp[1].y - cp[0].y);
    by = 3.0 * (cp[2].y - cp[1].y) - cy;
    ay = cp[3].y - cp[0].y - cy - by;
    tSquared = t * t;
    tCubed = tSquared * t;
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
    return result;
}
//仿真随机带曲线滑动  
//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,过程耗时单位毫秒
function sml_move(qx, qy, zx, zy, time) {
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };
 
    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {
 
        eval("point.push(dx" + i + ")");
 
    };
    // log(point[3].x)
 
    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]
 
        xxy.push(xxyy);
 
    }
 
    // log(xxy);
    gesture.apply(null, xxy);
};
function _弹窗() {
    if (text("我知道了").exists()) {
        text("我知道了").findOne().click();
    }
    if (text("允许").exists()) {
        text("允许").findOne().click();
    }
    if (text("取消").exists()) {
        text("取消").findOne().click();
    }
    if (text("以后再说").exists()) {
        text("以后再说").findOne().click();
    }
    if (text("继续播放").exists()) {
        text("继续播放").findOne().click();
    }
    if (text("好的").exists()) {
        text("好的").findOne().click();
    }
}
function _判断是否登录() {
    返回首页();
    while (true) {
        _弹窗()
        if (text("我").exists()) {
            var b = text("我").findOne().bounds();
            if (b) {
                click(b.centerX(), b.centerY());
                sleep(1000);
            };
        };
        if (text("编辑资料").exists() || text("分享主页").exists() || text("编辑企业资料").exists()) {
            ts("操作提示：账号已登录")
            return true;
        };
        if (text("密码登录").exists()) {
            ts("操作提示：账号未登录");
            return false;
        };
        if (text("您的收藏在这里").exists()) {
            back();
            sleep(1000);
        };
        sleep(100);
    }
}
function 返回首页() {
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "snssdk1128://feed"
    });
    sleep(1000);
}
function 正版验证() {
    let 全局结果 = false;
    var a = "破解可耻，请尊重版权。";
    if (a == 全局结果) {
        exit();
    }
}
function fyhttp(runtime, scope) {
    var okhttp3 = Packages["okhttp3"];
    var MutableOkHttp = com.stardust.autojs.core.http.MutableOkHttp;
    var Request = okhttp3.Request;
    var RequestBody = okhttp3.RequestBody;
    var MultipartBody = okhttp3.MultipartBody;
    var MediaType = okhttp3.MediaType;
    var FormBody = okhttp3.FormBody;
    var Callback = okhttp3.Callback;
    var $files = scope.$files;
    var http = {};
 
    http.__okhttp__ = new MutableOkHttp();
 
    http.get = function (url, options, callback) {
        options = options || {};
        options.method = "GET";
        // var Proxy = java.net.Proxy;
        //var InetSocketAddress = java.net.InetSocketAddress;
        //var okhttp = new Packages.okhttp3.OkHttpClient.Builder().proxy(new Proxy(Proxy.Type.HTTP, new InetSocketAddress(ip, prot)));
        //http.__okhttp__.muteClient(okhttp);
        return http.request(url, options, callback);
    }
 
    http.client = function () {
        return http.__okhttp__.client();
    }
 
    http.post = function (url, data, options, callback) {
        options = options || {};
        options.method = "POST";
        options.contentType = options.contentType || "application/x-www-form-urlencoded";
        if (data) {
            fillPostData(options, data);
        }
        return http.request(url, options, callback);
    }
 
    http.postJson = function (url, data, options, callback) {
        options = options || {};
        options.contentType = "application/json";
        return http.post(url, data, options, callback);
    }
 
    http.postMultipart = function (url, files, options, callback) {
        options = options || {};
        options.method = "POST";
        options.contentType = "multipart/form-data";
        options.files = files;
        return http.request(url, options, callback);
    }
 
    http.request = function (url, options, callback) {
        var cont = null;
        var disposable = null;
        if (!callback && ui.isUiThread() && continuation.enabled) {
            cont = continuation.create();
        }
        var call = http.client().newCall(http.buildRequest(url, options));
        if (!callback && !cont) {
            disposable = threads.disposable();
            callback = function (res, ex) {
                disposable.setAndNotify({
                    error: ex,
                    response: res
                });
            }
        }
        call.enqueue(new Callback({
            onResponse: function (call, res) {
                res = wrapResponse(res);
                cont && cont.resume(res);
                callback && callback(res);
            },
            onFailure: function (call, ex) {
                cont && cont.resumeError(ex);
                callback && callback(null, ex);
            }
        }));
        if (cont) {
            return cont.await();
        }
        if (disposable) {
            try {
                var result = disposable.blockedGet(http.__okhttp__.timeout);
                if (result.error) {
                    throw result.error;
                }
                return result.response;
            } catch (e) {
                call.cancel();
                throw e;
            }
        }
 
    }
 
    http.buildRequest = function (url, options) {
        var r = new Request.Builder();
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url;
        }
        r.url(url);
        if (options.headers) {
            setHeaders(r, options.headers);
        }
        if (options.body) {
            r.method(options.method, parseBody(options, options.body));
        } else if (options.files) {
            r.method(options.method, parseMultipart(options.files));
        } else {
            r.method(options.method, null);
        }
        return r.build();
    }
 
    function parseMultipart(files) {
        var builder = new MultipartBody.Builder()
            .setType(MultipartBody.FORM);
        for (var key in files) {
            if (!files.hasOwnProperty(key)) {
                continue;
            }
            var value = files[key];
            if (typeof (value) == 'string') {
                builder.addFormDataPart(key, value);
                continue;
            }
            var path, mimeType, fileName;
            if (typeof (value.getPath) == 'function') {
                path = value.getPath();
            } else if (value.length == 2) {
                fileName = value[0];
                path = value[1];
            } else if (value.length >= 3) {
                fileName = value[0];
                mimeType = value[1]
                path = value[2];
            }
            var file = new java.io.File(path);
            fileName = fileName || file.getName();
            mimeType = mimeType || parseMimeType($files.getExtension(fileName));
            builder.addFormDataPart(key, fileName, RequestBody.create(MediaType.parse(mimeType), file));
        }
        return builder.build();
    }
 
    function parseMimeType(ext) {
        if (ext.length == 0) {
            return "application/octet-stream";
        }
        return android.webkit.MimeTypeMap.getSingleton().getMimeTypeFromExtension(ext)
            || "application/octet-stream";
    }
 
    function fillPostData(options, data) {
        if (options.contentType == "application/x-www-form-urlencoded") {
            var b = new FormBody.Builder();
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    b.add(key, data[key]);
                }
            }
            options.body = b.build();
        } else if (options.contentType == "application/json") {
            options.body = JSON.stringify(data);
        } else {
            options.body = data;
        }
    }
 
    function setHeaders(r, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                let value = headers[key];
                if (Array.isArray(value)) {
                    value.forEach(v => {
                        r.header(key, v);
                    });
                } else {
                    r.header(key, value);
                }
            }
        }
    }
 
    function parseBody(options, body) {
        if (typeof (body) == "string") {
            body = RequestBody.create(MediaType.parse(options.contentType), body);
        } else if (body instanceof RequestBody) {
            return body;
        } else {
            body = new RequestBody({
                contentType: function () {
                    return MediaType.parse(options.contentType);
                },
                writeTo: body
            });
        }
        return body;
    }
 
    function wrapResponse(res) {
        var r = {};
        r.statusCode = res.code();
        r.statusMessage = res.message();
        var headers = res.headers();
        r.headers = {};
        for (var i = 0; i < headers.size(); i++) {
            let name = headers.name(i);
            let value = headers.value(i);
            if (r.headers.hasOwnProperty(name)) {
                let origin = r.headers[name];
                if (!Array.isArray(origin)) {
                    r.headers[name] = [origin];
                }
                r.headers[name].push(value);
            } else {
                r.headers[name] = value;
            }
        }
        r.body = {};
        var body = res.body();
        r.body.string = body.string.bind(body);
        r.body.bytes = body.bytes.bind(body);
        r.body.json = function () {
            return JSON.parse(r.body.string());
        }
        r.body.contentType = body.contentType();
        r.request = res.request();
        r.url = r.request.url();
        r.method = r.request.method();
        return r;
    }
 
    return http;
}
function 取评论内容() {
    var res = "";
    var a = textMatches(".+分钟前|.+小时前|.+天前").visibleToUser().findOne(100);
    if (a) {
        a.parent().children().forEach(function (child, i) {
            if (child.text().length > 4 && child.clickable()) {
                // log(child.text());
                res = child.text();
                return false;
            }
            // log(i)
        });
    }
    else {
        log("系统提示：未获取到评论")
        return res;
    }
    log("获取评论：" + res);
    return res;
}
function 评论() {
    if (descStartsWith("评论").exists()) {
        var uc = descStartsWith("评论").find();
        for (i = 0; i < uc.length; i++) {
            if (uc[i].bounds().centerX() > 0 && uc[i].bounds().centerY() > 0 && uc[i].bounds().centerY() < device.height) {
                uc[i].click();
                //click(uc[i].bounds().centerX(), uc[i].bounds().centerY())
                sleep(2000);
                break;
            }
        }
    }
    if (textStartsWith("留下你的精彩评论").exists()) {
        if (ui.pldz.checked) {
            if (pl点赞数量 <= parseInt(ui.pldzsl.text())) {
                var uc = clickable().className("android.view.View").boundsInside(device.width * 3 / 4, device.height / 5, device.width, device.height - 100).visibleToUser().find();
                if (uc.length > 0) {
                    var a = random()
                    var ii = random(0, uc.length - 1)
                    uc[ii].click();
                    pl点赞数量 = pl点赞数量 + 1;
                    log("评论点赞数量：" + pl点赞数量);
                    var sjsj = random(1, 3);
                    sleep(sjsj * 1000);
                }
            }
        }
        if (!desc("[呲牙]").exists()) {
            log("操作提示：浏览评论");
            var a = "";
            if (ui.diypl.checked) {
                a = sjstr(ui.plnr.text());
            } else {
                a = 取评论内容();
            };
            var num = random(2, 4);
            for (i = 0; i < num; i++) {
                var sjs = random(3, 5);
                sml_move(device.width / 2, device.height - 260, device.width / 2, device.height / sjs, random(500, 2000))
                var sj = random(2, 5);
                sleep(sj * 1000);
            }
            if (a != "") {
                if (textStartsWith("留下你的精彩评论").exists()) {
                    textStartsWith("留下你的精彩评论").findOne(100).click();
                    sleep(1000);
                    if (setText(a)) {
                        sleep(1000);
                    }
                    if (desc("表情").exists()) {
                        var td = desc("表情").findOne().bounds();
                        click(td.right + 50, td.centerY());
                        sleep(2000);
                        log("执行评论：" + a);
                    }
                }
            }
        }
        back();
        sleep(2000);
    }
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "snssdk1128://feed"
    });
    sleep(1000);
}
function ts(text) {
    log(text)
}
function formatSeconds(value) {
    var secondTime = parseInt(value);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时
    if (secondTime > 60) {
        minuteTime = parseInt(secondTime / 60);
        secondTime = parseInt(secondTime % 60);
        if (minuteTime > 60) {
            hourTime = parseInt(minuteTime / 60);
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    var result = "" + parseInt(secondTime) + "秒";
 
    if (minuteTime > 0) {
        result = "" + parseInt(minuteTime) + "分" + result;
    }
    if (hourTime > 0) {
        result = "" + parseInt(hourTime) + "小时" + result;
    }
    return result;
}
function 取文本左边(str, a)  //取文本的中间值
{
    var w1 = str.indexOf(a);
    if (w1 < 0) {
        return false;
    };
    return str.substr(0, w1 - a.length - 2);
}
function sjstr(str) //返回一个随机值,分隔符,
{
    if (str) {
        strnum = str.split(",");
        if (strnum.length <= 1) {
            var strnum = str.split('，');
        }
        strnum = strnum.filter(function (s) {
            return s && s.trim();
        });
        let sjz = random(0, parseInt(strnum.length) - 1);
        return strnum[sjz];
    }
}
function yz() {
    var Base_Data = {
        "severurl": "http://xbf.772649831.cn/code/API/yunapi.php?card=",
        "auth": "772649831",
        "softkey": "HSEG3v9SENRqqMbyVur9dJDcKeveNrpggs",
    }
    var 全局配置 = storages.create("ZCM");
    var s_card = 全局配置.get("zcm", "");
    var _device = device.getIMEI(); // -- 设备唯一信息,可自定义生成
    if (_device == null) {
        _device = device.getAndroidId();
    }
    var ii = 0;
    var olddata = "";
    var resdata = {};
    if (getPackageName("抖音") || getPackageName("全能精灵")) {
        if (getPackageName("全能王") == null) {
            dialogs.alert((aesdecrypt("40nX3DMizD6oRrSSGusaSHaT1Hm4nKZAmRJR9GaeYxg=")));
            engines.stopAll();
            exit();
        }
        if (getAppName("com.dou.dong")) {
            dialogs.alert((aesdecrypt("40nX3DMizD6oRrSSGusaSHaT1Hm4nKZAmRJR9GaeYxg=")));
            engines.stopAll();
            exit();
        }
    }
    threads.start(function () {
        while (true) {
            let res = http.get(Base_Data["severurl"] + s_card + "&user=" + Base_Data["auth"] + "&softkey=" + Base_Data["softkey"] + "&imei=" + _device);
            var data = res.body.string();
            a = aesdecrypt(data);
            resdata["code"] = 取文本中间(a, "state");
            resdata["msg"] = 取文本中间(a, "msg");
            resdata["到期时间"] = 取文本中间(a, "到期时间");
            if (resdata["code"] == "0") {
                console.log(aesdecrypt("dJCndKvipmfYFNzzVzYfOg=="));
                engines.stopAll();
                exit();
            };
            if (resdata["code"] == "1") {
                if (data == olddata) {
                    ii = ii + 1;
                } else {
                    sleep(10 * 1000);
                }
                olddata = data;
            } else {
                ii = ii + 1;
            }
            if (ii > 3) {
                dialogs.alert((aesdecrypt("40nX3DMizD6oRrSSGusaSHaT1Hm4nKZAmRJR9GaeYxg=")));
                engines.stopAll();
                exit();
            }
            sleep(3 * 1000);
        }
    })
 
}
function aesdecrypt(data) {
    importClass("java.security.SecureRandom");
    importClass("javax.crypto.spec.DESKeySpec");
    importClass("javax.crypto.SecretKeyFactory");
    importClass("javax.crypto.Cipher");
    importClass("java.security.NoSuchAlgorithmException");
    importClass("javax.crypto.KeyGenerator");
    importClass("javax.crypto.SecretKey");
    importClass("javax.crypto.spec.SecretKeySpec");
    importClass("javax.crypto.KeyGenerator");
    importClass("javax.crypto.spec.IvParameterSpec");
 
    for (var k in config) {
        var v = config[k]
        config[k] = new java.lang.String(v)
    }
    var dataPassword = config.dataPassword
    // var cleartext = config.cleartext
    // var encrypted = encrypt(dataPassword, cleartext)
    // log('加密结果=')
    // log(encrypted)
    var decrypted = decrypt(dataPassword, data);
    // log('解密结果=')
    // log(decrypted)
    return decrypted;
}
function encrypt(dataPassword, cleartext) {
    var VIPARA = config.VIPARA
    var bm = config.bm
    var zeroIv = new IvParameterSpec(config.VIPARA.getBytes());
    var key = new SecretKeySpec(dataPassword.getBytes(), "AES");
    var cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(Cipher.ENCRYPT_MODE, key, zeroIv);
    var encryptedData = cipher.doFinal(cleartext.getBytes(bm)); //	byte[]
    var result = base64Encode(encryptedData);
    result = new java.lang.String(result)
    return result
}
/**
 *
 * @param {String} dataPassword
 * @param {String} encrypted
 * @return {String}
 */
function decrypt(dataPassword, encrypted) {
    var VIPARA = config.VIPARA
    var bm = config.bm
    var byteMi = base64Decode(encrypted); // byte[]
    var zeroIv = new IvParameterSpec(config.VIPARA.getBytes());
    var key = new SecretKeySpec(dataPassword.getBytes(), "AES");
    var cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(Cipher.DECRYPT_MODE, key, zeroIv);
    var decryptedData = cipher.doFinal(byteMi); //byte[]
    return new java.lang.String(decryptedData, bm);
}
function base64Encode(r) {
    var r = android.util.Base64.encodeToString(r, 0);
    return r
}
function base64Decode(r) {
    var r = android.util.Base64.decode(r, 0)
    return r
}
function 取文本中间(str, a, b)  //取文本的中间值
{
    a = a + "\":\"";
    b = "\"";
    var w1 = str.indexOf(a);
    if (w1 < 0) {
        return false;
    };
    w1 = w1 + a.length;
    w2 = str.indexOf(b, w1);
    if (w2 <= 0) {
        return false;
    }
    return str.substr(w1, w2 - w1);
}