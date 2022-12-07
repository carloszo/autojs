"ui";
ui.layout(
    <vertical>
        <linear>
            <input id="input" layout_weight="1" color="black" textSize="16px" marginLeft="16"></input>
            <button id="search" text="搜索" style="Widget.AppCompat.Button.Borderless.Colored"></button>
            <button id="reset" text="重置" style="Widget.AppCompat.Button.Borderless.Colored"></button>
        </linear>
        <grid spanCount="4" id="icons" h="*">
            <img src="@drawable/{{this}}" h="80" margin="20" bg="?selectableItemBackgroundBorderless" />
            
        </grid>
    </vertical>
)



var icons = ['ic_3d_rotation_black_48dp', 'ic_accessibility_black_48dp', 'ic_accessible_black_48dp', 'ic_account_balance_black_48dp', 'ic_account_balance_wallet_black_48dp', 'ic_account_box_black_48dp', 'ic_account_circle_black_48dp', 'ic_add_shopping_cart_black_48dp', 'ic_alarm_add_black_48dp', 'ic_alarm_black_48dp', 'ic_alarm_off_black_48dp', 'ic_alarm_on_black_48dp', 'ic_all_out_black_48dp', 'ic_android_black_48dp', 'ic_announcement_black_48dp', 'ic_aspect_ratio_black_48dp', 'ic_assessment_black_48dp', 'ic_assignment_black_48dp', 'ic_assignment_ind_black_48dp', 'ic_assignment_late_black_48dp', 'ic_assignment_returned_black_48dp', 'ic_assignment_return_black_48dp', 'ic_assignment_turned_in_black_48dp', 'ic_autorenew_black_48dp', 'ic_backup_black_48dp', 'ic_bookmark_black_48dp', 'ic_bookmark_border_black_48dp', 'ic_book_black_48dp', 'ic_bug_report_black_48dp', 'ic_build_black_48dp', 'ic_cached_black_48dp', 'ic_camera_enhance_black_48dp', 'ic_card_giftcard_black_48dp', 'ic_card_membership_black_48dp', 'ic_card_travel_black_48dp', 'ic_change_history_black_48dp', 'ic_check_circle_black_48dp', 'ic_chrome_reader_mode_black_48dp', 'ic_class_black_48dp', 'ic_code_black_48dp', 'ic_compare_arrows_black_48dp', 'ic_copyright_black_48dp', 'ic_credit_card_black_48dp', 'ic_dashboard_black_48dp', 'ic_date_range_black_48dp', 'ic_delete_black_48dp', 'ic_delete_forever_black_48dp', 'ic_description_black_48dp', 'ic_dns_black_48dp', 'ic_done_all_black_48dp', 'ic_done_black_48dp', 'ic_donut_large_black_48dp', 'ic_donut_small_black_48dp', 'ic_eject_black_48dp', 'ic_euro_symbol_black_48dp', 'ic_event_black_48dp', 'ic_event_seat_black_48dp', 'ic_exit_to_app_black_48dp', 'ic_explore_black_48dp', 'ic_extension_black_48dp', 'ic_face_black_48dp', 'ic_favorite_black_48dp', 'ic_favorite_border_black_48dp', 'ic_feedback_black_48dp', 'ic_find_in_page_black_48dp', 'ic_find_replace_black_48dp', 'ic_fingerprint_black_48dp', 'ic_flight_land_black_48dp', 'ic_flight_takeoff_black_48dp']
ui.icons.setDataSource(icons)

ui.icons.on("item_click", function(icon){
    var d = "@drawable/" + icon;
    setClip(d);
    toast(d + "已复制到剪贴板");
});

ui.search.on("click", function(){
    var text = ui.input.text();
    if(text.length == 0){
        return;
    }
    search(text);
});

ui.reset.on("click", function(){
    ui.icons.setDataSource(icons);
});

function search(keywords){
    var result = [];
    for(var i = 0; i < icons.length; i++){
        var icon = icons[i];
        if(icon.indexOf(keywords) >= 0){
            result.push(icon);
        }
    }
    ui.icons.setDataSource(result);
}