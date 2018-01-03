var arrayMasters = [];

// For select list
$('.masters-select__block-list-item').on('click', function() {
	
	var that = $(this);
	var index;

	for (i = 0; i < arrayMasters.length; i++) {
		if (that.attr('data-type') == arrayMasters[i]) {
			index = i;
		}
	}

	if (index > -1) {
		arrayMasters.splice(index, 1);
	} else {
		arrayMasters.push(that.attr('data-type'));
	}

	index = '';

	$('.masters-select__list-item-box').html('');

	if(arrayMasters.length) {
		$('.masters-select__text-list-text').hide();
	} else {
		$('.masters-select__text-list-text').show();
		$('#masters-list-box').find('.masters__list-item').removeClass('display-none');
	}

	$('.masters__list-item').addClass('display-none');
	
	var myClass = $('#masters-list-box').find($('.masters__list-item'));

	for (i = 0; i < myClass.length; i++) {
		if ($(myClass[i]).hasClass(arrayMasters[0]) || $(myClass[i]).hasClass(arrayMasters[1]) || $(myClass[i]).hasClass(arrayMasters[2])) {
			$(myClass[i]).removeClass('display-none');
		}
	}

	for(var i = 0; i < arrayMasters.length; i++) {
		var element = $('.masters-select__block-list-box').find($('[data-type =' + arrayMasters[i] + ']'));

		$('.masters-select__list-item-box').append(
			'<span class="masters-select__text-list-item">' + element.html() +'</span>'
		)
	}

	if(!arrayMasters.length) {
		$('.masters__list-item').removeClass('display-none');
	}

	if($(this).hasClass('masters-select__block-list-item--active')) {
		$(this).removeClass('masters-select__block-list-item--active');
	} else {
		$(this).addClass('masters-select__block-list-item--active');
	}

});

// For buttons
$('.masters-select__btn').on('click', function() {
	var index; 
	var $this = $(this);
	for(var i = 0; i < arrayMasters.length; i++) {
		if ($this.attr('data-type') == arrayMasters[i] ) {
			index = i;
		}
	}
	if(index > -1) {
		arrayMasters.splice(index, 1);
	} else {
		arrayMasters.push($this.attr('data-type'));
	}
	index = '';
	$('.masters-select__list-item-box').html('');

	if(arrayMasters.length) {
		$('.masters-select__text-list-text').hide();
	} else {
		$('.masters-select__text-list-text').show();
		$('#masters-list-box').find('.masters__list-item').removeClass('display-none');
	}

	$('.masters__list-item').addClass('display-none');
	
	var myClass = $('#masters-list-box').find($('.masters__list-item'));

	for(var i = 0; i < arrayMasters.length; i++) {
		$('.masters__list').find('.'+ arrayMasters[i]).removeClass('display-none');
	}

	if(!arrayMasters.length) {
		$('.masters__list-item').removeClass('display-none');
	}

	if($(this).hasClass('masters-select__btn--active')) {
		$(this).removeClass('masters-select__btn--active');
	} else {
		$(this).addClass('masters-select__btn--active');
	}

})

//Toggler for select list
$('.masters-select__text-list-box ').on('click', function() {
	if ($(this).hasClass('masters-select__text-list-box--active')) {
		$('.masters-select__block-list-box').slideToggle();
		$(this).removeClass('masters-select__text-list-box--active');
		$('.masters-select__text-list-img').removeClass('masters-select__text-list-img--active');
	} else {
		$(this).addClass('masters-select__text-list-box--active');
		$('.masters-select__block-list-box').slideToggle();
		$('.masters-select__text-list-img').addClass('masters-select__text-list-img--active');
	}
})

//Disable list on click on bg
$('.masters__list-item').on('click', function() {
	if ($('.masters-select__text-list-box').hasClass('masters-select__text-list-box--active')) {
		$('.masters-select__text-list-box').removeClass('masters-select__text-list-box--active');
		$('.masters-select__text-list-img').removeClass('masters-select__text-list-img--active');
		$('.masters-select__block-list-box').slideToggle();
	}	
})