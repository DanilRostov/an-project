var arrayPopupMasters = [];

// For select list
$('.popup-main-select-masters__block-list-item').on('click', function() {
	var index; 
	var $this = $(this);
	for(var i = 0; i < arrayPopupMasters.length; i++) {
		if ($this.attr('data-type') == arrayPopupMasters[i] ) {
			index = i;
		}
	}
	if(index > -1) {
		arrayPopupMasters.splice(index, 1);
	} else {
		arrayPopupMasters.push($this.attr('data-type'));
	}
	index = '';

	$('.popup-main-select-masters__list-item-box').html('');

	if(arrayPopupMasters.length) {
		$('.popup-main-select-masters__text-list-text').hide();
	} else {
		$('.popup-main-select-masters__text-list-text').show();
		$('#slider-popup-main-select-masters').find('.popup-main-select-masters__slide').removeClass('non-swiper-slide');
	}

	$('.popup-main-select-masters__slide').addClass('non-swiper-slide');

	for(var i = 0; i < arrayPopupMasters.length; i++) {

		var element = $('.popup-main-select-masters__block-list-box').find($('[data-type =' + arrayPopupMasters[i] + ']'));

		$('.popup-main-select-masters__list-item-box').append(
			'<span class="popup-main-select-masters__text-list-item">' + element.html() + '</span>'
		)

		$('#slider-popup-main-select-masters').find('.'+ arrayPopupMasters[i]).removeClass('non-swiper-slide');
	}

	if(!arrayPopupMasters.length) {
		$('#slider-popup-main-select-masters').find('.popup-main-select-masters__slide').removeClass('non-swiper-slide');
	}

	if($(this).hasClass('popup-main-select-masters__block-list-item--active')) {
		$(this).removeClass('popup-main-select-masters__block-list-item--active');
	} else {
		$(this).addClass('popup-main-select-masters__block-list-item--active');
	}

})

//Switcher in popup
$('#switcher-masters-btn').on('click', function() {
	if ($('#popup-masters-select').hasClass('display-none')) {
		$('#popup-masters-select').show();
		$('#popup-masters-select').removeClass('display-none');
	} else {
		$('#popup-masters-result').val(' ');
		$('.popup-main-select-masters__block-list-box').hide();
		$('.popup-main-select-masters__block-list-box').find('.popup-main-select-masters__block-list-item').removeClass('popup-main-select-masters__block-list-item--active');
		$('.popup-main-select-masters__text-list-text').css('display', 'block');
		$('.popup-main-select-masters__list-item-box').html(' ');
		$('.popup-main-select-masters__text-list-box').removeClass('popup-main-select-masters__text-list-box--active');
		$('.popup-main-select-masters__text-list-img').removeClass('popup-main-select-masters__text-list-img--active');
		$('#popup-masters-select').hide();
		$('#popup-masters-select').addClass('display-none');
		arrayPopupMasters = [];
	}
})

// // Reset on close popup
// $('.popup-main-close').on('click', function() {
// 	$('#popup-masters-result').val(' ');
// 	$('.popup-main-select-masters__block-list-box').hide();
// 	$('.popup-main-select-masters__block-list-box').find('.popup-main-select-masters__block-list-item').removeClass('popup-main-select-masters__block-list-item--active');
// 	$('.popup-main-select-masters__text-list-text').css('display', 'block');
// 	$('.popup-main-select-masters__list-item-box').html(' ');
// 	$('.popup-main-select-masters__text-list-box').removeClass('popup-main-select-masters__text-list-box--active');
// 	$('.popup-main-select-masters__text-list-img').removeClass('popup-main-select-masters__text-list-img--active');
// 	$('#popup-masters-select').hide();
// 	$('#popup-masters-select').addClass('display-none');
// 	$('#switcher-masters').prop('checked', false);
// 	arrayPopupMasters = [];
// })

// Save values of select list
$('.popup-main-select-masters__block-list-item').on('click', function() {
	$('#popup-masters-result').val(' ');
	for(var i = 0; i < arrayPopupMasters.length; i++) {
		var element = $('.popup-main-select-masters__block-list-box').find($('[data-type =' + arrayPopupMasters[i] + ']'));
		$('#popup-masters-result').val( $('#popup-masters-result').val() + ' ' + element.html());
	}
})

//Toggler for select list
$('.popup-main-select-masters__text-list-box ').on('click', function() {
	if ($(this).hasClass('popup-main-select-masters__text-list-box--active')) {
		$('.popup-main-select-masters__block-list-box').slideToggle();
		$(this).removeClass('popup-main-select-masters__text-list-box--active');
		$('.popup-main-select-masters__text-list-img').removeClass('popup-main-select-masters__text-list-img--active');
	} else {
		$(this).addClass('popup-main-select-masters__text-list-box--active');
		$('.popup-main-select-masters__block-list-box').slideToggle();
		$('.popup-main-select-masters__text-list-img').addClass('popup-main-select-masters__text-list-img--active');
	}
})