var arrayPopupTheme = [];

// For select list
// function popupSelectTheme() {
// 	$('.popup-ask-select-theme__block-list-item').on('click', function() {
// 		var index; 
// 		var $this = $(this);
// 		for(var i = 0; i < arrayPopupTheme.length; i++) {
// 			if ($this.attr('data-type') == arrayPopupTheme[i] ) {
// 				index = i;
// 			}
// 		}
// 		if(index > -1) {
// 			arrayPopupTheme.splice(index, 1);
// 		} else {
// 			arrayPopupTheme.push($this.attr('data-type'));
// 		}
// 		index = '';

// 		$('.popup-ask-select-theme__list-item-box').html('');

// 		if(arrayPopupTheme.length) {
// 			$('.popup-ask-select-theme__text-list-text').hide();
// 		} else {
// 			$('.popup-ask-select-theme__text-list-text').show();
// 		}

// 		for(var i = 0; i < arrayPopupTheme.length; i++) {

// 			var element = $('.popup-ask-select-theme__block-list-box').find($('[data-type =' + arrayPopupTheme[i] + ']'));

// 			$('.popup-ask-select-theme__list-item-box').append(
// 				'<span class="popup-ask-select-theme__text-list-item">' + element.html() +'</span>'
// 			)

// 			$('#slider-popup-ask-select-theme').find('.'+ arrayPopupTheme[i]).removeClass('non-swiper-slide');
// 		}

// 		if(!arrayPopupTheme.length) {
// 			$('#slider-popup-ask-select-theme').find('.popup-ask-select-theme__slide').removeClass('non-swiper-slide');
// 		}

// 		if($(this).hasClass('popup-ask-select-theme__block-list-item--active')) {
// 			$(this).removeClass('popup-ask-select-theme__block-list-item--active');
// 		} else {
// 			$(this).addClass('popup-ask-select-theme__block-list-item--active');
// 		}
// 	})
// }

// popupSelectTheme();

$('.popup-ask-select-theme__block-list-item').on('click', function() {
	$('#popup-theme-result').val($(this).html());

	$('.popup-ask-select-theme__block-list-item').removeClass('popup-ask-select-theme__block-list-item--active');
	$(this).addClass('popup-ask-select-theme__block-list-item--active');

	$('.popup-ask-select-theme__text-list-text').hide();

	var element = $(this).html();
	$('.popup-ask-select-theme__list-item-box').html(' ');
	$('.popup-ask-select-theme__list-item-box').append(
		'<span class="popup-ask-select-theme__text-list-item">' + element +'</span>'
	)
	
});

// Save values of select list
// $('.popup-ask-select-theme__block-list-item').on('click', function() {
// 	$('#popup-theme-result').val(' ');
// 	for(var i = 0; i < arrayPopupTheme.length; i++) {
// 		var element = $('.popup-ask-select-theme__block-list-box').find($('[data-type =' + arrayPopupTheme[i] + ']'));
// 		$('#popup-theme-result').val( $('#popup-theme-result').val() + ' ' + element.html());
// 	}
// })

//Toggler for select list
$('.popup-ask-select-theme__text-list-box ').on('click', function() {
	if ($(this).hasClass('popup-ask-select-theme__text-list-box--active')) {
		$('.popup-ask-select-theme__block-list-box').slideToggle();
		$(this).removeClass('popup-ask-select-theme__text-list-box--active');
		$('.popup-ask-select-theme__text-list-img').removeClass('popup-ask-select-theme__text-list-img--active');
	} else {
		$(this).addClass('popup-ask-select-theme__text-list-box--active');
		$('.popup-ask-select-theme__block-list-box').slideToggle();
		$('.popup-ask-select-theme__text-list-img').addClass('popup-ask-select-theme__text-list-img--active');
	}
})