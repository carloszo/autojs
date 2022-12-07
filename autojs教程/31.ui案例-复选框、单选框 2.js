"ui";
ui.layout(
    <vertical padding="16">
        <checkbox id="cb1" text="复选框" />
        <checkbox id="cb2" checked="true" text="勾选的复选框" />
        <radiogroup>
            <radio text="单选框1"></radio>
            <radio text="单选框2"></radio>
            <radio text="单选框3"></radio>
        </radiogroup>
        <radiogroup marginTop="16">
            <radio text="单选框1"></radio>
            <radio text="单选框2"></radio>
            <radio text="勾选的单选框3" checked="true"></radio>
        </radiogroup>
    </vertical>
)

ui.cb1.on("check",(checked)=>{
    if(checked){
        toastLog("第一个框被勾选了")
    }else{
        toastLog("第一个框被取消勾选了")
    }
})