//启用按键监听
events.observeKey();
//监听音量上键按下
events.onKeyDown("volume_up", function(event){
    toast("音量上键被按下了");
});
//监听菜单键按下
events.onKeyDown("menu", function(event){
    toast("菜单键被按下了");
    exit();
});