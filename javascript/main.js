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
		console.log("inside if");
		var bar_height = $(window).scroll(function() {
			var bar_height = $("#top_bar").css("height");
			return bar_height;
		});
		// console.log("bar_height: " + bar_height);
		$("#top_bar").css("height", 160 - current_Scroll);
		console.log("scroll: " + current_Scroll); 
	}
}

