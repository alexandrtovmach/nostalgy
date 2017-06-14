#contain {
	margin: auto;
}

.columns {
	width: 300px;
	background: white;
	text-align: center;
	font-weight: 700;
	padding-top: 10px;
	margin: auto;
	padding-bottom: 10px;
	margin-top: 4px;
	cursor: pointer;
	color: black;
	
}

.columns:hover {
	background: #F1F19B;
	transition: 0.5s;
	font-weight: 900;
}


.hidden {
	display: none;
}

a {
	target: _blank;
	text-decoration: none;
}
ul {
	text-align: left;
}
li {
	list-style-type: none;
}
.columns a:hover {
	target: _blank;
	text-align: left;
	text-decoration: underline;
}
.showContain {
	display: block;
	position: absolute;
	left: 20%;
	right: 20%;
	top: 350px;
	bottom: 50px;
	width: 60%;
	min-height: 40px;
}
.show {
	position: relative;
	display: block;
	background: #F1F19B;
}

@media (max-width: 320px) {
	#contain {
		width: 320px;
	}
	.columns {
		margin-top: 4px;
		min-width: 300px;
		width: 80%;
	}
	body {
		height: 360px;
	}
}
@media (max-width: 480px) and (orientation: portrait) {
	#contain {
		width: 320px;
	}
	.columns {
		margin-top: 4px;
		min-width: 300px;
		width: 80%;
	}
	body {
		height: 360px;
	}
}

@media  (min-width: 768px) and (max-width: 991px) {
	#contain {
		width: 768px;
	}
	.columns {
		margin-top: 4px;
		min-width: 300px;
		width: 80%;
	}
	body {
		height: 360px;
	}
}
@media (min-width: 992px) and (max-width: 1199px) {
	#contain {
		width: 992px;
	}
	.columns {
		margin-top: 4px;
		min-width: 300px;
		width: 80%;
	}
}
@media (min-width: 1200px) {
	#contain {
		width: 1300px;
		padding-left: 85px;
	}
	
}
