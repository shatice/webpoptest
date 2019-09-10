$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        autoplay: true,
        margin: 50,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
    });
});

$('.user-log-icon').click(function() {
    $('.user-log').toggleClass('is-clicked'); 
});