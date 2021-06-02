$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $("#up").fadeIn();
        } else {
            $("#up").fadeOut();
        }
    });

    $("#up").click(function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            600
        );
        return false;
    });
    // $(window).scroll(function() {
    //     alert("asd");
    // });

});