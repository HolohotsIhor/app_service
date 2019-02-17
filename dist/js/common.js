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
    var gadgetModel = 0;
    var memorySize = 0;
    var statusLevel = 0;

    var finalModelPrice = 0;
    var finalMemoryPrice = 0;
    var finalStatusPrice = 0;


    /* ***************Model controlls*************** */
    $("#pa_versija-iphone").change(function() {
        finalModelPrice = 0;
        gadgetModel = $("#pa_versija-iphone option:selected").val(); /* Variables model */
        $('.memory-list li').css('display','block');

        /* Logic */

        /* iPhone 5 */
        if (gadgetModel == 'iphone-5') {
            $('.memory-list li:last-child').css('display','none');
        }
        if (gadgetModel == 'iphone-5' && statusLevel == 1 && memorySize != 0) {
            finalModelPrice = 382; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-5' && statusLevel == 2 && memorySize != 0) {
            finalModelPrice = 601; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-5' && statusLevel == 3 && memorySize != 0) {
            finalModelPrice = 792; 
            $('#final-price').html(finalModelPrice); 
        }

        /* iPhone 5c */
        if (gadgetModel == 'iphone-5c') {
            $('.memory-list li:last-child').css('display','none');
        }
        if (gadgetModel == 'iphone-5c' && statusLevel == 1 && memorySize != 0) {
            finalModelPrice = 382; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-5c' && statusLevel == 2 && memorySize != 0) {
            finalModelPrice = 601; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-5c' && statusLevel == 3 && memorySize != 0) {
            finalModelPrice = 792; 
            $('#final-price').html(finalModelPrice); 
        }

        /* iPhone 5s */
        if (gadgetModel == 'iphone-5s') {
            $('.memory-list li:last-child').css('display','none');
        }
        if (gadgetModel == 'iphone-5s' && statusLevel == 1 && memorySize != 0) {
            finalModelPrice = 382; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-5s' && statusLevel == 2 && memorySize != 0) {
            finalModelPrice = 683; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-5s' && statusLevel == 3 && memorySize != 0) {
            finalModelPrice = 983; 
            $('#final-price').html(finalModelPrice); 
        }

        /* iPhone 6*/
        if (gadgetModel == '6') {
            $('.memory-list li:last-child').css('display','none');
        }/* 16gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '16GB') {
            finalModelPrice = 1966; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '16GB') {
            finalModelPrice = 2266; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '16GB') {
            finalModelPrice = 2566; 
            $('#final-price').html(finalModelPrice); 
        }/* 32gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '32GB') {
            finalModelPrice = 2157; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '32GB') {
            finalModelPrice = 2375; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '32GB') {
            finalModelPrice = 2757; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 64gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 2757; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 3058; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 3358; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 128gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '128GB') {
            finalModelPrice = 2675; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '128GB') {
            finalModelPrice = 3249; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '128GB') {
            finalModelPrice = 3549; 
            $('#final-price').html(finalModelPrice); 
        }

        /* iPhone 6 Plus*/
        if (gadgetModel == 'iphone-6-plus') {
            $('.memory-list li:last-child, .memory-list li:nth-child(2)').css('display','none');
        }/* 16gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '16GB') {
            finalModelPrice = 2157; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '16GB') {
            finalModelPrice = 2375; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '16GB') {
            finalModelPrice = 2757; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 2566; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 3167; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 3549; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalModelPrice = 3358; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalModelPrice = 3959; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalModelPrice = 4341; 
            $('#final-price').html(finalModelPrice); 
        }


        /* iPhone 6s */
        if (gadgetModel == 'iphone-6s') {
            $('.memory-list li:last-child').css('display','none');
        }/* 16gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '16GB') {
            finalModelPrice = 2757; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '16GB') {
            finalModelPrice = 3167; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '16GB') {
            finalModelPrice = 3549; 
            $('#final-price').html(finalModelPrice); 
        }/* 32gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '32GB') {
            finalModelPrice = 3167; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '32GB') {
            finalModelPrice = 3549; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '32GB') {
            finalModelPrice = 3959; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 3167; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 3849; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 4232; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '128GB') {
            finalModelPrice = 3740; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '128GB') {
            finalModelPrice = 4232; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '128GB') {
            finalModelPrice = 4641; 
            $('#final-price').html(finalModelPrice); 
        }



        /* iPhone 6s Plus*/
        if (gadgetModel == 'iphone-6s-plus') {
            $('.memory-list li:last-child').css('display','none');
        }/* 16gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '16GB') {
            finalModelPrice = 4341; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '16GB') {
            finalModelPrice = 4723; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '16GB') {
            finalModelPrice = 5132; 
            $('#final-price').html(finalModelPrice); 
        }/* 32gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '32GB') {
            finalModelPrice = 4723; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '32GB') {
            finalModelPrice = 5132; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '32GB') {
            finalModelPrice = 5515; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 5515; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 5924; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 6306; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalModelPrice = 6497; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalModelPrice = 6907; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalModelPrice = 7289; 
            $('#final-price').html(finalModelPrice); 
        }


         /* iPhone 7 */
        if (gadgetModel == 'iphone-7') {
            $('.memory-list li:first-child, .memory-list li:nth-child(3)').css('display','none');
        }
        /* 32gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '32GB') {
            finalModelPrice = 5105; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '32GB') {
            finalModelPrice = 5924; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '32GB') {
            finalModelPrice = 6306; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '128GB') {
            finalModelPrice = 6033; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '128GB') {
            finalModelPrice = 6907; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '128GB') {
            finalModelPrice = 7289; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '256GB') {
            finalModelPrice = 7098; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '256GB') {
            finalModelPrice = 6279; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '256GB') {
            finalModelPrice = 7508; 
            $('#final-price').html(finalModelPrice); 
        }



        /* iPhone 7 Plus*/
        if (gadgetModel == 'iphone-7-plus') {
            $('.memory-list li:first-child, .memory-list li:nth-child(3)').css('display','none');
        }
        /* 32gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '32GB') {
            finalModelPrice = 6962; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '32GB') {
            finalModelPrice = 7890; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '32GB') {
            finalModelPrice = 8272; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalModelPrice = 8135; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalModelPrice = 9473; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalModelPrice = 9855; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '256GB') {
            finalModelPrice = 8354; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '256GB') {
            finalModelPrice = 9855; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '256GB') {
            finalModelPrice = 10265; 
            $('#final-price').html(finalModelPrice); 
        }



        /* iPhone 8*/
        if (gadgetModel == 'iphone-8') {
            $('.memory-list li:first-child, .memory-list li:nth-child(2), .memory-list li:nth-child(4)').css('display','none');
        }
        /* 64gb */
        if (gadgetModel == 'iphone-8' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 9064; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 10265; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 10647; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-8' && statusLevel == 1 && memorySize == '256GB') {
            finalModelPrice = 9282; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 2 && memorySize == '256GB') {
            finalModelPrice = 10456; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 3 && memorySize == '256GB') {
            finalModelPrice = 11848; 
            $('#final-price').html(finalModelPrice); 
        }


        /* iPhone 8 Plus*/
        if (gadgetModel == 'iphone-8-plus') {
            $('.memory-list li:first-child, .memory-list li:nth-child(2), .memory-list li:nth-child(4)').css('display','none');
        }
        /* 64gb */
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 10210; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 10920; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 11848; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 1 && memorySize == '256GB') {
            finalModelPrice = 11384; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 2 && memorySize == '256GB') {
            finalModelPrice = 12067; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 3 && memorySize == '256GB') {
            finalModelPrice = 13213; 
            $('#final-price').html(finalModelPrice); 
        }


        /* iPhone SE*/
        if (gadgetModel == 'iphone-se') {
            $('.memory-list li:last-child').css('display','none');
        }
         /* 16gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '16GB') {
            finalModelPrice = 1638; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '16GB') {
            finalModelPrice = 2102; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '16GB') {
            finalModelPrice = 2566; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 32gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '32GB') {
            finalModelPrice = 2102; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '32GB') {
            finalModelPrice = 2566; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '32GB') {
            finalModelPrice = 3030; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 2321; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 2785; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 3249; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '128GB') {
            finalModelPrice = 2785; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '128GB') {
            finalModelPrice = 3030; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '128GB') {
            finalModelPrice = 3494; 
            $('#final-price').html(finalModelPrice); 
        }


        /* iPhone X*/
        if (gadgetModel == 'iphone-x') {
            $('.memory-list li:first-child, .memory-list li:nth-child(2), .memory-list li:nth-child(4)').css('display','none');
        }
        /* 64gb */
        if (gadgetModel == 'iphone-x' && statusLevel == 1 && memorySize == '64GB') {
            finalModelPrice = 14169; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 2 && memorySize == '64GB') {
            finalModelPrice = 14851; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 3 && memorySize == '64GB') {
            finalModelPrice = 15971; 
            $('#final-price').html(finalModelPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-x' && statusLevel == 1 && memorySize == '256GB') {
            finalModelPrice = 15097; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 2 && memorySize == '256GB') {
            finalModelPrice = 16244; 
            $('#final-price').html(finalModelPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 3 && memorySize == '256GB') {
            finalModelPrice = 17363; 
            $('#final-price').html(finalModelPrice); 
        }
    });  





    /* ***************Memory controlls*************** */
    $('.memory-list li').click(function(){
        $('.memory-list li').css('border-color', '#eee');
        $(this).css('border-color', '#212121');
        $('.memory-list li').removeClass();
        $(this).addClass('active');

        /* Logic */
        finalMemoryPrice = 0;
        memorySize = $(this).text(); /* Variables size */

        /* iPhone 5 */
        if (gadgetModel == 'iphone-5' && statusLevel == 1 && memorySize != 0) {
            finalMemoryPrice = 382; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-5' && statusLevel == 2 && memorySize != 0) {
            finalMemoryPrice = 601; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-5' && statusLevel == 3 && memorySize != 0) {
            finalMemoryPrice = 792; 
            $('#final-price').html(finalMemoryPrice); 
        }

        /* iPhone 5c */
        if (gadgetModel == 'iphone-5c' && statusLevel == 1 && memorySize != 0) {
            finalMemoryPrice = 382; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-5c' && statusLevel == 2 && memorySize != 0) {
            finalMemoryPrice = 601; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-5c' && statusLevel == 3 && memorySize != 0) {
            finalMemoryPrice = 792; 
            $('#final-price').html(finalMemoryPrice); 
        }

        /* iPhone 5s */
        if (gadgetModel == 'iphone-5s' && statusLevel == 1 && memorySize != 0) {
            finalMemoryPrice = 382; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-5s' && statusLevel == 2 && memorySize != 0) {
            finalMemoryPrice = 683; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-5s' && statusLevel == 3 && memorySize != 0) {
            finalMemoryPrice = 983; 
            $('#final-price').html(finalMemoryPrice); 
        }

        /* iPhone 6*/
        /* 16gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '16GB') {
            finalMemoryPrice  = 1966; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '16GB') {
            finalMemoryPrice = 2266; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '16GB') {
            finalMemoryPrice = 2566; 
            $('#final-price').html(finalMemoryPrice); 
        }/* 32gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '32GB') {
            finalMemoryPrice = 2157; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '32GB') {
            finalMemoryPrice = 2375; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '32GB') {
            finalMemoryPrice = 2757; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 64gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 2757; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 3058; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 3358; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 128gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '128GB') {
            finalMemoryPrice = 2675; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '128GB') {
            finalMemoryPrice = 3249; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '128GB') {
            finalMemoryPrice = 3549; 
            $('#final-price').html(finalMemoryPrice); 
        }


        /* iPhone 6 Plus*/
        /* 16gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '16GB') {
            finalMemoryPrice = 2157; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '16GB') {
            finalMemoryPrice = 2375; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '16GB') {
            finalMemoryPrice = 2757; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 2566; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 3167; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 3549; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalMemoryPrice = 3358; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalMemoryPrice = 3959; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalMemoryPrice = 4341; 
            $('#final-price').html(finalMemoryPrice); 
        }


        /* iPhone 6s */
        /* 16gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '16GB') {
            finalMemoryPrice = 2757; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '16GB') {
            finalMemoryPrice = 3167; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '16GB') {
            finalMemoryPrice = 3549; 
            $('#final-price').html(finalMemoryPrice); 
        }/* 32gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '32GB') {
            finalMemoryPrice = 3167; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '32GB') {
            finalMemoryPrice = 3549; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '32GB') {
            finalMemoryPrice = 3959; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 3167; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 3849; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 4232; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '128GB') {
            finalMemoryPrice = 3740; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '128GB') {
            finalMemoryPrice = 4232; 
            $('#final-price').html(finalMemoryPricee);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '128GB') {
            finalMemoryPrice = 4641; 
            $('#final-price').html(finalMemoryPrice); 
        }


        /* iPhone 6s Plus*/
        /* 16gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '16GB') {
            finalMemoryPrice = 4341; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '16GB') {
            finalMemoryPrice = 4723; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '16GB') {
            finalMemoryPrice = 5132; 
            $('#final-price').html(finalMemoryPrice); 
        }/* 32gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '32GB') {
            finalMemoryPrice = 4723; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '32GB') {
            finalMemoryPrice = 5132; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '32GB') {
            finalMemoryPrice = 5515; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 5515; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 5924; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 6306; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalMemoryPrice = 6497; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalMemoryPrice = 6907; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalMemoryPrice = 7289; 
            $('#final-price').html(finalMemoryPrice); 
        }

         /* iPhone 7 */
        /* 32gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '32GB') {
            finalMemoryPrice = 5105; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '32GB') {
            finalMemoryPrice = 5924; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '32GB') {
            finalMemoryPrice = 6306; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '128GB') {
            finalMemoryPrice = 6033; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '128GB') {
            finalMemoryPrice = 6907; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '128GB') {
            finalMemoryPrice = 7289; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '256GB') {
            finalMemoryPrice = 7098; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '256GB') {
            finalMemoryPrice = 6279; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '256GB') {
            finalMemoryPrice = 7508; 
            $('#final-price').html(finalMemoryPrice); 
        }



        /* iPhone 7 Plus*/
        /* 32gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '32GB') {
            finalMemoryPrice = 6962; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '32GB') {
            finalMemoryPrice = 7890; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '32GB') {
            finalMemoryPrice = 8272; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalMemoryPrice = 8135; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalMemoryPrice = 9473; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalMemoryPrice = 9855; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '256GB') {
            finalMemoryPrice = 8354; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '256GB') {
            finalMemoryPrice = 9855; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '256GB') {
            finalMemoryPrice = 10265; 
            $('#final-price').html(finalMemoryPrice); 
        }



        /* iPhone 8*/
        /* 64gb */
        if (gadgetModel == 'iphone-8' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 9064; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 10265; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 10647; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-8' && statusLevel == 1 && memorySize == '256GB') {
            finalMemoryPrice = 9282; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 2 && memorySize == '256GB') {
            finalMemoryPrice = 10456; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 3 && memorySize == '256GB') {
            finalMemoryPrice = 11848; 
            $('#final-price').html(finalMemoryPrice); 
        }


         /* iPhone 8 Plus*/
        /* 64gb */
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 10210; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 10920; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 11848; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 1 && memorySize == '256GB') {
            finalMemoryPrice = 11384; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 2 && memorySize == '256GB') {
            finalMemoryPrice = 12067; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 3 && memorySize == '256GB') {
            finalMemoryPrice = 13213; 
            $('#final-price').html(finalMemoryPrice); 
        }


        /* iPhone SE*/
        /* 16gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '16GB') {
            finalMemoryPrice = 1638; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '16GB') {
            finalMemoryPrice = 2102; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '16GB') {
            finalMemoryPrice = 2566; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 32gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '32GB') {
            finalMemoryPrice = 2102; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '32GB') {
            finalMemoryPrice = 2566; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '32GB') {
            finalMemoryPrice = 3030; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 2321; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 2785; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 3249; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '128GB') {
            finalMemoryPrice = 2785; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '128GB') {
            finalMemoryPrice = 3030; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '128GB') {
            finalMemoryPrice = 3494; 
            $('#final-price').html(finalMemoryPrice); 
        }


        /* iPhone X*/
        /* 64gb */
        if (gadgetModel == 'iphone-x' && statusLevel == 1 && memorySize == '64GB') {
            finalMemoryPrice = 14169; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 2 && memorySize == '64GB') {
            finalMemoryPrice = 14851; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 3 && memorySize == '64GB') {
            finalMemoryPrice = 15971; 
            $('#final-price').html(finalMemoryPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-x' && statusLevel == 1 && memorySize == '256GB') {
            finalMemoryPrice = 15097; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 2 && memorySize == '256GB') {
            finalMemoryPrice = 16244; 
            $('#final-price').html(finalMemoryPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 3 && memorySize == '256GB') {
            finalMemoryPrice = 17363; 
            $('#final-price').html(finalMemoryPrice); 
        }
    });





    /* ***************Status controlls*************** */
    $('.status-list li').click(function(){
        $('.status-list li').css('border-color', '#eee');
        $(this).css('border-color', '#212121');
        $('.status-list li').removeClass();
        $(this).addClass('active');

        /* Logic */
        finalStatusPrice = 0;
        statusLevel = $(this).text();

        /* iPhone 5 */
        if (gadgetModel == 'iphone-5' && statusLevel == 1 && memorySize != 0) {
            finalStatusPrice = 382; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-5' && statusLevel == 2 && memorySize != 0) {
            finalStatusPrice = 601; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-5' && statusLevel == 3 && memorySize != 0) {
            finalStatusPrice = 792; 
            $('#final-price').html(finalStatusPrice); 
        }

        /* iPhone 5c */
        if (gadgetModel == 'iphone-5c' && statusLevel == 1 && memorySize != 0) {
            finalStatusPrice = 382; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-5c' && statusLevel == 2 && memorySize != 0) {
            finalStatusPrice = 601; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-5c' && statusLevel == 3 && memorySize != 0) {
            finalStatusPrice = 792; 
            $('#final-price').html(finalStatusPrice); 
        }

        /* iPhone 5s */
        if (gadgetModel == 'iphone-5s' && statusLevel == 1 && memorySize != 0) {
            finalStatusPrice = 382; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-5s' && statusLevel == 2 && memorySize != 0) {
            finalStatusPrice = 683; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-5s' && statusLevel == 3 && memorySize != 0) {
            finalStatusPrice = 983; 
            $('#final-price').html(finalStatusPrice); 
        }

        /* iPhone 6*/
        /* 16gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '16GB') {
            finalStatusPrice  = 1966; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '16GB') {
            finalStatusPrice = 2266; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '16GB') {
            finalStatusPrice = 2566; 
            $('#final-price').html(finalStatusPrice); 
        }/* 32gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '32GB') {
            finalStatusPrice = 2157; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '32GB') {
            finalStatusPrice = 2375; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '32GB') {
            finalStatusPrice = 2757; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 64gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 2757; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 3058; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 3358; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 128gb */
        if (gadgetModel == '6' && statusLevel == 1 && memorySize == '128GB') {
            finalStatusPrice = 2675; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 2 && memorySize == '128GB') {
            finalStatusPrice = 3249; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == '6' && statusLevel == 3 && memorySize == '128GB') {
            finalStatusPrice = 3549; 
            $('#final-price').html(finalStatusPrice); 
        }


        /* iPhone 6 Plus*/
        /* 16gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '16GB') {
            finalStatusPrice = 2157; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '16GB') {
            finalStatusPrice = 2375; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '16GB') {
            finalStatusPrice = 2757; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 2566; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 3167; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 3549; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalStatusPrice = 3358; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalStatusPrice = 3959; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalStatusPrice = 4341; 
            $('#final-price').html(finalStatusPrice); 
        }



        /* iPhone 6s */
        /* 16gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '16GB') {
            finalStatusPrice = 2757; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '16GB') {
            finalStatusPrice = 3167; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '16GB') {
            finalStatusPrice = 3549; 
            $('#final-price').html(finalStatusPrice); 
        }/* 32gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '32GB') {
            finalStatusPrice = 3167; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '32GB') {
            finalStatusPrice = 3549; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '32GB') {
            finalStatusPrice = 3959; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 3167; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 3849; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 4232; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6s' && statusLevel == 1 && memorySize == '128GB') {
            finalStatusPrice = 3740; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 2 && memorySize == '128GB') {
            finalStatusPrice = 4232; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s' && statusLevel == 3 && memorySize == '128GB') {
            finalStatusPrice = 4641; 
            $('#final-price').html(finalStatusPrice); 
        }



        /* iPhone 6s Plus*/
        /* 16gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '16GB') {
            finalStatusPrice = 4341; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '16GB') {
            finalStatusPrice = 4723; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '16GB') {
            finalStatusPrice = 5132; 
            $('#final-price').html(finalStatusPrice); 
        }/* 32gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '32GB') {
            finalStatusPrice = 4723; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '32GB') {
            finalStatusPrice = 5132; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '32GB') {
            finalStatusPrice = 5515; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 5515; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 5924; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 6306; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalStatusPrice = 6497; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalStatusPrice = 6907; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-6s-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalStatusPrice = 7289; 
            $('#final-price').html(finalStatusPrice); 
        }



        /* iPhone 7 */
        /* 32gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '32GB') {
            finalStatusPrice = 5105; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '32GB') {
            finalStatusPrice = 5924; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '32GB') {
            finalStatusPrice = 6306; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '128GB') {
            finalStatusPrice = 6033; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '128GB') {
            finalStatusPrice = 6907; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '128GB') {
            finalStatusPrice = 7289; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-7' && statusLevel == 1 && memorySize == '256GB') {
            finalStatusPrice = 7098; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 2 && memorySize == '256GB') {
            finalStatusPrice = 6279; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7' && statusLevel == 3 && memorySize == '256GB') {
            finalStatusPrice = 7508; 
            $('#final-price').html(finalStatusPrice); 
        }


         /* iPhone 7 Plus*/
        /* 32gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '32GB') {
            finalStatusPrice = 6962; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '32GB') {
            finalStatusPrice = 7890; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '32GB') {
            finalStatusPrice = 8272; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 128gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '128GB') {
            finalStatusPrice = 8135; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '128GB') {
            finalStatusPrice = 9473; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '128GB') {
            finalStatusPrice = 9855; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 1 && memorySize == '256GB') {
            finalStatusPrice = 8354; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 2 && memorySize == '256GB') {
            finalStatusPrice = 9855; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-7-plus' && statusLevel == 3 && memorySize == '256GB') {
            finalStatusPrice = 10265; 
            $('#final-price').html(finalStatusPrice); 
        }


        /* iPhone 8*/
        /* 64gb */
        if (gadgetModel == 'iphone-8' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 9064; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 10265; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 10647; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-8' && statusLevel == 1 && memorySize == '256GB') {
            finalStatusPrice = 9282; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 2 && memorySize == '256GB') {
            finalStatusPrice = 10456; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8' && statusLevel == 3 && memorySize == '256GB') {
            finalStatusPrice = 11848; 
            $('#final-price').html(finalStatusPrice); 
        }


         /* iPhone 8 Plus*/
        /* 64gb */
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 10210; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 10920; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 11848; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 1 && memorySize == '256GB') {
            finalStatusPrice = 11384; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 2 && memorySize == '256GB') {
            finalStatusPrice = 12067; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-8-plus' && statusLevel == 3 && memorySize == '256GB') {
            finalStatusPrice = 13213; 
            $('#final-price').html(finalStatusPrice); 
        }


        /* iPhone SE*/
        /* 16gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '16GB') {
            finalStatusPrice = 1638; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '16GB') {
            finalStatusPrice = 2102; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '16GB') {
            finalStatusPrice = 2566; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 32gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '32GB') {
            finalStatusPrice = 2102; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '32GB') {
            finalStatusPrice = 2566; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '32GB') {
            finalStatusPrice = 3030; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 64gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 2321; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 2785; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 3249; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-se' && statusLevel == 1 && memorySize == '128GB') {
            finalStatusPrice = 2785; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 2 && memorySize == '128GB') {
            finalStatusPrice = 3030; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-se' && statusLevel == 3 && memorySize == '128GB') {
            finalStatusPrice = 3494; 
            $('#final-price').html(finalStatusPrice); 
        }

        /* iPhone X*/
        /* 64gb */
        if (gadgetModel == 'iphone-x' && statusLevel == 1 && memorySize == '64GB') {
            finalStatusPrice = 14169; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 2 && memorySize == '64GB') {
            finalStatusPrice = 14851; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 3 && memorySize == '64GB') {
            finalStatusPrice = 15971; 
            $('#final-price').html(finalStatusPrice); 
        }
        /* 256gb */
        if (gadgetModel == 'iphone-x' && statusLevel == 1 && memorySize == '256GB') {
            finalStatusPrice = 15097; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 2 && memorySize == '256GB') {
            finalStatusPrice = 16244; 
            $('#final-price').html(finalStatusPrice);
        }
        if (gadgetModel == 'iphone-x' && statusLevel == 3 && memorySize == '256GB') {
            finalStatusPrice = 17363; 
            $('#final-price').html(finalStatusPrice); 
        }
    });
});