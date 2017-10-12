//JavaScript Document
// New Script for Google Calender UI
$('document').ready(function() {
	
	// Event Title Font color picker
	$('.EventTitleFontCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker',function(event) 
	{
		$(this).find('.colorDots').css("background-color",event.color.toHex());
	});
	
	// Event Where Font color picker
	$('.EventWhereFontCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker',function(event) 
	{
		$(this).find('.colorDots').css("background-color",event.color.toHex());
	});
	
	// Event Description Font color picker
	$('.EventDescriptionFontCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker',function(event) 
	{
		$(this).find('.colorDots').css("background-color",event.color.toHex());
	});
	
	// Event When Font color picker
	$('.EventWhenFontCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker',function(event) 
	{
		$(this).find('.colorDots').css("background-color",event.color.toHex());
	});
	
	// Event Background bg color picker
	$('.EventBackgroundCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker',function(event) 
	{
		$(this).find('.colorDots').css("background-color",event.color.toHex());
	});
	
	// Event Display TIME/DATE
	
	$('#event_timedate').click( function() {
		if ($('input#event_timedate').is(':checked')) {
			$('#event_timedate').prev().html('<span>On</span>');
			$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
		
		} else {
			$('#event_timedate').prev().html('<span>Off</span>');
			$(this).next().find('span.onoffswitch-switch').css('background','#a0a5aa');
		
		}
	});
	
	//Google Calendar Advanced setting for Calendar Event
	$('#calendarEventAdvSettingOptions').hide();
	$('.calendarEventAdvSetting').on('click', function() {
		$("#calendarEventAdvSettingOptions").slideToggle(
			function() {
				if ($(this).css('display') == 'none') {
					$(this).prev().find("span").removeClass('fa-chevron-up');
					$(this).prev().find("span").addClass('fa-chevron-down');					
				} else {
					$(this).prev().find("span").removeClass('fa-chevron-down');
					$(this).prev().find("span").addClass('fa-chevron-up');					
				}
			});
	});
	
	// Scroll to fixed and stop
	$('#scrollToFixed').scrollToFixed({ 
		marginTop: 70,
		limit: function () {
        return $('.stop-here').offset().top - $('#scrollToFixed').outerHeight() - 10;
		},
		zIndex: 9999,
		removeOffsets: true
		
		});
		$('.fw-logged-div').scrollToFixed({ 
		marginTop: 0,
		limit: function () {
        return $('.stop-here').offset().top  - $('.fw-logged-div').outerHeight() - 450;
		},
		zIndex: 9999,
		removeOffsets: true
		
	});
		
	
});
// New Script for Google Calender UI ENDS


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// NOTE - Following Script already available in our systems ///
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
$(function() {

	// Global variables
	var fw_urls = [];
	var fw_initial_params;

	/*** Merged from scripts.js START ***/

	/** *********** Mobile MENU *************** */
	$('#nav-icon').click(function() {
		if ($('#nav-icon + ul').css('display') == 'none') {

			$('#nav-icon').addClass('open');
			$('header nav').addClass('active');
			$('#nav-icon + ul').show();
			$('#nav-icon + ul').animate({
				right : '0px'
			}, 350);

		} else {

			$('#nav-icon').removeClass('open');
			$('header nav').removeClass('active');
			$('#nav-icon + ul').animate({
				right : '-285px'
			}, 350, function() {
				$('#nav-icon + ul').hide();
			});

		}
	});

	$(window).resize(function() {

		if ($(window).width() > 769) {
			// $('#nav-icon').addClass('open');
			$('#nav-icon + ul').show();

		} else {
			$('#nav-icon + ul').hide();
			$('header nav').removeClass('active');
			$('#nav-icon').removeClass('open');
		}
	});

	/*
	 * ------- GIF images Animation on hover for Feature
	 * Page-------
	 */

	$('.gridbox-content').mouseover(
			function() {
				var src = $(this).children(this).children(this)
						.children(this).attr("src").match(
								/[^\.]+/)
						+ ".gif";
				$(this).children(this).children(this).children(
						this).attr("src", src);
			})
	$('.gridbox-content').mouseout(
			function() {
				var src = $(this).children(this).children(this)
						.children(this).attr("src").replace(
								".gif", ".jpg");
				$(this).children(this).children(this).children(
						this).attr("src", src);
			});
					
					
					
	/***************  AUTOSCROLL NORMAL SPEED / CREDIT MOVE SPEED SCRTIPS ***************/
	$('#speedControlBtn').hide();
	$('a.rangeControlSpeed').click(function(e) {
        e.preventDefault();
		
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('#speedControlBtn').slideUp();
		
		$('#speedControlRange').slideDown();
    });
	$('a.btnControlSpeed').click(function(e) {
        e.preventDefault();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('#speedControlRange').slideUp();
		
		$('#speedControlBtn').slideDown();
		
		if ($('input#auto_scroll').is(':checked') && $('a.btnControlSpeed').hasClass('active') && $('input#navigationArrow').is(':checked')) {
			$('#navigationArrow').click();
		}
    });

	/*** STYLE ***/
	$('a.styleText').click(function(e) {
		$('#thumbnailOption').slideUp();
	});
	$('a.styleThumbnail').click(function(e) {
		$('#thumbnailOption').slideDown();
	});
	$('a.styleHTML').click(function(e) {
		$('#thumbnailOption').slideUp();
	});

	/** *********** Widget Code Modal *************** */
	$(".code-copied-modal").hide();

	$('#code-copied').click(
			function(e) {
				e.preventDefault();
				$(".code-copied-modal").fadeIn(500).delay(2000)
						.fadeOut(300);

			});
$('#iframe-code-copied').click(
			function(e) {
				e.preventDefault();
				$(".code-copied-modal").fadeIn(500).delay(2000)
						.fadeOut(300);

			});
	/* Hide Notifcation by Default */
	$(".data-saved-modal").hide();

	/* Login TOp POPUP */
	$(".loginTopMsg").show().delay(7000).fadeOut(300);

	/*
	 * close modal which start with close class currently use
	 * for top alert box
	 */
	$('.close', '.loginTopMsg').click(function() {

		$(this).parent().fadeOut('slow');

	});

	$("#saveSetting").submit(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop : 0
		}, 'slow');
		$(".data-saved-modal").show().delay(5000).fadeOut(300);

	});
	
	/* Renamed Widget Name Successfully Notification*/
	$(".widget-name-changed").hide();
	$("#renameWidgetSuccess").click(function(e) {
		var widgetNewName = $('input.renameWidgetInput').val();
		e.preventDefault();
		$('html, body').animate({
			scrollTop : 0
		}, 'slow');
		$(".widget-name-changed").show().append(widgetNewName).delay(5000).fadeOut(300);
	});
	
	/*
	 * on cancel button click selected connected account
	 * checkbox value will turn to TRUE
	 */
	$('.cancelBtn')
			.click(
					function(event) {

						var targetAccount = $('#targetAccount')
								.val();

						if ($('input#connecttwitter').prop(
								'checked')) {

						} else {
							if (targetAccount == "Twitter") {
								$('#connecttwitter')
										.parent()
										.next()
										.html(
												'<label>Connected as <span> @kkusaa</span></label>')
								$('input#connecttwitter')
										.next()
										.find(
												'span.onoffswitch-switch')
										.css('background',
												'#368728');
								$("input#connecttwitter").prop(
										"checked", true);
							}
						}

						if ($('input#connectfacebook').prop(
								'checked')) {

							// Do somthing here if checkbox is
							// checked
						} else {
							if (targetAccount == "Facebook") {
								$('#connectfacebook')
										.parent()
										.next()
										.html(
												'<label>Connected as <span> Frantisek Kusovsky</span></label>')
								$('input#connectfacebook')
										.next()
										.find(
												'span.onoffswitch-switch')
										.css('background',
												'#368728');
								$("input#connectfacebook")
										.prop("checked", true);
							}
						}

						if ($('input#connectgoogle').prop(
								'checked')) {

							// Do somthing here if checkbox is
							// checked
						} else {
							if (targetAccount == "Google") {
								$('#connectgoogle')
										.parent()
										.next()
										.html(
												'<label>Connected as <span>Frank@example.com</span></label>')
								$('input#connectgoogle')
										.next()
										.find(
												'span.onoffswitch-switch')
										.css('background',
												'#368728');
								$("input#connectgoogle").prop(
										"checked", true);
							}

						}

					})

	/*
	 * -------Remove Account on click will trigger new modal
	 * with Social Site connection and will close old
	 * modal-------
	 */
	$('#removeAccount').on('click', function() {
		$('.modal-header').show();
		$('#removeConnectedAccount').modal('hide');
		$('#accountDiconnected').modal('show');
	});

	/*
	 * ------------- Social Account Setting for Checkbox will
	 * check whether checkbox is TRUE or False on
	 * Click------------
	 */

	$('#connecttwitter')
			.click(
					function() {
						if ($('input#connecttwitter').is(
								':checked')) {
							$('#connecttwitter')
									.parent()
									.next()
									.html(
											'<label>Connected as <span> @kkusaa</span></label>')
							$(this).next().find(
									'span.onoffswitch-switch')
									.css('background',
											'#368728');
						} else {

							$('#connecttwitter')
									.parent()
									.next()
									.html(
											'<label>Connect</label>');
							$('#removeConnectedAccount').modal(
									'show');
							$(this).next().find(
									'span.onoffswitch-switch')
									.css('background',
											'#a0a5aa');
						}
						$('#targetAccount').val('Twitter');
					});

	$('#connectfacebook')
			.click(
					function() {
						if ($('input#connectfacebook').is(
								':checked')) {
							$('#connectfacebook')
									.parent()
									.next()
									.html(
											'<label>Connected as <span> Frantisek Kusovsky</span></label>')
							$(this).next().find(
									'span.onoffswitch-switch')
									.css('background',
											'#368728');

						} else {
							$('#connectfacebook')
									.parent()
									.next()
									.html(
											'<label>Connect</label>')
							$('#removeConnectedAccount').modal(
									'show');
							$(this).next().find(
									'span.onoffswitch-switch')
									.css('background',
											'#a0a5aa');
						}
						$('#targetAccount').val('Facebook');
					});

	$('#connectgoogle')
			.click(
					function() {
						if ($('input#connectgoogle').is(
								':checked')) {

							$('#connectgoogle')
									.parent()
									.next()
									.html(
											'<label>Connected as <span>Frank@example.com</span></label>')
							$(this).next().find(
									'span.onoffswitch-switch')
									.css('background',
											'#368728');

						} else {
							$('#connectgoogle')
									.parent()
									.next()
									.html(
											'<label>Connect</label>')
							$('#removeConnectedAccount').modal(
									'show');
							$(this).next().find(
									'span.onoffswitch-switch')
									.css('background',
											'#a0a5aa');

						}
						$('#targetAccount').val('Google');
					});

	/***********************************************************
	 * **********************************************************************************
	 * FEEDWIND BUILDER PAGE SCRIPTS
	 * *********************************************************************************
	 **********************************************************/

	$('input[name="feedWidth"]:radio').change(
			function() {
				if ($(this).val() == 'width_by_number') {
					$('#width').prop('disabled', false);
				} else {
					$('#width').prop('disabled', true);
				}
			}
	);

	$('input[name="feedNumbers"]:radio').change(
			function() {
				if ($(this).val() == 'height_by_number') {
					$('#height').prop('disabled', false);
					$('#height_by_article').prop('disabled', true);
				} else {
					$('#height').prop('disabled', true);
					$('#height_by_article').prop('disabled', false);
				}
			}
	);

	disableHeightPX = function() {
		$('.fw-height-px input').prop('checked', false);
		$('.fw-height-px input').prop('disabled', true);
		$('.fw-height-px').find('label').css('color','#ccc');	
	}
	enableHeightPX = function() {
		$('.fw-height-px input').prop('disabled', false);
		$('.fw-height-px').find('label').css('color','#6e7479');	
	}	
	enableNumFeeds = function() {
		$('.fw-number-feeds input').prop('checked', true);
		$('.fw-number-feeds').find('label').css('color','#6e7479');	
		$('#height_by_article').prop('disabled', false);
	}

	$('.scroll-vertical').click(function(e) {
		enableHeightPX();
		$(this).addClass('active');
		  
		$('.navigation-arrow-scope').hide();		
		$('.scrollbar-scope').show();
		$(this).siblings().removeClass('active');
		
		$('.fw-up-down-scope').show();
		$('.fw-left-right-scope').hide();
	});
	
	$('.scroll-horizontal').click(function(e) {
		$(this).addClass('active');
		
		disableHeightPX();
		enableNumFeeds();
		
		$('.navigation-arrow-scope').show();		
		$('.scrollbar-scope').hide();
		$(this).siblings().removeClass('active');
		
		$('.fw-up-down-scope').hide();
		$('.fw-left-right-scope').show();
	});
	
	$('#scroll').click(function() {
		if ($('input#scroll').is(':checked')) {
			$('#scroll').prev().html('<span>On</span>')
			$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
			$(".scroll-content").show();
		} else {
			$('#scroll').prev().html('<span>Off</span>');
			$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
			$(".scroll-content").hide();
		}
	});
	$('#auto_scroll').change(function() {
		if ($('input#auto_scroll').is(':checked')) {
			$('#auto_scroll').prev().html('<span>On</span>')
			$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
			$(".autoScrollContent").show();
		} else {
			$('#auto_scroll').prev().html('<span>Off</span>');
			$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
			$(".autoScrollContent").hide();
			
			// Check if 
			if ($('a.scroll-horizontal').hasClass('active') && !$('input#navigationArrow').is(':checked')) {
				$('#navigationArrow').click();
			}
		}
		
		if ($('input#auto_scroll').is(':checked') && $('a.btnControlSpeed').hasClass('active') && $('input#navigationArrow').is(':checked')) {
			$('#navigationArrow').click();
		}
	});

	$('#item_thumbnail_force_https').click(function() {
		var label = 'Off', color = '#a0a5aa';

		if ($(this).is(':checked')) {
			label = 'On';
			color = '#368728';
		}

		$(this).prev().text(label)
		$(this).next().find('.onoffswitch-switch').css('background', color);
	});

	$('#border').change(
			function() {
				if ($('input#border').is(':checked')) {
					$('#border').prev().html('<span>On</span>')
					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#368728');
				} else {
					$('#border').prev()
							.html('<span>Off</span>')

					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#a0a5aa');
				}
			});

	$('#navigationArrow').click(function(e) {
		if ($('input#auto_scroll').is(':checked') && $('a.btnControlSpeed').hasClass('active') && $('input#navigationArrow').is(':checked')) {
			e.preventDefault();
			$('#navigationArrow').prop( "checked", false );
			return;
		}
		
		// Navigation Arrow or auto Scroll at least one options should be open...	
		if (!$('input#auto_scroll').is(':checked') && !$('input#navigationArrow').is(':checked')) {
			e.preventDefault();
			$('#navigationArrow').prop( "checked", true );
			return;
		}
		
		if ($('input#navigationArrow').is(':checked')) {
			$('#navigationArrow').prev().html('<span>On</span>')
			$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
		} else {
			$('#navigationArrow').prev().html('<span>Off</span>');
			$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
		}
	});
	
	$('#scrollbar').click(function() {
		if ($('input#scrollbar').is(':checked')) {
			$('#scrollbar').prev().html('<span>On</span>')
			$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
		} else {
			$('#scrollbar').prev().html('<span>Off</span>');
			$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
		}
	});
	
	$('#border').change(function() {
		if ($('input#border').is(':checked')) {
			$('#border').prev().html('<span>On</span>');
			$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
		} else {
			$('#border').prev().html('<span>Off</span>')
			$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
		}
	});

	$('#feedTitle').click(
			function() {
				if ($('input#feedTitle').is(':checked')) {
					$('#feedTitle').prev().html('<span>On</span>');
					$(this).next().find( 'span.onoffswitch-switch').css('background', '#368728');
					$(".feedSetting").show();
					$(".advancedSettingParent").show();																		
				} else {
					$('#feedTitle').prev().html('<span>Off</span>');

					$(this).next().find( 'span.onoffswitch-switch').css('background', '#a0a5aa');
					$(".feedSetting").hide();
					$(".advancedSettingParent").hide();
					
					// Clear all custom settings if gets off.
					$('#title_font_size').val($('#title_font_size').attr('value'));
					$('.backgroundColorPicker').colorpicker('setValue', $('#backgroundColorPicker').attr('value'));
					$('#title_sentence').val($('#title_sentence').attr('value'));
					$('#title_link').val($('#title_link').attr('value'));									
					$('.FontColor').colorpicker('setValue', $('#title_color').attr('value'));
					$('#title_bgimage').val($('#title_bgimage').attr('value'));
				}
			});

	$('#item_link').click(
			function() {
				if ($('input#item_link').is(
						':checked')) {
					$('#item_link').prev()
							.html('<span>On</span>')
					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#368728');
				} else {
					$('#item_link').prev()
							.html('<span>Off</span>')

					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#a0a5aa');
				}
			});

	$('#feedContentSortOrder').click(
		function() {
			if ($('input#feedContentSortOrder').is(':checked')) {
				$('#feedContentSortOrder').prev().html('<span>On</span>');
				$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
				$(".sortOrderSetting").show();
			} else {
				$('#feedContentSortOrder').prev().html('<span>Off</span>');
				$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
				$(".sortOrderSetting").hide();
			}
		});

	$('#item_border_bottom').click(
			function() {
				if ($('input#item_border_bottom').is(
						':checked')) {
					$('#item_border_bottom').prev()
							.html('<span>On</span>')
					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#368728');
					$(this).parent().parent().parent().parent()
							.find(".widgetButtons").show();
				} else {
					$('#item_border_bottom').prev()
							.html('<span>Off</span>')

					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#a0a5aa');
					$(this).parent().parent().parent().parent()
							.find(".widgetButtons").hide();
				}
			});

	$('#item_date').click( function() {
		if ($('input#item_date').is(':checked')) {
			$('#item_date').prev().html('<span>On</span>');
			$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
			$(".TimeZoneHideToggle").show();
		} else {
			$('#item_date').prev().html('<span>Off</span>');
			$(this).next().find('span.onoffswitch-switch').css('background','#a0a5aa');
			$(".TimeZoneHideToggle").hide();
		}
	});

	$('#feedContentTimezone').click(
			function() {
				if ($('input#feedContentTimezone').is(':checked')) {
					$('#feedContentTimezone').prev().html('<span>On</span>')
					$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
					$(".timeZone").show();
				} else {
					$('#feedContentTimezone').prev().html('<span>Off</span>')
					$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
					$(".timeZone").hide();
					if ($('input#feedContTimezoneAbbr').is(':checked')) {
						$('input#feedContTimezoneAbbr').click();
						$('#item_date_timezone').val('Etc/GMT');
					}
				}								
			});

	$('#feedContTimezoneAbbr').click(
			function() {
				if ($('input#feedContTimezoneAbbr').is(':checked')) {
					$('#feedContTimezoneAbbr').prev().html('<span>On</span>')
					$(this).next().find('span.onoffswitch-switch').css('background', '#368728');
				} else {
					$('#feedContTimezoneAbbr').prev().html('<span>Off</span>')
					$(this).next().find('span.onoffswitch-switch').css('background', '#a0a5aa');
				}								
			});

	$('#feedContPodcastYoutube').click(
			function() {
				if ($('input#feedContPodcastYoutube').is(
						':checked')) {
					$('#feedContPodcastYoutube').prev().html(
							'<span>On</span>')
					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#368728');
					$(this).parent().parent().parent().parent()
							.find(".widgetButtons").show();
				} else {
					$('#feedContPodcastYoutube').prev().html(
							'<span>Off</span>')

					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#a0a5aa');
					$(this).parent().parent().parent().parent()
							.find(".widgetButtons").hide();
				}
			});

	$('#feedContPodcastLink').click(
			function() {
				if ($('input#feedContPodcastLink').is(
						':checked')) {
					$('#feedContPodcastLink').prev().html(
							'<span>On</span>')
					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#368728');

				} else {
					$('#feedContPodcastLink').prev().html(
							'<span>Off</span>')

					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#a0a5aa');

				}
			});

	$('#podcastLink').click(
			function() {
				if ($('input#podcastLink').is(':checked')) {
					$('#podcastLink').prev().html(
							'<span>On</span>')
					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#368728');

				} else {
					$('#podcastLink').prev().html(
							'<span>Off</span>')

					$(this).next().find(
							'span.onoffswitch-switch').css(
							'background', '#a0a5aa');

				}
			});

	$("#generalAdvancedSettingOptions").hide();
	$("#feedTitleAdvancedSettingOptions").hide();
	$("#feedContentAdvancedSettingOptions").hide();

	$('.generalAdvancedSetting').on('click', function() {
		$("#generalAdvancedSettingOptions").slideToggle(
			function() {
				if ($(this).css('display') == 'none') {
					$(this).prev().find("span").removeClass('fa-chevron-up');
					$(this).prev().find("span").addClass('fa-chevron-down');					
				} else {
					$(this).prev().find("span").removeClass('fa-chevron-down');
					$(this).prev().find("span").addClass('fa-chevron-up');					
				}
			});
	});
	
	$('.feedTitleAdvancedSetting').on('click', function() {
		$("#feedTitleAdvancedSettingOptions").slideToggle(
			function() {
				if ($(this).css('display') == 'none') {
					$(this).prev().find("span").removeClass('fa-chevron-up');
					$(this).prev().find("span").addClass('fa-chevron-down');
					$(".headerColorsBoxContainer").show();
				} else {
					$(this).prev().find("span").removeClass('fa-chevron-down');
					$(this).prev().find("span").addClass('fa-chevron-up');
					$(".headerColorsBoxContainer").hide();
				}
			});
	});
	
	$('.feedContentAdvancedSetting').on('click', function() {
		$("#feedContentAdvancedSettingOptions").slideToggle(
			function() {
				if ($(this).css('display') == 'none') {
					$(this).prev().find("span").removeClass('fa-chevron-up');
					$(this).prev().find("span").addClass('fa-chevron-down');					
				} else {
					$(this).prev().find("span").removeClass('fa-chevron-down');
					$(this).prev().find("span").addClass('fa-chevron-up');					
				}
			});
	});
	
	/**
	 * *************************** COLORPICKER SCRIPTS HERE *
	 * *****************************
	 */

	$('.backgroundColorPicker').colorpicker({format: 'hex'}).on(
			'changeColor.colorpicker',
			function(event) {
				$(this).find('.colorDots')
						.css("background-color",
								event.color.toHex());
			});

	$('.FontColor').colorpicker({format: 'hex'}).on(
			'changeColor.colorpicker',
			function(event) {
				$(this).find('.colorDots')
						.css("background-color",
								event.color.toHex());
			});
	$('.FeedTitleFontCol').colorpicker({format: 'hex'}).on(
			'changeColor.colorpicker',
			function(event) {
				$(this).find('.colorDots')
						.css("background-color",
								event.color.toHex());
			});
	$('.FeedContentFontCol').colorpicker({format: 'hex'}).on(
			'changeColor.colorpicker',
			function(event) {
				$(this).find('.colorDots')
						.css("background-color",
								event.color.toHex());
			});

	$('.FeedBackgroundCol').colorpicker({format: 'hex'}).on(
			'changeColor.colorpicker',
			function(event) {
				$(this).find('.colorDots')
						.css("background-color",
								event.color.toHex());
			});

	$('.firstDot').colorpicker();
	$('.secondDot').colorpicker();
	$('.thirdDot').colorpicker();
	$('.fourthDot').colorpicker();
	$('.fiveDot').colorpicker();
	/***********************************************************
	 * $('.fa-eyedropper').colorpicker({format: 'hex'}).on('changeColor.colorpicker',
	 * function(event){
	 * $(this).parent().parent().find("input").val(event.color.toHex());
	 * });$('#feedContentFont').colorpicker();
	 * $('#fontColor').colorpicker();
	 * $('#feedContentbackground').colorpicker();
	 * $('.headerColorsBox').colorpicker();
	 * /***************************** COLORPICKER SCRIPTS HERE
	 **********************************************************/

	/**
	 * ******************** BUILDER & WIDGET Switcher function
	 * *************************
	 */
	$('.builderWidgetSwitcher a:first-child').click(
			function() {
				$('.widgetToggle').fadeOut();
				$('.builderToggle').fadeIn();
				$('.builderWidgetSwitcher a:first-child')
						.addClass('active');
				$('.builderWidgetSwitcher a:last-child')
						.removeClass('active');
			
			})

	$('.builderWidgetSwitcher a:last-child').click(
			function() {

				$('.builderToggle').fadeOut();
				$('.widgetToggle').fadeIn();
				$('.builderWidgetSwitcher a:first-child')
						.removeClass('active');
				$('.builderWidgetSwitcher a:last-child')
						.addClass('active');
			$("html, body").animate({
			scrollTop: 200
			}, 600);

			})

	$(window).resize(function() {
		if ($(window).width() < 768) {
		if($('.builderWidgetSwitcher a:last-child').hasClass('active')){
				$('.widgetToggle').show();
				$('.builderToggle').hide();
				
			}else{
				$('.builderToggle').show();
				$('.widgetToggle').hide();
			}
		}
		if ($(window).width() > 768) {

				$('.widgetToggle').show();
			
				$('.builderToggle').show();
							
		}
	})
	if ($(window).width() > 768) {

				$('.widgetToggle').show();
			
				$('.builderToggle').show();
							
	}
	/**
	 * ******************** BUILDER & WIDGET Switcher function
	 * *************************
	 */

	/***********************************************************
	 * **********************************************************************************
	 * FEEDWIND BUILDER PAGE SCRIPTS ENDS HERE
	 * *********************************************************************************
	 **********************************************************/
	
	/*  ----------------------   RANGE SLIDER SCRIPTS -------------------- */
	$('#range-slider-input').change(function(e) {
	   var newSteps = $(this).val();
	   
	   $('#auto_scroll_step_speed').val(newSteps);
	});
					
					
					
	/* ----- Apply Checkbox with custom Green toggle icon ----- */
	$('input[type=checkbox]#connecttwitter,input[type=checkbox]#connectfacebook,input[type=checkbox]#connectgoogle').onoff();

	/* SignIn/Signup popup Modal via SignIn/ SignUp Form */

	/*** Merged from scripts.js  END  ***/

	$('.widgetButtons, .widgetButtonsSmall').find('a').on("click", function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
	$('#date_format, #time_format').find('a').on("click", function() {
		$('#item_date_format').val(get_datetime_format());
	});
	$("#feedContTimezoneAbbr").on("change", function() {
		$('#item_date_format').val(get_datetime_format());
	});

	var addSource = function() {
		var uri = $('#source_url').val().trim();
		var type = 'FB';
		if(!uri) {
			$('#source_url').val('');
			return;
		}
		
		$.post('/api/gettitle/', {uri: uri, type: type},function (data) {
			if (data.status == 'ok') {
				fw_urls.push({'uri': uri, 'title': data.response});
				$('#source_url').val('');
				fwUpdateURLs();
			} else {
				fwModal.show_information(data.message)
			}
		}, 'json');
	};
	$('#add_source').on("click", function() {
		addSource();
	});
	
	$('#refresh_css').on("click", get_preview);

	$('.colorOptions').find('a').on('click', function() {
		var color = $(this).find('div').css('background-color');
		$('.backgroundColorPicker').colorpicker('setValue', color);
	});

	// Getter,Setter
	function get_button_value(selector) {
		return selector.find('.active').attr('value');
	}

	function set_button_value(selector, value) {
		selector.find('[value="' + value + '"]').click();
	}
	
	// This function takes name of radio input as thisName param and input value as value param
	function set_radiobutton_value(thisName, value) {
		$("input[name="+thisName+"][value=" + value + "]").attr('checked', 'checked').change();
	}
	
	function get_checkbox_value(selector) {
		if (selector.is(':checked')) {
			return 'on';
		} else {
			return 'off';
		}
	}

	function set_checkbox_value(selector, value) {
		// Just a tweak here. We are setting reverse here because click event will make it perfect.
		if (value == "on") {
			selector.prop("checked", false).click();
		} else {
			selector.prop("checked", true).click();
		}
	}

	function get_auto_scroll() {
		if(get_checkbox_value($('#auto_scroll')) == 'on') {
			return get_button_value($('#auto_scroll_value'));
		} else {
			return 'off';
		}
	}

	function set_auto_scroll(value) {
		if(value == 'off') {
			set_checkbox_value($('#auto_scroll'), 'off');
		} else {
			set_checkbox_value($('#auto_scroll'), 'on');
			set_button_value($('#auto_scroll_value'), value);
		}
	}

	function get_title_link() {
		if ($('#feedTitle').is(':checked')) {
			return $('#title_link').val();
		} else {
			return '';
		}
	}

	function get_title_sentence() {
		if ($('#feedTitle').is(':checked')) {
			return $('#title_sentence').val();
		} else {
			return '';
		}
	}

	function get_sort_order() {
		if ($('#feedContentSortOrder').prop('checked')) {
			return get_button_value($('#sort'));
		} else {
			return 'off';
		}
	}

	function get_player() {
		if ($('#feedContPodcastYoutube').prop('checked')) {
			var setting = get_button_value($('#player'));
			if ((setting == 'podcast') && ($("#podcastLink").prop('checked'))) {
				return setting + '_utl';
			} else {
				return setting;
			}
		} else {
			return 'off';
		}
	}

	function get_datetime_format() {		var d = get_button_value($('#date_format')) || '';
		var t = get_button_value($('#time_format')) || '';
		var tz = (get_checkbox_value($("#feedContTimezoneAbbr")) == 'on') ? ' %Z' : '';
		return d + t + tz;	}

	function get_timezone() {
		return (get_checkbox_value($('#feedContentTimezone')) == 'on') ? $('#item_date_timezone').val() : '';
	}

	function fwRemoveURL(number){
		fw_urls.splice(number, 1);
		fwUpdateURLs();
		get_preview();
	}

	function fwUpdateURLs(){
		var urlsHTML = '<ul>';
		for(var i=0; i < fw_urls.length; i++){
			urlsHTML = urlsHTML + '<li><strong>' + fw_urls[i]['title'] + '</strong> | <em class="fw-source-em">' + fw_urls[i]['uri'] + '</em> <a class="fw-rm-url-btn" style="cursor:pointer;" data-id="' + i + '">remove</a> <span class="rss-source-tooltip"> '+fw_urls[i]['uri']+'</span>' + '</li><br />';
		}
		urlsHTML = urlsHTML + '</ul>';
 		$('#source_list').html(urlsHTML);
	}

	$('#source_list').on('click', '.fw-rm-url-btn', function(){
		fwRemoveURL($(this).attr('data-id'));
	});

	$('.saveSetting').click(function() {
			var $this = $(this);
		  $this.button('loading');
		  $this.addClass('inActive');
			
		// Get widget image
		var body = $('#preview').contents().find('body');
		html2canvas( body, {
			onrendered: function(canvas) {
			$('#preview_image').val(canvas.toDataURL('image/png'));
			save_widget();
			
		}
		}).catch(function() {
			save_widget();
			
				 
		   
		});
		return false;
	});

	$('.saveCode').click(function() {
		getWidgetCode();
	});
	
	getWidgetCode = function() {
			$('.saveSetting').button('reset');
			$(".saveSetting").removeClass('inActive');
		
			$("#getCode").modal('show', $(".saveSetting"));	}
	
	function fwGetSources() {
		var urls = new Array();
		
		var uri = $('#source_url').val().trim();
		if (uri) {
			urls.push(encodeURI(decodeURIComponent(uri)));
		}
        for(var i=0; i < fw_urls.length; i++){
			urls.push(fw_urls[i]['uri']);
        }

		var sources = new Array();
		for(var i=0; i < urls.length; i++){
			var s = {};
			s.source = urls[i];
			if (!urls[i].match(/^https?\:\/\//i)) {
				s.type = "GCAL";
			} else {
				s.type = "RSS";
			}
			sources.push(s);
		}

        return sources;
	}

	function get_params() {
		var obj = {};
		obj.type = 'FB';

		obj.sources = fwGetSources();
		obj.name = $('.widgetName').val();
		obj.width = $('input[name=feedWidth]:checked').val() == 'width_by_number' ? $('#width').val() : 0;
		obj.height = $('input[name=feedNumbers]:checked').val() == 'height_by_number' ? $('#height').val() : 0;
		obj.height_by_article = $('input[name=feedNumbers]:checked').val() == 'height_by_article' ? $('#height_by_article').val() : 0;
		obj.target = get_button_value($('#target'));
		obj.font = $('#font').val();
		obj.title_font_size = $('#title_font_size').val();
		obj.item_title_font_size = $('#item_title_font_size').val();
		obj.item_description_font_size = $('#item_description_font_size').val();
		obj.border = get_checkbox_value($('#border'));
		obj.css_url = $('#css_url').val();
		
		obj.responsive = $('input[name=feedWidth]:checked').val() == 'responsive' ? 'on' : 'off';
		
		obj.text_direction = get_button_value($('#text_direction'));
		obj.text_alignment = get_button_value($('#text_alignment'));
		obj.corner = get_button_value($('#corner'));
		
		obj.scroll = get_checkbox_value($('#scroll'));
		obj.scroll_style = get_button_value($('#scroll-type-scope'));
		obj.scroll_bar = get_checkbox_value($('#scrollbar'));
		obj.navigation_arrow = get_checkbox_value($('#navigationArrow'));
		obj.auto_scroll = get_auto_scroll();
				
		obj.auto_scroll_direction = obj.scroll_style == "vs" ? get_button_value($('#vs-scroll_direction')) : get_button_value($('#hs_scroll_direction'));
		
		obj.auto_scroll_step_speed = $('#auto_scroll_step_speed').val();
		obj.auto_scroll_mc_speed = get_button_value($('#auto_scroll_mc_speed'));
		
		obj.sort = get_sort_order();
		obj.title = get_checkbox_value($('#feedTitle'));
		obj.title_sentence = get_title_sentence();
		obj.title_link = get_title_link();
		obj.title_bgcolor = $('#backgroundColorPicker').val();
		obj.title_color = $('#title_color').val();
		obj.title_bgimage = $('#title_bgimage').val();
		obj.item_bgcolor = $('#item_bgcolor').val();
		obj.item_bgimage = $('#item_bgimage').val();
		obj.item_title_length = $('#item_title_length').val();
		obj.item_title_color = $('#item_title_color').val();
		obj.item_border_bottom = get_checkbox_value($('#item_border_bottom'));
		
		obj.item_description = $('#item_display').val();
		
		obj.item_link = get_checkbox_value($('#item_link'));
		obj.item_description_length = $('#item_description_length').val();
		obj.item_description_color = $('#item_description_color').val();
		obj.item_date = get_checkbox_value($('#item_date'));
		obj.item_date_format = $('#item_date_format').val();
		obj.item_date_timezone = get_timezone();
		obj.item_description_style = get_button_value($('#item_description_style'));
		obj.item_thumbnail = $('#item_thumbnail').val();
		obj.item_thumbnail_selection = $('#item_thumbnail_selection').val();
		obj.item_thumbnail_force_https = get_checkbox_value($('#item_thumbnail_force_https'));
		obj.article_num = $('#article_num').val();
		obj.item_player = get_player();
		obj.keyword_inc = $('#keyword_inc').val();
		obj.keyword_exc = $('#keyword_exc').val();
		if (typeof fw_initial_params === "undefined") {
			fw_initial_params = JSON.stringify(obj);
		}
		return JSON.stringify(obj);
	}

	function set_params(widget) {
		var params = JSON.parse(widget.parameter);
		$('.widgetName').val(widget.name);
		for(var i=0; i<params.sources.length; i++) {
			$('#source_url').val(params.sources[i].source);
			addSource();
		}
		$('#width').val(params.width);
		$('#height').val(params.height);
		
		set_radiobutton_value('feedNumbers', params.height_by_article == 0? 'height_by_number':'height_by_article');
		$('#height_by_article').val(params.height_by_article);
		
		set_button_value($('#target'), params.target);
		//$('#font_size').val(params.font_size);
		$('#title_font_size').val(params.title_font_size);
		$('#item_title_font_size').val(params.item_title_font_size);
		$('#item_description_font_size').val(params.item_description_font_size);
		set_checkbox_value($('#border'), params.border);
		$('#font').val(params.font);
		$('#css_url').val(params.css_url);
		
		set_radiobutton_value('feedWidth', params.responsive =='on'?'responsive':'width_by_number');
		
		set_button_value($('#text_direction'), params.text_direction);
		set_button_value($('#text_alignment'), params.text_alignment);
		set_button_value($('#corner'), params.corner);
		
		set_checkbox_value($('#scroll'), params.scroll);
		set_button_value($('#scroll-type-scope'), params.scroll_style);
		set_checkbox_value($('#scrollbar'), params.scroll_bar);
		set_checkbox_value($('#navigationArrow'), params.navigation_arrow);
		set_auto_scroll(params.auto_scroll);
		
		set_button_value(params.scroll_style == "vs" ? $('#vs_scroll_direction') :$('#hs_scroll_direction'), params.auto_scroll_direction);
		
		$('#auto_scroll_step_speed').val(params.auto_scroll_step_speed);
		set_button_value($('#auto_scroll_mc_speed'), params.auto_scroll_mc_speed);
		
		set_checkbox_value($('#feedContentSortOrder'), params.sort == 'off' ? 'off' : 'on');
		set_button_value($('#sort'), params.sort);
		
		set_checkbox_value($('#feedTitle'), params.title);
		$('#title_sentence').val(params.title_sentence);
		$('#title_link').val(params.title_link);
		
		$('.backgroundColorPicker').colorpicker('setValue', params.title_bgcolor);
		$('.FontColor').colorpicker('setValue', params.title_color);		
		
		$('#title_bgimage').val(params.title_bgimage);		
		$('#item_bgimage').val(params.item_bgimage);
		$('#item_title_length').val(params.item_title_length);
		
		$('.FeedTitleFontCol').colorpicker('setValue', params.item_title_color);
		$('.FeedContentFontCol ').colorpicker('setValue', params.item_description_color);
		$('.FeedBackgroundCol  ').colorpicker('setValue', params.item_bgcolor);
		
		set_checkbox_value($('#item_border_bottom'), params.item_border_bottom);		
		$('#item_display').val(params.item_description);		
		set_checkbox_value($('#item_link'), params.item_link);
		$('#item_description_length').val(params.item_description_length);		
		set_checkbox_value($('#item_date'), params.item_date);
		
		$('#item_date_format').val(params.item_date_format);
		var dateFormat = '%b %e, %Y';
		if(params.item_date_format && params.item_date_format.indexOf('%e.%m.%Y') > -1) dateFormat = '%e.%m.%Y';
		set_button_value($('#date_format'), dateFormat);
		
		var timeFormat = ' %l:%M %p';
		if(params.item_date_format && params.item_date_format.indexOf('%k:%M') > -1) timeFormat = ' %k:%M';
		set_button_value($('#time_format'), timeFormat);
		
		if(params.item_date_timezone && params.item_date_timezone !== 'Etc/GMT') {
			$('#item_date_timezone').val(params.item_date_timezone);
			set_checkbox_value($('#feedContentTimezone'), 'on');
			if(params.item_date_format.indexOf('%Z') > -1) set_checkbox_value($('#feedContTimezoneAbbr'), 'on');		
		}
		
		// obj.item_date_timezone = get_timezone();
		set_button_value($('#item_description_style'), params.item_description_style);
		$('#item_thumbnail').val(params.item_thumbnail);
		$('#item_thumbnail_selection').val(params.item_thumbnail_selection);
		set_checkbox_value($('#item_thumbnail_force_https'), params.item_thumbnail_force_https ? params.item_thumbnail_force_https : 'off');
		$('#article_num').val(params.article_num);
		
		set_checkbox_value($('#feedContPodcastYoutube'), params.item_player == 'off' ? 'off' : 'on');
		set_button_value($('#player'), params.item_player != 'youtube' ? 'podcast' : 'youtube');
		set_checkbox_value($('#podcastLink'), params.item_player == 'podcast_utl' ? 'on' : 'off');
		
		$('#keyword_inc').val(params.keyword_inc);
		$('#keyword_exc').val(params.keyword_exc);
	}

	function valid_params() {
		var type = 'FB';
		var error = '';
		
		if (type == 'FB') {
			if ($('#article_num').val() > 25) {
				error = 'Up to 25 items can be displayed.';
			}
		}

		return error;
	}

	function save_widget() {
		var widget_id = $('#widget_id').val();
		if (widget_id != '') {
			var name = $('.widgetName').val();
			$.post('/api/widget/update/', {widget_id: widget_id,widget_parameter: get_params()}, function (data) {
				$('.widgetName').val(data.response.name);
				fwModal.show_information(data.message);
				fw_initial_params = get_params();
				$('.saveSetting').data('id', data.response.widget_id);
				getWidgetCode();
			}, 'json').fail(function(){
				fwModal.show_information()
			});
		} else {
			$.post('/api/widget/create/', {widget_parameter: get_params(), preview_image: $('#preview_image').val()}, function (data) {
				fwModal.show_information(data.message);
				if (data.status != 'fail') {
					$('#widget_id').val(data.response.widget_id);
					$('.widgetName').val(data.response.name);
					$('.getCode').data('id', data.response.widget_id);
					$('.saveSetting').data('id', data.response.widget_id);
					fw_initial_params = get_params();
					getWidgetCode();
				}
			}, 'json').fail(function(){
				fwModal.show_information()
			});
		}
	}	

	function bind_update_preview() {
		//we have select options and the change event getting fired for every select elements on page load which not recommended. This variable is just using not fire change even during page load
		var isBinding = true;
		$('#add_source').on("click", function() {
			get_preview();
		});
		$('.backgroundColorPicker').colorpicker({format: 'hex'}).on('changeColor.colorpicker', function(event) {
			get_preview();
		});
		$('.FontColor').colorpicker({format: 'hex'}).on('changeColor.colorpicker', function(event) {
			get_preview();
		});
		$('.FeedTitleFontCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker', function(event) {
			get_preview();
		});
		$('.FeedContentFontCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker', function(event) {
			get_preview();
		});
		$('.FeedBackgroundCol').colorpicker({format: 'hex'}).on('changeColor.colorpicker', function(event) {
			get_preview();
		});
		$('a.rangeControlSpeed').on('click', function(){
			get_preview();
		});
		$('a.btnControlSpeed').on('click', function(){
			get_preview();
		});
		
		$('a.scroll-vertical').on('click', function(){
			get_preview();
		});
		
		$('a.scroll-horizontal').on('click', function(){
			get_preview();
		});
		
		$('.widgetButtons, .widgetButtonsSmall').find('a').on("click", function() {
			get_preview();
			return false;
		});
		
		$('#settings input, select').on('change', function(e) {
			if(!isBinding) get_preview();
			
		});		
		setTimeout(function(){ isBinding = false; }, 3000);
	}

	
	$('#item_date_format').val(get_datetime_format());
	bind_update_preview();
	
 
	function get_preview() {
		$(".saveSetting").addClass("inActive");
		$(".getCode").addClass("inActive"); 
 
		get_datetime_format();
		var url = '/widget/v2/';
		var error = valid_params();
		if (error) {
			$('#preview-error').text(error).show();
			$('#preview').hide();
		} else {
			$('#preview-error').text('').hide();
			$('#preview').show();

			var params_string = get_params();
			var query_string = '?widget_parameter=' + encodeURIComponent(params_string).replace(/'/g, "\\\'");
			var params = JSON.parse(params_string);
		
			$('#preview')[0].contentDocument.location.replace(url + query_string);
			if ( params.responsive == "on") {
				$('#preview').css('width', '100%');
			} else {
				$('#preview').css('width', params.width + "px");
			}		
			$('.getCode').data('params', query_string);
		}		
		return false;
	}
	
	getWidth = function() {
		if ($('input[name=feedWidth]:checked').val() == 'responsive') {
			return "100%";
		} else {
			return $('#width').val() + "px"; 
		}
	}
	
	function fw_preview() {
		
			get_preview();
		
	}	
	
	if (window.addEventListener) {
		window.addEventListener("load", fw_preview, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", fw_preview);
	} else {
		window.onload = fw_preview;
	}
	
	function fw_r(e) {
		if (e.origin === "http://feed.mikle.com" || e.origin === "https://feed.mikle.com") {
			var datas = e.data.split('|');
			
			$('#preview').css('width', datas[1]);
			$('#preview').css('height', datas[2]);
			
			if($(".saveSetting").hasClass("inActive")) $(".saveSetting").removeClass("inActive");
			if($(".getCode").hasClass("inActive")) $(".getCode").removeClass("inActive");
 
			return;
        }
	}
	
	// Check for browser support of event handling capability	
	if (window.addEventListener) {
		window.addEventListener("message", fw_r, false);
	} else if (window.attachEvent) {
		window.attachEvent("onmessage", fw_r, false);
	}

	
	$('.widgetName').show();
	$('.saveSetting').css('display', 'inline-block');
	$(window).on('beforeunload', function(e){
		if (fw_initial_params != get_params()) return 'x';
	});
		
})
