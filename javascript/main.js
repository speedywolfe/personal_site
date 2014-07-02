var window_width = window.innerWidth;
var accordion_width = (window_width - ((1*window_width)/10));
var current_panel_work = 1; // current panel of work slider
var current_panel_fun = 1;  // current panel of play slider

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
// $(window).ready(function() {
// 	$('#content3').liteAccordion({
// 		containerWidth: accordion_width,
// 		containerHeight: 680,
// 		headerWidth: 50,
// 		theme: 'dark'
// 	});
// })

// $(window).ready(function() {
// 	$('#content4').liteAccordion({
// 		containerWidth: accordion_width,
// 		containerHeight: 680,
// 		headerWidth: 60,
// 		theme: 'dark'
// 	});
// })

/*----------------------------------------------*/
/* Own Sliding Panels */
/*----------------------------------------------*/
// function horizontal_slide(panel_number, which_panel) {
// 	// offset will be one window width for each panel
// 	var slide_offset = panel_number * window_width;

// 	// decide on work or play panel
// 	if(which_panel == 'work') {
// 		current_panel_number = current_panel_work;
// 	}
// 	if(which_panel == 'play') {
// 		current_panel_number = current_panel_fun;
// 	}

// 	// slide panel, direction depends on panel number
// 	if(slide_offset > current_panel_number) {
// 		$('work_content').animate({
// 			'left' : slide_offset
// 		});
// 	}
// 	else {
// 		$(this).animate({
// 			'right' : slide_offset
// 		});
// 	}
// }
function switch_panel(section, panel_number) {
	// decide on work or play panel
	var current_panel_number;
	if(section == 'work_panel') {
		current_panel_number = current_panel_work;
	}
	if(section == 'play_panel') {
		current_panel_number = current_panel_fun;
	}

	// check if current displayed panel is same as selected
	if(panel_number == current_panel_number) {/* Dont do anything */}

	// actually switch panels if you click one that isn't currently displayed
	else {
	
		// close previously open panel
		transparency_change('transparent', section, current_panel_number);
		console.log("After close previous Pannel, " + current_panel_work);

		// open new panel
		transparency_change('opaque', section, panel_number);
		console.log("After Open New Pannel, " + current_panel_work);

		// Have to check again which section we are in to update panel number
		if(section == 'work_panel') {
			current_panel_work = panel_number;
		}
		if(section == 'play_panel') {
			current_panel_fun = panel_number;
		}
	}
}

function transparency_change(direction, panel_section, panel_number) {
	if(direction == 'opaque') {
		$('#' + panel_section + panel_number).fadeIn(1000);
	}
	else {
		$('#' + panel_section + panel_number).fadeOut(1000);
	}
}