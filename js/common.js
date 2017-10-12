// Step Wizard hero banner scripts
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
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


});

function openSignupModal() {
    removeGlobalMessage("signupMessage");
    removeFieldMessage("signupEmail");
    removeFieldMessage("signupPassword");
    $("#fo_signup").trigger('reset');
    $("#signup-modal").modal('show');
}

function signup() {
    removeGlobalMessage("signupMessage");
    if (!validateSignup()) return false;

    var fo = document.fo_signup;
    var email = fo.email.value;
    var password = fo.password.value;
    var language = window.location.href.match(/ja/) ? 'JA' : 'EN';
    $.post('/api/signup/', {
        email: email,
        password: password,
        language: language
    }, function (data) {
        if (data.status == 'fail') {
            addGlobalMessage("signupMessage", data.message);
            return false;
        }
        if (data.status == 'ok') window.location.href = '/my/widget/create';
    }, 'json');

    return false;
}

function validateSignup() {
    if (!validateTextField("signupEmail", "email")) return false;
    if (!validateTextField("signupPassword", "text")) return false;

    return true;
}

function openLoginModal() {
    removeGlobalMessage("loginMessage");
    removeFieldMessage("loginEmail");
    removeFieldMessage("loginPassword");
    $("#fo_login").trigger('reset');
    $("#signin-modal").modal('show');
}

function login() {
    removeGlobalMessage("loginMessage");
    if (!validateLogin()) return false;

    var fo = document.fo_login;
    var email = fo.email.value;
    var password = fo.password.value;
    $.post('/api/login/', {
        email: email,
        password: password
    }, function (data) {
        if (data.status == 'ok') {
            window.location.href = window.location.href;
        } else {
            addGlobalMessage("loginMessage", data.message);
            return false;
        }
    }, 'json');

    return false;
}

function validateLogin() {
    if (!validateTextField("loginEmail", "email")) return false;
    if (!validateTextField("loginPassword", "text")) return false;

    return true;
}

function login_facebook() {
    window.open('/api/login/facebook/', '_blank', 'width=780,height=410,toolbar=no,menubar=no,scrollbars=no,location=no,resizable=yes');
}

function login_google() {
    window.open('/api/login/google/', '_blank', 'width=780,height=410,toolbar=no,menubar=no,scrollbars=no,location=no,resizable=yes');
}

function logout() {
    $.get('/api/logout/', {}, function (data) {
        if (data.status == 'ok')
            window.location.href = '/';
        else
            alert(data.message);
    }, 'json');
}

function openForgotpasswordModal() {
    removeGlobalMessage("forgetMessage");
    removeFieldMessage("forgotEmail");

    $("#forgotPasswordInput").show();
    $(passwordPasswordSuccessNote).text('');
    $("#forgotPasswordMessage").hide();
    $("#fo_forgotpassword").trigger('reset');
    $("#forgotpass-modal").modal('show');
}

function forgotpassword() {
    removeGlobalMessage("forgetMessage");
    if (!validateForgotPassword()) return false;

    var fo = document.fo_forgotpassword;
    var email = fo.email.value;
    $.post('/api/forgotpassword/', {
        email: email
    }, function (data) {
        if (data.status == 'ok') {
            fo.email.value = '';
            $(passwordPasswordSuccessNote).text(data.message);
            $("#forgotPasswordInput").hide();
            $("#forgotPasswordMessage").show();
        } else {
            addGlobalMessage("forgetMessage", data.message);
            return false;
        }
    }, 'json');

    return false;
}

function validateForgotPassword() {
    if (!validateTextField("forgotEmail", "email")) return false;

    return true;
}

/**
 * 
 * 
 * @param field the field will be validate.
 * @param type	the type of the field, optional and required only for specific type of validations e.g email, text, date
 * @param rMessage	required message that will show if no value there.
 * @param vMessage	validation message will show if validation failed. 
 * @returns
 */
