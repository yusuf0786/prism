$(function(){
	
	$(".banner h1").fadeIn(1500);
	$(".banner p").fadeIn(1500);
	$(".my-button").animate({
		marginLeft: 50,
		opacity: 1
	},0580);
});

$(document).scroll(function(){
	//Show element after user scrolls 1000px
	var y = $(this).scrollTop();
	if (y > 1000) {
		$('.images-section .section, .images-section .text-center').slideDown();
	} else {
		$('.images-section .section, .images-section .text-center').slideUp();
	}
	
	$('.images-section .section .right-section h3, .images-section .section .right-section p, .images-section .section .right-section button').each(function () {
		var t = $(this).parent().offset().top + -680;
		if (y > t) {
			$(this).slideDown(1000);
		} else {
            $(this).slideUp(1000);
		}
	});
});