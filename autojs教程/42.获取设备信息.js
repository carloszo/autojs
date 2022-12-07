var str = ""
str+= "屏幕宽度:"+device.width
str+= "\n屏幕高度:"+device.height
str+= "\nbuildid:"+device.buildId
str+= "\n主板:"+device.board
str+= "\n制造商:"+device.brand
str+= "\n设备型号:"+device.model
str+= "\n产品名称:"+device.product
str+= "\nbootloader版本:"+device.bootloader
str+= "\n唯一标识码:"+device.fingerprint
log(str)