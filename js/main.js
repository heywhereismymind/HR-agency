$(document).ready(function () {
    $('.your-class').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });
});

/* --------------*/

$(function () {
    $('.slider').slick({
        variableWidth: true,
        slidesToShow: 1,
        nextArrow: document.querySelector('.right_arrow'),
        prevArrow: document.querySelector('.left_arrow'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });
});


/* SLider */

$(function () {
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        nextArrow: document.querySelector('.slider_right'),
        prevArrow: document.querySelector('.slider_left'),
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});

$(function () {
    $('.slider-nav')
        .on('init', function (event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            focusOnSelect: false,
            infinite: false,
            variableWidth: true,
        });
});

$(function () {
    $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    })
})

$(function () {
    $('.slider-nav').on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    })
})

/* -------------Read more------------------*/

$(function () {
    $(".feedback").elimore({
        maxLength: 619,
        moreText: "Читать полностью",
        lessText: "Свернуть текст"
    });
});

/*-------------------------------------*/

$(document).ready(function () {
    $('.feedback_slider').slick({
        nextArrow: document.querySelector('.fb_right'),
        prevArrow: document.querySelector('.fb_left'),
    });
});

/* Mneu */
$(function () {
    // mobile menu
    $("#show_menu_ist").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $("#mobile-menu").html($(".header-menu").html());
        $("#mobile-menu-wrapper").toggle();
    });
});
