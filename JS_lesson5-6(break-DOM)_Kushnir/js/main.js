//////////////////ЗАВДАННЯ 1///////////////////////////
//var value = parseInt(prompt("Enter simple digit"));
//
//if((value % 2 == 0) && (value != 2)){
//	document.write("<h1>" + value +  " - натуральне число " + "</h1>");
//}
//else if(value == 2){ 
//	document.write("<h1>" + value +  " - просте число " + "</h1>");
//}
//else if (value % 2 == 1){  // число не парне
//	var k = Math.round(Math.sqrt(value));
//	extra = false;
//		
//	
//	for (var i = 2 ; i < k + 1; i++){
//		if(value % i == 0) {
//			document.write("<h1>" + value +  " - натуральне число " + "</h1>");
//			extra = true;
//			break;
//		}
//	}
//	if (extra == false) 
//		document.write("<h1>" + value +  " - просте число " +  "</h1>");	
//}
//else{
//	document.write("<h1>" + "Ви не ввели число!" + "</h1>");
//}
//////////////////ЗАВДАННЯ 2///////////////////////////

//var values = parseInt(1);
//var string = "";
//for ( var i = 1; i <= 11; i++){
//	if( i == 1) {
//		string += values + " ";
//		string += values + " ";
//		console.log(values);
//	}
//	else{
//	values += i;
//	console.log(values);
//	string += values + " ";
//	}
//}
//
//alert(string);
//////////////////////////

//var n = 11;
//var fibonacci = [0,1];
//
//for(i = 2 ; i < n; i++){
//	fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//}
//
//console.log(fibonacci.slice(0,n));

//////////////////ЗАВДАННЯ 3///////////////////////////

//var n = prompt("number?", "1234");
//var s = 0;
//
//while(n>0){
//	s += n % 10;
//	n = Math.floor(n/10);
//}
//
//alert("summa: " + s);

var pageBg = ("Виберіть фон", "green");
var fontBg = ("Виберіть шрифт", 14);
var h1Alignment = ("Вкажіть вирівнювання для h1", "left");
var pBackground = ("Виберіть фон для параграфу з ссилками", "yellow");
var pColor = ("Виберіть колір для ссилок", "#bcbcbc");
var divColor = ("Виберіть колір для тексту основного блоку", "red");
var divFont = ("Виберіть шрифт для тексту основного блоку", 14);
var divWeight = ("Виберіть вагу для  тексту основного блоку", 600);
var markerType = ("Виберіть тип марекру для основного спсику", "square");

var userSiteName1 = ("Вкажіть назву вашого улбленого сайту #1", "google.com.ua");
var userSiteName2 = ("Вкажіть назву вашого улбленого сайту #2","google.com.ua");
var userSiteName3 = ("Вкажіть назву вашого улбленого сайту #3","google.com.ua");

document.getElementsByTagName("body")[0].style.background = pageBg;
document.getElementsByTagName("body")[0].style.font = fontBg;
document.getElementsByTagName("h1")[0].style.textAlign = h1Alignment;
document.getElementsByTagName("p")[0].style.background = pBackground;

var ulChild = document.querySelector('.list').children;
//console.log('ulChild - ', ulChild);
for (var i = 0; i < ulChild.length; i++){
	ulChild[i].style.color = pColor;
	ulChild[i].style.listStyle = markerType;
}

document.querySelector('.mainBlock').style.color = divColor;
document.querySelector('.mainBlock').style.font = divFont;
document.querySelector('.mainBlock').style.fontWeight = divWeight;


function addLink(linkClass , choosenSite ){
	var a = "";
	a = document.createElement('a');
	document.querySelector('.'+linkClass).appendChild(a);
	a.innerHTML = choosenSite;
	a.setAttribute('href', "http://" + choosenSite);
	a.style.marginRight = "20px";
}

addLink('nav',userSiteName1);
addLink('nav',userSiteName2);
addLink('nav',userSiteName3);
