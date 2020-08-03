// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

var table = document.getElementById('pixelCanvas');
table.innerHTML = "";

var rows = document.getElementById('inputHeight').value;
var columns = document.getElementById('inputWidth').value;
var cells = '';
for (var i = 0; i<rows; i++){
	cells+='<tr>';
	for( var j = 0 ; j<columns; j++){
		cells+='<td></td>'
	}
cells+= '</tr>';

}
table.innerHTML = cells;
AddEventForTd ();

// Your code goes here!

}

function AddEventForTd (){

	var tds= document.getElementsByTagName('td');
	for( var i=0; i<tds.length; i++){

		tds[i].addEventListener("click", function(coloring){
var currentTd = coloring.target;
currentTd.style.backgroundColor=document.getElementById('colorPicker').value;

		})
	}
}
