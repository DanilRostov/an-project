// Timer 
$('[data-timer]').each(function(i, e){
	initializeClock($(e).attr('data-timer'), $(e));
})

var deadlineHeader = $('.header__timer').attr('data-timer');
var clockHeader = $('.header__timer-time');

var deadlineBanner1 = $('.banner__timer').attr('data-timer');
var clockBanner1 = $('.banner__timer-time');

function getTimeRemaining(endtime) {
	var t = (endtime*1000) - Date.parse(new Date()); //Дата задаётся в секундах
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );

	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(endtime, clock) {
	var timeinterval = setInterval(function() {
		var t = getTimeRemaining(endtime);
		var seconds = t.seconds;
		var minutes = t.minutes;
		var hours = t.hours;
		var days = t.days;

		if (t.seconds < 10) {
			seconds = '0' + t.seconds;
		}

		if (t.minutes < 10) {
			minutes = '0' + t.minutes;
		}

		if (t.hours < 10) {
			hours = '0' + t.hours;
		}

		if (t.days < 10) {
			days = '0' + t.days;
		}

		for (i = 0; i < clock.length; i++) {
			clock[i].innerHTML = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;
		}
		
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}, 1000);
}

var timersArray = $('.timer__time');
var timersAttr = [];
var dateToday = Date.parse(new Date())/1000;

for (i = 0; i < timersArray.length; i++) {
	timersAttr.push($(timersArray[i]).attr('data-timer'));
}

for (i = 0; i < timersArray.length; i++) {
	if ( timersAttr[i] < dateToday ) {
		if ( $(timersArray[i]).hasClass('header__timer-time')) {
			$(timersArray[i]).parent('.timer__time-box').parent('.timer__time-row').parent('.header__timer').addClass('display-none');
		} else {
			$(timersArray[i]).parent('.banner__timer').addClass('display-none');
		}
	}
}

// Swiper - Calendar
var swiperCalendar = new Swiper('.calendar__swiper', {
	spaceBetween: 30,
	navigation: {
	   	nextEl: '.calendar__button--next',
	    prevEl: '.calendar__button--prev',
    },
});

// Swiper - lessons
var swiperLessons = new Swiper('.lessons__swiper', {
	spaceBetween: 30,
	loop: false,
	init: false,
	grabCursor: true,
	slidesPerView: 'auto',
	pagination: {
		el: '.lessons__swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1920: {
			spaceBetween: 20,
			slidesPerView: 3,
			grabCursor: true,
		},
		1023: {
			spaceBetween: 30,
			slidesPerView: 'auto',
			grabCursor: true,
		}
	},
});
swiperLessons.init();

// Swiper - Info-lessons
var swiperInfoLessons = new Swiper('.info-lessons__swiper', {
	spaceBetween: 0,
	loop: false,
	slidesPerView: 'auto',
	init: true,
	grabCursor: true,
	pagination: {
		el: '.info-lessons__swiper-pagination',
		clickable: true,
	},
	navigation: {
	   	nextEl: '.info-lessons__button--next',
	    prevEl: '.info-lessons__button--prev',
    },
});

// Swiper - Banner
var swiperBanner = new Swiper('.banner__swiper', {
	spaceBetween: 1000,
	loop: false,
	pagination: {
		el: '.banner__swiper-pagination',
		clickable: true,
	},
	navigation: {
	   	nextEl: '.banner__button--next',
	    prevEl: '.banner__button--prev',
    },
});

// Swiper - Gallery
var swiperGallery = new Swiper('.gallery__swiper', {
	spaceBetween: 40,
	slidesPerView: 'auto',
	loop: false,
	init: false,
	breakpoints: {
		1023: {
			spaceBetween: 40,
		},
		839: {
			spaceBetween: 20,
		},
		479: {
			spaceBetween: 10,
		}
	},
	navigation: {
	   	nextEl: '.gallery__button--next',
	    prevEl: '.gallery__button--prev',
    },
    pagination: {
		el: '.gallery__swiper-pagination',
		clickable: true,
	},
});
swiperGallery.init();

