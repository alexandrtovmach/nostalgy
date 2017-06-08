var phaseC = true;
var start = new Date(2017, 1);
var end = new Date(2018, 0);

function bg() {
	if (navigator.platform != "Win32") {
		document.getElementById("wrapper").style.background = 'url(bg400.jpg)';
	}
	setInterval(function () {timer()}, 1000)
}


function timer() {
	var timert = document.getElementById("timert");
	var date = new Date();
	if (phaseC) {
		var lost = (date - start);
		timert.rows[0].cells[0].innerHTML = 'Потерянное время'
		timert.rows[2].cells[0].innerHTML = Math.ceil(lost/(86400000*30))
		timert.rows[2].cells[1].innerHTML = Math.ceil(lost/86400000)
		timert.rows[2].cells[2].innerHTML = Math.ceil(lost/3600000)
		timert.rows[2].cells[3].innerHTML = Math.ceil(lost/60000)
		timert.rows[2].cells[4].innerHTML = Math.ceil(lost/1000)
		timert.rows[2].cells[5].innerHTML = String((lost/(end-start))*100).substr(0, 5) + '%'
	} else {
		var too = (end - date);
		timert.rows[0].cells[0].innerHTML = 'Оставшееся время'
		timert.rows[2].cells[0].innerHTML = Math.floor(too/(86400000*30))
		timert.rows[2].cells[1].innerHTML = Math.floor(too/86400000)
		timert.rows[2].cells[2].innerHTML = Math.floor(too/3600000)
		timert.rows[2].cells[3].innerHTML = Math.floor(too/60000)
		timert.rows[2].cells[4].innerHTML = Math.floor(too/1000)
		timert.rows[2].cells[5].innerHTML = String((too/(end-start))*100).substr(0, 5) + '%'
	}
}


function phase() {
	var on = document.getElementById("checker");
	on.classList.toggle("right");
	phaseC = !phaseC;
}
