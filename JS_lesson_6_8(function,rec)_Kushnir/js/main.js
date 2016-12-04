
function getE(className){
	return document.querySelector(className);
};
////////////////////////ЗАВДАННЯ 1/////////////////////
var div = getE('.colorChanger');
var count = 1;

div.onmouseover = function(){
	switch (count){
		case 1:
			this.style.background = 'red';
			break;
		case 2:
			this.style.background = 'yellow';
			break;
		case 3:
			this.style.background = 'green';
			count = 0;
			break;
		default:
			this.style.background = 'purple';
			this.innerHTML = 'something went wrong';
	}
	count++;

};

div.onmouseout = function(){
	this.style.background = 'purple';
};
////////////////////////ЗАВДАННЯ 2/////////////////////

var divSecret = getE('.secret');
var h2Secret = getE('.secret__h2');

function changeText(text,color){
	h2Secret.innerHTML = text;
	h2Secret.style.color = color;
};

function changeDiv(background,border){
	divSecret.style.background = background;
	divSecret.style.border = border;
};
///////////////mouseout////////////
divSecret.addEventListener('mouseout', changeText.bind(null,'У мене є секрет','black'));
divSecret.addEventListener('mouseout', changeDiv.bind(null,'purple','6px double orange'));
/////////mousover////////////////
divSecret.addEventListener('mouseover', changeText.bind(null,'Хочеш знати який?','blue'));
divSecret.addEventListener('mouseover', changeDiv.bind(null,'yellow','6px double green'));
/////////////click///////////
divSecret.addEventListener('click', changeText.bind(null,'А я тобі не скажу','white'));
divSecret.addEventListener('click', changeDiv.bind(null,'black','6px double yellow'));

////////////////////////ЗАВДАННЯ 3/////////////////////

function maxThreeValue(a,b,c){
	var temp = 0;
	 (a > b) ? temp = a : temp = b;
	 return (temp > c) ? temp :  c;
};
function maxFourValue(a,b,c,d){
	// тут a та c виступають у ролі проміжних значень
	(a > b) ? a : a = b;
	(c > d) ? c : c = d;
	return (a > c) ? a : c;
};
var a = maxThreeValue(-5,-1,-2);
//alert(a);
var b = maxFourValue(-2,-1,244,-4);
//alert(b);

////////////////////////ЗАВДАННЯ 4/////////////////////

function geomFunc1(count,ratio){
	var sum=0;
	var string = "";
	var value = 1;
	for (var i=0; i<count; i++){
		string += value + " ";
		sum += value;
		value *= ratio;
	}
	return `${string} = ${sum}`;
}
function geomFunc2(count,ratio){
	var first = 1; 
	return first * ((1 - Math.pow(ratio,count))/(1 - ratio)); 
}

function geomRec(count,ratio){
	if(count < 2)
		return 1;
	else{
		var geosum = Math.pow(ratio,(count-1));
	geosum += geomRec((count-1),ratio);
	return geosum;
	}
}

var func1 =geomFunc1(4,3);
document.write(`<br> ${func1}`);
var func2 = geomFunc2(4,3);
document.write(`<br> ${func2}`);
var func3 = geomRec(4,3);
document.write(`<br> ${func3}`);

////////////////////////ЗАВДАННЯ 5/////////////////////
function simpleDigits(a,b){
	var string = "";
	label:
	for( var i = a; i < b; i++){
		for (var j = 2; j < i; j++){
			if(i % j == 0) continue label; // чи ділиться i на число до нього(j). Якщо так,воно нам не підходить, тому йдем по мітці і берем наступне
		}
		string += i + " ";
	}
	return string;
}
//var a = parseInt(prompt('Enter a','10'));
//var b = parseInt(prompt('Enter b','2'));
var func4 = simpleDigits(a,b);
//alert(func4);

////////////////////////////ДОДАТКОВЕ ЗАВАННЯ1/////////////////////////
//var block = document.body.getElementsByClassName('block');
var block = document.querySelectorAll('.block');
var colors = [];
console.log(block.length);
for(var i =0 ; i< block.length; i++){
	var answer = ('Виберіть колір','red');
	colors[i] = answer;
	block[i].style.background = colors[i];
}
////////////////////////////ДОДАТКОВЕ ЗАВАННЯ2/////////////////////////
var countLi = getE('.colors');
var liColors = [];
for(var i = 0; i < countLi.children.length; i++){
	liColors[i] = countLi.children[i].textContent;
	countLi.children[i].style.background = liColors[i];
}