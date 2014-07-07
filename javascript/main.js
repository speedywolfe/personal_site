var current_panel_work = 1; // current panel of work slider
var current_panel_fun = 1;  // current panel of play slider

/*----------------------------------------------*/
/* Top Bar Squishing and growing based on Scroll*/
/*----------------------------------------------*/
function barSquish(scroll) {
	var current_Scroll = scroll;
	if(current_Scroll < 121) { 
		$("#top_bar").css("height", 200 - current_Scroll);
		$("#name").css("top", 30 - (current_Scroll/2));
		$("#nav-container").css("top", 70 - (current_Scroll/2));
	}
}
$(window).scroll(function() {
	var scroll_value = $(document).scrollTop().valueOf();
	barSquish(scroll_value); 
});

/*----------------------------------------------*/
/* Panel Switching through transparency */
/*----------------------------------------------*/
function transparency_change(direction, panel_section, panel_number) {
	if(direction === 'opaque') {
		$('#' + panel_section + panel_number).css("z-index", 5);
		$('#' + panel_section + panel_number).animate({opacity: 1}, 1000);	
	}
	else {
		$('#' + panel_section + panel_number).animate({opacity: 0}, 1000, function() {
			$('#' + panel_section + panel_number).css("z-index", -1);
		});
	}
}

function switch_panel(section, panel_number) {
	// decide on work or play panel
	var current_panel_number;
	if(section === 'work_panel') {
		current_panel_number = current_panel_work;
	}
	if(section === 'fun_panel') {
		current_panel_number = current_panel_fun;
	}

	// check if current displayed panel is same as selected
	if(panel_number === current_panel_number) {/* Dont do anything */}

	// actually switch panels if you click one that isn't currently displayed
	else {

		// close previously open panel
		transparency_change('transparent', section, current_panel_number);

		// open new panel
		transparency_change('opaque', section, panel_number);


		// Have to check again which section we are in to update panel number
		if(section === 'work_panel') {
			current_panel_work = panel_number;
		}
		if(section === 'fun_panel') {
			current_panel_fun = panel_number;
		}
	}
}