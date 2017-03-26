var toSend = {"startTime": true};

chrome.runtime.sendMessage( toSend, function(data) {
	// body...
	console.log(data);
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		// body...
		if (request.myTime) {
			document.getElementById("counter").innerText = request.myTime;
		}
	}
);