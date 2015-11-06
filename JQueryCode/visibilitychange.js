// 视觉改变触发
// 当用户焦点在另外一个标签上，或重新回到标签时，触发 JavaScript：

$(document).on('visibilitychange', function (e) {

	if (e.target.visibilityState === "visible") {
		console.log('Tab is now in view!');
	} else if (e.target.visibilityState === "hidden") {
		console.log('Tab is now hidden!');
	}

});

