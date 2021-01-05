$(function(){
	
	$(".banner h1").fadeIn(1500);
	$(".banner p").fadeIn(1500);
	$(".my-button").show(0580);
	
	
});

$(document).scroll(function(){
    //Show element after user scrolls 1000px
    var y = $(this).scrollTop();
    if (y > 1000) {
        $('.images-section .section').slideDown();
    } else {
        $('.images-section .section').slideUp();
    }
	
	$('.images-section .section .right-section h3, .images-section .section .right-section p').each(function () {
        var t = $(this).parent().offset().top + -158;
        if (y > t) {
            $(this)slideDown(1000);
        } else {
            $(this).slideUp(1000);
        }
    });
});