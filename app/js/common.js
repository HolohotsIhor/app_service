$(document).ready(function() {
    "use strict";

    /* Button call */
    $(".log-in").click(
        function() {
            $(".panel_call").animate({ width: 'toggle' }, 350)
            return false;
        })

    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    /* Pop up */
    $(".pop-up-show").click(function() {
        $(".pop-up-box").css('display', 'block');
    })

    $(".close-box").click(function() {
        $(".pop-up-box").css('display', 'none');
    })

    /* Slider */
    $('.carousel').carousel({
        interval: 8000
    })

    /* Scrool animation */
    $(window).scroll(function() {
        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeIn');
                $(this).css('opacity', '1');
            }
        });
    });
});


$(document).ready(function() {

    /* ***************Memory controlls*************** */
    $('.memory-list li').click(function(){
        $('.memory-list li').css('border-color', '#eee');
        $(this).css('border-color', '#212121');
        $('.memory-list li').removeClass();
        $(this).addClass('active');
        var memorySize = $(this).text(); /* Variables size */
    });

    /* ***************Status controlls*************** */
    $('.status-list li').click(function(){
        $('.status-list li').css('border-color', '#eee');
        $(this).css('border-color', '#212121');
        $('.status-list li').removeClass();
        $(this).addClass('active');
    });

    /* ***************Model controlls*************** */
        $("#pa_versija-iphone").change(function() {
        var gadgetModel = $("#pa_versija-iphone option:selected").val(); /* Variables model */
        var modelPrice = 0; /* Variables price*/

        if (gadgetModel == 'iphone-5') {
            modelPrice = 382; 
        }

        return modelPrice;
    });   
});