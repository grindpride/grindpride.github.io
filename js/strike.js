$(document).ready(function() {
    console.log("Poehali!");
    var button = $('.button');
    // var range = $('#range').val();
    var t;
    button.click(function() {
        $(this).toggleClass('pressed');
    });

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
        for(var i = 0; i<row.length;i++){
            var thisBeat = row.eq(i).index();
             playBeat(thisBeat)
             // console.log('В колонне'+thisColumn+'Нажаты кнопки №: ' + thisBeat);
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
    };



    $('.start').click(function() {

        var t = setInterval(nextStep, 100);
        
        $('.stop').on('click', function() {
            console.log('STAPH!!');
            clearInterval(t);

        });
    });
    $('.clear').click(function() {
        var $rc = $('.button').removeClass('pressed');
    });

});