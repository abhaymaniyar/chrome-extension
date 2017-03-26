var time = 0;

function startTimer() {
	// body...
setInterval(function() {
    time++;

    // broadcast
    var myTime = {"myTime": time};
    chrome.runtime.sendMessage(myTime, function(data){
    	console.log(data);
    });

    if (time % 5 == 0) {
    	var options = {
    		"type": "basic",
    		"iconUrl": "icon.png",
    		"title": "Primary notif",
    		"message": "this is a notification"
    	}

    	var id = "someid"+time;
    	chrome.notifications.create(id, options, function(){});
    }

}, 1000);
}

// listen
//request = ("startTime": true)
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
	if (request.startTime && time == 0) {
		startTimer();
	}
});
