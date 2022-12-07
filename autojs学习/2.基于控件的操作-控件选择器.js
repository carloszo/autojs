// log(text("微信").findOnce())
// log(textContains("极速版").find()) //匹配抖音极速版，今日头条极速版
// log(textStartsWith('Any').findOnce()) //匹配Anywhere-
// log(textEndsWith('极速版').find()) //匹配抖音极速版，今日头条极速版
log(textMatches("\\d+").findOnce())  //匹配多位数字