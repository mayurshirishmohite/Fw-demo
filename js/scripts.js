//JavaScript Document
$("document")
		.ready(
				function() {

					
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
                        event.preventDefault();
						
						$(this).addClass('active');
						$(this).siblings().removeClass('active');
						$('#speedControlBtn').slideUp();
						
						$('#speedControlRange').slideDown();
						
                    });
					$('a.btnControlSpeed').click(function(e) {
                        event.preventDefault();
						$(this).addClass('active');
						$(this).siblings().removeClass('active');
						$('#speedControlRange').slideUp();
						
						$('#speedControlBtn').slideDown();
                    });
					
					
					
					/** *********** Widge Code Modal *************** */
					$(".code-copied-modal").hide();

					$('#code-copied').click(
							function(e) {
								event.preventDefault();
								// alert('test');
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

					$("#saveSetting").submit(function() {
						event.preventDefault();
						$('html, body').animate({
							scrollTop : 0
						}, 'slow');
						$(".data-saved-modal").show().delay(5000).fadeOut(300);

					});
					
					
					
					/* Renamed Widget Name Successfully Notification*/
					$(".widget-name-changed").hide();
					$("#renameWidgetSuccess").click(function() {
						var widgetNewName = $('input.renameWidgetInput').val();
						event.preventDefault();
						$('html, body').animate({
							scrollTop : 0
						}, 'slow');
						$(".widget-name-changed").show().append(widgetNewName).delay(5000).fadeOut(300);
					//$('input.renameWidgetInput').val('');
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

											// Do somthing here if checkbox is
											// checked
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
											// alert("You Are Now Connected with
											// Twitter Thank You!");
											// checked
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
											// not checked
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
											// alert("You Are Now Connected with
											// Facebook Thank You!");
											// checked

										} else {
											// alert("not checked");
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
											// not checked
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
											// alert("You Are Now Connected with
											// Google Thank You!");
											// checked

										} else {
											// alert("not checked");
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

											// not checked
										}
										$('#targetAccount').val('Google');
									});

					/***********************************************************
					 * **********************************************************************************
					 * FEEDWIND BUILDER PAGE SCRIPTS
					 * *********************************************************************************
					 **********************************************************/

					$('#scroll').click(
							function() {
								if ($('input#scroll').is(':checked')) {
									$('#scroll').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#scroll').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});
					$('#auto_scroll').change(
							function() {
								if ($('input#auto_scroll').is(':checked')) {
									$('#auto_scroll').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');
								$(this).parent().parent().parent().parent()
											.find(".autoScrollContent").show();
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#auto_scroll').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
											$(this).parent().parent().parent().parent()
											.find(".autoScrollContent").hide();
									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$('#border').change(
							function() {
								if ($('input#border').is(':checked')) {
									$('#border').prev().html('<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#border').prev()
											.html('<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$('#responsive').click(
							function() {
								if ($('input#responsive').is(':checked')) {
									$('#responsive').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#responsive').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$('#feedTitle').click(
							function() {
								if ($('input#feedTitle').is(':checked')) {
									$('#feedTitle').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');
									$(this).parent().parent().parent().parent()
											.find(".toggleOnOff").show();
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#feedTitle').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									$(this).parent().parent().parent().parent()
											.find(".toggleOnOff").hide();
									// not checked
								}
								// $('#targetAccount').val('Twitter');
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
									// checked
								} else {
									$('#item_link').prev()
											.html('<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$('#feedContentSortOrder').click(
							function() {
								if ($('input#feedContentSortOrder').is(
										':checked')) {
									$('#feedContentSortOrder').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');
									$(this).parent().parent().parent().parent()
											.find(".widgetButtons").show();
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#feedContentSortOrder').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									$(this).parent().parent().parent().parent()
											.find(".widgetButtons").hide();
									// not checked
								}
								// $('#targetAccount').val('Twitter');
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
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#item_border_bottom').prev()
											.html('<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									$(this).parent().parent().parent().parent()
											.find(".widgetButtons").hide();
									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$('#item_date')
							.click(
									function() {
										if ($('input#item_date').is(
												':checked')) {
											$('#item_date').prev()
													.html('<span>On</span>')
											$(this).next().find(
													'span.onoffswitch-switch')
													.css('background',
															'#368728');
											$(this)
													.parent()
													.parent()
													.parent()
													.parent()
													.find(".TimeZoneHideToggle")
													.show();
											// alert("You Are Now Connected with
											// Twitter Thank You!");
											// checked
										} else {
											// alert("not checked");
											$('#item_date').prev()
													.html('<span>Off</span>')

											$(this).next().find(
													'span.onoffswitch-switch')
													.css('background',
															'#a0a5aa');
											$(this)
													.parent()
													.parent()
													.parent()
													.parent()
													.find(".TimeZoneHideToggle")
													.hide();
											// not checked
										}
										// $('#targetAccount').val('Twitter');
									});

					$('#feedContentTimezone').click(
							function() {
								if ($('input#feedContentTimezone').is(
										':checked')) {
									$('#feedContentTimezone').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');
									$(this).parent().parent().parent().parent()
											.find(".timeZone").show();
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#feedContentTimezone').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									$(this).parent().parent().parent().parent()
											.find(".timeZone").hide();
									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$('#feedContTimezoneAbbr').click(
							function() {
								if ($('input#feedContTimezoneAbbr').is(
										':checked')) {
									$('#feedContTimezoneAbbr').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');

									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#feedContTimezoneAbbr').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');

									// not checked
								}
								// $('#targetAccount').val('Twitter');
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
									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#feedContPodcastYoutube').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');
									$(this).parent().parent().parent().parent()
											.find(".widgetButtons").hide();
									// not checked
								}
								// $('#targetAccount').val('Twitter');
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

									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#feedContPodcastLink').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');

									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$('#podcastLink').click(
							function() {
								if ($('input#podcastLink').is(':checked')) {
									$('#podcastLink').prev().html(
											'<span>On</span>')
									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#368728');

									// alert("You Are Now Connected with
									// Twitter Thank You!");
									// checked
								} else {
									// alert("not checked");
									$('#podcastLink').prev().html(
											'<span>Off</span>')

									$(this).next().find(
											'span.onoffswitch-switch').css(
											'background', '#a0a5aa');

									// not checked
								}
								// $('#targetAccount').val('Twitter');
							});

					$("#genAdvancedSetting").hide();
					$("#feedTitleAdvancedSet").hide();
					$("#feedContentAdvancedSetting").hide();

					$('.advancedSetting')
							.on(
									'click',
									function() {
										$(this)
												.parent()
												.next()
												.slideToggle(
														function() {

															if ($(this).css(
																	'display') == 'none') {

																$($(this))
																		.prev()
																		.find(
																				"span")
																		.removeClass(
																				'fa-chevron-up');
																$($(this))
																		.prev()
																		.find(
																				"span")
																		.addClass(
																				'fa-chevron-down');
															} else {
																$($(this))
																		.prev()
																		.find(
																				"span")
																		.removeClass(
																				'fa-chevron-down');
																$($(this))
																		.prev()
																		.find(
																				"span")
																		.addClass(
																				'fa-chevron-up');
															}

														});
									});

					/**
					 * *************************** COLORPICKER SCRIPTS HERE *
					 * *****************************
					 */

					$('.backgroundColorPicker').colorpicker().on(
							'changeColor.colorpicker',
							function(event) {
								$(this).find('.colorDots')
										.css("background-color",
												event.color.toHex());

							});

					$('.FontColor').colorpicker().on(
							'changeColor.colorpicker',
							function(event) {
								$(this).find('.colorDots')
										.css("background-color",
												event.color.toHex());

							});
					$('.FeedTitleFontCol').colorpicker().on(
							'changeColor.colorpicker',
							function(event) {
								$(this).find('.colorDots')
										.css("background-color",
												event.color.toHex());

							});
					$('.FeedContentFontCol').colorpicker().on(
							'changeColor.colorpicker',
							function(event) {
								$(this).find('.colorDots')
										.css("background-color",
												event.color.toHex());

							});

					$('.FeedBackgroundCol').colorpicker().on(
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
					 * $('.fa-eyedropper').colorpicker().on('changeColor.colorpicker',
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

							})

					function MobileNav() {
						if ($(window).width() > 480) {

							$('.widgetToggle').show();
							$('.builderWidgetSwitcher a:last-child')
									.removeClass('active');
							$('.builderWidgetSwitcher a:first-child').addClass(
									'active');
							$('.builderToggle').show();

						} else {
							$('.widgetToggle').hide();
						}
					}

					$(window).resize(function() {
						MobileNav();
					})
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
					$(
							'input[type=checkbox]#connecttwitter,input[type=checkbox]#connectfacebook,input[type=checkbox]#connectgoogle')
							.onoff();

					/* SignIn/Signup popup Modal via SignIn/ SignUp Form */

					/* Footer Fixed to Bottom */
					
					if ($(document).height() > $(window).height()) {
						// scrollbar
						$('footer').css("position", "none;");

					}
					
				});
				// Jquery Documents ENDS HERE 
		

