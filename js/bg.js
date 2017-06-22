function initBgImg() {
	var i = 0;
	setInterval(function() {
		if (i == wall.getElementsByTagName('img').length) {i=0}
		animation(i);
		i++;
	}, 2000)
}
function randPos(min, max) {
	if (max > document.body.scrollHeight-600) {max = (document.documentElement)? document.documentElement.offsetHeight-400: doocument.body.offsetHeight-400};
	return (min + Math.floor(Math.random()*(max + 1 - min)))
}
function animation(i) {
	var a = (wall.getElementsByTagName('img')[i]);
	a.style.opacity = 1;
	a.style.width = '150px';
	a.style.height = '150px';
	var vrtcl = randPos(window.pageYOffset, ((window.pageYOffset + (window.screen.height-200)) - 75 - 50))
	a.style.top = vrtcl + 'px';
	var side = (vrtcl % 2 == 0)? 'left': 'right';
	var hrznt = randPos(50, (document.body.clientWidth/2 - document.getElementsByClassName('content')[0].clientWidth/2 - 75))
	a.style[side] = hrznt + 'px';
	setTimeout(function() {
		a.style.opacity = 0;
		a.style.width = '';
		a.style.height = '';
	}, 4000);
}