function validateTextField(field, type) {
    if (field) removeFieldMessage(field);

    var value = $("#" + field).val();
    if (!value) {
        addFieldMessage(field, $("#" + field).attr("data-required-message"));
        return false;
    }
    if (type) {
        if (type == 'email') {
            var EMAILREGEX = /^[_A-Za-z0-9-'\+]+(\.[_A-Za-z0-9-']+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
            if (!EMAILREGEX.test(value)) {
                addFieldMessage(field, $("#" + field).attr("data-validation-message"));
                return false;
            }
        }
    }

    return true;
}

/**
 * This function need to call when field and message error need to clear.
 */
function removeFieldMessage(field) {
    var self = ($("[id=" + field + "]").length) ? $("[id=" + field + "]") : $("[name=" + field + "]");

    if (!self.length) return false;

    var selfMessage = $("[message-for=" + field + "]");
    if (selfMessage.length) {
        $(selfMessage).text('');
        $(selfMessage).removeClass("error-message");
    }

    $(self).removeClass("error-input");
    return true;
};

/**
 * This function need to call when field and message need error need to set and highlight.
 */
function addFieldMessage(field, message) {
    if (!field) return false;

    var self = ($("[id=" + field + "]").length) ? $("[id=" + field + "]") : $("[name=" + field + "]");
    if (!self.length) return false;

    var selfMessage = $("[message-for=" + field + "]");
    if (selfMessage.length) {
        $(selfMessage).text('' + message);
        $(selfMessage).addClass("error-message");
    }

    if (self.length) $(self).addClass("error-input");
    return true;
}

/**
 * This function need to call when only field and message error need to set.
 */
function addGlobalMessage(field, message) {
    if (!field) return false;

    var self = ($("[id=" + field + "]").length) ? $("[id=" + field + "]") : $("[name=" + field + "]");
    if (!self.length) return false;

    $(self).text('' + message);
    $(self).addClass("error-message");
}

/**
 * This function need to call when message need to clear only.
 */
function removeGlobalMessage(field) {
    if (!field) return false;

    var self = ($("[id=" + field + "]").length) ? $("[id=" + field + "]") : $("[name=" + field + "]");
    if (!self.length) return false;

    $(self).text('');
    $(self).removeClass("error-message");
}

