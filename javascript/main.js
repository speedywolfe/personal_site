var window_width = window.innerWidth;
var accordion_width = (window_width - 50);

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
	$('#content1').liteAccordion({
		containerWidth: accordion_width,
		containerHeight: 700,
		headerWidth: 60,
		theme: 'dark'
	});
});

$(window).ready(function() {
	$('#content2').liteAccordion({
		containerWidth: accordion_width,
		containerHeight: 700,
		headerWidth: 60,
		theme: 'dark'
	});
})

$(window).ready(function() {
	$('#content3').liteAccordion({
		containerWidth: accordion_width,
		containerHeight: 700,
		headerWidth: 60,
		theme: 'dark'
	});
})

$(window).ready(function() {
	$('#content4').liteAccordion({
		containerWidth: accordion_width,
		containerHeight: 700,
		headerWidth: 60,
		theme: 'dark'
	});
})