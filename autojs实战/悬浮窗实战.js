var w = floaty.rawWindow(
    <frame id="background" bg="#99611919" h="auto" w="200">
        <vertical w="*" h="*">
            <vertical w="*" h='20' gravity='top'>
                <linear w='*' h='20'>
                    <linear w='40' h='30' gravity='left'>
                        <text id='leftTop' textColor='red' textSize='16sp' text='◤'/>
                    </linear>
                    <linear w='*' h='30' gravity='right'>
                        <text textColor='#000000' textSize='12sp' text='点击四周箭头切换采点方向'/>
                        <text id='rightTop' textColor='red' textSize='12sp' text='↗'/>
                    </linear>
                </linear>
            </vertical>
            <vertical>
                <text id='smallest' bg='#00ff00' textSize='12sp' text='最小化'w='auto' h='auto'/>
                <linear>
                    <vertical h='auto' w="*">
                        <linear>
                            <text textSize='12sp' text='当前坐标:'/> 
                            <text id="bounds" bg='#ff999933' textSize='14sp' text='点我复制'/>
                        </linear>
                        <linear>
                            <text textSize='12sp' text='数字颜色:'/> 
                            <text id="color" bg='#ff558800' textSize='14sp' text='点我复制'/>
                        </linear>
                        <linear>
                            <text textSize='12sp' text='ARGB颜色:'/> 
                            <text id="argb" bg='#ff990055' textSize='14sp' text='点我复制'/>
                        </linear>
                        <linear>
                            <text textSize='12sp' text='hsl颜色:'/> 
                            <text id="hsl" bg='#ff009900' textSize='14sp' text='点我复制'/>
                        </linear>
                    </vertical>
                    <linear h='50' w='50' gravity='center' bg='#ff000000'>
                        <text id='currentColor' bg='#ffffffff' text="" h='40' w='40'/> 
                    </linear>                   
                </linear>
            </vertical>
            <vertical gravity='center'>
                <vertical bg='#99991919' w='165' h='auto' gravity='top'>
                    <linear gravity='center'>
                        <button id='zxh' textSize='8sp' text='⊙' w='40' h='30'/>
                        <button id='top' textSize='8sp' text='↑' w='40' h='30'/>
                        <button id='exit' textSize='8sp' text='╳' w='40' h='30'/>
                    </linear>
                    <linear gravity='center'>
                        <button id='left' textSize='8sp' text='←' w='40' h='30'/>
                        <button id='copy' textSize='8sp' text='复制' w='40' h='30'/>
                        <button id='right' textSize='8sp' text='→' w='40' h='30'/>
                    </linear>
                    <linear gravity='center'>
                        <button id='zuo' textSize='8sp' text='←' w='40' h='30'/>
                        <button id='bottom' textSize='8sp' text='↓' w='40' h='30'/>
                        <button id='you' textSize='8sp' text='→' w='40' h='30'/>
                    </linear>
                </vertical>
            </vertical>
            <vertical w='*' h='*' gravity='bottom'>
                <linear h='20'>
                    <linear w='40' h='30' gravity='left'>
                        <text id='leftBottom' textSize='16sp' text='↙' textColor='red' />
                    </linear>
                    <linear  w='*' h='30' gravity='right'>
                        <text id='leftBottom' text='点击四周箭头切换采点方向' textSize='12sp' textColor='#ff000000' />
                        <text id='rightBottom' textSize='16sp' text='↘' textColor='red' />
                    </linear>
                </linear>
            </vertical>
        </vertical>
    </frame>
);
w.setPosition(160,300)

w.background.setOnTouchListener((view,event)=>{
    switch(event.getAction()){ 
        case event.ACTION_DOWN:
            x = event.getRawX()
            y = event.getRawY()
            aw = w.getWidth()
            ah = w.getHeight()
            windowX = w.getX()
            windowY = w.getY()
            downTime = new Date().getTime()
            return true
        case event.ACTION_MOVE:
            fcx = windowX + (event.getRawX()-x)
            fcy = windowY + (event.getRawY()-y)
            // w.setPosition(fcx,fcy)
            move()
            return true
        case event.ACTION_UP:
            return true

    }

    
})
// 退出
w.exit.click(()=>{
    exit()
})

// 最小化/最大化
w.smallest.click(()=>{
    if(w.smallest.text()==='最小化'){
        w.smallest.setText("最大化")
        w.setSize(250,225)
    }else if(w.smallest.text()==='最大化'){
        w.smallest.setText("最小化")
        w.setSize(400,500)
    
    }  
})

w.bounds.click(()=>{
    setClip(w.bounds.text())
})
w.color.click(()=>{
    setClip(w.color.text())
})
w.argb.click(()=>{
    setClip(w.argb.text())
})
w.hsl.click(()=>{
    setClip(w.hsl.text())
})

function move(){
    w.setPosition(fcx,fcy)
    w.bounds.setText(w.getX()+','+w.getY())   
}
setInterval(()=>{},1000)
