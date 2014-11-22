$(document).ready(function() {

	$(".leftest").fadeIn('slow');
	
	//---buttons---//
	$(".sidebtns").hover(function() {
	$(this).css("cursor", "pointer");
	});
	
	$("#social").click(
	function() {
	$("#links").css("right", "-50px");
	$("#links").fadeIn(1);
	$("#links").animate({right: '55px'}, 700);
	});
	
	$("#links").hover(function() {
	$(this).css("right", "55px");
	}, function() {
	$(this).delay(10000).fadeOut('slow');
	});
	
	$("#contact").click(
	function() {
	$("#info").css("right", "-50px");
	$("#info").fadeIn(1);
	$("#info").animate({right: '225px'}, 1000);
	});
	
	$("#info").hover(function() {
	$(this).css("right", "225px");
	}, function() {
	$(this).delay(10000).fadeOut('slow');
	});
	
	//---buttons---//
});