/*
app.sendEmail(options)
options {Object} 发送邮件的参数。包括:
email {string} | {Array} 收件人的邮件地址。如果有多个收件人，则用字符串数组表示
cc {string} | {Array} 抄送收件人的邮件地址。如果有多个抄送收件人，则用字符串数组表示
bcc {string} | {Array} 密送收件人的邮件地址。如果有多个密送收件人，则用字符串数组表示
subject {string} 邮件主题(标题)
text {string} 邮件正文
attachment {string} 附件的路径。
根据选项options调用邮箱应用发送邮件。这些选项均是可选的。

如果没有安装邮箱应用，则抛出ActivityNotException。

//发送邮件给10086@qq.com和10001@qq.com。
app.sendEmail({
    email: ["10086@qq.com", "10001@qq.com"],
    subject: "这是一个邮件标题",
    text: "这是邮件正文"
});
复制错误成功
*/
app.sendEmail({
    email: "carloszo@qq.com",
    subject: "测试autojs邮件发送",
    text: "这是邮件正文"
})

