$(document).ready(function() {
    console.log("Poehali!");
    var butt = $('.layout__button');

    function playBeat(el) {
        el.pause();
        el.currentTime = 0;
        el.play();
    };

    function stopBeat(el) {
        el.pause();
        el.currentTime = 0;
    };
    // butt.mousedown(function() {
    //     $(this).addClass('pressed');
    //     s = $(this).find('audio')[0];
    //     playBeat(s);
    // });
    // butt.mouseup(function() {

    //     s = $('.pressed').find('.loop')[0];
    //     if (s != undefined) {
    //         stopBeat(s);
    //     }
    //     butt.removeClass('pressed');
    // });
    var flagQ = true;
    var flagW = true;
    var flagU = true;
    var flagI = true;
    var flagA = true;
    var flagS = true;
    var flagH = true;
    var flagJ = true;
    var flagZ = true;
    var flagX = true;
    var flagB = true;
    var flagN = true;
    var flagBassLoop = true;

    function stopAnotherBass() {
        a = $('.bass');
        a.removeClass('pressed');
        a.each(function() {
            as = $(this).find('audio')[0];
            stopBeat(as);
        });
    }
    $(document).keydown(function(eventObject) {
        var k = eventObject.which;
        flagBassLoop = flagQ && flagW && flagU && flagI;
        // console.log('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
        if (k === 81 && flagQ) {
      stopAnotherBass();
            var b = $('.button1');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagQ = false;

        }
        if (k === 87 && flagW) {
        	stopAnotherBass();
            var b = $('.button2');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagW = false;

        }
        if (k === 85 && flagU) {
        	stopAnotherBass();
            var b = $('.button3');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagU = false;
        }
        if (k === 73 && flagI) {
        	stopAnotherBass();
            var b = $('.button4');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagI = false;
        }
        if (k === 65 && flagA) {
            var b = $('.button5');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagA = false;
        }
        if (k === 83 && flagS) {
            var b = $('.button6');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagS = false;
        }
        if (k === 72 && flagH) {
            var b = $('.button7');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagH = false;
        }
        if (k === 74 && flagJ) {
            var b = $('.button8');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagJ = false;
        }
        if (k === 90 && flagZ) {
            var b = $('.button9');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagZ = false;
        }

        if (k === 88 && flagX) {
            var b = $('.button10');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagX = false;
        }

        if (k === 66 && flagB) {
            var b = $('.button11');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagB = false;
        }

        if (k === 78 && flagN) {
            var b = $('.button12');
            var s = b.find('audio')[0];
            b.addClass('pressed');
            playBeat(s);
            flagN = false;
        }


    });

    $(document).keyup(function(eventObject) {
        var u = eventObject.which;
        // flagBassLoop = flagQ && flagW && flagU && flagI;
        // console.log('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
        if (u === 81) {
            flagQ = true;
            b = $('.button1');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);

        }
        if (u === 87) {
            flagW = true;
            b = $('.button2');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);

        }
        if (u === 85) {
            flagU = true;
            b = $('.button3');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);

        }
        if (u === 73) {
            flagI = true;
            b = $('.button4');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);
        }
        if (u === 65) {
            flagA = true;
            b = $('.button5');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);
        }
        if (u === 83) {
            flagS = true;
            b = $('.button6');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);
        }
        if (u === 72) {
            flagH = true;
            b = $('.button7');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);
        }
        if (u === 74) {
            flagJ = true;
            b = $('.button8');
            b.removeClass('pressed');
            s = b.find('audio')[0];
            stopBeat(s);
        }
        if (u === 90) {
            flagZ = true;
            b = $('.button9');
            b.removeClass('pressed');
        }
        if (u === 88) {
            flagX = true;
            b = $('.button10');
            b.removeClass('pressed');
        }

        if (u === 66) {
            flagB = true;
            b = $('.button11');
            b.removeClass('pressed');
        }

        if (u === 78) {
            flagN = true;
            b = $('.button12');
            b.removeClass('pressed');
        }



    });
});