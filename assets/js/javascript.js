$('.nextSlide').click(function(){
	drawNextSlide();
});

$('.alterBackground').click(function(){

	$('.hero-unit').css('background-color', $('#color').val());

});

$('.wipeScreen').click(function(){

	wipeScreen();

});


$('.drawPath').click(function(){

	drawPath($('#startX').val(),$('#startY').val(),$('#endX').val(),$('#endY').val());

});

$('.drawArc').click(function(){

	drawArc($('#startX').val(),$('#startY').val(),$('#radius').val(),$('#endX').val(),$('#endY').val());

});

$('.drawQuad').click(function(){

	drawQuad($('#startX').val(),$('#startY').val(),$('#endX').val(),$('#endY').val());

});

$('.drawImage').click(function(){

	drawImage($('#startX').val(),$('#startY').val(),$('#source').val());

});

$('.loadDoodle').click(function(){

	loadSlide();

});