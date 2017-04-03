function url2json(url){
	var json = {}
	if (url) {

	}else if (window.location.search) {
		var arr = window.location.search.split('?')[1].split('&')
		for (var i = 0; i < arr.length; i++) {
			json[arr[i].split('=')[0]] = arr[i].split('=')[1]
		};
		return json;
	}else{
		return false;
	}
}

