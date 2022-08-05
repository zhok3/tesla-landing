$(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('.header-btn').on('click', function() {
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function() {
        $('.menu').removeClass('active');
    });

});