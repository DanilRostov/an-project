var arrayCalendar = [];

// For buttons
$('.calendar__btn').on('click', function() {
	var index; 
	var $this = $(this);
	
	arrayCalendar.push($this.attr('data-type'));
	index = '';
	
	$('.calendar__lessons-bg').addClass('display-none');
	
	var lessonsBoxes = $('.calendar__lessons-bg');

	for (i = 0; i < lessonsBoxes.length; i++) {

		for (j = 0; j < arrayCalendar.length; j++) {
			if ($(lessonsBoxes[i]).hasClass(arrayCalendar[j])) {
				$(lessonsBoxes[i]).removeClass('display-none');
			}
		}
	}

	if(!arrayCalendar.length) {
		$('.calendar__lessons-box').removeClass('calendar__opacity');
	}

	$('.calendar__btn').removeClass('calendar__btn--active');
	$(this).addClass('calendar__btn--active');

	arrayCalendar = [];

})

$('.calendar__lessons-bg').on('mouseover', function() {
	cellsArray = [];
	var cells = $('.calendar__lessons-bg');
	$('.calendar__lessons-bg').addClass('calendar__opacity');
	for (i = 0; i < cells.length; i++) {
		if ($(cells[i]).attr('data-type') == $(this).attr('data-type')) {
			cellsArray.push($(cells[i]));
		}
	}
	for (i = 0; i < cellsArray.length; i++) {
		$(cellsArray[i]).removeClass('calendar__opacity');
	}
})

$('.calendar__lessons-bg').on('mouseout', function() {
	$('.calendar__lessons-bg').removeClass('calendar__opacity');
})