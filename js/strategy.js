var namesBg = {};
var infoPhase = false;
function initWayFunc() {
	document.addEventListener('click', function() {if (!infoPhase) {return}; infos.remove(); infoPhase = false;})
	desk.addEventListener('click', function(event) {categoryClick(event)})
	var arrIcon = document.getElementsByTagName('a')
	for (var i = 0; i < arrIcon.length; i++) {
		if (!arrIcon[i].hasAttribute('icon')) {continue}
		arrIcon[i].addEventListener('contextmenu', function (event) {
			if (infoPhase) {event.preventDefault(); return}
			infoPhase = true;
			event.preventDefault();
			var infos = document.createElement('div');
			infos.style.position = 'absolute'
			infos.style.zIndex = 50;
			infos.style.width = '100px';
			infos.style.height = '60px';
			infos.innerHTML = 'More info';
			infos.id = 'infos'
			infos.style.textAlign = 'center';
			infos.style.backgroundColor = 'white';
			infos.style.top = event.clientY + 'px'
			infos.style.left = event.clientX + 'px'
			document.body.appendChild(infos)
		})
		
	}
	
}
//func of click
function categoryClick(event) {
	if (event.target == document.getElementById('desk')) {return}
	var els = (event.target.hasAttribute('bgtext'))? event.target.parentElement: event.target;
	if (els.className != "cover") {
		els.className = "cover";
		bgName(els)
		var parentEl = els.parentElement;
		for (var i = 0; i < parentEl.children.length; i++) {
			if (parentEl.children[i] != els) {
				parentEl.children[i].className = "hidden";
			}
		}
		for (var i = 0; i < els.children.length; i++) {
			//input test
			if (!els.children[i].hasAttribute('bgtext')) {
				els.children[i].className = "category";
			}
			if (els.children[i].tagName == 'A') {
				els.children[i].className = "icons"
			}
			
		}
	} else {
		bgName(els, true)
		var parentEl = els.parentElement;
		for (var i = 0; i < parentEl.children.length; i++) {
			if (!parentEl.children[i].hasAttribute('bgtext')) {
				parentEl.children[i].className = "category";
			}
		}
		hideChild(els)
		//func for hiding all childs
		function hideChild(check) {
			if (!check.children) {
				return
			} else {
				for (var i = 0; i < check.children.length; i++) {
					if (check.children[i].tagName == 'IMG') {continue}
					check.children[i].className = "hidden";
					hideChild(check.children[i])
				}
			}
		}
	}
}

//func for render text from div to bgtext and revert
function bgName(elem, revert) {
	if (!revert) {
		namesBg[elem.id] = elem.firstChild.data;
		//elem.firstChild.data = '';
		var el = document.createElement('div')
		el.style.position = 'absolute';
		el.setAttribute('bgtext', true);
		el.style.opacity =  0.5;
		el.style.zIndex = 1;
		el.style.width = '90%';
		el.style.left = '5%';
		el.style.textAlign = 'center';
		el.style.color = 'white';
		el.style.fontSize = (300-(name.length*2))*(document.documentElement.clientWidth/1500) + '%' ;
		el.innerHTML = namesBg[elem.id].toUpperCase();
		elem.appendChild(el);
	} else {
		removeBgText(elem);
		function removeBgText(check) {
			if (!check.children) {
				return
			} else {
				for (var i = 0; i < check.children.length; i++) {
					removeBgText(check.children[i])
					if (check.children[i].hasAttribute('bgtext')) {
						check.children[i].remove()
						check.firstChild.data = namesBg[check.id];
					}
					
				}
			}
		}
	}
}
//&&(parentEl.children[i].tagName != 'BG')