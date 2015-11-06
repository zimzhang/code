$.preloadImages = function(){
	for (var i = 0; i < arguments.length; i++) {
		$('<img>').attr('src',arguments[i]);
	}
};

$.preloadImages('img/hover-on.png','img/hover-off.png');


//检查完毕加载

$('img').load(function(){
	console.log('images load successful');
});



//自动修复损坏的图片
$('img').on('error',function(){
	$(this).prop('src','img/broken.png');
})