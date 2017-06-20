function init() {
	initBgImg()
	range.addEventListener('mousedown', checkRange)
	range.addEventListener('mouseup', startTimer)
}