$(function () {
    $(window).resize(function () {
        if ($(window).width() > 769) {
            $('#nav-icon + ul').show();
        } else {
            $('#nav-icon + ul').hide();
            $('header nav').removeClass('active');
            $('#nav-icon').removeClass('open');
        }

        /*if ($(window).width() > 480) {
        	$('.widgetToggle').show();
        	$('.builderWidgetSwitcher a:last-child').removeClass('active');
        	$('.builderWidgetSwitcher a:first-child').addClass('active');
        	$('.builderToggle').show();
        } else {
        	$('.widgetToggle').hide();
        }*/
    });




    // FEEDWIND BUILDER PAGE SCRIPTS
    /*
    $('#scrollBar').click(function() {
    	if ($('input#scrollBar').is(':checked')) {
    		$('#scrollBar').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#scrollBar').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });
    $('#autoscroll').click(function() {
    	if ($('input#autoscroll').is(':checked')) {
    		$('#autoscroll').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#autoscroll').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });
    $('#border').click(function() {
    	if ($('input#border').is(':checked')) {
    		$('#border').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#border').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });
    $('#responsive').click(function() {
    	if ($('input#responsive').is(':checked')) {
    		$('#responsive').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#responsive').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });
    $('#feedTitle').click(function() {
    	if ($('input#feedTitle').is(':checked')) {
    		$('#feedTitle').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    		$(this).parent().parent().parent().parent().find(".toggleOnOff").show();
    	} else {
    		$('#feedTitle').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    		$(this).parent().parent().parent().parent().find(".toggleOnOff").hide();
    	}
    });
    $('#DisplayLinkOriginalContent').click(function() {
    	if ($('input#DisplayLinkOriginalContent').is(':checked')) {
    		$('#DisplayLinkOriginalContent').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#DisplayLinkOriginalContent').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });
    $('#feedContentSortOrder').click(function() {
    	if ($('input#feedContentSortOrder').is(':checked')) {
    		$('#feedContentSortOrder').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    		$(this).parent().parent().parent().parent().find(".widgetButtons").show();
    	} else {
    		$('#feedContentSortOrder').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    		$(this).parent().parent().parent().parent().find(".widgetButtons").hide();
    	}
    });
    $('#feedContentSeparationLine').click(function() {
    	if ($('input#feedContentSeparationLine').is(':checked')) {
    		$('#feedContentSeparationLine').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    		$(this).parent().parent().parent().parent().find(".widgetButtons").show();
    	} else {
    		$('#feedContentSeparationLine').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    		$(this).parent().parent().parent().parent().find(".widgetButtons").hide();
    	}
    });
    $('#feedContentTimeDate').click(function() {
    	if ($('input#feedContentTimeDate').is(':checked')) {
    		$('#feedContentTimeDate').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    		$(this).parent().parent().parent().parent().find(".TimeZoneHideToggle").show();
    	} else {
    		$('#feedContentTimeDate').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    		$(this).parent().parent().parent().parent().find(".TimeZoneHideToggle").hide();
    	}
    });
    $('#feedContentTimezone').click(function() {
    	if ($('input#feedContentTimezone').is(':checked')) {
    		$('#feedContentTimezone').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    		$(this).parent().parent().parent().parent().find(".timeZone").show();
    	} else {
    		$('#feedContentTimezone').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    		$(this).parent().parent().parent().parent().find(".timeZone").hide();
    	}
    });
    $('#feedContTimezoneAbbr').click(function() {
    	if ($('input#feedContTimezoneAbbr').is(':checked')) {
    		$('#feedContTimezoneAbbr').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#feedContTimezoneAbbr').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });
    $('#feedContPodcastYoutube').click(function() {
    	if ($('input#feedContPodcastYoutube').is(':checked')) {
    		$('#feedContPodcastYoutube').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    		$(this).parent().parent().parent().parent().find(".widgetButtons").show();
    	} else {
    		$('#feedContPodcastYoutube').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    		$(this).parent().parent().parent().parent().find(".widgetButtons").hide();
    	}
    });
    $('#feedContPodcastLink').click(function() {
    	if ($('input#feedContPodcastLink').is(':checked')) {
    		$('#feedContPodcastLink').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#feedContPodcastLink').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });
    $('#podcastLink').click(function() {
    	if ($('input#podcastLink').is(':checked')) {
    		$('#podcastLink').prev().html('<span>On</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
    	} else {
    		$('#podcastLink').prev().html('<span>Off</span>');
    		$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
    	}
    });

    $("#genAdvancedSetting").hide();
    $("#feedTitleAdvancedSet").hide();
    $("#feedContentAdvancedSetting").hide();

    $('.advancedSetting').click(function() {
    	$(this).parent().next().slideToggle(function() {
    		if ($(this).css('display') == 'none') {
    			$($(this)).prev().find("span").removeClass('fa-chevron-up');
    			$($(this)).prev().find("span").addClass('fa-chevron-down');
    		} else {
    			$($(this)).prev().find("span").removeClass('fa-chevron-down');
    			$($(this)).prev().find("span").addClass('fa-chevron-up');
    		}
    	});
    });

    // COLORPICKER SCRIPTS
    $('.backgroundColorPicker').colorpicker().on('changeColor.colorpicker', function(event) {
    	$(this).find('.colorDots').css("background-color", event.color.toHex());
    });
    $('.FontColor').colorpicker().on('changeColor.colorpicker', function(event) {
    	$(this).find('.colorDots').css("background-color", event.color.toHex());
    });
    $('.FeedTitleFontCol').colorpicker().on('changeColor.colorpicker', function(event) {
    	$(this).find('.colorDots').css("background-color", event.color.toHex());
    });
    $('.FeedContentFontCol').colorpicker().on('changeColor.colorpicker', function(event) {
    	$(this).find('.colorDots').css("background-color", event.color.toHex());
    });
    $('.FeedBackgroundCol').colorpicker().on('changeColor.colorpicker', function(event) {
    	$(this).find('.colorDots').css("background-color", event.color.toHex());
    });
    $('.firstDot').colorpicker();
    $('.secondDot').colorpicker();
    $('.thirdDot').colorpicker();
    $('.fourthDot').colorpicker();
    $('.fiveDot').colorpicker();

    // BUILDER & WIDGET Switcher
    $('.builderWidgetSwitcher a:first-child').click(function() {
    	$('.widgetToggle').fadeOut();
    	$('.builderToggle').fadeIn();
    	$('.builderWidgetSwitcher a:first-child').addClass('active');
    	$('.builderWidgetSwitcher a:last-child').removeClass('active');
    })
    $('.builderWidgetSwitcher a:last-child').click(function() {
    	$('.builderToggle').fadeOut();
    	$('.widgetToggle').fadeIn();
    	$('.builderWidgetSwitcher a:first-child').removeClass('active');
    	$('.builderWidgetSwitcher a:last-child').addClass('active');
    })
    */




});

