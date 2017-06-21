function init() {
	initBgImg();	
	bars();
	range.addEventListener('mousedown', checkRange);
	range.addEventListener('mouseup', startTimer);
	myproj.addEventListener('mouseup', myProjSize);
}

function myProjSize(event) {
	//console.log('small: ' + event.target.classList.contains('smallMyProj') + '\nbig: ' + event.target.classList.contains('bigMyProj'))
	//console.log('target: ' + event.target  +'\nthis' + event.this)
	var barArr = document.getElementsByClassName('bar');
	if (event.target.classList.contains('smallMyProj')) {
		event.target.classList.toggle("smallMyProj");
		event.target.classList.toggle("bigMyProj");
		for (var i = 1; i < barArr.length; i++) {
			barArr[i].onmouseup = show;
		}
		function show(event) {
			event.cancelBubble=true;
			event.target.nextElementSibling.classList.toggle('hidden');
		}
	
	} else if (event.target.classList.contains('bigMyProj')) {
		for (var i = 1; i < barArr.length; i++) {
			barArr[i].onmouseup = null;
			barArr[i].nextElementSibling.className = 'hidden';
		}
		event.target.classList.toggle("bigMyProj");
		event.target.classList.toggle("smallMyProj");
	}
	//console.log('small: ' + event.target.classList.contains('smallMyProj') + '\nbig: ' + event.target.classList.contains('bigMyProj'))
	return false;
}