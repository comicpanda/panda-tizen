//Initialize function
var init = function () {
	
	var userAgent = 'Panda Tizen mobile like iPhone - ' + navigator.userAgent; 
	tizen.websetting.setUserAgentString(userAgent, successCallback);
};

function successCallback() {
	window.location="http://m.tapastic.com/";
}

window.onload = init;