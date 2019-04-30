$(document).ready(function() {

		// плавное перемещение страницы к нужному блоку
	$(".to_bottom_a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

		$(".navbar-nav > li > a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});


$('.popup-youtube').magnificPopup({ 
    type: 'iframe' 
 });


$(".category .laboratory").hover(function () {
			$('.hide-laboratory').css({'display' : 'flex'});
});
$(".category .laboratory").mouseleave(function () {
			$('.hide-laboratory').css({'display' : 'none'});
});


$(".category .biotechnology").hover(function () {
			$('.hide-biotechnology').css({'display' : 'flex'});
});
$(".category .biotechnology").mouseleave(function () {
			$('.hide-biotechnology').css({'display' : 'none'});
});


$(".category .industrialControl").hover(function () {
			$('.hide-industrialControl').css({'display' : 'flex'});
});
$(".category .industrialControl").mouseleave(function () {
			$('.hide-industrialControl').css({'display' : 'none'});
});

});
