var userAgent = "Panda Tizen mobile (iPhone;)";
//Initialize function
var init = function () {
    tizen.websetting.setUserAgentString(userAgent, successCallback);
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
};

function successCallback()
{
	window.location="http://m.tapastic.com";
	console.log("The requested user agent string has just been set successfully." + navigator.userAgent);
}

window.onload = init;