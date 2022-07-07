function cal(){
	console.log('Hello calculator!!!');	
}

function simpl(){
	var f1 = document.getElementById('name1').value;
	var f2 = document.getElementById('name2').value;
	var f3 = document.getElementById('name4').value;
	if(f1 && f2&& f3!=''){
	var simpleInt = parseInt(f1) * parseInt(f2)* parseInt(f3) /100;
	console.log(simpleInt);
	document.getElementById('name3').value = simpleInt;
	//if(f1.length =0){
	//document.getElementById('name3').value = Enter The all value
}
else{
	document.getElementById('name3').value = "Enter all the value";
}
}

