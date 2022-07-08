function gene(){
var str= '<table>';
for(i=1; i<=5; i++){
	str = str + '<tr><td>Apple' + i +'</td></tr>';
}
    str = str + '<table>';
	document.getElementById('sp').innerHTML = str;
}
// with clicking generate withou text getting ans
function ge(){	
var str='<table>'
for(i=1; i<=9; i++){
 str= str + '<tr><td>'+(i*1)+'</td><td>'+(i*2)+'</td><td>'+(i*3)+'</td></tr>';

}
  str= str + '<table>';
  document.getElementById('sp').innerHTML = str;
}
// with text box value we getting table
function ge(){	
var text1 = document.getElementById('t1').value;
var text2 = document.getElementById('t2').value;
var str='<table class="table table-hover"> <tbody>';
for(i=parseInt(text1); i<=parseInt(text2); i++){
 str= str + '<tr><td>'+(i*1)+'</td><td>'+(i*2)+'</td><td>'+(i*3)+'</td><td>'+(i*4)+'</td><td>'+(i*5)+'</td></tr>';

}
  str= str + '</table> </tbody>';
  document.getElementById('sp').innerHTML = str;
}