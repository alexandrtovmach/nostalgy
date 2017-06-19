function init() {
	range.addEventListener('mousedown', checkRange)
	range.addEventListener('mouseup', startTimer)
	//timer();
	//setInterval(function () {timer()}, 1000/60);
}
function timer() {
	var timeArr = time.getElementsByTagName('span');
	var date = new Date();
	var lost = (date - start);
	timeArr[0].innerHTML = range.value
	//timeArr[0].innerHTML = Math.ceil(lost/(86400000*30))
	//timeArr[1].innerHTML = Math.ceil(lost/86400000)
	//timeArr[2].innerHTML = Math.ceil(lost/3600000)
	//timeArr[3].innerHTML = Math.ceil(lost/60000)
	//timeArr[4].innerHTML = Math.ceil(lost/1000)
	//timeArr[5].innerHTML = String((lost/(end-start))*100).substr(0, 5) + '%'
}
function timerIndicator(obj) {
	var barArr = document.getElementsByClassName('bar');
	var learnArr = document.getElementsByClassName('c-learnlist');
}