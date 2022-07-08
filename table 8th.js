function f1(){
	var a1 = document.getElementById('t1').value;
	document.getElementById('s1').textContent = 'Hello ' + a1;
}

function f2(){
	var a2 = 'Apple';
	a2= a2 + 'Banana';
	a2 = a2 + 'Orange';
	document.getElementById('s1').textContent=a2;
}

function f3(){
	var a=1;
	a = a+3;
	a= a+1;
	a++;
	a=a+2;
	a= a+'  is my lucky number';
	document.getElementById('s1').textContent=a;
}

function f4(){
	var a = 0;
	var t = 'Bharti ';
	for(a=1; a<=12; a++){ 
		t = t+' ' +a;
		
	}
	document.getElementById('s1').textContent = t;
}

function f5(){
	var a = 0;
	var t = 'Bharti ';
	var x = document.getElementById('t1').value;
	var y = document.getElementById('t2').value;
	for(a=1; a<=y; a++){ 
		t = t +'<br>'+ a +  '   '  + '   x    ' + x + '   =   ' +(a* x);
		
	}
	document.getElementById('s1').innerHTML = t;
	console.log(t);
}