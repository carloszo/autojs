"ui";
ui.layout(
    <horizontal>
         <button id="text3" w="auto" text="自适应宽度" style="Widget.AppCompat.Button.Colored"/>
        <button id="text" margin="20" w="auto" style="Widget.AppCompat.Button.Borderless.Colored" text="自适应宽度"/>
        <button id="text2" w="*" text="填满父布局" bg="#fe466f" alpha="0.5"/>
       
    </horizontal>
);
ui.text.on("click",()=>{
    toastLog(ui.text.getText())
})

ui.text2.on("click",()=>{
    toastLog(ui.text2.getText())
})