// Fyncybox - Gallery
$('[data-fancybox="gallery"]').fancybox({
  buttons : [
    'close'
  ]
});

//Swiper - Reviews
var swiperReviews = new Swiper('.reviews__swiper', {
	spaceBetween: 2000,
	loop: false,
	direction: 'vertical',
	slidesPerView: 'auto',
    breakpoints: {
		1023: {
		},
		839: {
			
		},
		479: {
			direction: 'horizontal',
		}
	},
	pagination: {
    	el: '.reviews__swiper-pagination',
    	type: 'progressbar',
		renderProgressbar: function (progressbarFillClass) {
				numberSlides = ($('.reviews__slide').length);
		    	return "<span class=" + progressbarFillClass + "></span><span class='reviews__number-slides'>" + numberSlides + "</span><span class='reviews__number-slides--current'>1</span>";

		  }
    },
    navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
    }
});

// Number Pagination
currentSlide = ($('#slider-reviews').find($('.swiper-slide-active'))).index() + 1;

swiperReviews.on('slideChangeTransitionEnd', function() {
	currentSlide = ($('#slider-reviews').find($('.swiper-slide-active'))).index() + 1;
	$('.reviews__number-slides--current').html(currentSlide);
})


// Popup - Main 
$('.popup-main-open').click(function() {
	if ($(window).width() < 1024) {
		var scrlTop = $(window).scrollTop();

		$('.popup-main').fadeIn();
		$('body').addClass('position-fixed');
		$('.popup-main-close').click(function() {
			$('body').removeClass('position-fixed');
			$('.popup-main').fadeOut();
			$('html, body').animate({ scrollTop: scrlTop }, 100);
		});
	} else {
		$('.popup-main').fadeIn();
		$('body').css('overflow', 'hidden');
		$('.popup-main-close').click(function() {
			$('body').css('overflow', 'visible');
			$('.popup-main').fadeOut();
		});
	}
});

// $('.popup-main-close').on('click', function() {
// 	$('.popup-main__input').val('');
// 	$('#popup-main-email').removeClass('popup-main__input--invalid');
// 	$('.popup-main__options-checkbox-item').prop('checked', false);
// 	$('.datepicker-inline').fadeOut();
// 	$('.datepicker-inline').addClass('display-none');
// })

$('.popup-main__options-checkbox-item').on('click', function() {
	var dateCheckbox = $(this).parent('.popup-main__options-checkbox').parent('.popup-main__options-item').children('.popup-main__options-text-box').children('.popup-main__options-date').attr('data-type');
	
	$('.popup-main__input--date').val(dateCheckbox);

	if ( !$(this).prop('checked') ) {
		$(this).prop('checked', false);
		$('.popup-main__input--date').val('');
	} else {
		$('.popup-main__options-checkbox-item').prop('checked', false);
		$(this).prop('checked', true);
	}
})

$('.popup-lessons-individual').on('click', function () {
	var arrayItemLesson = $('.popup-main-select-lessons__block-list-item');
	var arratAttrItemLesson = [];

	for (i = 0; i < arrayItemLesson.length; i++) {
		arratAttrItemLesson.push($(arrayItemLesson[i]).attr('data-lesson'));
	}
	
	if ( !$('#switcher-lesson').prop('checked') ) {
		for (i = 0; i < arratAttrItemLesson.length; i++) {
			if (arratAttrItemLesson[i] == $(this).attr('data-lesson')) {
				$('#switcher-lesson-btn').trigger('click');
				$(arrayItemLesson[i]).trigger('click');
			}
		}	
	} else {
		for (i = 0; i < arratAttrItemLesson.length; i++) {
			if (arratAttrItemLesson[i] == $(this).attr('data-lesson')) {
				$('.popup-main-select-lessons__block-list-box').find('.popup-main-select-lessons__block-list-item').removeClass('popup-main-select-lessons__block-list-item--active');
				$('.popup-main-select-lessons__list-item-box').html(' ');
				arrayPopupLessons = [];
				$(arrayItemLesson[i]).trigger('click');
			}
		}	
	}
})

