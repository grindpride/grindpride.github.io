$(document).ready(function() {
    console.log("Poehali!");
    var butt = $('.layout__button');
    var swag;
    var sw;

    function playBeat(el) {
        el.pause();
        el.currentTime = 0;
        el.play();
    };

    function stopBeat(el) {
        el.pause();
        el.currentTime = 0;
    };

    butt.mousedown(function() {
        sw = $(this);
        sw.addClass('pressed');
        swag = sw.find('audio')[0];
        playBeat(swag);
    });

    $(document).mouseup(function() {
        if (swag != undefined) {
            if (sw.find('audio').attr('loop') === 'loop') {
                stopBeat(swag);
            }
            sw.removeClass('pressed');
        }
    });


    function stopAnotherBass() {
        a = $('.bass');
        a.removeClass('pressed');
        a.each(function() {
            as = $(this).find('audio')[0];
            stopBeat(as);
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
                var sw = s.find('audio')[0];
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
            if (!but.beat) {
                s = $(but.name).find('audio')[0];
                stopBeat(s);

            }
            $(but.name).removeClass('pressed');
            but.isPlaying = false;
        }

    });

});