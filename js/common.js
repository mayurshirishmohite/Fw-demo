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
