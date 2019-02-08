$(document).ready(function() {
    /* Parallax 
    $('.parallax-window').parallax({imageSrc: 'img/background.jpg'});
    */
    /* Resize 
    function heightDetect(){
        $(".parallax-window").css("height", $(window).height());    
    }
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });
    */

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

    /* Slider */
    $('.carousel').carousel({
        interval: 8000
    })

    /* Scrool animation */
    $(window).scroll(function() {
        $('.mov').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+600) {
            $(this).addClass('fadeIn');
            $(this).css('opacity','1');
        }
    });
    });

});

  