var arrayGallery = [];

$('.gallery__btn').on('click', function() {
	var index; 
	var $this = $(this);

	for(var i = 0; i < arrayGallery.length; i++) {
		if ($this.attr('data-type') == arrayGallery[i] ) {
			index = i;
		}
	}

	if(index > -1) {
		arrayGallery.splice(index, 1);
	} else {
		arrayGallery.push($this.attr('data-type'));
	}

	index = '';

	if(!arrayGallery.length) {
		$('#slider-gallery').find('.gallery__slide').removeClass('non-swiper-slide');
	}

	$('.gallery__slide').addClass('non-swiper-slide');

	var myClass = $('#slider-gallery').find($('.gallery__slide'));

	for (i = 0; i < myClass.length; i++) {

		for (j = 0; j < arrayGallery.length; j++) {
			if ($(myClass[i]).hasClass(arrayGallery[j])) {
				$(myClass[i]).removeClass('non-swiper-slide');
			}
		}
	}

	if(!arrayGallery.length) {
		$('#slider-gallery').find('.gallery__slide').removeClass('non-swiper-slide');
	}

	swiperGallery.update();

	if($(this).hasClass('gallery__btn--active')) {
		$(this).removeClass('gallery__btn--active');
	} else {
		$(this).addClass('gallery__btn--active');
	}
});

