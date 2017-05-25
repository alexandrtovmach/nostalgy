function bg() {
	if (navigator.platform != "Win32") {
		document.getElementById("wrapper").style.display = 'none';
		document.body.style.background = 'url("bg(mob).png")';
	}
	setInterval(function () {timer()}, 1000)
}

function timer() {
	var timert = document.getElementById("timert");
	//var timer = document.getElementById("timer");
	var start = new Date(2017, 1);
	var date = new Date();
	var lost = (date - start);
	timert.rows[2].cells[0].innerHTML = (date.getFullYear()-start.getFullYear())
	timert.rows[2].cells[1].innerHTML = (date.getMonth()-start.getMonth())
	timert.rows[2].cells[2].innerHTML = Math.floor(lost/86400000)
	timert.rows[2].cells[3].innerHTML = Math.floor(lost/3600000)
	timert.rows[2].cells[4].innerHTML = Math.floor(lost/60000)
	timert.rows[2].cells[5].innerHTML = Math.floor(lost/1000)
	
	var timerd = document.getElementById("timerd");
	timerd.style.display = "none";
	timerd.rows[2].cells[0].innerHTML = (date.getFullYear()-start.getFullYear())
	timerd.rows[2].cells[1].innerHTML = (date.getMonth()-start.getMonth())
	timerd.rows[2].cells[2].innerHTML = Math.floor(lost/86400000)
	timerd.rows[2].cells[3].innerHTML = Math.floor(lost/3600000)
	timerd.rows[2].cells[4].innerHTML = Math.floor(lost/60000)
	timerd.rows[2].cells[5].innerHTML = Math.floor(lost/1000)
}


function phase() {
	var on = document.getElementById("checker");
	on.classList.toggle("right");
	timert.style.display = "none";
	timerd.style.display = "block";
}
