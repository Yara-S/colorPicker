window.addEventListener('load', start);

var current_backgroud_color = "#ffffff";


function start(){
	//setting default background
	var body = document.querySelector('body');
	body.style.backgroundColor = "#ffffff";
}

//watch red_counter
var red_range = document.querySelector('#red_range');
red_range.addEventListener('input', changeRed);

function changeRed(event){
	var red_value = event.target.value;
	var red_counter = document.querySelector('#red_counter');
	red_counter.value = red_value;
	changeBackground('R', parseInt(red_value));
}



function changeBackground(color, quantity){
	var body = document.querySelector('body');
	//converting to hexadecimal
	var hex_color = quantity.toString(16);
	if (hex_color.lenght===1){
		hex_color = "0"+ hex_color;
	}
	if (color === 'R'){
		current_backgroud_color = "#" + hex_color + current_backgroud_color.slice(3,7) ;
	}
	body.style.backgroundColor = current_backgroud_color;
}