
$(document).ready(function(){
	console.log("Poehali!");
	var butt = $(".button");
	butt.mousedown(function(){
				 s = $(this).find('audio')[0]
				s.pause();
				s.currentTime = 0;
				s.play();
			});


$(document).keyup(function(eventObject){
	var k = eventObject.which;

  // console.log('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
  if(k === 81){
	var s = $(".audio1")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }
    if(k === 87){
	var s = $(".audio2")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }
    if(k === 85){
	var s = $(".audio3")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }
    if(k === 73){
	var s = $(".audio4")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }
    if(k === 65){
	var s = $(".audio5")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }
    if(k === 83){
	var s = $(".audio6")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }
    if(k === 74){
	var s = $(".audio7")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }
    if(k === 75){
	var s = $(".audio8")[0];
	s.pause();
	s.currentTime = 0;
	s.play();
  }

});

	
	
});