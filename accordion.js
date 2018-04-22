$(document).ready(function() {
	$('#page-1').click(function() {
  	$('.accordion-content-2').slideUp(300).addClass('hide');
    $('.accordion-content-3').slideUp(300).addClass('hide');
    var accordion = $('.accordion-content-1');
    if(accordion.hasClass('hide')) {
    	accordion.slideDown(300).removeClass('hide');
    } else {
    	accordion.slideUp(300).addClass('hide');
    }
  });

  $('#page-2').click(function() {
  	$('.accordion-content-1').slideUp(300).addClass('hide');
    $('.accordion-content-3').slideUp(300).addClass('hide');
    var accordion = $('.accordion-content-2');
    if(accordion.hasClass('hide')) {
    	accordion.slideDown(300).removeClass('hide');
    } else {
    	accordion.slideUp(300).addClass('hide');
    }
  });

  $('#page-3').click(function() {
  	$('.accordion-content-1').slideUp(300).addClass('hide');
    $('.accordion-content-2').slideUp(300).addClass('hide');
    var accordion = $('.accordion-content-3');
    if(accordion.hasClass('hide')) {
    	accordion.slideDown(300).removeClass('hide');
    } else {
    	accordion.slideUp(300).addClass('hide');
    }
  });


});
