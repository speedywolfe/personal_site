function barSquish(e){var n=e;141>n?$("#top_bar").css("height",200-n):$("#top_bar").css("height",59),console.log(n)}function transparency_change(e,n,a){"opaque"===e?($("#"+n+a).css("z-index",5),$("#"+n+a).animate({opacity:1},1e3)):$("#"+n+a).animate({opacity:0},1e3,function(){$("#"+n+a).css("z-index",-1)})}function switch_panel(e,n,a){var r;console.log(e),"work_panel"===e&&(r=current_panel_work,$("#work_nav_container p").removeClass("active"),$("#"+a).addClass("active")),"fun_panel"===e&&(r=current_panel_fun,$("#fun_nav_container p").removeClass("active"),$("#"+a).addClass("active")),"resume_panel"===e&&(r=current_panel_resume,$("#resume_nav_container p").removeClass("active"),$("#"+a).addClass("active")),n===r||(transparency_change("transparent",e,r),transparency_change("opaque",e,n),"work_panel"===e&&(current_panel_work=n),"fun_panel"===e&&(current_panel_fun=n),"resume_panel"===e&&(current_panel_resume=n))}var current_panel_work=1,current_panel_fun=1,current_panel_resume=1;$(document).ready(function(){$(this).scrollTop(0)}),$(window).scroll(function(){var e=$(document).scrollTop().valueOf();barSquish(e)});