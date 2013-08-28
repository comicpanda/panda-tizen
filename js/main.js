var userAgent = "Panda Tizen mobile (iPhone;)";
//Initialize function
var init = function () {
    tizen.websetting.setUserAgentString(userAgent, successCallback);
   // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) { // assign hardware buttons click event handler
		if(e.keyName == 'back') { // if back button is clicked
			if (document.URL.indexOf("index.html") > 0) {
				tizen.application.getCurrentApplication().exit();
				} 
			else {
				history.back();
			}
		}
		else if (e.keyName === 'menu') {
		    // Handle menu options here
         }
	});
};

function successCallback()
{
	window.location="http://m.tapastic.com";
	console.log("The requested user agent string has just been set successfully." + navigator.userAgent);
}

window.onload = init;