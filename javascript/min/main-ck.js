function barSquish(n){var a=n;141>a?($("#top_bar").css("height",200-a),$("#my_name").css("top",30-a/2),$("#nav_container").css("top",70-a/2)):($("#top_bar").css("height",59),$("#my_name").css("top",-39),$("#nav_container").css("top",0))}function transparency_change(n,a,e){"opaque"===n?($("#"+a+e).css("z-index",5),$("#"+a+e).animate({opacity:1},1e3)):$("#"+a+e).animate({opacity:0},1e3,function(){$("#"+a+e).css("z-index",-1)})}function switch_panel(n,a){var e;"work_panel"===n&&(e=current_panel_work),"fun_panel"===n&&(e=current_panel_fun),a===e||(transparency_change("transparent",n,e),transparency_change("opaque",n,a),"work_panel"===n&&(current_panel_work=a),"fun_panel"===n&&(current_panel_fun=a))}var current_panel_work=1,current_panel_fun=1;$(window).scroll(function(){var n=$(document).scrollTop().valueOf();barSquish(n)});