/*
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 400) {
       	   $('.onScrollSignup').show();
    } else {
        $('.onScrollSignup').hide();
    }

});*/

$('document').ready(function () {

    $('.fw-non-logged-sub-sec .onScrollSignup,.fw-non-logged-sub-sec .fw-sub-sec-logo').hide();
    // Popover help tooltips [?] script
    $('.popover-help[data-toggle="popover"]').popover({
        placement: get_popover_placement,
        html: true
    });

    function get_popover_placement(pop, dom_el) {
        var width = window.innerWidth;
        if (width < 500) return 'bottom';
        var left_pos = $(dom_el).offset().left;
        if (width - left_pos > 400) return 'right';
        return 'right';
    }
    $(document).on("click", ".popover .fa-times-circle", function () {
        $(this).parents(".popover").popover('hide');
    });
    // Popover for plan page free tial text
    $('.fw-popover-plan').popover({
        placement: 'top',
        html: true
    });

    //When we click outside the Popover and close the Popover popup
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
    $('body').on('touchend', function (e) {
        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    // Scroll to fixed and stop For Save and Get Code Section
    $('.fw-logged-div').scrollToFixed({
        marginTop: 0,
        limit: function () {
            //return $('.stop-here').offset().top  - $('.fw-logged-div').outerHeight() - 450;
        },
        zIndex: 9999,
        removeOffsets: true,
        fixed: function () {
            $('.fw-non-logged-sub-sec .onScrollSignup,.fw-non-logged-sub-sec .fw-sub-sec-logo').show(); //.show();
        },
        postFixed: function () {
            $('.fw-non-logged-sub-sec .onScrollSignup,.fw-non-logged-sub-sec .fw-sub-sec-logo').hide();
        }

    });
    // Scroll to fixed and stop For Widget
    $('#scrollToFixed').scrollToFixed({
        marginTop: 70,
        limit: function () {
            return $('.stop-here').offset().top - $('#scrollToFixed').outerHeight() - 20;
        },
        zIndex: 9999,
        removeOffsets: true

    });

    $('.fw-try-iframe-code').click(function () {

            if ($('.fw-iframe-copy-code').is(':visible')) {
                $(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
                $(".fw-iframe-copy-code").slideUp(300);
                $('#code-copied').removeClass('defaultBtn').addClass('greenBtn');

            } else {
                $(".fw-iframe-copy-code").slideDown(300);

                $(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
                $('#code-copied').removeClass('greenBtn').addClass('defaultBtn');
            }

        })
        // Make unselected radio buttons look like disable 
    checkRestRadioBtn();

    function checkRestRadioBtn() {
        $('.widgetBuilder label input[type=radio]').each(function () {
            if ($(this).is(':checked')) {
                $(this).parent('label').css('color', '#6e7479');
            } else {
                $(this).parent('label').css('color', '#ccc');
            }
        });

    }

    $('.widgetBuilder label input[type=radio]').on('change', function () {


        if ($(this).is(':checked')) {
            $(this).parent('label').css('color', '#6e7479');
            checkRestRadioBtn();
        } else {
            $(this).parent('label').css('color', '#ccc');
        }
    });
    // Make unselected radio buttons look like disable Ends here

    $('.gridbox-content').mouseover(
        function () {
            var src = $(this).children(this).children(this)
                .children(this).attr("src").match(
                    /[^\.]+/) + ".gif";
            $(this).children(this).children(this).children(
                this).attr("src", src);
        })
    $('.gridbox-content').mouseout(
        function () {
            var src = $(this).children(this).children(this)
                .children(this).attr("src").replace(
                    ".gif", ".jpg");
            $(this).children(this).children(this).children(
                this).attr("src", src);
        });

    /* Copy Code to Clipboard Init Variable */
    new Clipboard('#code-copied');
    new Clipboard('#iframe-code-copied');
    footerFnc();


});
// Jquery Documents ENDS HERE

/* Footer Fixed to Bottom */
function footerFnc() {
    setTimeout(function () {
        if ($(document).height() > $(window).height()) {
            // scrollbar
            $('footer.singleLineFooter').css("position", "relative");

        } else {
            $('footer.singleLineFooter').css({
                "position": "fixed"
            });

        }
        //console.log('scrollDetect');
        scrollDetect();
    }, 2000);

}

function scrollDetect() {
    if ($(document).height() < $(window).height()) {

    } else {
        resizeGrayBg();
    }
}

function resizeGrayBg() {
    if ($(window).width() > 750) {
        if ($('body').height() < $(window).height()) {
            var windowHeight = $(document).height();
            var subSecHeight = $('.subSecHeight').height();
            var topNavBarHeight = $('.navbar.navbar-default').height();
            var footerHeight = $('footer').height() + 40;
            var totalHeight = subSecHeight + topNavBarHeight + footerHeight + 20;
            var resultHeight = windowHeight - totalHeight;
            //console.log(windowHeight);

            $('.resizeGrayBg').css('height', resultHeight + 8 + 'px');
        } else {
            $('.resizeGrayBg').css('height', 'auto');
        }
    }


    checkingScrollBar();
}

/* Zopim Chat Changing Position when touching footer */
function checkOffset() {
    if (($('.zopim').length > 0 && $('.singleLineFooter').length > 0) && ($('.zopim').offset().top + $('.zopim').height() >= $('.singleLineFooter').offset().top - 10)) {
        $('.zopim').css('bottom', '61px');
    }

    if ($('.singleLineFooter').length > 0 && $(document).scrollTop() + window.innerHeight < $('.singleLineFooter').offset().top) {
        $('.zopim').css('bottom', '0'); // restore when you scroll up
    }
}

function checkingScrollBar() {

    // Check if body height is higher than window height :)
    if ($("body").height() > $(window).height()) {
        $('.zopim').css('bottom', '0px');
        //console.log('scroll');
    } else {
        $('.zopim').css('bottom', '61px');
        //console.log('no scroll');
    }
}

$(window).resize(function () {
    if ($(window).width() > 768) {
        $('.fw-non-logged-sub-sec .onScrollSignup,.fw-non-logged-sub-sec .fw-sub-sec-logo').hide();
    }
});
$(document).scroll(function () {
    checkOffset();

});
