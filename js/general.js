function init() {
	initBgImg();	
	bars();
	range.addEventListener('mousedown', checkRange);
	range.addEventListener('mouseup', startTimer);
}