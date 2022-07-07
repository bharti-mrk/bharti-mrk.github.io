function sort(){
	var textbox = document.getElementById('text1').value;
	var textbox2 = document.getElementById('text2').value;
	//console.log(textbox.length);
	//console.log(textbox2.length);
	
	if(textbox2.length > textbox.length){
	document.getElementById('text1').value = textbox2;	
	document.getElementById('text2').value = textbox;	
	}

}

function asc(){
	var box1 = document.getElementById('text1').value;
	var box2 = document.getElementById('text2').value;
	//console.log(box1.length);
	//console.log(box2.length);
	
	if(box1.length > box2.length){
		document.getElementById('text1').value = box2;
		text2.value = box1;
		//document.getElementById('text2').value = box1;
	}
	
}