$('.popup-masters-individual').on('click', function () {
	var arrayItemMaster = $('.popup-main-select-masters__block-list-item');
	var arratAttrItemMaster = [];

	for (i = 0; i < arrayItemMaster.length; i++) {
		arratAttrItemMaster.push($(arrayItemMaster[i]).attr('data-master'));
	}
	
	if ( !$('#switcher-masters').prop('checked') ) {
		for (i = 0; i < arratAttrItemMaster.length; i++) {
			if (arratAttrItemMaster[i] == $(this).attr('data-master')) {
				$('#switcher-masters-btn').trigger('click');
				$(arrayItemMaster[i]).trigger('click');
			}
		}	
	} else {
		for (i = 0; i < arratAttrItemMaster.length; i++) {
			if (arratAttrItemMaster[i] == $(this).attr('data-master')) {
				$('.popup-main-select-masters__block-list-box').find('.popup-main-select-masters__block-list-item').removeClass('popup-main-select-masters__block-list-item--active');
				$('.popup-main-select-masters__list-item-box').html(' ');
				arrayPopupMasters = [];
				$(arrayItemMaster[i]).trigger('click');
			}
		}	
	}
})

$('.popup-timer-individual').on('click', function () {
	var arrayCheckboxes = $('.popup-main__options-checkbox');
	var arrayCheckboxAttr = [];
	
	for (i = 0; i < arrayCheckboxes.length; i++) {
		arrayCheckboxAttr.push($(arrayCheckboxes[i]).attr('data-checkbox'));
	}
	
	for (i = 0; i < arrayCheckboxAttr.length; i++) {
		if( $(this).attr('data-checkbox') == arrayCheckboxAttr[i] ) {
			if( !$(arrayCheckboxes[i]).children('.popup-main__options-checkbox-item').prop('checked') ) {
				$(arrayCheckboxes[i]).children('.popup-main__options-checkbox-item').trigger('click');
				var dateCheckbox = $(arrayCheckboxes[i]).parent('.popup-main__options-item').children('.popup-main__options-text-box').children('.popup-main__options-date').attr('data-type');
				$('.popup-main__input--date').val(dateCheckbox);
			}
		}
	}
})

// Popup - Ask
$('.popup-ask-open').click(function() {
	if ($(window).width() < 1024) {
		var scrlTop = $(window).scrollTop();

		$('.popup-ask').fadeIn();
		$('body').addClass('position-fixed');
		$('.popup-ask-close').click(function() {
			$('body').removeClass('position-fixed');
			$('.popup-ask').fadeOut();
			$('html, body').animate({ scrollTop: scrlTop }, 100);
		});
	} else {
		$('.popup-ask').fadeIn();
		$('body').css('overflow', 'hidden');
		$('.popup-ask-close').click(function() {
			$('body').css('overflow', 'visible');
			$('.popup-ask').fadeOut();
		});
	}
});

// $('.popup-ask-close').on('click', function() {
// 	$('.popup-ask__input').val('');
// 	$('.popup-ask__textarea').val('');
// 	$('#popup-ask-email').removeClass('popup-ask__input--invalid');
// })

