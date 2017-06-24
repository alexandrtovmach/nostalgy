function init() {
	range.addEventListener('mousedown', checkRange);
	range.addEventListener('mouseup', startTimer);
	myproj.addEventListener('mouseup', myProjSize);
	myproj.addEventListener('mouseup', bars);
}