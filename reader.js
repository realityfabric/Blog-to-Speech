var post = $(".post_container");
var post_content; 

var speak = function (msg) { 
	var speech = new SpeechSynthesisUtterance(msg); 
	speechSynthesis.speak(speech); 
} 

var cancel = function () { 
	speechSynthesis.cancel(); 
} 

var next = function () { 
	if (post === undefined || post === null) { speak("Error: Post Doesn't Exist"); return; } //it's not going to work
	var holder = undefined; 
	
	while (holder != "regular") { 
		post = post.nextSibling; 
		
		if (post.children != undefined && post.children.length > 0 && post.children[0].dataset != undefined) { 
			holder = post.children[0].dataset.type; 
		} 
	} 

	if ($("#" + post.children[0].id + " > .post_wrapper > .post_content > .post_content_inner > .post_container > .post_body") != undefined) {
		post_content = $("#" + post.children[0].id + " > .post_wrapper > .post_content > .post_content_inner > .post_container > .post_body").textContent; 
	}
	else if ($("#" + post.children[0].id + " > .post_wrapper > .post_content > .post_content_inner > .post_container > .reblog-list > .reblog-list-item > .reblog-content") != undefined) {
		post_content = $("#" + post.children[0].id + " > .post_wrapper > .post_content > .post_content_inner > .post_container > .reblog-list > .reblog-list-item > .reblog-content").textContent;
	}
	else {
		post_content = "undefined content";
	}
	speak(post_content); 
} 

var init = function () { 
	next(); 
} 

init();
