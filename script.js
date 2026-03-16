function load(){
	document.getElementById('yes').addEventListener('mouseover', yes);
	document.getElementById('no').addEventListener('click', no);
	document.body.style.backgroundColor = '#F0FFFF';
}

function no(){
	let windowH = Math.floor(window.innerHeight*0.8);
	let windowW = Math.floor(window.innerWidth*0.8);

	let top = Math.floor(Math.random() * (windowH)) + 1;
	let left = Math.floor(Math.random() * (windowW)) + 1;

	document.getElementById('yes').style.marginTop = top + 'px';
	document.getElementById('yes').style.marginLeft = left + 'px';
}

function yes(){
	document.getElementById('container').innerHTML = "";
	container = "";
	container += "<p style='text-align:center'>";
	container += "Annie-san❤️, lo prometido es deuda🌹🍺";
	container += "</p>";
	document.getElementById('container').innerHTML = container;
}