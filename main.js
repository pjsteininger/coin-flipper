$(document).ready(function() {
    var rotation = 0;

    jQuery.fn.rotate = function(degrees) {
        $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    };
    
    $("#area").click(function() {
        rotation += 170;
        $("#coin").rotate(rotation);
    });
    $("#coin").click(function() {
        rotation = -40;
        $("#coin").rotate(rotation);
    });
    // $("#coin").click(function() {
    //     setInterval(function() {
    //         rotation *= -1;
    //         $(this).rotate(rotation);
    //     },100);
    // })
});

