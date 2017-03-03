$(document).ready(function() {
    console.log("Poehali!");
    var button = $('.button');
    var range = 60000 / ( $('.screen').text());
    var t;
    var isPlayin = false;
    button.click(function() {
        $(this).toggleClass('pressed');
    });

    var sliders = document.getElementsByClassName('sliders');

    function setBPM() {
        var BPM = Math.round(sliders[0].noUiSlider.get());
        $('.screen').text(BPM);
    }

    noUiSlider.create(sliders[0], {
        start: 180,
        step: 1,
        range: {
            'min': 120,
            'max': 600
        },
    });
    sliders[0].noUiSlider.on('slide', setBPM);
    setBPM();
    function playBeat(el) {
        beat = $('.audio').eq(el)[0];
        beat.currentTime = 0;
        beat.play();
    }
    var nextStep = function() {
        var col = $('.soundcolumn');
        var diod = $('.thisCol');
        var thisColumn = col.index($('.active'));
        var row = col.eq(thisColumn).children('.pressed');
        for (var i = 0; i < row.length; i++) {
            var thisBeat = row.eq(i).index();
            playBeat(thisBeat);
        }

        if (thisColumn === 15) {
            var nextColumn = 0;
        } else {
            var nextColumn = thisColumn + 1;
        };

        col.removeClass('active');
        col.eq(nextColumn).addClass('active');
        diod.removeClass('active');
        diod.eq(nextColumn).addClass('active');
        range = 60000 / ( $('.screen').text());
        var t = setTimeout(nextStep, range);
        $('.stop').on('click', function() {
            isPlayin = false;
            clearTimeout(t);
        });
    };



    $('.start').click(function() {
        if (isPlayin === false) {
            isPlayin = true;
            var t = setTimeout(nextStep, range);
        };

    });



    $('.clear').click(function() {
        var $rc = $('.button').removeClass('pressed');
    });

});