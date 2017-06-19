var start = new Date(2017, 1);
var end = new Date(2018, 0);
var checkInt, span, result, contentInt;

function checkRange() {
	span = time.getElementsByTagName('span')[0];
	clearInterval(contentInt);
	checkInt = setInterval(function () {
		if (range.value == 0) {
			span.innerHTML = 'Year';
			res = (1000*60*60*24*30*12);
		} else if ((range.value > 0)&&(range.value <= 20)) {
			span.innerHTML = 'Month';
			res = (1000*60*60*24*30);
		} else if ((range.value > 20)&&(range.value <= 40)) {
			span.innerHTML = 'Day';
			res = (1000*60*60*24);
		} else if ((range.value > 40)&&(range.value <= 60)) {
			span.innerHTML = 'Hour';
			res = (1000*60*60);
		} else if ((range.value > 60)&&(range.value <= 80)) {
			span.innerHTML = 'Minute';
			res = (1000*60);
		} else {
			span.innerHTML = 'Second';
			res = 1000;
		}
	}, 1000/60)
}
function startTimer() {
	clearInterval(checkInt)
	refresh()
	contentInt = setInterval(refresh, res)
}
function refresh() {
	var date = new Date();
	var lost = (date - start);
	span.innerHTML = Math.ceil(lost/res);
}