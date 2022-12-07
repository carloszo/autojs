
// 返回设备屏幕是否是亮着的
// log(device.isScreenOn())
// 唤醒设备
device.wakeUp()
/*
无密码手机解锁
device.wakeUp()
sleep(1000)
swipe(350,1000,300,50,500) 
*/
// 如果屏幕没有点亮，则唤醒设备。
// device.wakeUpIfNeeded()
// 保持屏幕常亮。
// device.keepScreenOn([timeout])
// 取消设备保持唤醒状态。
device.cancelKeepingAwake()