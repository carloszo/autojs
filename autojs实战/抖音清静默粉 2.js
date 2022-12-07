function main(){
    var list = id("cx").find()
    for(var i = 0;i<list.size()-1;i++){
        list[i].click()
        sleep(500)
        var age = id("qq2").findOnce()
        if(age){
            age = age.child(0).text()
            if(age.length>=3){
                age = age.slice(0,2)
            }
            if(age>=50){
                desc("更多").findOnce().click()
                sleep(1000)
                id("oca").findOnce().click()
                sleep(1000)
            }
            log(age)
        }
        sleep(500)
        back()
        sleep(500)
    }
    sleep(500)
    swipe(400, 1358, 382, 178, 1000);
}

main()
setInterval(main,1000)

 
