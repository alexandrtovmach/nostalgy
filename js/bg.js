function initBgImg() {
	var i = 1;
	setInterval(function() {
		if (i == wall.getElementsByTagName('img').length) {i=0}
		animation(i);
		i++;
		
	}, 2000)
}
function rand(min, max) {
	if (max > document.body.scrollHeight-600) {max = 1800};
	return (min + Math.floor(Math.random()*(max + 1 - min)))
}
function animation(i) {
	var a = (wall.getElementsByTagName('img')[i]);
	a.style.opacity = 1;
	a.style.left = rand(50, (document.body.clientWidth - 200 - 50)) + 'px';
	a.style.top = rand(window.pageYOffset, ((window.pageYOffset + (window.screen.height-300)) - 200  - 50)) + 'px';
	setTimeout(function() {a.style.opacity = 0;}, 6000);
}