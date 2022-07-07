function print(){
	console.log('Hello Bharti');
}
function hello(){
	console.log('Good Morning');	
}

function display(){
	var fname = document.getElementById('firstname').value;
	console.log(fname);
	
}

function clone(){
	var cname = document.getElementById('firstname').value;
	document.getElementById('lastname').value = cname;
}

function clu(){
	document.getElementById('firstname').value = "";
	document.getElementById('lastname').value = "";
	
}

function reverse(){
	var c = document.getElementById('firstname').value;
	var d = document.getElementById('lastname').value;
	document.getElementById('lastname').value = c;
	document.getElementById('firstname').value = d;
}