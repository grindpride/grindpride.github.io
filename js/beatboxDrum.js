
$(document).ready(function(){
	console.log("Poehali!");
	var audio1 = $('.audio1')[0];
	var audio2 = $('.audio2')[0];
	var audio3 = $('.audio3')[0];
	var audio4 = $('.audio4')[0];
	var audio5 = $('.audio5')[0];
	var audio6 = $('.audio6')[0];
	var audio7 = $('.audio7')[0];
	var audio8 = $('.audio8')[0];
	var butt = $(".button")
	function aud(i){
		return $(".audio"+i)[0];
	}

	butt.mousedown(function(){
				var s = aud($(this).index());
				s.pause();
				s.currentTime = 0;
				// aud($(this).index()).stop();
				s.play();
			});

	
	// audio4.play();
	
	
});