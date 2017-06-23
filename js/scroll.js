function scrollToElem(targ) {
	var elem = document.getElementById(targ.target.getAttribute('charpenter'));
	var b = (elem.getBoundingClientRect().top < 0)? -1: 1;
	var inter = setInterval(function () {
		var a = 10;
		var dist = elem.getBoundingClientRect().top*b
		a = (dist <= 100)? ((dist <= 50)? a/10: a/1): a/0.5;
		window.scrollBy(0, a.toFixed(1)*b);
		if ((elem.getBoundingClientRect().top*b <= 0) || (dist == elem.getBoundingClientRect().top*b)) {clearInterval(inter)};
	}, 1000/60);
}
function arrows() {
	document.addEventListener('scroll', function () {if(window.pageYOffset > 50) {arrow.className = '';}else {arrow.className = 'hidden';}})
}
function scrollToTop() {
	var inter = setInterval(function () {
		var a = -10;
		a = (window.pageYOffset <= 100)? ((window.pageYOffset <= 50)? a/10: a/1): a/0.5;
		window.scrollBy(0, a.toFixed(1));
		if (window.pageYOffset == 0) {clearInterval(inter)};
	}, 1000/60);
}
function contCreate() {
	var arrAllP = document.getElementsByTagName('article')[0].getElementsByTagName('h3');
	var names = []
	for (var i = 0; i < arrAllP.length; i++) {
		names[i] = arrAllP[i].innerHTML;
		arrAllP[i].setAttribute('id', ('p' + i))
	}
	var charp = document.getElementsByClassName('charp')[0];
	var li = document.createElement('li')
	for (var i = 0; i < names.length; i++) {
		var li = document.createElement('li');
		li.setAttribute('charpenter', ('p' + i));
		li.onclick = function(event) {scrollToElem(event)}
		li.innerHTML = names[i];		
		charp.appendChild(li);
	}
}
