$(document).ready(function() {
    console.log("Poehali!");
    var butt = $('.layout__button');
    var swag;
    var sw;
    var dyn = $('.dynamic');

    var sliders = document.getElementsByClassName('sliders');

    function setVolume() {
        var volume = Math.abs(sliders[0].noUiSlider.get());
        butt.each(function() {
            $(this).find('audio')[0].volume = volume;
        });


    }

    noUiSlider.create(sliders[0], {
        start: -0.5,
        orientation: "vertical",
        range: {
            'min': -1,
            'max': 0
        },
    });
    sliders[0].noUiSlider.on('slide', setVolume);
    setVolume();
    // Bind the color changing function
    // to the slide event.
    // sliders[i].noUiSlider.on('slide', setColor);


    function playBeat(el) {
        el[0].pause();
        el[0].currentTime = 0;
        el[0].play();

        dyn.addClass('active');
    };

    function stopBeat(el,el2) {
         var check = $('.layout__button');
         el2.removeClass('pressed');
        if (el.attr('loop') === 'loop') {
            el[0].pause();
            el[0].currentTime = 0;
        }
        if(!check.hasClass('pressed')){
             dyn.removeClass('active');
        }
        
        
    };

    butt.mousedown(function() {
        sw = $(this);
        sw.addClass('pressed');
        swag = sw.find('audio');
        playBeat(swag);
    });

    $(document).mouseup(function() {
        if (swag != undefined) {
            sw.removeClass('pressed');
            stopBeat(swag,sw);

        }
    });


    function stopAnotherBass() {
        a = $('.bass');
        a.removeClass('pressed');
        a.each(function() {
            as = $(this).find('audio');
            stopBeat(as,a);
        });
    }


    var flags = {
        81: {
            isPlaying: false,
            name: '.button1',
            bass: true
        },
        87: {
            isPlaying: false,
            name: '.button2',
            bass: true
        },
        85: {
            isPlaying: false,
            name: '.button3',
            bass: true
        },
        73: {
            isPlaying: false,
            name: '.button4',
            bass: true
        },
        65: {
            isPlaying: false,
            name: '.button5',
            bass: false
        },
        83: {
            isPlaying: false,
            name: '.button6',
            bass: false
        },
        72: {
            isPlaying: false,
            name: '.button7',
            bass: false
        },
        74: {
            isPlaying: false,
            name: '.button8',
            bass: false
        },
        90: {
            isPlaying: false,
            name: '.button9',
            bass: false,
            beat: true
        },
        88: {
            isPlaying: false,
            name: '.button10',
            bass: false,
            beat: true
        },
        66: {
            isPlaying: false,
            name: '.button11',
            bass: false,
            beat: true
        },
        78: {
            isPlaying: false,
            name: '.button12',
            bass: false,
            beat: true
        }
    }

    $(document).keydown(function(e) {
        var k = e.which;
        if (flags[k] !== undefined) {
            var but = flags[k];

            if (!but.isPlaying) {
                if (but.bass) {
                    stopAnotherBass();
                }
                var s = $(but.name);
                var sw = s.find('audio');
                s.addClass('pressed');
                playBeat(sw);
                but.isPlaying = true;
            }
        }

    });

    $(document).keyup(function(e) {
        var k = e.which;
        if (flags[k] !== undefined) {

            var but = flags[k];

            s = $(but.name).find('audio');
            stopBeat(s, $(but.name));


            $(but.name).removeClass('pressed');
            but.isPlaying = false;
        }

    });

});