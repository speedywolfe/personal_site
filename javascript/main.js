var window_width = window.innerWidth;
var accordion_width = (window_width - ((1*window_width)/10));
var currert_panel_work = 1; // current panel of work slider
var currert_panel_fun = 1;  // current panel of play slider

/*----------------------------------------------*/
/* Top Bar Squishing and growing based on Scroll*/
/*----------------------------------------------*/
$(window).scroll(function() {
	var scroll_value = $(document).scrollTop().valueOf();
	barSquish(scroll_value); 
})

function barSquish(scroll) {
	var current_Scroll = scroll;
	if(current_Scroll < 121) { 
		$("#top_bar").css("height", 200 - current_Scroll);
		$("#name").css("top", 30 - (current_Scroll/2));
		$("#nav-container").css("top", 70 - (current_Scroll/2));
	}
}

/*----------------------------------------------*/
/* Sliding Content Panels*/
/*----------------------------------------------*/
$(window).ready(function() {
	$('#content3').liteAccordion({
		containerWidth: accordion_width,
		containerHeight: 680,
		headerWidth: 50,
		theme: 'dark'
	});
})

$(window).ready(function() {
	$('#content4').liteAccordion({
		containerWidth: accordion_width,
		containerHeight: 680,
		headerWidth: 60,
		theme: 'dark'
	});
})

/*----------------------------------------------*/
/* Own Sliding Panels */
/*----------------------------------------------*/
function horizontal_slide(panel_number, which_panel) {
	// offset will be one window width for each panel
	var slide_offset = panel_number * window_width;

	// decide on work or play panel
	if(which_panel == 'work') {
		current_panel_number = currert_panel_work;
	}
	if(which_panel == 'play') {
		current_panel_number = currert_panel_fun;
	}

	// slide panel, direction depends on panel number
	if(slide_offset > current_panel_number) {
		$('work_content').animate({
			'left' : slide_offset;
		});
	}
	else {
		$(this).animate({
			'right' : slide_offset;
		});
	}
}