// Popup - video
$('.popup-video-open').click(function() {
	var popupsVideos = $('.popup-video');

	for (i = 0; i < popupsVideos.length; i++) {
		if ($(popupsVideos[i]).attr('data-video') == $(this).attr('data-video')) {

			if ($(window).width() < 1024) {
				var scrlTop = $(window).scrollTop();

				$(popupsVideos[i]).fadeIn();
				$('body').addClass('position-fixed');
				$('.popup-video-close').click(function() {
					$('body').removeClass('position-fixed');
					$('.popup-video').fadeOut();
					$('html, body').animate({ scrollTop: scrlTop }, 100);
				});
			} else {
				$(popupsVideos[i]).fadeIn();
				$('body').css('overflow', 'hidden');
				$('.popup-video-close').click(function() {
					$('body').css('overflow', 'visible');
					$('.popup-video').fadeOut();
				});
			}
		}
	}		
});

function onYouTubePlayerAPIReady() {
    player = new YT.Player('Youtube', {
    	events: {
    		'onReady': onPlayerReady
    	}
	});
}

function onPlayerReady(event) {
	$('.popup-video-close').on('click', function() {
  		player.pauseVideo();
	});
}


// Popup - founder-word
$('.popup-founder-word-open').click(function() {
	if ($(window).width() < 1024) {
		var scrlTop = $(window).scrollTop();

		$('.popup-founder-word').fadeIn();
		$('body').addClass('position-fixed');
		$('.popup-founder-word-close').click(function() {
			$('body').removeClass('position-fixed');
			$('.popup-founder-word').fadeOut();
			$('html, body').animate({ scrollTop: scrlTop }, 100);
		});
	} else {
		$('.popup-founder-word').fadeIn();
		$('body').css('overflow', 'hidden');
		$('.popup-founder-word-close').click(function() {
			$('body').css('overflow', 'visible');
			$('.popup-founder-word').fadeOut();
		});
	}
});

// Popup - Calendar
$('.calendar-btn-open').click(function() {
	var btnFirstFloor = $('.calendar__btn');
	$(btnFirstFloor[0]).trigger('click');
	if ($(window).width() < 1024) {
		var scrlTop = $(window).scrollTop();

		$('.calendar').fadeIn();
		$('body').addClass('position-fixed');
		$('.calendar-close').click(function() {
			$('body').removeClass('position-fixed');
			$('.calendar').fadeOut();
			$('html, body').animate({ scrollTop: scrlTop }, 100);
		});
	} else {
		$('.calendar').fadeIn();
		$('body').css('overflow', 'hidden');
		$('.calendar-close').click(function() {
			$('body').css('overflow', 'visible');
			$('.calendar').fadeOut();
		});
	}
});

setTimeout(function () {
	$('.calendar').addClass('calendar__load')
}, 1000);

// Popup - Price
$('.price-btn-open').click(function() {
	if ($(window).width() < 840) {
		var scrlTop = $(window).scrollTop();

		$('.price').fadeIn();
		$('body').addClass('position-fixed');
		$('.price-close').click(function() {
			$('body').removeClass('position-fixed');
			$('.price').fadeOut();
			$('html, body').animate({ scrollTop: scrlTop }, 100);
		});
	} else {
		$('.price').fadeIn();
		$('body').css('overflow', 'hidden');
		$('.price-close').click(function() {
			$('body').css('overflow', 'visible');
			$('.price').fadeOut();
		});
	}
});

// Popup - Info-lessons
$('.info-lessons-btn-open').click(function() {
	var popupsLessons = $('.info-lessons');

	for (i = 0; i < popupsLessons.length; i++) {
		if ($(popupsLessons[i]).attr('data-type') == $(this).attr('data-type')) {
			if ($(window).width() < 840) {
				var scrlTop = $(window).scrollTop();

				$(popupsLessons[i]).fadeIn();
				$('body').addClass('position-fixed');
				$('.info-lessons-close').click(function() {
					$('body').removeClass('position-fixed');
					$('.info-lessons').fadeOut();
					$('html, body').animate({ scrollTop: scrlTop }, 100);
				});
			} else {
				$(popupsLessons[i]).fadeIn();
				$('body').css('overflow', 'hidden');
				$('.info-lessons-close').click(function() {
					$('body').css('overflow', 'visible');
					$('.info-lessons').fadeOut();
				});
			}
		}
	}	
});

