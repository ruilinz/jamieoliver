(function ($) {
	'use strict';

	// Menu On Click Scroll Function
	$('body').on('click', '.page-scroll a', function (event) {
		var $anchor = $(this);
		var isMobile = window.innerWidth;
		var topoffset = 0;
		if (isMobile === 768) {
			topoffset = 240
		} else if (isMobile === 411 || isMobile === 414) {
			topoffset = 125
		} else if (isMobile === 375 || isMobile === 360) {
			topoffset = 114
		} else if (isMobile === 320) {
			topoffset = 98;
		} else {
			topoffset = 305;
		}

		console.log('topoffset: ', topoffset, 'isMobile:', isMobile)

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - topoffset + 1
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});

	$(window).on('load', function () {
		// Pre-loader Function
		setTimeout(function () {
			$('body').addClass("overflow-hidden");
			$('.flash_banner').addClass("show");
		}, 1000);

		setTimeout(() => {
			$('.welcomeBanner').addClass("fade-in");
		}, 1001);

		$('.close, .close_popup').on('click', function () {
			$('body').removeClass("overflow-hidden");
			$('.flash_banner, .popup, .popup_wrapper').removeClass("show");
			$('.img').removeClass('fade-in');
		})
	});


	$('#bakedMashrooms, #ultimateGarlicBread, #seafoodLinguine, #tagliatelleBolognese, #creamyPenneCarbonara, #calabrianChicken, #bakesLasagne, #crispyPolentaChips, #crispyPolentaChips, #Desserts1, #Desserts2, #Desserts3, #Desserts4, #Desserts5').on('click', function () {
		$('body').addClass("overflow-hidden");
		$(".popup, .popup_wrapper").addClass("show");
		$('.img').addClass('fade-in');
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R119.jpg');
	})

	$('#ultimateGarlicBread').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R120.jpg');
	})

	$('#seafoodLinguine').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R123.jpg');
	})

	$('#tagliatelleBolognese').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R122.jpg');
	})

	$('#creamyPenneCarbonara').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R121.jpg');
	})

	$('#calabrianChicken').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R125.jpg');
	})

	$('#bakesLasagne').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R124.jpg');
	})

	$('#crispyPolentaChips').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R126.jpg');
	})

	$('#Desserts1').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R127.jpg');
	})

	$('#Desserts2').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R131.jpg');
	})

	$('#Desserts3').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R128.jpg');
	})

	$('#Desserts4').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R129.jpg');
	})

	$('#Desserts5').on('click', function () {
		$('.img').attr('src', './images/05_JamieOliversMenu_Mobile_Format_0602CL_R130.jpg');
	})

})(jQuery);