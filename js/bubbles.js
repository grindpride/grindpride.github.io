
$(document).ready(function(){
	console.log("Poehali!");
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};
	var $b = $(".bubble");
	$b.each(function(){
	$(this).css("background",randomColor());
	});
$(document).delegate( ".visible", "mouseenter", function() {
	
		$(this).css('background', "none");
		$(this).removeClass("visible");
		var newDiv = $("<div></div><div></div><div></div><div></div>");
		newDiv.css("display","none","border-radius","100%");
		newDiv.appendTo($(this));
		newDiv.show("fast");
		newDiv.addClass("bubble visible");

		newDiv.css("background",randomColor());
		

	
	
});
});