$(document).ready(function() {
	
	$("#home, #con, #ed, #pro, #exp, #sks").hover(function() {
	$(this).css("cursor", "pointer");
	});
	
	$("#home").click(function() {
	if ($("#ed").hasClass("picked")) {
	$("#cube").toggleClass("show-education");
	} else if ($("#con").hasClass("picked")) {
	$("#cube").toggleClass("show-contacts");
	} else if ($("#pro").hasClass("picked")) {
	$("#cube").toggleClass("show-projects");
	} else if ($("#exp").hasClass("picked")) {
	$("#cube").toggleClass("show-experience");
	} else if ($("#sks").hasClass("picked")) {
	$("#cube").toggleClass("show-skill");
	}else {
	}
	$("#ed, #con, #home, #pro, #exp, #sks").removeClass("picked");
	$(this).addClass("picked");
	});

	$("#ed").click(function() {
	if ($("#home").hasClass("picked")) {
	$("#cube").toggleClass("show-education");
	} else if ($("#con").hasClass("picked")) {
	$("#cube").toggleClass("show-contacts").toggleClass("show-education");
	} else if ($("#pro").hasClass("picked")) {
	$("#cube").toggleClass("show-projects").toggleClass("show-education");
	} else if ($("#sks").hasClass("picked")) {
	$("#cube").toggleClass("show-skill").toggleClass("show-education");
	}else if ($("#exp").hasClass("picked")){
	$("#cube").toggleClass("show-experience").toggleClass("show-education");
	} else {
	}
	
	$("#ed, #con, #home, #pro, #exp, #sks").removeClass("picked");
	$(this).addClass("picked");
	});
	
	$("#con").click(function() {
	if ($("#home").hasClass("picked")) {
	$("#cube").toggleClass("show-contacts");
	} else if ($("#sks").hasClass("picked")) {
	$("#cube").toggleClass("show-skill").toggleClass("show-contacts");
	} else if ($("#pro").hasClass("picked")) {
	$("#cube").toggleClass("show-projects").toggleClass("show-contacts");
	} else if ($("#ed").hasClass("picked")) {
	$("#cube").toggleClass("show-education").toggleClass("show-contacts");
	}else if ($("#exp").hasClass("picked")) {
	$("#cube").toggleClass("show-experience").toggleClass("show-contacts");
	} else {
	}
	
	$("#ed, #con, #home, #pro, #exp, #sks").removeClass("picked");
	$(this).addClass("picked");
	});
	
	$("#pro").click(function() {
	if ($("#home").hasClass("picked")) {
	$("#cube").toggleClass("show-projects");
	} else if ($("#con").hasClass("picked")) {
	$("#cube").toggleClass("show-contacts").toggleClass("show-projects");
	} else if ($("#sks").hasClass("picked")) {
	$("#cube").toggleClass("show-skill").toggleClass("show-projects");
	} else if ($("#ed").hasClass("picked")) {
	$("#cube").toggleClass("show-education").toggleClass("show-projects");
	}else if ($("#exp").hasClass("picked")) {
	$("#cube").toggleClass("show-experience").toggleClass("show-projects");
	} else {
	}
	
	$("#ed, #con, #home, #pro, #exp, #sks").removeClass("picked");
	$(this).addClass("picked");
	});
	
	$("#exp").click(function() {
	if ($("#home").hasClass("picked")) {
	$("#cube").toggleClass("show-experience");
	} else if ($("#con").hasClass("picked")) {
	$("#cube").toggleClass("show-contacts").toggleClass("show-experience");
	} else if ($("#pro").hasClass("picked")) {
	$("#cube").toggleClass("show-experience").toggleClass("show-projects");
	} else if ($("#ed").hasClass("picked")) {
	$("#cube").toggleClass("show-education").toggleClass("show-experience");
	}else if ($("#sks").hasClass("picked")) {
	$("#cube").toggleClass("show-skill").toggleClass("show-experience");
	} else {
	}
	
	$("#ed, #con, #home, #pro, #exp, #sks").removeClass("picked");
	$(this).addClass("picked");
	});
	
	$("#sks").click(function() {
	if ($("#home").hasClass("picked")) {
	$("#cube").toggleClass("show-skill");
	} else if ($("#con").hasClass("picked")) {
	$("#cube").toggleClass("show-contacts").toggleClass("show-skill");
	} else if ($("#pro").hasClass("picked")) {
	$("#cube").toggleClass("show-skill").toggleClass("show-projects");
	} else if ($("#ed").hasClass("picked")) {
	$("#cube").toggleClass("show-education").toggleClass("show-skill");
	}else if ($("#exp").hasClass("picked")) {
	$("#cube").toggleClass("show-experience").toggleClass("show-skill");
	} else {
	}
	
	$("#ed, #con, #home, #pro, #exp, #sks").removeClass("picked");
	$(this).addClass("picked");
	});

	$("#fb, #twit").hover(function() {
	$(this).css("backgroundColor", "grey");
	}, function() {
	$(this).css("backgroundColor", "#252525");
	});
});