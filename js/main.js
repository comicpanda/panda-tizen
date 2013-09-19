var user_agent = "Panda Tizen mobile (iPhone;)";
//Initialize function
var init = function () {
	var userAgent = navigator.userAgent + user_agent;
	tizen.websetting.setUserAgentString(userAgent, successCallback);
	tizen.websetting.removeAllCookies();
};

function successCallback() {
	window.location="http://m.tapastic.com/";
}

window.onload = init;