//Initialize function
var init = function () {
	var userAgent = 'Panda Tizen mobile like iPhone - ' + navigator.userAgent; 
	tizen.websetting.setUserAgentString(userAgent, successCallback);
};

var successCallback = function() {
	// add eventListener for tizenhwkey
	document.getElementById("body").innerHTML = '<iframe sandbox="allow-scripts allow-forms" src="http://mlocal.tapastic.com" align="center" width="100%" height="100%"  frameborder=no scrolling="yes" id="pandaFrame"></iframe>';
	var pandaFrame = document.getElementById('pandaFrame'),
		pandaFrameWin = pandaFrame.contentWindow || pandaFrame;
    document.addEventListener('tizenhwkey', function(e) {
    	if(e.keyName == "back") {
    		pandaFrameWin.location.pathname !== '/'?
    		pandaFrameWin.history.back():
            tizen.application.getCurrentApplication().exit();
        }
    });
};

window.onload = init;