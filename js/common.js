// Step Wizard hero banner scripts
$(document).ready(function () {

    $('.fw-hero-banner-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        startPosition: 0,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 750,
        //animateOut: 'slideInRight',
        // animateIn: 'slideInRight',
        navText: ["<img src='images/fw-chevron-prev.png' />", "<img src='images/fw-chevron-next.png' />"],
        onTranslated: steps,
    });

    function steps(event) {
        if ($('.owl-item.active .item').length) {
            var steps = $('.owl-item.active .item').attr('id').match(/\d+$/);
            //console.log(parseInt(steps));
            $('.fw-steps').html(steps);
        }
    }
    $('.cascade-slider_nav li').click(function (e) {
        e.preventDefault();
    })

    $('#feature-slider').cascadeSlider({});

    // Manually added on thumbnail click to rotate
    $('.cascade-slider_slides .cascade-slider_item').click(function () {
        var cascadeSlideNav = $(this).attr('data-nav');
        //console.log(cascadeSlideNav);
        $("#" + cascadeSlideNav).click();
    });


});
