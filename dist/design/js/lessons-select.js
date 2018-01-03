var arrayLessons = [];

// For select list
$('.lessons-select__block-list-item').on('click', function() {
	var index; 
	var $this = $(this);
	for(var i = 0; i < arrayLessons.length; i++) {
		if ($this.attr('data-type') == arrayLessons[i] ) {
			index = i;
		}
	}
	if(index > -1) {
		arrayLessons.splice(index, 1);
	} else {
		arrayLessons.push($this.attr('data-type'));
	}
	index = '';

	$('.lessons-select__list-item-box').html('');

	if(arrayLessons.length) {
		$('.lessons-select__text-list-text').hide();
	} else {
		$('.lessons-select__text-list-text').show();
		$('#slider-lessons').find('.lessons__slide').removeClass('non-swiper-slide');
	}

	$('.lessons__slide').addClass('non-swiper-slide');

	for(var i = 0; i < arrayLessons.length; i++) {

		var element = $('.lessons-select__block-list-box').find($('[data-type =' + arrayLessons[i] + ']'));

		$('.lessons-select__list-item-box').append(
			'<span class="lessons-select__text-list-item">' + element.html() + '</span>'
		)

		$('#slider-lessons').find('.'+ arrayLessons[i]).removeClass('non-swiper-slide');
	}

	if(!arrayLessons.length) {
		$('#slider-lessons').find('.lessons__slide').removeClass('non-swiper-slide');
	}

	if($(this).hasClass('lessons-select__block-list-item--active')) {
		$(this).removeClass('lessons-select__block-list-item--active');
	} else {
		$(this).addClass('lessons-select__block-list-item--active');
	}

	swiperLessons.update();

});

// For buttons
$('.lessons-select__btn').on('click', function() {
	var index; 
	var $this = $(this);

	for(var i = 0; i < arrayLessons.length; i++) {
		if ($this.attr('data-type') == arrayLessons[i] ) {
			index = i;
		}
	}

	if(index > -1) {
		arrayLessons.splice(index, 1);
	} else {
		arrayLessons.push($this.attr('data-type'));
	}

	index = '';

	if(!arrayLessons.length) {
		$('#slider-lessons').find('.lessons__slide').removeClass('non-swiper-slide');
	}

	$('.lessons__slide').addClass('non-swiper-slide');

	for(var i = 0; i < arrayLessons.length; i++) {
		$('#slider-lessons').find('.'+ arrayLessons[i]).removeClass('non-swiper-slide');
	}

	if(!arrayLessons.length) {
		$('#slider-lessons').find('.lessons__slide').removeClass('non-swiper-slide');
	}

	swiperLessons.update();

	if($(this).hasClass('lessons-select__btn--active')) {
		$(this).removeClass('lessons-select__btn--active');
	} else {
		$(this).addClass('lessons-select__btn--active');
	}

});

//Reset selected on open
$('.popup-open').click(function() {
	var buttons = $('.lessons-select__buttons').find('.lessons-select__btn');

	// reset for buttons
	for (i = 0; i < buttons.length; i++) {
		if ($(buttons[i]).hasClass('lessons-select__btn--active')) {
			$(buttons[i]).removeClass('lessons-select__btn--active');
		}
	}
	$('#slider-lessons').find('.lessons__slide').removeClass('non-swiper-slide');

	// reset for select-list
	$('.lessons-select__block-list-box').hide();
	$('.lessons-select__block-list-box').find('.lessons-select__block-list-item').removeClass('lessons-select__block-list-item--active');
	$('.lessons-select__text-list-text').css('display', 'block');
	$('.lessons-select__list-item-box').html(' ');
	$('.lessons-select__text-list-box').removeClass('lessons-select__text-list-box--active');
	$('.lessons-select__text-list-img').removeClass('lessons-select__text-list-img--active');
	
	// reset swiper
	arrayLessons = [];
	swiperLessons.update();
	swiperLessons.slideTo(0);
});

//Toggler for select list
$('.lessons-select__text-list-box ').on('click', function() {
	if ($(this).hasClass('lessons-select__text-list-box--active')) {
		$('.lessons-select__block-list-box').slideToggle();
		$(this).removeClass('lessons-select__text-list-box--active');
		$('.lessons-select__text-list-img').removeClass('lessons-select__text-list-img--active');
	} else {
		$(this).addClass('lessons-select__text-list-box--active');
		$('.lessons-select__block-list-box').slideToggle();
		$('.lessons-select__text-list-img').addClass('lessons-select__text-list-img--active');
	}
});

//Disable list on click on bg
$('.swiper-wrapper').on('click', function() {
	if ($('.lessons-select__text-list-box').hasClass('lessons-select__text-list-box--active')) {
		$('.lessons-select__text-list-box').removeClass('lessons-select__text-list-box--active');
		$('.lessons-select__text-list-img').removeClass('lessons-select__text-list-img--active');
		$('.lessons-select__block-list-box').slideToggle();
	}	
});