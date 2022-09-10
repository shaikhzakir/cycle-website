
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

$('.review-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });


(function ($) {
    'use strict';

    // Preloader js    
    // $(window).on('load', function () {
    //     $('.preloader').fadeOut(700);
    // });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        arrows: true,
        fade: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow slick-prev\'><i class=\'fas fa-chevron-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow slick-next\'><i class=\'fas fa-chevron-right\'></i></button>',
        dots: false
    });
    $('.hero-slider').slickAnimation();


})(jQuery);
