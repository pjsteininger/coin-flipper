$(document).ready(function () {
    var rotation = 0;
    jQuery.fn.rotate = function (degrees) {
        $(this).css({ 'transform': 'rotate(' + degrees + 'deg)' });
    };
    var stop = true;
    function flipCoin() {
        rotation += 10;
        $("#coin").rotate(rotation);
    }
    function settleDown() {
        setTimeout(function () {
            $("#coin").rotate(20)
        }, 50);
        setTimeout(function () {
            $("#coin").rotate(160)
        }, 100);
        setTimeout(function () {
            $("#coin").rotate(10)
        }, 200);
        setTimeout(function () {
            $("#coin").rotate(170)
        }, 400);
        setTimeout(function () {
            $("#coin").rotate(5)
        }, 600);
        setTimeout(function () {
            $("#coin").rotate(0)
        }, 800);
    }
    function myMove() {
        var coin = $("#coin");
        var xpos = $("#coin").position().left;
        var ypos = $("#coin").position().top;
        var yvel = (-10 + 3 * Math.random());
        var yaccl = .4;
        var xvel = (3 - Math.random() * 6);
        var id = setInterval(frame, 10);
        this.c = setInterval(flipCoin, 5 * Math.random());
        function frame() {
            if (ypos >= 470) {
                clearInterval(id);
                clearInterval(document.getElementById("area").c);
                if (rotation % 360 > 180) {
                    console.log("tails");
                } else {
                    console.log("heads");
                }
                settleDown();
            } else {
                xpos += xvel;
                ypos += yvel;
                yvel += yaccl;
                coin.css("top", ypos + "px");
                coin.css("left", xpos + "px");
            }
        }
    }
    $("#area").click(myMove);
});

