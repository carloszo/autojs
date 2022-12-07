auto.waitFor();
app.launchApp('今日头条极速版');
sleep(10000);
// if (id("f2").exists()) {
//     back();
//     id("f2").findOnce().click();
// }
/**
 * 今日头条读新闻
 */
for (var i = 1; i <= 15; i++) {
    sleep(3000);//保障一下
    fanhuishuaxin();
    if (className("android.widget.TextView").text("推荐").exists()) {
        let tabMenu = className("android.widget.TextView").text("推荐").findOnce();// 栏目，需要先调整栏目在页面上
        click(tabMenu.bounds().centerX(), tabMenu.bounds().centerY());//进入到栏目
        sleep(5000);//保障一下
        let news = id("ca7").findOnce();//第二条新闻
        if (news != null) {
            click(news.bounds().centerX(), news.bounds().centerY());//点击第二条新闻
            for (var x = 1; x <= 30; x++) {
                swipe(303, 1000, 335, 50, 500);
                sleep(1500);
            }
        }else{
            news = id("bz").findOnce();
            click(news.bounds().centerX(), news.bounds().centerY());//点击第二条新闻
            for (var x = 1; x <= 30; x++) {
                swipe(303, 1000, 335, 50, 500);
                sleep(1500);
            }
        }
        fanhuishuaxin();
    }
}

function fanhuishuaxin(){
    back();  //返回键

}