"ui";
ui.layout(
    <frame>
        <list id='list'>
            <vertical>
                <text id='name' textColor='#000000' textSize='16sp' text='姓名:{{name}}'/>
                <text id='age' textColor='#000000' textSize='16sp' text='年龄:{{age}}'/>
                <button id='deleteItem' text='分身6个'/>
            </vertical>
        </list>
    </frame>
);
var items = [{name:'Carlos',age:32}]
ui.list.setDataSource(items)
ui.list.on('item_click',(item,itemView)=>{
    toastLog(`被点击的人名为:${item.name},年龄为:${item.age}`)
});

ui.list.on('item_bind',(itemView,itemHolder)=>{
    itemView.deleteItem.on('click',()=>{
        if(ui.deleteItem.text()=='分身6个'){
            for(var i =0;i<6;i++){
                items.push({name:items[0].name+(i+1),age:18})
            }
            
            ui.deleteItem.setText("删除分身")
        }else if(ui.deleteItem.text()=='删除分身'){
            items=[{name:items[0].name,age:18}]
            ui.list.setDataSource(items)
            ui.deleteItem.setText("分身6个")
        }
        
        
    })
    
})