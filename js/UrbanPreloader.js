var images = document.images;
var images_total_count = images.length;
var images_loaded_count = 0;
for (var i = 0; i < images_total_count; i++){
	image_clone         = new Image();
	image_clone.onload  = load;
	image_clone.onerror = load;
	image_clone.src     = images[i].src;
}



function done() {
    setTimeout(function() {
        $('.preloader').fadeOut(1100);
        $('.layout__machine').fadeIn(1100);
        $('.rights').fadeIn(1100);
    }, 1000);
};

function load() {
	images_loaded_count++;
    if (images_loaded_count > 7) {
        setTimeout(function() {
        $('.horizont').fadeIn(1100);
    }, 200);
        
    }
    if (images_loaded_count > 14) {
        setTimeout(function() {
        $('.greed').fadeIn(1100);
    }, 200);
        
    }
    if (images_loaded_count > 21) {
        setTimeout(function() {
         $('.sity').fadeIn(1100);
    }, 200);
       
    }
    if (images_loaded_count >= 30) {
        setTimeout(function() {
         $('.noize').fadeIn(1100);
          done();
    }, 200);
       
       
    }
}
// document.body.onload = function(){
//     done();
// }