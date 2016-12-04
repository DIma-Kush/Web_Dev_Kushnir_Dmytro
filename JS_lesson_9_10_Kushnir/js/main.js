function sel(className){
	return document.querySelector(className);
}
function selAll(className){
	return document.querySelectorAll(className);
}
function clearElem(){
if(document.contains(document.getElementById("tank")))
		{
			document.body.removeChild(tank);
		}
	if(document.contains(document.getElementById("tableColor")))
		{
			document.body.removeChild(tableText);
		}
	if(document.contains(document.getElementById("tableImage")))
		{
			document.body.removeChild(tableImage);
		}	
}

// глобальні змінні для 
var tank;
var tableText;
var tableImage;

//////////////////ТАНК///////////////////
function tankFunc(){
	
clearElem();
	
tank = document.createElement("figure");
tank.className += "tank";
tank.id += "tank";
document.body.appendChild(tank);
window.addEventListener('keydown', function(e){
	var move = 0;
	 console.log('key Code - ',e.keyCode);
	tank.style.transition = "400ms"; // затримка на поворот та рух
	switch(e.keyCode){
			case 38: //up
			move = tank.offsetTop;
			tank.style.top = move - 40 + 'px';
			tank.style.transform = "rotate(90deg)";
			break;
			case 40: //down
			move = tank.offsetTop;
			tank.style.top = move + 40 + 'px';
			tank.style.transform = "rotate(270deg)";
			break;
			case 39: //right
			move = tank.offsetLeft;
			tank.style.left = move + 40 + 'px';
			tank.style.transform = "rotate(180deg)";
			break;
			case 37: //left
			move = tank.offsetLeft;
			tank.style.left = move - 40 + 'px';
			tank.style.transform = "rotate(0deg)";
			break;
	}
});	
};
////////////////////textMode/////////////////////
var colors = ['red', 'orange', 'yellow', 'green', 'blue','darkblue', 'purple', 'pink', 'magenta'];

function  colorFunc(){
	clearElem();
	
	tableText = document.createElement("div");
	tableText.className += 'table';
	tableText.id = 'tableColor';
	for(var i = 0 ; i < 9; i++){
		var table__item = document.createElement("div");
		table__item.className += 'table__item';
		table__item.style.background = colors[i];
		tableText.appendChild(table__item);
	}
	//console.log(table);
	document.body.appendChild(tableText);
	
	tableText.addEventListener('click', function(e){
	var target  = e.target;
	if(target.tagName != 'DIV') return;
	 document.body.style.background = target.style.background;
		});
	
};
////////////////////imageMode/////////////////////
var images_path = ["url(../img/image1.jpg)",
				   "url('../img/image2.jpg')",
				   "url('../img/image3.jpg')",
				   "url('../img/image4.jpg')",
				   "url('../img/image5.jpg')",
				   "url('../img/image6.jpg')",
				   "url('../img/image7.jpg')",
				   "url('../img/image8.jpg')",
				   "url('../img/image9.jpg')"]

function  imageFunc(){
	
	clearElem();
	
    tableImage = document.createElement("div");
	tableImage.className += 'table';
	tableImage.id = 'tableImage';
	for(var i = 0 ; i < 9; i++){
		var table__item = document.createElement("div");
		table__item.className += 'table__item';
		table__item.style.backgroundImage = images_path[i];
		table__item.style.backgroundSize = "cover"
		tableImage.appendChild(table__item);
	}
	//console.log(table);
	document.body.appendChild(tableImage);
	tableImage.style.opacity = "0.3";
	
	tableImage.addEventListener('mouseover', function(){
		this.style.opacity = "1";
	});
	
	tableImage.addEventListener('mouseout', function(){
		this.style.opacity = "0.3";
	});
	
	tableImage.addEventListener('mouseover', function(e){
		var target  = e.target;
		target.style.border = "2px solid yellow";
	});
	
	tableImage.addEventListener('mouseout', function(e){
		var target  = e.target;
		target.style.border = "2px solid black";
	});
	
	tableImage.addEventListener('click', function(e){
	var target  = e.target;
	if(target.tagName != 'DIV') return;
	 document.body.style.backgroundImage = target.style.backgroundImage;
	 //document.body.style.backgroundRepeat = 'cover'; // для більших ображень
		});
};

///////////////Migrate text////////////////////////
//тут ми використаємо подію onclick всередині javascript
var migrateText = sel('.selectMigrate');
var form = document.forms.formMigrate;
migrateText.onclick = function(){
	//sel('.formMigrate').style.display = "block";
	form.style.display = "block";
};

form[1].addEventListener('click',function(){
	
	
	if( form[0].value !== ""){
	form[2].value = form[0].value;
	form[0].value = "";
	}
//	else if(form[2].value !== ""){
//	form[0].value = form[2].value;
//	form[2].value = "";
//	}
});






