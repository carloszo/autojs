// alert("hello")
//复杂例子
// var clear = confirm("是否要清除缓存?")
// if(clear){
//     alert("缓存清除成功")
// }
/*ui模式下需要使用回调函数 */
"ui";
ui.layout(
    <vertical>
        <button id='btn1' text='第一个按钮'></button>
        <button id='btn2' text='第二个按钮'></button>
    </vertical>
);
ui.btn1.click(function(){
    confirm("要清除所有缓存吗?")
        .then(clear=>{
            if(clear){
                alert("清除成功")
            }
        })
})

//setInterval(()=>{},1000)