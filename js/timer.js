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
function startTimer(event) {
	event.cancelBubble=true
	clearInterval(checkInt)
	fieldInd.removeAttribute('hidden');
	refresh()
	contentInt = setInterval(refresh, res)
	timerIndicator();
}
function refresh() {
	var date = new Date();
	lost = (date - start);
	div.innerHTML = Math.ceil(lost/res);
}


//visual
function timerIndicator() {	
	var percent = lost/(end - start);
	percentToBar(fieldInd, percent)
	
}
function bars() {
	var barArr = document.getElementsByClassName('bar');
	var learnArr = document.getElementsByClassName('c-learnlist');
	var arrOfResultLearn = [0.8, 0.5, 1, 0.2, 0.1];
	document.getElementsByClassName('bar')[0].onmouseup = function (event) {
		event.cancelBubble=true;
		event.target.nextElementSibling.classList.toggle('hidden');
		for (var i = 0; i < learnArr.length; i++) {
			percentToBar(learnArr[i], arrOfResultLearn[i]);
		}
	}
	var cach = arrOfResultLearn.reduce(function(sum, current) {return sum + current;}, 0)
	var arrOfGlobRes = [(cach/arrOfResultLearn.length), 1, 0.2, 0.001, 0.28451, 0.001, 0.001];
	for (var i = 0; i < barArr.length; i++) {
		percentToBar(barArr[i], arrOfGlobRes[i])
	}
}


//' + perc*100 + '%
//' + ((perc*100)+3) + '%
function percentToBar(elem, perc) {
	elem.style.background = 'linear-gradient(to right, rgba( 0, ' + Math.floor(305-(255*(1-perc))) + ', ' + Math.floor(315-(255*(1-perc))) + ', 0.4), white 95%)';
	perc = (perc < 0.01)? 0.01: perc;
	perc = (perc > 0.91)? 0.91: perc;
	elem.style.backgroundPosition = elem.clientWidth*perc + 'px 0px';
	
}
