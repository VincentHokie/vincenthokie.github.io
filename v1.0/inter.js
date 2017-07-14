$(document).ready(function() {

	//---buttons---//
	$(".sidebtns").hover(function() {
	$(this).css("cursor", "pointer");
	});
	
	$("#social").click(
	function() {
	if (!$(this).hasClass("clicked")) {
	$(this).animate({right: '55px'}, 700).addClass("clicked");
	} else {
	$(this).animate({right: '-10px'}, 700).removeClass("clicked");
	}
	});
	
	$("#links").hover(function() {
	$("#social").css("right", "55px");
	});

	$("#contact").click(
	function() {
	if (!$(this).hasClass("clicked")) {
	$(this).animate({right:'240px'}, 1000).addClass("clicked");
	} else {
	$(this).animate({right:'-10px'}, 1000).removeClass("clicked");
	}
	});

	$("#info").hover(function() {
	$("#contact").css("right", "240x");
	});

	//---buttons---//
});