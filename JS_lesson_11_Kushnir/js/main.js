function sel(pointedClass) {
	return document.querySelector(pointedClass);
}

function selAll(pointedClass) {
	return document.querySelectorAll(pointedClass);
}
/////////////ЗАВДАННЯ 1//////////////
var df = document.forms;
var count = 0;
df.form_checkbox.button.addEventListener('click', function () {
	for (var i = 0; i < df.form_checkbox.length - 1; i++) {
		if (count % 2 == 0) df.form_checkbox.elements[i].checked = true;
		else df.form_checkbox.elements[i].checked = false;
	}
	count++;
});
//////////////// ЗАВДАННЯ 2 RADIO без використання value//////////////

for (var i = 0; i < df.radio.length; i++) {

	df.radio.elements[i].onclick = function () {
		this.value = selAll('.label')[i].textContent;
		alert(this.value);
		
	}
}
///////////////ЗАВДАННЯ 3 SELECT //////////////////////
df.select.show.addEventListener('click', function(){
	alert(df.select.list.value);
});

df.select.list.addEventListener('change', function(){
	for(var i =0 ; i < df.select.list.length; i++){
		if (df.select.list.options[i].selected) 
			df.select.list.options[i].innerHTML += '+';
	}
});

//////////////ЗАВДАННЯ 4 ЗАМІТНИК ///////////////
//df.reminder.add_button.addEventListener('click',function(){
//	var label;
//	var checkbox;
//	if(df.reminder.add_task.value != ""){
//		checkbox = document.createElement('INPUT');
//		label = document.createElement('LABEL');
//        
//		checkbox.type = 'checkbox';
//		checkbox.checked = true;
//		checkbox.name = 'checkbox';
//        
//		label.className += 'check';
//		label.textContent = df.reminder.add_task.value;
//        
//		label.appendChild(checkbox);
//		df.task_list.appendChild(label);
//	}
//	else {
//		alert("Спершу введіть нагадування");
//	}
//});


sel('.add_button').addEventListener('click',function(){
	var label;
	var checkbox;
	if(sel('.add_task').value != ""){
		checkbox = document.createElement('INPUT');
		label = document.createElement('LABEL');
        
		checkbox.type = 'checkbox';
		checkbox.checked = true;
		checkbox.name = 'checkbox';
        
		label.className += 'check';
		label.textContent = sel('.add_task').value;
        
		label.appendChild(checkbox);
		sel('.task_list').appendChild(label);
	}
	else {
		alert("Спершу введіть нагадування");
	}
});


for(var i =0; i < selAll('.check').length; i++){
selAll('.check')[i].addEventListener('click', function(){
	console.log(selAll('.check'));
  
    this.parentNode.removeChild(this);
});
}
