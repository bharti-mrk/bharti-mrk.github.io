function cal(){
	var p = document.getElementById('princi').value;
	var r = document.getElementById('rate').value;
	var n = document.getElementById('text').value;
	//var sum = parseInt(1 + r/100);
	var amount = p* Math.pow(( 1 + r/100),n);
	document.getElementById('amountco').value= amount;
}