//Initialize function
var init = function () {
	var userAgent = 'Panda Tizen mobile like iPhone - ' + navigator.userAgent; 
	tizen.websetting.setUserAgentString(userAgent, successCallback);
	
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back") {
            tizen.application.getCurrentApplication().exit();
        }
    });
};

var successCallback = function() {
	document.getElementById("body").innerHTML = '<iframe seamless src="http://m.tapastic.com" align="center" width="100%" height="100%"  frameborder=no scrolling="yes" id="pandaFrame"></iframe>'
};

window.onload = init;
