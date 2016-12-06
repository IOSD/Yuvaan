/* Styles Switcher */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	"use strict"

	$("ul.colors .color1" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/default.css" );
		return false;
	});

	$("ul.colors .color2" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/blue.css" );
		return false;
	});

	$("ul.colors .color3" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/green.css" );
		return false;
	});

	$("ul.colors .color4" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/purple.css" );
		return false;
	});

	$("ul.colors .color5" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/yellow.css" );
		return false;
	});

	$("ul.colors .color6" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/red.css" );
		return false;
	});

	$("#color-style-switcher .bottom a.settings").click(function(e){
		e.preventDefault();
		var div = $("#color-style-switcher");
		if (div.css("left") === "-145px") {
			$("#color-style-switcher").animate({
				left: "0px"
			});
		} else {
			$("#color-style-switcher").animate({
				left: "-145px"
			});
		}
	})

	$("ul.colors li a").click(function(e){
		e.preventDefault();
		$(this).parent().parent().find("a").removeClass("active");
		$(this).addClass("active");
	})

});



//Inject Necessary Styles and HTML
jQuery('head').append('<link rel="stylesheet" id="colors" href="assets/css/colors/default.css" type="text/css" />');
jQuery('head').append('<link rel="stylesheet" href="assets/css/color-switcher.css" type="text/css" />');
