var start = new Date(2017, 1);
var end = new Date(2018, 0);
var checkInt, div, res, contentInt, lost;

//process
function checkRange() {
	div = time.getElementsByTagName('div')[0];
	clearInterval(contentInt);
	checkInt = setInterval(numberTimer, 1000/60)
}
function numberTimer() {
	if (range.value == 0) {
		div.innerHTML = 'Year';
		res = (1000*60*60*24*30*12);
	} else if ((range.value > 0)&&(range.value <= 20)) {
		div.innerHTML = 'Month';
		res = (1000*60*60*24*30);
	} else if ((range.value > 20)&&(range.value <= 40)) {
		div.innerHTML = 'Day';
		res = (1000*60*60*24);
	} else if ((range.value > 40)&&(range.value <= 60)) {
		div.innerHTML = 'Hour';
		res = (1000*60*60);
	} else if ((range.value > 60)&&(range.value <= 80)) {
		div.innerHTML = 'Minute';
		res = (1000*60);
	} else {
		div.innerHTML = 'Second';
		res = 1000;
	}
}
function startTimer() {
	clearInterval(checkInt)
	fieldInd.removeAttribute('hidden');
	refresh()
	contentInt = setInterval(refresh, res)
	timerIndicator()
}
function refresh() {
	var date = new Date();
	lost = (date - start);
	div.innerHTML = Math.ceil(lost/res);
}


//visual
function timerIndicator() {	
	var percent = lost/(end - start);
	percentToBar(lostTime, percent);
	//exclude leftTime elem - change style without function percentToBar()
	leftTime.style.backgroundColor = 'rgb(' + Math.floor(315-(255*(1-percent))) + ', ' + Math.floor(325-(255*(percent))) + ', 0)';
	
}
function bars() {
	var barArr = document.getElementsByClassName('bar');
	var learnArr = document.getElementsByClassName('c-learnlist');
	var arrOfResult = [0.8, 0.5, 1, 0.001, 0.1]
	for (var i = 0; i < learnArr.length; i++) {
		percentToBar(learnArr[i], arrOfResult[i])
	}
}
function percentToBar(elem, perc) {
	elem.style.backgroundColor = 'rgb(' + Math.floor(315-(255*perc)) + ', ' + Math.floor(325-(255*(1-perc))) + ', 0)';
	elem.style.width = perc*100 + '%';
}
