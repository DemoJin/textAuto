// Version 1.0.0

function textAuto() {

	$('.textAuto').each(function() {
		$(this).css('font-size','initial');
		$(this).wrapInner('<div class="textAuto-inner" style="display:inline-block;white-space:nowrap"></div>');
		var	fontSize = parseInt($(this).css('font-size')),
				containerWidth = $(this).outerWidth(),
				innerWidth = $(this).find('.textAuto-inner').outerWidth(),
				newfontSize = (containerWidth * fontSize) / innerWidth,
				maxFont = $(this).attr('textAuto-max'),
				minFont = $(this).attr('textAuto-min'),
				adjust = $(this).attr('textAuto-adjust');
		
		if(adjust){ newfontSize = newfontSize * adjust; }

		if (newfontSize > maxFont) {
			newfontSize = maxFont
		} else if (newfontSize < minFont) {
			newfontSize = minFont
		}

		$(this).css('font-size', newfontSize + 'px').find('.textAuto-inner').contents().unwrap();

	});
}

textAuto();

$(window).on('resize', textAuto);