$('a.top').click(function (e) {
	e.preventDefault();
	$(document.body).animate({scrollTop:0},800);
});



/*
html

<a class="top" href="#">Back to top</a>

*/