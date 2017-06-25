var song, numSong = 1;

function playSong() {
	if(song) {song.pause();}
	song = new Audio('../music/' + packSongs[numSong] + '.mp3');
	song.play();
	img.src = '../img/music/load.png';
	img.style.animationName = 'load';
	img.className = '';
	setTimeout(function() {img.src = '../img/music/' + packSongs[numSong] + '.png'; img.style.animationName = 'png'; nameSong()}, 1000)
}
function pauseSong() {
	
	song.pause();	
}
function previousSong() {
	--numSong;
	checkNumSong()
	song.pause();	
	song = new Audio('../music/' + packSongs[numSong] + '.mp3');
	img.src = '../img/music/load.png';
	img.style.animationName = 'load';
	setTimeout(function() {img.src = '../img/music/' + packSongs[numSong] + '.png';img.style.animationName = 'png'; nameSong()}, 1000);
	song.play();	
}
function nextSong() {
	++numSong;
	checkNumSong()
	song.pause();	
	song = new Audio('../music/' + packSongs[numSong] + '.mp3');
	img.src = '../img/music/load.png';
	img.style.animationName = 'load';
	setTimeout(function() {img.src = '../img/music/' + packSongs[numSong] + '.png';img.style.animationName = 'png'; nameSong()}, 1000);
	song.play();	
}

function checkNumSong() {
	numSong = ((numSong >= 0)&&(numSong < packSongs.length))? numSong: 0;
	//console.log(numSong)
}
function nameSong() {
	console.log(song)
	
	var pathArr = song.src.split('/');
	console.log(pathArr)
	document.getElementById('artist').innerHTML = pathArr[pathArr.length - 1].split('%20-%20')[0].split('%20').join(' ') + ' - ' + pathArr[pathArr.length - 1].split('%20-%20')[1].split('.')[0].split('%20').join(' ')
	
}