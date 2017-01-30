$(document).ready(function() {
    console.log("Poehali!");
    var butt = $(".button");

    function playBeat(el) {
        el.pause();
        el.currentTime = 0;
        el.play();
    };
    butt.mousedown(function() {
        $(this).addClass('pressed');
        s = $(this).find('audio')[0];

        playBeat(s);
    });
    $(document).mouseup(function() {
        butt.removeClass('pressed');
    });
    var flagQ = true;
    var flagW = true;
    var flagU = true;
    var flagI = true;
    var flagA = true;
    var flagS = true;
    var flagJ = true;
    var flagK = true;


    $(document).keydown(function(eventObject) {
        var k = eventObject.which;

        // console.log('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
        if (k === 81 && flagQ) {
            var b = $('.sound1');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagQ = false;
        }
        if (k === 87 && flagW) {
            var b = $('.sound2');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagW = false;

        }
        if (k === 85 && flagU) {
            var b = $('.sound3');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagU = false;
        }
        if (k === 73 && flagI) {
            var b = $('.sound4');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagI = false;
        }
        if (k === 65 && flagA) {
            var b = $('.sound5');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagA = false;
        }
        if (k === 83 && flagS) {
            var b = $('.sound6');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagS = false;
        }
        if (k === 74 && flagJ) {
            var b = $('.sound7');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagJ = false;
        }
        if (k === 75 && flagK) {
            var b = $('.sound8');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagK = false;
        }

    });

    $(document).keyup(function(eventObject) {
        var u = eventObject.which;

        // console.log('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
        if (u === 81) {
            flagQ = true;
            $('.sound1').removeClass('pressed');
        }
        if (u === 87) {
            flagW = true;
            $('.sound2').removeClass('pressed');

        }
        if (u === 85) {
            flagU = true;
            $('.sound3').removeClass('pressed');

        }
        if (u === 73) {
            flagI = true;
            $('.sound4').removeClass('pressed');

        }
        if (u === 65) {
            flagA = true;
            $('.sound5').removeClass('pressed');

        }
        if (u === 83) {
            flagS = true;
            $('.sound6').removeClass('pressed');

        }
        if (u === 74) {
            flagJ = true;
            $('.sound7').removeClass('pressed');

        }
        if (u === 75) {
            flagK = true;
            $('.sound8').removeClass('pressed');

        }

    });

});