
// 设置当前媒体音量。
device.setMusicVolume(0)
// 设置当前通知音量。
device.setNotificationVolume(0)
// 设置当前闹钟音量。
device.setAlarmVolume(0)

// 返回当前媒体音量。
log(device.getMusicVolume())
// 返回当前通知音量。
log(device.getNotificationVolume())
// 返回当前闹钟音量。
log(device.getAlarmVolume())