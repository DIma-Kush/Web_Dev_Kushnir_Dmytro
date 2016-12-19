function getId(pointedId) {
	return document.getElementById(pointedId);
}

function sel(pointedClass) {
	return document.querySelector(pointedClass);
};

function selAll(pointedClass) {
	return document.querySelectorAll(pointedClass);
}
var tableColor; // variavle for creating color table
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple', 'pink', 'magenta']; // array for colors
var flagColor = ""; // boolean for colorFunc choose

function clearElem(element) { // clearing function
	if (document.contains(document.getElementById(element))) {
		document.body.removeChild(tableColor);
	}
}

// onClick create colors function 
function colorFunc() {
	clearElem("tableColor");
	tableColor = document.createElement("div");
	tableColor.className += 'table';
	for (var i = 0; i < 9; i++) {
		var table__item = document.createElement("div");
		table__item.className += 'table__item';
		table__item.style.background = colors[i];
		tableColor.appendChild(table__item);
	}
	sel('.edit__article_style').appendChild(tableColor);
	tableColor.addEventListener('click', function (e) {
		var target = e.target;
		if (flagColor == "colorMode") { // button color click
			sel('.show__article').style.color = target.style.background;
			sel('.edit__article_style').removeChild(tableColor);
		}
		else if (flagColor == "bgMode") { // button background click
			sel('.show__article').style.background = target.style.background;
			sel('.edit__article_style').removeChild(tableColor);
		}
		else {
			sel('.edit__article_style').removeChild(tableColor);
		}
	});
};

//back buttons pressed function
function backBtn() {
	sel('.show').style.display = 'block';
	sel('.operate').style.display = 'flex';
	sel('.edit').style.display = 'block';
	sel('.add').style.display = 'none';
}
// list or table button pressed function
function generateBtn() {
	if (sel('.table__choice').checked) { // if this is table mode
		var borderColor = df.table__create.color__line.value;
		var borderType = df.table__create.line__type.value;
		var border = parseInt(df.table__create.width.value);
		var cellHeight = parseInt(df.table__create.cell__heigth.value);
		var cellWidth = parseInt(df.table__create.cell__width.value);
		var tableTr = parseInt(df.table__create.rows.value);
		var tableTd = parseInt(df.table__create.colums.value);
		//if input isnt number!
		if (!border * 1 || !cellHeight * 1 || !cellWidth * 1 || !tableTd * 1 || !tableTr * 1) {
			alert("Input correct values!");
		}
		else { //input is number
			var tableTemp = `<table style="border:' ${border}px  ${borderType}  ${borderColor};">`;
			for (var i = 0; i < tableTr; i++) {
				tableTemp += '<tr>';
				for (var j = 0; j < tableTd; j++) {
					tableTemp += `<td style="width: ${cellWidth}px; height:  ${cellHeight}px; border: ${border}px ${borderType} ${borderColor};"></td>`;
				}
				tableTemp += "</tr>";
			}
			tableTemp += "</table>";
			df.edit.textarea.value += tableTemp;
			backBtn(); //clear
		}
	}
	else { // else(this is list mode)
		var numberElem = df.list__create.elements.value;
		var listType = df.list__create.type__list.value;
		//if input isnt number!
		if (isNaN(numberElem)) {
			alert("Input decimal number of elements!");
		}
		else if (numberElem == "") {
			alert("Input number!");
		}
		else { //input is number
			var listTemp = '<ul style="list-style: ' + listType + '; "' + numberElem + '>';
			for (var i = 0; i < numberElem; i++) {
				listTemp += '<li>TEXT</li>';
			}
			listTemp += '</ul>';
			df.edit.textarea.value += listTemp;
			backBtn(); //clear
		}
	}
}
///////////////////////////////////////////
// Edit btn scripts
var df = document.forms; // global form object
var textarea = df.edit.textarea;
var editBtn = df.operate.editBtn;
editBtn.addEventListener('click', function () {
	sel('.edit__article').style.display = 'block';
	sel('.edit__article_style').style.display = 'none';
	clearElem("tableColor");
	textarea.value = sel('.show__article').innerHTML;
});
// Save btn scripts
var saveBtn = df.edit.saveBtn;
saveBtn.addEventListener('click', function () {
	sel('.show__article').innerHTML = df.edit.textarea.value;
	df.edit.textarea.value = "";
});
// Save btn scripts END
// Edit btn scripts END
// Style btn scripts 
var styleBtn = df.operate.styleBtn;
styleBtn.addEventListener('click', function () {
	sel('.edit__article_style').style.display = 'flex';
	sel('.edit__article').style.display = 'none';
});
for (var i = 0; i < df.radio.length; i++) { //RADIO
	df.radio.elements[i].addEventListener('click', function () {
		sel('.show__article').style.fontSize = this.value;
	});
}
for (var i = 0; i < df.fontFamily.length; i++) { //FONTFAMILY
	df.fontFamily.elements[i].addEventListener('click', function () {
		sel('.show__article').style.fontFamily = this.value;
	});
}
//TYPEFACE
df.typeface.bolt.onclick = function () {
	if (this.checked) {
		sel(".show__article").style.fontWeight = "bold";
	}
	else {
		sel(".show__article").style.fontWeight = "normal";
	}
}
df.typeface.italic.onclick = function () {
	if (this.checked) {
		sel(".show__article").style.fontStyle = "italic";
	}
	else {
		sel(".show__article").style.fontStyle = "normal";
	}
}
df.typeface.underline.onclick = function () {
		if (this.checked) {
			sel(".show__article").style.textDecoration = "underline";
		}
		else {
			sel(".show__article").style.fontStyle = "normal";
		}
	}
	//END TYPEFACE
	// color btns scripts
df.color.addEventListener('click', colorFunc);
getId('btnBg').addEventListener('click', function () {
	flagColor = "bgMode";
});
getId('btnClr').addEventListener('click', function () {
	flagColor = "colorMode";
});
// color btns scripts END
// Style btn scripts END
//////////////
// Add btn scripts
var addBtn = df.edit.addBtn;
addBtn.addEventListener('click', function () {
	sel('.show').style.display = 'none';
	sel('.operate').style.display = 'none';
	sel('.edit').style.display = 'none';
	sel('.add').style.display = 'flex';
});
//////////////////////////////
// for Table mode (RADIO)
df.form__choice[0].addEventListener('click', function () {
	sel('.table__create_box').style.display = 'flex';
	sel('.list__create_box').style.display = 'none';
	sel('.add__table').style.display = 'block';
	sel('.add__list').style.display = 'none';
});
// for List mode
df.form__choice[1].addEventListener('click', function () {
	sel('.table__create_box').style.display = 'none';
	sel('.list__create_box').style.display = 'flex';
	sel('.add__table').style.display = 'none';
	sel('.add__list').style.display = 'block';
});
//if back button pressed
for (var i = 0; i < selAll('.button_back').length; i++) selAll('.button_back')[i].addEventListener('click', backBtn);
//if create button pressed
for (var i = 0; i < selAll('.button_back').length; i++) selAll('.button_add')[i].addEventListener('click', generateBtn);
// Add btn scripts END