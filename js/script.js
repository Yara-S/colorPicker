window.addEventListener('load', start);

var current_backgroud_color;



function start(){
	//setting default background
	var body = document.querySelector('body');
	body.style.backgroundColor = "#ffffff";
	current_backgroud_color = "#ffffff";
	//setting default text color
	body.style.color = "#000000";
}

//watch red_counter
var red_range = document.querySelector('#red_range');
red_range.addEventListener('input', changeRed);
//watch green_counter
var green_range = document.querySelector('#green_range');
green_range.addEventListener('input', changeGreen);
//watch blue_counter
var blue_range = document.querySelector('#blue_range');
blue_range.addEventListener('input', changeBlue);

function changeRed(event){
	var red_value = event.target.value;
	var red_counter = document.querySelector('#red_counter');
	red_counter.value = red_value;
	changeBackground('R', parseInt(red_value));
}

function changeGreen(event){
	var green_value = event.target.value;
	var green_counter = document.querySelector('#green_counter');
	green_counter.value = green_value;
	changeBackground('G', parseInt(green_value));
}

function changeBlue(event){
	var blue_value = event.target.value;
	var blue_counter = document.querySelector('#blue_counter');
	blue_counter.value = blue_value;
	changeBackground('B', parseInt(blue_value));
}


function changeBackground(color, quantity){
	var body = document.querySelector('body');
	//converting to hexadecimal
	var hex_color = quantity.toString(16);
	console.log(typeof(hex_color));
	if (hex_color.length===1){
		hex_color = "0"+ hex_color;
		//console.log(hex_color);
	}
	//checking color
	if (color === 'R'){
		current_backgroud_color = "#" + hex_color + current_backgroud_color.slice(3,7) ;
	}
	else if (color === 'G'){
		current_backgroud_color = current_backgroud_color.slice(0,3)+ hex_color+current_backgroud_color.slice(5,7);
	}
	else{
		current_backgroud_color = current_backgroud_color.slice(0,5)+ hex_color;
	}
	body.style.backgroundColor = current_backgroud_color;
	changeTextColor(body);
	//console.log(current_backgroud_color);
}

function changeTextColor(body){
	var background = parseInt(current_backgroud_color.slice(1,7), 16);
	var contrasting_color = 16777215 - background;
	var contrasting_color_hex = contrasting_color.toString(16);
	while (contrasting_color_hex.length < 6){
		contrasting_color_hex = "0"+contrasting_color_hex;
	}
	contrasting_color_hex = "#"+ contrasting_color_hex;
	body.style.color = contrasting_color_hex;


}