setTimeout(function () {
	$('.info-lessons').addClass('info-lessons__load')
}, 1000);

// Popup - Info-masters
$('.info-masters-btn-open').click(function() {
	var popupsMasters = $('.info-masters');

	for (i = 0; i < popupsMasters.length; i++) {
		if ($(popupsMasters[i]).attr('data-type') == $(this).attr('data-type')) {
			if ($(window).width() < 840) {
				var scrlTop = $(window).scrollTop();

				$(popupsMasters[i]).fadeIn();
				$('body').addClass('position-fixed');
				$('.info-masters-close').click(function() {
					$('body').removeClass('position-fixed');
					$('.info-masters').fadeOut();
					$('html, body').animate({ scrollTop: scrlTop }, 100);
				});
			} else {
				$(popupsMasters[i]).fadeIn();
				$('body').css('overflow', 'hidden');
				$('.info-masters-close').click(function() {
					$('body').css('overflow', 'visible');
					$('.info-masters').fadeOut();
				});
			}
		}
	}
});

// Fade-menu
$('.fade-menu-open').click(function() {
	var scrlTop = $(window).scrollTop();

	$('.fade-menu').fadeIn();
	$('body').addClass('position-fixed');
	$('.fade-menu-scrollTo').click(function() {
		$('body').removeClass('position-fixed');
		$('.fade-menu').fadeOut();
		$('.burger-checkbox').prop('checked', false);
	});

	$('.fade-menu-close').click(function() {
		$('body').removeClass('position-fixed');
		$('.fade-menu').fadeOut();
		$('.burger-checkbox').prop('checked', false);
		$('html, body').animate({ scrollTop: scrlTop }, 10);
	});
});

// Images contain
$('.img-box').each(function() {
    //set size
    var th = $(this).height(),//box height
        tw = $(this).width(),//box width
        im = $(this).children('img'),//image
        ih = im.height(),//inital image height
        iw = im.width();//initial image width
    if (ih>iw) {//if portrait
        im.addClass('ww').removeClass('wh');//set width 100%
    } else {//if landscape
        im.addClass('wh').removeClass('ww');//set height 100%
    }
    //set offset
    var nh = im.height(),//new image height
        nw = im.width(),//new image width
        hd = (nh-th)/2,//half dif img/box height
        wd = (nw-tw)/2;//half dif img/box width
    if (nh<nw) {//if portrait
        im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
    } else {//if landscape
        im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
    }
});

//Floating menu
$(window).scroll(function() {
    var floatingMenu = $(".floating-menu");
    var offset = floatingMenu.offset();
    if(offset.top <= 90){
    	$("#floating-menu").fadeOut();
    }
    else {
    	$("#floating-menu").fadeIn();
    }
});

// Masters - icons
function mastersIcons() {
	var mastersItems = $('.masters__list-item');
	var icons = $('.masters__icon-img-box');
	var iconsBox = $(icons).parent();

	for (i = 0; i < mastersItems.length; i++) {
		var iconBox = $(mastersItems[i]).children('.masters__icons-box');
		var icon = $(iconBox).children('.masters__icon-img-box');
		for (j = 0; j < icon.length; j++) {
			$(icon[j]).addClass('display-none');
			if ( $(mastersItems[i]).hasClass($(icon[j]).attr('data-type')) ) {
				$(icon[j]).removeClass('display-none');
			}
		}
	}
}
mastersIcons();

