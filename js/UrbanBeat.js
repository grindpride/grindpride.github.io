$(document).ready(function() {
    console.log("Poehali!");
    var butt = $('.layout__button');
    var swag;
    var sw;
    var dyn = $('.dynamic');

    var playS = {};
    playS.button1 = function() { button1.play('bang'); };
    playS.button2 = function() { button2.play('bang'); };
    playS.button3 = function() { button3.play('bang'); };
    playS.button4 = function() { button4.play('bang'); };
    playS.button5 = function() { button5.play(); };
    playS.button6 = function() { button6.play(); };
    playS.button7 = function() { button7.play(); };
    playS.button8 = function() { button8.play(); };
    playS.button9 = function() { button9.play(); };
    playS.button10 = function() { button10.play(); };
    playS.button11 = function() { button11.play(); };
    playS.button12 = function() { button12.play(); };

    var stopS = {};
    stopS.button1 = function() { button1.stop(); };
    stopS.button2 = function() { button2.stop(); };
    stopS.button3 = function() { button3.stop(); };
    stopS.button4 = function() { button4.stop(); };
    stopS.button5 = function() { button5.stop(); };
    stopS.button6 = function() { button6.stop(); };
    stopS.button7 = function() { button7.stop(); };
    stopS.button8 = function() { button8.stop(); };
    stopS.button9 = function() {};
    stopS.button10 = function() {};
    stopS.button11 = function() {};
    stopS.button12 = function() {};

    var button1 = new Howl({
        src: ['sounds/UrbanBeat/1-1bass01.mp3', 'sounds/UrbanBeat/1-1bass01.ogg'],
        loop: true,
        sprite: { bang: [0, 3800] },
        preload: true
    });

    var button2 = new Howl({
        src: ['sounds/UrbanBeat/1-2bass02.mp3', 'sounds/UrbanBeat/1-2bass02.ogg'],
        loop: true,
        sprite: { bang: [0, 3850] },
        preload: true
    });

    var button3 = new Howl({
        src: ['sounds/UrbanBeat/1-3bass03.mp3', 'sounds/UrbanBeat/1-3bass03.ogg'],
        loop: true,
        sprite: { bang: [0, 3850] },
        preload: true
    });

    var button4 = new Howl({
        src: ['sounds/UrbanBeat/1-4bass04.mp3', 'sounds/UrbanBeat/1-4bass04.ogg'],
        loop: true,
        sprite: { bang: [0, 3850] },
        preload: true
    });

    var button5 = new Howl({
        src: ['sounds/UrbanBeat/2-1beep-C.mp3', 'sounds/UrbanBeat/2-1beep-C.ogg'],
        loop: true,
        preload: true
    });

    var button6 = new Howl({
        src: ['sounds/UrbanBeat/2-2beep-E.mp3', 'sounds/UrbanBeat/2-2beep-E.ogg'],
        loop: true,
        preload: true

    });

    var button7 = new Howl({
        src: ['sounds/UrbanBeat/2-3beep-G.mp3', 'sounds/UrbanBeat/2-3beep-G.ogg'],
        loop: true,
        preload: true
    });

    var button8 = new Howl({
        src: ['sounds/UrbanBeat/2-4beep-B.mp3', 'sounds/UrbanBeat/2-4beep-B.ogg'],
        loop: true,
        preload: true
    });

    var button9 = new Howl({
        src: ['sounds/UrbanBeat/3-1bochka02.mp3', 'sounds/UrbanBeat/3-1bochka02.ogg'],
        preload: true
    });

    var button10 = new Howl({
        src: ['sounds/UrbanBeat/3-2snare01.mp3', 'sounds/UrbanBeat/3-2snare01.ogg'],
        preload: true
    });

    var button11 = new Howl({
        src: ['sounds/UrbanBeat/3-3hihat.mp3', 'sounds/UrbanBeat/3-3hihat.ogg'],
        preload: true
    });

    var button12 = new Howl({
        src: ['sounds/UrbanBeat/3-4effects01.mp3', 'sounds/UrbanBeat/3-4effects01.ogg'],
        preload: true
    });

    var soundS = [button1, button2, button3, button4,
        button5, button6, button7, button8,
        button9, button10, button11, button12
    ];

    // Volume slider
    function setVolume() {
        var volume = Math.abs(sliders[0].noUiSlider.get());
        soundS.forEach(function(item, i, arr) {
            item.volume(volume);
        });
    }

    var sliders = document.getElementsByClassName('sliders');

    noUiSlider.create(sliders[0], {
        start: -0.7,
        orientation: "vertical",
        range: {
            'min': -1,
            'max': 0
        },
    });

    sliders[0].noUiSlider.on('slide', setVolume);
    setVolume();

    function playBeat(el) {
        dyn.addClass('active');
        playS[el]();
    };

    function stopBeat(el, el2) {
        stopS[el]();

        var check = $('.layout__button');
        el2.removeClass('pressed');
        if (!check.hasClass('pressed')) {
            dyn.removeClass('active');
        }
    };

    function stopAnotherBass() {
        a = $('.bass');
        a.removeClass('pressed');
        a.each(function() {
            as = $(this).attr('id');
            stopBeat(as, a);
        });
    };

    butt.bind("mousedown touchstart tap", function(event) {
        event.stopPropagation();
        event.preventDefault();
        sw = $(this);
        if (sw.hasClass('bass')) {
            stopAnotherBass();
        }
        sw.addClass('pressed');
        swag = sw.attr('id');
        playBeat(swag);
    });

    $(document).bind("mouseup touchend ", function() {
        if (swag != undefined) {
            sw.removeClass('pressed');
            stopBeat(swag, sw);

        }
    });




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
                s.addClass('pressed');

                var sw = s.attr('id');
                playBeat(sw);

                but.isPlaying = true;
            }
        }

    });

    $(document).keyup(function(e) {
        var k = e.which;
        if (flags[k] !== undefined) {

            var but = flags[k];

            s = $(but.name).attr('id');
            stopBeat(s, $(but.name));


            $(but.name).removeClass('pressed');
            but.isPlaying = false;
        }

    });

});
