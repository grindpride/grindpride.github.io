
$(document).ready(function(){
	console.log("Poehali!");
	var button = $('.button5__presspart_top');
	var video = $('.video__wrapper');
	var count = 0;

	button.click(function(){
		count++;
		if(count>99){
			video.css('display','block');
		}

	});
	
});