// Info-masters - icons
function infoMastersIcons() {
	var mastersItems = $('.info-masters');
	var icons = $('.info-masters__icon-img-box');
	var iconsBox = $(icons).parent();

	for (i = 0; i < mastersItems.length; i++) {
		var iconBox = $(mastersItems[i]).children('.info-masters__container').children('.info-masters__body').children('.info-masters__icons-box');
		var icon = $(iconBox).children('.info-masters__icon-img-box');
		for (j = 0; j < icon.length; j++) {
			$(icon[j]).addClass('display-none');
			if ( $(mastersItems[i]).hasClass($(icon[j]).attr('data-type')) ) {
				$(icon[j]).removeClass('display-none');
			}
		}
	}
}
infoMastersIcons();

// Mask
$.mask.definitions['~'] = /[a-z]/ ;

$("#popup-main-phone").mask("+7 (999) 999-99-99");

$("#popup-ask-phone").mask("+7 (999) 999-99-99");


//Validation email
$('#popup-main-email').on('keyup', function() {
	if (isValidEmail($(this).val())) {
		$('.popup-main__input--email').removeClass('popup-main__input--invalid');
	} else {
		$('.popup-main__input--email').addClass('popup-main__input--invalid');
	}
});

$('#popup-ask-email').on('keyup', function() {
	if (isValidEmail($(this).val())) {
		$('.popup-ask__input--email').removeClass('popup-ask__input--invalid');
	} else {
		$('.popup-ask__input--email').addClass('popup-ask__input--invalid');
	}
});

function isValidEmail(email) {
	return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email); 
}

// // Data-picker
// $('[data-toggle="datepicker"]').datepicker({
// 	autoShow: false,
// 	autoHide: true,
// 	container: '.popup-main__form-item-date',
// 	inline: true,
// });


// $('.datepicker-inline').addClass('display-none');

// $('.popup-main__input--date').on('click', function() {
// 	if ($('.datepicker-inline').hasClass('display-none')) {
// 		$('.datepicker-inline').fadeIn();
// 		$('.datepicker-inline').removeClass('display-none');
// 	} else {
// 		$('.datepicker-inline').fadeOut();
// 		$('.datepicker-inline').addClass('display-none');
// 	}
// })

// Masters icon info
$('.masters__icon').on('mouseover', function() {
	$(this).parent().find('.masters__icon-info').fadeIn();
});

$('.masters__icon').on('mouseout', function() {
	$('.masters__icon-info').fadeOut();
});

// Info-masters icon info
$('.info-masters__icon').on('mouseover', function() {
	$(this).parent().find('.info-masters__icon-info').fadeIn();
});

$('.info-masters__icon').on('mouseout', function() {
	$('.info-masters__icon-info').fadeOut();
});

// Scroll
$("a").click(function () {
    var elementClick = $(this).attr("href");
    var floatingMenuHeight = $('.floating-menu').height();
    var destination = $(elementClick).offset().top - floatingMenuHeight;

    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
});

// Map 
ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [59.949416, 30.356088],
        zoom: 14
    });

    myPlacemark = new ymaps.Placemark([59.949555, 30.356062], {     	
    }, {
    	iconLayout: 'default#image',
    	iconImageHref: 'design/img/icons/icon-map.png',
    	iconImageSize: [41, 54],
    	// iconImageOffset: [0, -10]
    });

    // myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
    //         hintContent: 'Собственный значок метки с контентом',
    //         balloonContent: 'А эта — новогодняя',
    //         iconContent: '12'
    //     }, {

    //         // Опции.
    //         // Необходимо указать данный тип макета.
    //         iconLayout: 'default#imageWithContent',
    //         // Своё изображение иконки метки.
    //         iconImageHref: 'images/ball.png',
    //         // Размеры метки.
    //         iconImageSize: [48, 48],
    //         // Смещение левого верхнего угла иконки относительно
    //         // её "ножки" (точки привязки).
    //         iconImageOffset: [-24, -24],
    //         // Смещение слоя с содержимым относительно слоя с картинкой.
    //         iconContentOffset: [15, 15],
    //         // Макет содержимого.
    //         iconContentLayout: MyIconContentLayout
    //     });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('rulerControl');
}
