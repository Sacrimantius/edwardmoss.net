$('.nextSlide').click(drawNextSlide);

$('.alterBackground').click(function(){

	$('.hero-unit').css('background-color', $('#color').val());

});

$('.wipeScreen').click(wipeScreen);


$('.drawPath').click(function(){

	drawPath($('#startX').val(),$('#startY').val(),$('#endX').val(),$('#endY').val(), context);

});

$('.drawArc').click(function(){

	drawArc($('#startX').val(),$('#startY').val(),$('#radius').val(),$('#endX').val(),$('#endY').val(), context);

});

$('.drawQuad').click(function(){

	drawQuad($('#startX').val(),$('#startY').val(),$('#endX').val(),$('#endY').val(), context);

});

$('.drawImage').click(function(){

	drawImage($('#startX').val(),$('#startY').val(),$('#source').val(), context);

});

$('.loadDoodle').click(loadSlide);