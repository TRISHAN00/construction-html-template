(function ($) {
    "use strict";

    // meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });



    $('.info-bar').on('click',function(){
        $('.extra-info').addClass('info-open');
    })

    $('.close-icon').on('click',function(){
        $('.extra-info').removeClass('info-open');
    })


    // slider - active
    $('.slider-active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // blog - active
    $('.blog-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });   

    // testimonial-active
    $('.testimonial-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });   

    // testimonial-active
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });   



    $('.testimonia-item-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-nav'
    });
    $('.testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonia-item-active',
        dots: false,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0
    });




    // portfolio active
    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })

    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
    });

    //for portfolio menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });



    // magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // niceSelect
    $('select').niceSelect();



})(jQuery);	    