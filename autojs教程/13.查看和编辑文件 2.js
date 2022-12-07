/*
app.viewFile(path)
path {string} 文件路径
用其他应用查看文件。文件不存在的情况由查看文件的应用处理。

如果找不出可以查看该文件的应用，则抛出ActivityNotException。

//查看文本文件
app.viewFile("/sdcard/1.txt"); 

app.editFile(path)
path {string} 文件路径
用其他应用编辑文件。文件不存在的情况由编辑文件的应用处理。

如果找不出可以编辑该文件的应用，则抛出ActivityNotException。

*/