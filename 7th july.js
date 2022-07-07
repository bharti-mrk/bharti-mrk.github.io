function cal(){
	console.log('Hello!!!!!');
	var a1 = document.getElementById('text1').value;
	var add = 2*a1;
	console.log(add);
}

function clea(){
	var b1 = document.getElementById('text1').value;
	//document.getElementById('text1').value = 2 * b1;
	var b2 = 2 * b1;
	/*
	document.getElementById('text1').value = " ";
	document.getElementById('text1').value = b2;
	*/
	document.getElementById('result').textContent = 'Result is = ' + b2;
}
