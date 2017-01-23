
$(document).ready(function(){
	console.log("Poehali!");
	function randomColor() {
	return '#' + Math.random().toString(16).slice(2, 8);
	}; 
	var step = 0
	var start = true;
	$(".button").click(function(){
	 $(".start").css("display","none");
	 play();
	});
	dif = 1364;
	

	var $v = $(".visible");
	$v.each(function(){$(this).css("background",randomColor())
		});
	function play(){

		var timer;
		function start_timer()
			{
				// if (timer) clearInterval(timer);
				secs = 0;
				// document.getElementById('timer').innerHTML = secs;
				timer = setInterval(function () {
					if(start){secs++;};
					 document.getElementById('timer').innerHTML = secs+ " сек.";
					},
				1000
			);
			}
			start_timer();
			console.log(secs)


	 $(document).delegate( ".visible", "mouseenter", function() {
			var batya = $(this).closest($(".bubble:not(.visible)"));
			var deti = batya.children(".visible");
			// console.log(deti.length +" "+ batya.length);
			
			
			function kookozh(){
			if(deti.length===4){
			
			deti.removeClass("visible").css("display","none");
			batya.addClass("visible").css("background",randomColor());
			step+=4;
			
			console.log("Скукожено шаров: "+step);
			}}
			kookozh();
	if(step===dif){
		$(".grac").fadeIn()
		start=false;
		console.log("WIN");
	};

	});}
		
	
});
