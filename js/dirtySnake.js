function playGame() {
    var speed = 500;
    var mustGrow = false;
    var count = 0;
    var snakePart = new rect('#6F6F6F');
    var wall = new rect('#000');
    var apple = new rect('#36AC3B');
    var empty = new rect('#fff');
    var shit = new rect('#864b14');
    var dir = 'top';

    var begin = document.getElementsByClassName("begin");
    var again = document.getElementsByClassName("again");
    var score = document.getElementsByClassName("score");
    var topArrow = document.getElementsByClassName("top");
    var leftArrow = document.getElementsByClassName("left");
    var rightArrow = document.getElementsByClassName("right");
    var bottomArrow = document.getElementsByClassName("bottom");
    begin[0].style.display = 'none';
    again[0].style.display = 'none';
    topArrow[0].onclick = function() {
        arrowControl(38);
    };
    rightArrow[0].onclick = function() {
        arrowControl(39);
    };
    bottomArrow[0].onclick = function() {
        arrowControl(40);
    };
    leftArrow[0].onclick = function() {
        arrowControl(37);
    };

    function arrowControl(el) {
        var headX = snake[0][0];
        var headY = snake[0][1];
        var neckX = snake[1][0];
        var neckY = snake[1][1];

        switch (el) {

            case 38:
                if (!(headY > neckY)) {
                    dir = 'top';
                };
                break;
            case 39:
                if (!(headX < neckX)) {
                    dir = 'right';
                };
                break;
            case 40:
                if (!(headY < neckY)) {
                    dir = 'bottom';
                };
                break;
            case 37:
                if (!(headX > neckX)) {
                    dir = 'left';
                };
        }
    }

    function rect(color) {
        this.color = color;
        this.draw = function(x, y) {
            context.fillStyle = this.color;
            context.fillRect(x * 32, y * 32, 32, 32);
        };
    };

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };

    var snake = [
        [9, 6],
        [9, 7],
        [9, 8],
        [9, 9],
        [9, 10]
    ];

    document.onkeydown = function(event) {

        var headX = snake[0][0];
        var headY = snake[0][1];
        var neckX = snake[1][0];
        var neckY = snake[1][1];

        switch (event.keyCode) {

            case 38:
                if (!(headY > neckY)) {
                    dir = 'top';
                };
                break;
            case 39:
                if (!(headX < neckX)) {
                    dir = 'right';
                };
                break;
            case 40:
                if (!(headY < neckY)) {
                    dir = 'bottom';
                };
                break;
            case 37:
                if (!(headX > neckX)) {
                    dir = 'left';
                };
                break;
            case 87:
                if (!(headY > neckY)) {
                    dir = 'top';
                };
                break;
            case 68:
                if (!(headX < neckX)) {
                    dir = 'right';;
                };
                break;
            case 83:
                if (!(headY < neckY)) {
                    dir = 'bottom';
                };
                break;
            case 65:
                if (!(headX > neckX)) {
                    dir = 'left';
                };
                break;
        }
    };

    var map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    var wallCode = [];

    function makeWall() {
        for (i = 0; i < map.length; i++) {

            for (j = 0; j < map[i].length; j++) {
                if (map[i][j] == 1) {
                    var x = [j, i];
                    wallCode.push(x);
                }
            }
        }
    }
    makeWall();

    function init() {
        canvas = document.getElementById("example");
        canvas.width = 640;
        canvas.height = 480;
        context = canvas.getContext('2d');
    };

    function render() {
        for (i = 0; i < map.length; i++) {

            for (j = 0; j < map[i].length; j++) {

                switch (map[i][j]) {
                    case 0:
                        empty.draw(j, i);
                        break;
                    case 1:
                        wall.draw(j, i);
                        break;
                    case 2:
                        snakePart.draw(j, i);
                        break;
                    case 3:
                        apple.draw(j, i);
                        break;
                    case 4:
                        shit.draw(j, i);
                        break;
                }
            }
        }
    };

    var appleCode = [];

    // Спавним Яблоко
    function gotApple() {
        var x = randomInteger(1, 18);
        var y = randomInteger(1, 13);
        if (map[y][x] != 0) {
            gotApple();
        } else {
            map[y].splice(x, 1, 3);
            appleCode.pop();
            appleCode.push([x, y]);
        };
    };

    var shitCode = [];
    //Спавним говно
    function gotShit() {
        for (var u = 0; u < shitCode.length; u++) {
            var shitX = shitCode[u][0];
            var shitY = shitCode[u][1];
            map[shitY].splice(shitX, 1, 4);
        }

    };

    function gotSnake() {
        for (i = 0; i < snake.length; i++) {
            map[snake[i][1]].splice(snake[i][0], 1, 2);
        }
    };

    function snakeMove() {
        var x = snake[0][0];
        var y = snake[0][1];
        switch (dir) {
            case 'top':
                y--;
                break;
            case 'bottom':
                y++;
                break;
            case 'right':
                x++;
                break;
            case 'left':
                x--;
                break;
        }
        var last = snake[snake.length - 1];
        if (mustGrow == false) {
            map[last[1]].splice(last[0], 1, 0);
            snake.pop();
        } else {
            shitCode.unshift([last[0], last[1]]);
            mustGrow = false;
        }
        snake.unshift([x, y]);
    };

    function failCheck() {
        for (var z = 1; z < snake.length; z++) {

            if (snake[z][0] == snake[0][0] && snake[z][1] == snake[0][1]) {
                loose();
            }
        }
        for (var z = 0; z < wallCode.length; z++) {
            if (wallCode[z][0] == snake[0][0] && wallCode[z][1] == snake[0][1]) {
                loose();
            }
        }
    };

    function loose() {
        snakePart = new rect('#ff0000');
        speed = 50000000;
        score[0].innerHTML = count;
        again[0].style.display = 'block';

        // playGame();
    };

    function eatCheck() {
        if (appleCode[0][0] == snake[0][0] && appleCode[0][1] == snake[0][1]) {
            mustGrow = true;
            speed /= 1.04;
            gotApple();
            mustShit = true;
            count++;
        };
        for (var i = 0; i < shitCode.length; i++) {
            if (snake[0][0] == shitCode[i][0] && snake[0][1] == shitCode[i][1]) {
                shitCode.splice(i, 1);
                speed /= 1.04;
            }
        }

    };

    function step() {
        snakeMove();
        failCheck();
        gotSnake();
        eatCheck();
        gotShit();
        render();
    };

    init();
    gotSnake();
    gotApple();
    render();

    // setInterval(step,speed);
    var timerId = setTimeout(function tick() {
        step();
        timerId = setTimeout(tick, speed);
    }, speed);
};
// playGame()