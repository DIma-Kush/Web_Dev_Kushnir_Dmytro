     function getE(a) {
         return document.getElementById(a);
     }

     function querSel(a) {
         return document.querySelector(a);
     }

     function selAll(a) {
         return document.querySelectorAll(a);
     }
     var df = document.forms;

     function validation(selector) {
         validateAll();
         if (selector.value <= 0 || selector.value > 99 || selector.value === '' || selector.value === ' ' || isNaN(selector.value)) {
             selector.style.border = "2px solid red";
             selector.nextElementSibling.style.display = "inline";
             for (var i = 0; i < selAll('.button_add').length; i++) selAll('.button_add')[i].disabled = true;
         }
         else {
             selector.style.border = "2px solid green";
             selector.nextElementSibling.style.display = "none";
         }
     }
     // check if all fields are correct. calls in function validation(selector)
     function validateAll() {
         var colums = df.popUpTable.column;
         var rows = df.popUpTable.row;
         var width = df.popUpTable.widthT;
         var height = df.popUpTable.heightT;
         var cell_width = df.popUpTable.borderW;
         var list = df.popUpList.itemsList;
         if (boolValidation(colums) && boolValidation(rows) && boolValidation(height) && boolValidation(cell_width) && boolValidation(width) || boolValidation(list)) {
             for (var i = 0; i < selAll('.button_add').length; i++) selAll('.button_add')[i].disabled = false;
         }
         else {
             for (var i = 0; i < selAll('.button_add').length; i++) selAll('.button_add')[i].disabled = true;
         }
     }
     // boolean fucntion which in use of function validateAll 
     function boolValidation(selector) {
         if (selector.value <= 0 || selector.value > 99 || selector.value === '' || selector.value === ' ' || isNaN(selector.value)) {
             return false;
         }
         else {
             return true;
         }
     }
     //  КНОПКА EDIT
     df.styleText.edit.addEventListener('click', function () {
         querSel('.basic').style.display = 'none';
         querSel('.added').style.display = 'block';
         df.area.textarea.value = querSel('.content').innerHTML;
     });
     //  ЖИРНИЙ/НОРМАЛЬНИЙ ШРИФТ
     df.styleText.bold.addEventListener('click', function () {
         if (querSel('.content').style.fontWeight == '900') {
             querSel('.content').style.fontWeight = 'normal';
         }
         else querSel('.content').style.fontWeight = '900';
     });
     //  КУРСИВНИЙ/НОРМАЛЬНИЙ ШРИФТ
     df.styleText.italic.addEventListener('click', function () {
         if (querSel('.content').style.fontStyle == 'italic') {
             querSel('.content').style.fontStyle = 'normal';
         }
         else querSel('.content').style.fontStyle = 'italic';
     });
     //  ПІДКРЕСЛЮВАННЯ В ТЕКСТІ/NONE
     df.styleText.underline.addEventListener('click', function () {
         if (querSel('.content').style.textDecoration == 'underline') {
             querSel('.content').style.textDecoration = 'none';
         }
         else querSel('.content').style.textDecoration = 'underline';
     });
     //  РОЗМІР ШРИФТА
     df.styleFont.fontSize.addEventListener('click', function () {
         querSel('.content').style.fontSize = this.value;
     });
     //  СІМЕЙСТВО ШРИФТІВ
     df.styleFont.fontFamily.addEventListener('click', function () {
         querSel('.content').style.fontFamily = this.value;
     });
     //  РОЗТАШУВАННЯ ТЕКСТУ
     for (var i = 0; i < df.align.length; i++) {
         df.align.elements[i].addEventListener('click', function () {
             querSel('.content').style.textAlign = this.value;
           
         });
     }
     //  ЗАПОВНЕННЯ ТАБЛИЦІ
     df.popUpTable.addTable.addEventListener('click', function () {
         df.area.textarea.value += '<table style="border:' + df.popUpTable.borderW.value + 'px solid ' + df.popUpTable.borderCol.value + '; width:' + df.popUpTable.widthT.value + 'px; height:' + df.popUpTable.heightT.value + 'px; cellspacing:' + df.popUpTable.spacing.value + '">';
         for (var i = 0; i <= df.popUpTable.row.value; i++) {
             df.area.textarea.value += '<tr>'
             for (var j = 0; j <= df.popUpTable.column.value; j++) {
                 df.area.textarea.value += '<td style="border:' + df.popUpTable.borderW.value + 'px solid ' + df.popUpTable.borderCol.value + ';"></td>';
             }
             df.area.textarea.value += '</tr>'
         }
         df.area.textarea.value += '</table>';
         querSel('.pop__up__table').style.display = 'none';
         querSel('.table__form').style.display = 'none';
     });
     //  КНОПКА SAVE
     df.saveTableList.save.addEventListener('click', function () {
             querSel('.content').innerHTML = df.area.textarea.value;
             querSel('.basic').style.display = 'block';
             querSel('.added').style.display = 'none';
         })
         //  КНОПКА CLEAR TABLE
     df.popUpTable.clearTable.addEventListener('click', function () {
             for (var i = 0; i < df.popUpTable.length - 2; i++) {
                 df.popUpTable.elements[i].value = '';
                 df.popUpTable.elements[i].style.border = '1px solid grey';
             }
             for (var i = 0; i < selAll('.validate').length; i++) {
                 selAll('.validate')[i].nextElementSibling.style.display = "none";
             }
         })
         //  ЗАПОВНЕННЯ СПИСКУ
     df.popUpList.addList.addEventListener('click', function () {
             df.area.textarea.value += '<ol type=' + df.popUpList.typeMark.value + '>';
             for (var i = 1; i <= df.popUpList.itemsList.value; i++) {
                 df.area.textarea.value += '<li>Item' + i + '</li>';
             }
             df.area.textarea.value += '</ol>';
             querSel('.pop__up__list').style.display = 'none';
             querSel('.list__form').style.display = 'none';
         })
         //  КНОПКА CLEAR LIST
     df.popUpList.clearList.addEventListener('click', function () {
             for (var i = 0; i < df.popUpList.length - 2; i++) {
                 df.popUpList.elements[i].value = '';
                 df.popUpList.elements[i].style.border = '1px solid grey';
             }
           for (var i = 0; i < selAll('.validate').length; i++) {
                 selAll('.validate')[i].nextElementSibling.style.display = "none";
             }
         })
         //  ФОРМА СТВОРЕННЯ ТАБЛИЦІ І КНОПКА CREATE TABLE
     window.addEventListener('click', function (e) {
             if (e.target.className == 'create__table') {
                 querSel('.table__form').style.display = 'block';
                 querSel('.pop__up__table').style.display = 'block';
             }
             else if (e.target.className == 'pop__up__table') {
                 querSel('.table__form').style.display = 'none';
                 querSel('.pop__up__table').style.display = 'none';
             }
         })
         //  ФОРМА СТВОРЕННЯ СПИСКА І КНОПКА CREATE LIST
     window.addEventListener('click', function (e) {
             if (e.target.className == 'create__list') {
                 querSel('.list__form').style.display = 'block';
                 querSel('.pop__up__list').style.display = 'block';
             }
             else if (e.target.className == 'pop__up__list') {
                 querSel('.list__form').style.display = 'none';
                 querSel('.pop__up__list').style.display = 'none';
             }
         })
         //  ТАБЛИЦЯ КОЛЬОРУ ФОНУ І КОЛЬОРУ ТЕКСТУ І ФОНУ IMAGE
     window.addEventListener('click', function (e) {
         if (e.target.id == 'color') {
             getE('table').className = 'txt__color';
             document.getElementById('table').style.display = 'table';
             querSel(".table__relativ").style.display = "block";
             querSel('.bg__image').style.display = 'none';
             querSel('.table__gray').style.display = 'block';
         }
         else if (e.target.id == 'bg') {
             getE('table').className = 'bg__color';
             getE('table').style.display = 'table';
             querSel(".table__relativ").style.display = "block";
             querSel('.bg__image').style.display = 'block';
             querSel('.table__gray').style.display = 'block';
         }
         else if (e.target.id == "bg__images") {
             getE('table__img').className = 'bg__img';
             getE('table__img').style.display = 'table';
             querSel('.bg__image').style.display = 'none';
             querSel('.back__col').style.display = 'block';
             querSel('.down__file').style.display = 'block';
             querSel('.table__image__relativ').style.display = 'block';
             querSel('.bg__img').addEventListener('mouseover', function (e) {
                 var target = e.target;
                 target.style.border = "1px solid yellow";
             });
             querSel('.bg__img').addEventListener('mouseout', function (e) {
                 var target = e.target;
                 target.style.border = "1px solid black";
             });
         }
         else if (e.target.id == "bag__color") {
             getE('table').className = 'bg__color';
             getE('table').style.display = 'table';
             querSel(".table__relativ").style.display = "block";
             querSel(".table__image__relativ").style.display = "none";
             getE("table__img").style.display = "none";
             querSel('.bg__image').style.display = 'block';
             querSel('.table__gray').style.display = 'block';
         }
         else if (e.target.className == 'table__gray') {
             getE('table').style.display = 'none';
             querSel('.table__gray').style.display = 'none';
             querSel('.bg__image').style.display = 'none';
             querSel(".table__relativ").style.display = "none";
             querSel('.table__image__relativ').style.display = 'none';
         }
     });
     var cells = document.getElementsByTagName('td');
     for (var i = 0; i < cells.length; i++) {
         cells[i].addEventListener('click', function () {
             if (document.getElementById('table').className == 'txt__color') {
                 querSel('.content').style.color = this.style.background;
             }
             else if (document.getElementById('table').className == 'bg__color') {
                 querSel('.content').style.background = this.style.background;
             }
         });
     }
     //  ЗАВАНТАЖЕННЯ КАРТИНКИ ЯК ФОНУ
     df.inputFile.downloadFile.onchange = function (event) {
             var tmppath = URL.createObjectURL(event.target.files[0]);
             querSel('.content').style.backgroundImage = 'url(' + tmppath + ')';
             querSel('.content').style.backgroundSize = 'cover';
             querSel('.content').style.backgroundRepeat = 'no-repeat';
         }
         // VALIDATION FUNCTION
     for (var i = 0; i < selAll('.validate').length; i++) {
         selAll('.validate')[i].addEventListener('input', function () {;
             validation(this);
         });
     }