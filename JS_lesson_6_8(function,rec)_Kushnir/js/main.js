
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

