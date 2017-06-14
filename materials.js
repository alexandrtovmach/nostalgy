function init() {
	var columns = document.getElementsByClassName('columns');
	var containDeleg = document.getElementById('contain');
	var active;
	for (var a = 0; a < document.getElementsByTagName('li').length; a++) {
		var narrowRight = document.createElement('span');
		narrowRight.innerHTML = '&#9654;';
		var cash = document.getElementsByTagName('li')[a]
		if (cash.hasAttribute('haveChilds')) {
			//console.log(cash)
			cash.style.fontStyle = 'normal';
			cash.prepend(narrowRight)
		}
	}
	
	document.body.onclick = function (event) {
		if (event.target == document.getElementById('wrapper'))  {
			active.getElementsByTagName('ul')[0].className = 'hidden';
			active.className = 'columns';
			active = '';
		}
	}
	
	containDeleg.onmousedown = function (event) {event.preventDefault(); reloads()}
	
	function reloads() {
		if ((navigator.platform != "Win32") || (document.body.offsetWidth < 1170)) {
			if (active) {
				active.getElementsByTagName('ul')[0].className = 'hidden';
				active.className = 'columns';
				active = '';
			}
			containDeleg.onclick = smallSize;
		} else {
			containDeleg.onclick = bigSize;
		}
	}
	
	var smallSize = function  (event) {
		for (var c = 0; c < columns.length; c++) {
			if (event.target == columns[c]) {
				event.target.getElementsByTagName('ul')[0].classList.toggle('hidden');
				event.target.getElementsByTagName('ul')[0].classList.toggle('show');
				event.target.style.background = '#F1F19B';
			} else {
				for (var k = 0; k < columns[c].getElementsByTagName('ul')[0].getElementsByTagName('li').length; k++) {
					if (event.target == columns[c].getElementsByTagName('ul')[0].getElementsByTagName('li')[k]) {
						if (event.target.hasAttribute('haveChilds')) {
							event.target.getElementsByTagName('ul')[0].classList.toggle('hidden');
							event.target.getElementsByTagName('ul')[0].classList.toggle('show');
							event.target.getElementsByTagName('span')[0].style.color = (event.target.getElementsByTagName('ul')[0].classList.contains('hidden'))? 'black': '#0000EE';
						}
					}
				}
			}
			
		}
	};
	
	var bigSize = function (event) {
		for (var i = 0; i < columns.length; i++) {
			if (event.target == columns[i]) {
				
				
				event.target.style.background = '#F1F19B';
					
				if (event.target != active) {
					if (!active) {
						event.target.getElementsByTagName('ul')[0].className = 'show';
						event.target.className = 'columns showContain';
						active = event.target;
					} else {
						event.target.getElementsByTagName('ul')[0].className = 'show';
						event.target.className = 'columns showContain';
						active.getElementsByTagName('ul')[0].className = 'hidden';
						active.className = 'columns';
						active = event.target;
					}
				} else {
					active.getElementsByTagName('ul')[0].className = 'hidden';
					active.className = 'columns';
					active = '';
				}
			} else {
				for (var k = 0; k < columns[i].getElementsByTagName('ul')[0].getElementsByTagName('li').length; k++) {
					if (event.target == columns[i].getElementsByTagName('ul')[0].getElementsByTagName('li')[k]) {
						if (event.target.hasAttribute('haveChilds')) {
							event.target.getElementsByTagName('ul')[0].classList.toggle('hidden');
							event.target.getElementsByTagName('ul')[0].classList.toggle('show');
							event.target.getElementsByTagName('span')[0].style.color = (event.target.getElementsByTagName('ul')[0].classList.contains('hidden'))? 'black': '#0000EE';
						}
					}
				}
			}
			
		}
	};
}
