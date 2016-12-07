
function sel(pointedClass){
    return document.querySelector(pointedClass);
}

function clearElem(){ // clearing color table from memory
if(document.contains(document.getElementById("tableColor")))
		{
			document.body.removeChild(tableColor);
		}	
}
var tableColor; // variavle for creating color table

var colors = ['red', 'orange', 'yellow', 'green', 'blue','darkblue', 'purple', 'pink', 'magenta'];

// onClick create colors function 
function  colorFunc(param){
	clearElem();
	tableColor = document.createElement("div");
	tableColor.style.bottom = '6%';
	tableColor.style.left = '65%';
	tableColor.className += 'table';
	tableColor.boxSizing = 'border-box';
	tableColor.style.position = 'absolute';
	tableColor.id = 'tableColor';
	tableColor.display = 'block';
	for(var i = 0 ; i < 9; i++){
		var table__item = document.createElement("div");
		table__item.className += 'table__item';
		table__item.style.background = colors[i];
		tableColor.appendChild(table__item);
	}
	document.body.appendChild(tableColor);
	
	tableColor.addEventListener('click', function(e){
	var target  = e.target;
	
	if(param == '999'){
	sel('.show__article').style.color = target.style.background;
	document.body.removeChild(tableColor);
	}
	else if(param == '888'){
	sel('.show__article').style.background = target.style.background;
	document.body.removeChild(tableColor);
	}
	else{
	document.body.removeChild(tableColor);	
	}
		});
};
///////////////////////////////////////////
// Edit btn scripts

var df = document.forms; // global form object


var editBtn = df.operate.editBtn;
editBtn.addEventListener('click', function(){
	sel('.edit__article').style.display = 'block';
	sel('.edit__article_style').style.display = 'none';
	clearElem();
	 textarea.value =sel('.show__article').innerHTML;
	
});

// Save btn scripts
var saveBtn = df.edit.saveBtn;
saveBtn.addEventListener('click',function(){
sel('.show__article').innerHTML = df.edit.textarea.value;
	df.edit.textarea.value = "";
	
});
// Save btn scripts END

// Add btn scripts
var addBtn = df.edit.addBtn;
// Add btn scripts END
// Edit btn scripts END


// Style btn scripts 
var styleBtn = df.operate.styleBtn;
styleBtn.addEventListener('click', function(){
	sel('.edit__article_style').style.display = 'flex';
	sel('.edit__article').style.display = 'none';
});


for(var i = 0; i < df.radio.length; i++){         //RADIO
	df.radio.elements[i].addEventListener('click', function(){
		sel('.show__article').style.fontSize = this.value;
	});
}

for(var i = 0; i < df.fontFamily.length; i++){         //FONTFAMILY
	df.fontFamily.elements[i].addEventListener('click', function(){
		sel('.show__article').style.fontFamily = this.value;
	});
}

//TYPEFACE
     df.typeface.bolt.onclick = function () { 
         if (this.checked) {
             sel(".show__article").style.fontWeight = "bold";
         } else {
             sel(".show__article").style.fontWeight = "normal";
         }
     }
     df.typeface.italic.onclick = function () {
         if (this.checked) {
             sel(".show__article").style.fontStyle = "italic";
         } else {
             sel(".show__article").style.fontStyle = "normal";
         }
     }
	  df.typeface.underline.onclick = function () {
         if (this.checked) {
             sel(".show__article").style.textDecoration = "underline";
         } else {
             sel(".show__article").style.fontStyle = "normal";
         }
     }
	 
//END TYPEFACE
// Style btn scripts END

