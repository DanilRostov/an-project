var arrayPopupLessons = [];

// For select list
function popupSelectLessons() {
	$('.popup-main-select-lessons__block-list-item').on('click', function() {
		var index; 
		var $this = $(this);
		for(var i = 0; i < arrayPopupLessons.length; i++) {
			if ($this.attr('data-type') == arrayPopupLessons[i] ) {
				index = i;
			}
		}
		if(index > -1) {
			arrayPopupLessons.splice(index, 1);
		} else {
			arrayPopupLessons.push($this.attr('data-type'));
		}
		index = '';

		$('.popup-main-select-lessons__list-item-box').html('');

		if(arrayPopupLessons.length) {
			$('.popup-main-select-lessons__text-list-text').hide();
		} else {
			$('.popup-main-select-lessons__text-list-text').show();
			$('#slider-popup-main-select-lessons').find('.popup-main-select-lessons__slide').removeClass('non-swiper-slide');
		}

		$('.popup-main-select-lessons__slide').addClass('non-swiper-slide');

		for(var i = 0; i < arrayPopupLessons.length; i++) {

			var element = $('.popup-main-select-lessons__block-list-box').find($('[data-type =' + arrayPopupLessons[i] + ']'));

			$('.popup-main-select-lessons__list-item-box').append(
				'<span class="popup-main-select-lessons__text-list-item">' + element.html() +'</span>'
			)

			$('#slider-popup-main-select-lessons').find('.'+ arrayPopupLessons[i]).removeClass('non-swiper-slide');
		}

		if(!arrayPopupLessons.length) {
			$('#slider-popup-main-select-lessons').find('.popup-main-select-lessons__slide').removeClass('non-swiper-slide');
		}

		if($(this).hasClass('popup-main-select-lessons__block-list-item--active')) {
			$(this).removeClass('popup-main-select-lessons__block-list-item--active');
		} else {
			$(this).addClass('popup-main-select-lessons__block-list-item--active');
		}
	})
}

popupSelectLessons();


//Switcher in popup
$('#switcher-lesson-btn').on('click', function() {
	if ($('#popup-lesson-select').hasClass('display-none')) {
		$('#popup-lesson-select').show();
		$('#popup-lesson-select').removeClass('display-none');
	} else {
		$('#popup-lesson-result').val(' ');
		$('.popup-main-select-lessons__block-list-box').hide();
		$('.popup-main-select-lessons__block-list-box').find('.popup-main-select-lessons__block-list-item').removeClass('popup-main-select-lessons__block-list-item--active');
		$('.popup-main-select-lessons__text-list-text').css('display', 'block');
		$('.popup-main-select-lessons__list-item-box').html(' ');
		$('.popup-main-select-lessons__text-list-box').removeClass('popup-main-select-lessons__text-list-box--active');
		$('.popup-main-select-lessons__text-list-img').removeClass('popup-main-select-lessons__text-list-img--active');
		$('#popup-lesson-select').hide();
		$('#popup-lesson-select').addClass('display-none');
		arrayPopupLessons = [];
	}
})

// Reset on close popup
// $('.popup-main-close').on('click', function() {
// 	$('#popup-lesson-result').val(' ');
// 	$('.popup-main-select-lessons__block-list-box').hide();
// 	$('.popup-main-select-lessons__block-list-box').find('.popup-main-select-lessons__block-list-item').removeClass('popup-main-select-lessons__block-list-item--active');
// 	$('.popup-main-select-lessons__text-list-text').css('display', 'block');
// 	$('.popup-main-select-lessons__list-item-box').html(' ');
// 	$('.popup-main-select-lessons__text-list-box').removeClass('popup-main-select-lessons__text-list-box--active');
// 	$('.popup-main-select-lessons__text-list-img').removeClass('popup-main-select-lessons__text-list-img--active');
// 	$('#popup-lesson-select').hide();
// 	$('#popup-lesson-select').addClass('display-none');
// 	$('#switcher-lesson').prop('checked', false);
// 	arrayPopupLessons = [];
// })

// Save values of select list
$('.popup-main-select-lessons__block-list-item').on('click', function() {
	$('#popup-lesson-result').val(' ');
	for(var i = 0; i < arrayPopupLessons.length; i++) {
		var element = $('.popup-main-select-lessons__block-list-box').find($('[data-type =' + arrayPopupLessons[i] + ']'));
		$('#popup-lesson-result').val( $('#popup-lesson-result').val() + ' ' + element.html());
	}
})

//Toggler for select list
$('.popup-main-select-lessons__text-list-box ').on('click', function() {
	if ($(this).hasClass('popup-main-select-lessons__text-list-box--active')) {
		$('.popup-main-select-lessons__block-list-box').slideToggle();
		$(this).removeClass('popup-main-select-lessons__text-list-box--active');
		$('.popup-main-select-lessons__text-list-img').removeClass('popup-main-select-lessons__text-list-img--active');
	} else {
		$(this).addClass('popup-main-select-lessons__text-list-box--active');
		$('.popup-main-select-lessons__block-list-box').slideToggle();
		$('.popup-main-select-lessons__text-list-img').addClass('popup-main-select-lessons__text-list-img--active');
	}
})