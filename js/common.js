// Step Wizard hero banner scripts

$(document).ready(function () {
//Plans switcher
$(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
          $('.fw-plans-switcher').addClass('switch-plans-fixed');
      } else {
          $('.fw-plans-switcher').removeClass('switch-plans-fixed');
      }
  });
$('#fw-monthly').hide();
$('.fw-plans-switcher a').click(function(){
	var switch_btn_class = $('.fw-plans-switcher a');
	if($(switch_btn_class).hasClass('default-active')){
		$(switch_btn_class).removeClass('default-active');
		$(this).addClass('click-active');
	}else{
		$(switch_btn_class).siblings().removeClass('click-active');
		$(this).addClass('click-active');
	}
	// Swicth plans
	var select_plan = $(this).attr('value');
	if(select_plan == 'year'){
		$('#fw-monthly').hide();
		$('#fw-yearly').show();
	}else{
		$('#fw-yearly').hide();
		$('#fw-monthly').show();
	}	
});

});
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

    // Testimonial carousel 
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 150,
        autoHeight: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    function steps(event) {
        if ($('.owl-item.active .item').length) {
            var steps = $('.owl-item.active .item').attr('id').match(/\d+$/);
            //console.log(parseInt(steps));
            $('.fw-steps').html(steps);
        }
    }


    // FEATURE SLIDER CUSTOM SCRIPTS
	//auto slider at 8000ms
	setInterval(function(){
	  $('.cascade-slider_item.next').trigger('click');
	}, 8000);
    var cascadeSlideNav = "";
    $('.cascade-slider_nav li').click(function (e) {
        e.preventDefault();
        cascadeSlideNav = $(this).attr('id');
        //  console.log(NavDotClicked);
        selectFeature();
    })

    $('#feature-slider').cascadeSlider({});

    // Manually added on thumbnail click to rotate
    if ($('.cascade-slider_item').hasClass('now')) {
        var defaultSlideName = $('.cascade-slider_item.now').attr('data-nav');
        // RSS FIRST
        if (defaultSlideName == 'rss-slider') {
            $('.fw-feature-items .fw-feature-item.rss-item').addClass('active');
        }
    }
    $('.cascade-slider_slides .cascade-slider_item').click(function () {
        cascadeSlideNav = $(this).attr('data-nav');
        //console.log(cascadeSlideNav);
        $("#" + cascadeSlideNav).click();
        selectFeature();
    });

    function selectFeature() {
        if (cascadeSlideNav == 'rss-slider') {
            $('.fw-feature-items .fw-feature-item.rss-fb-item, .fw-feature-items .fw-feature-item.rss-item').addClass('active').show();
            $('.fw-feature-items .fw-feature-item.fb-item,.fw-feature-items .fw-feature-item.gcal-item').removeClass('active').hide();

        } else if (cascadeSlideNav == 'fb-slider') {
            $('.fw-feature-items .fw-feature-item.rss-fb-item,.fw-feature-items .fw-feature-item.fb-item').addClass('active').show();
            $('.fw-feature-items .fw-feature-item.rss-item,.fw-feature-items .fw-feature-item.gcal-item').removeClass('active').hide();

        } else {
            $('.fw-feature-items .fw-feature-item.gcal-item').addClass('active').show();
            $('.fw-feature-items .fw-feature-item.rss-fb-item,.fw-feature-items .fw-feature-item.fb-item,.fw-feature-items .fw-feature-item.rss-item').removeClass('active').hide();

        }
    }


});