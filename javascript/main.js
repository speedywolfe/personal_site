/*----------------------------------------------*/
/* Top Bar Squishing and growing based on Scroll*/
/*----------------------------------------------*/
$(window).scroll(function() {
	var scroll_value = $(document).scrollTop().valueOf();
	barSquish(scroll_value); 
})

function barSquish(scroll) {
	var current_Scroll = scroll;
	if(current_Scroll < 61) {
		var bar_height = $(window).scroll(function() {
			var current_height = $("#top_bar").css("height");
			return current_height;
		});

		$("#top_bar").css("height", 160 - current_Scroll);
		$("#name").css("top", 15 - (current_Scroll/2));
		$("#nav-container").css(20 - (current_Scroll/2));
	}
}

