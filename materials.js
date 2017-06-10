function init() {
	var columns = document.getElementsByClassName('columns');
	var containDeleg = document.getElementById('contain');
	
	containDeleg.onmousedown = function (event) {event.preventDefault()}
	
	containDeleg.onclick = function (event) {
		if (event.target == columns[0]) {
			columns[0].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[0].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[0].style.background = '#F1F19B';
		} else if (event.target == columns[1]) {
			columns[1].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[1].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[1].style.background = '#F1F19B';
		} else if (event.target == columns[2]) {
			columns[2].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[2].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[2].style.background = '#F1F19B';
		} else if (event.target == columns[3]) {
			columns[3].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[3].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[3].style.background = '#F1F19B';
		} else if (event.target == columns[4]) {
			columns[4].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[4].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[4].style.background = '#F1F19B';
		} else if (event.target == columns[5]) {
			columns[5].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[5].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[5].style.background = '#F1F19B';
		} else if (event.target == columns[6]) {
			columns[6].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[6].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[6].style.background = '#F1F19B';
		} else if (event.target == columns[7]) {
			columns[7].getElementsByTagName('ul')[0].classList.toggle('hidden');
			columns[7].getElementsByTagName('ul')[0].classList.toggle('show');
			columns[7].style.background = '#F1F19B';
		}
	}
}
