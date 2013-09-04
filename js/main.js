var userAgent = "Panda Tizen mobile (iPhone;)";
//Initialize function
var init = function () {
    tizen.websetting.setUserAgentString(userAgent, successCallback);
};

function successCallback() {
	window.location="http://m.tapastic.com";
}

window.onload = init;