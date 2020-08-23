$(function () {
	"use strict";


	$('#banner_part').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		nextArrow: '<i class="fas fa-chevron-right next_arro"></i>',
		prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
		speed: 1200,
		dots: true,
	});

	// about video part
	$('.venobox').venobox({
		spinner: 'wave'
	});

	$('.img_link').viewbox({
		setTitle: true,
		margin: 20,
		resizeDuration: 300,
		openDuration: 200,
		closeDuration: 200,
		closeButton: true,
		navButtons: true,
		closeOnSideClick: true,
		nextOnContentClick: true,
		border: false,
	});

	// our team slider
	$('.team_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1300,
		arrows: false,
		dots: false,
		speed: 800,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: false,
					nextArrow: '<i class="fas fa-chevron-right next_arro"></i>',
					prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
				}
    },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					nextArrow: '<i class="fas fa-chevron-right next_arro"></i>',
					prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
				}
    },

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					nextArrow: '<i class="fas fa-chevron-right next_arro"></i>',
					prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
				}
    },
  ]
	});

	// testimonial slider
	$('.testi_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					nextArrow: '<i class="fas fa-chevron-right next_arro"></i>',
					prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});



	// counter up start
	$('.counter').counterUp({
		delay: 10,
		time: 1500
	});


	// partner slider
	$('.partner_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		speed: 1000,
		dots: false,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
    },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: false,
					nextArrow: '<i class="fas fa-chevron-right next_arro"></i>',
					prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: true,
					arrows: false,
				}
    },

  ]
	});

	// back to top button
	$('.back_top_btn').click(function () {
		$('html,body').animate({
			scrollTop: 0,
		}, 2000);
	});

	$(window).scroll(function () {
		var scroll_top = $(this).scrollTop();
		if (scroll_top > 450) {
			$('.back_top_btn').addClass('animate__animated animate__fadeInDownBig').fadeIn(2000);
		} else {
			$('.back_top_btn').removeClass('animate__animated animate__fadeInDownBig').fadeOut();
		}


	});

	// menu fix
	//	var nav_fixed = $('.main_menu').offset().top;

	var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend ';

	var nav_fixed = $('.main_menu').offset().top;
	$(window).on('scroll', function () {
		var scroll_top = $(this).scrollTop();
		if (scroll_top > nav_fixed) {
			$('.main_menu').addClass('menu_fix animate__animated animate__fadeInDown');
		} else {
			$('.main_menu').removeClass('menu_fix animate__animated animate__fadeInDown');
		}

	});






	//smooth scroll js

	var html_body = $('html, body');
	$('nav a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 60
				}, 1000);
				return false;
			}
		}
	});



})
