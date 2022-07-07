function calu(){
	var c1 = document.getElementById('text1').value;
	var c2 = document.getElementById('text2').value;
	
	var volume = 3.14* c1*c1*c2
	document.getElementById('volumecyli').value = volume;
	var cyarea = 2*3.14*c1*c2 + parseInt(volume);
	document.getElementById('areacyli').value = cyarea;
	var base = 3.14* c1*c1
	document.getElementById('baseicyl').value = base;
}