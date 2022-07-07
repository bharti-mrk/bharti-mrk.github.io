function cal(){
	var rus = document.getElementById('radius').value;
	var area1 = 3.14*rus*rus;
	document.getElementById('ar1').value = area1;
	var perim = 2*3.14*rus;
	document.getElementById('peri').value = perim;
}