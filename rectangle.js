function calulation(){
	var a1 = document.getElementById('text1').value;
	var a2 = document.getElementById('text2').value;
	var rarea = (a1 * a2);
	document.getElementById('arrectangle').value = rarea;
	var sum = parseInt(a1) + parseInt(a2);
	var peri = 2*sum;
	document.getElementById('perirec').value = peri;
}