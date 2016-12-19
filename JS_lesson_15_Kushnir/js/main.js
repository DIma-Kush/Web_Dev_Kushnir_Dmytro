function sel(a) {
    return document.querySelector(a);
}

function selAll(a) {
    return document.querySelectorAll(a);
}
/////////////////////ЗАВДАННЯ 1 ПРОБІЛИ/////////////////
//var input = "hello my friend";
//var count = input.split(" ").length - 1;
//document.write(`${count} spaces in string ${input}`);
//////////////////////////////////
//var eMail = prompt("Enter E-mail", "dimakush1gmail.com");
//if (eMail.indexOf('@') > -1) {
//    if (eMail.indexOf('@') == 0) document.write("<br> Error. '@' can't located at the beginning!");
//    else if (eMail.lastIndexOf('@') == eMail.length - '@'.length) document.write("<br> Error. '@' can't located at the end!");
//    else document.write("<br> E-mail validation successfull");
//}
//else document.write("<br> Error. No '@' found");
//
///////////////////////////////
//
//var text = prompt("Enter text", 'HELLO mY friend friend you you friend fRiend');
//text = text.toLowerCase();
//document.write(`<br> ${text.split('friend').length -1}`);
//////////////////МАсиви///////////////// ЗВОРОТНІЙ ПОРЯДОК
//var arr = [];
//function inplaceReverse(input) {
//  var ret = new Array;
//    for(var i = input.length-1; i >= 0; i--) {
//        ret.push(input[i]);
//    }
//    return ret;
//}
//
//for (var i = 0; i < 4; i++) {
//    arr.push(prompt("Enter word", 'hi_1'));
//}
//
//console.log(arr);
//console.log(inplaceReverse(arr));
//var b = inplaceReverse(arr);
//alert(b);
//////////////////////////////////// Відсоротовані слова з ДЕФІСАМИ
//function bubbleSort(a)
//{
//    var swapped;
//    do {
//        swapped = false;
//        for (var i=0; i < a.length-1; i++) {
//            if (a[i] > a[i+1]) {
//                var temp = a[i];
//                a[i] = a[i+1];
//                a[i+1] = temp;
//                swapped = true;
//            }
//        }
//    } while (swapped);
//}
//
//var input;
//var arr = [];
//do {
//    if(input != ""){
//    input = prompt("enter word:", "hello");
//    if (input != "") 
//        if(input != null){
//            arr.push(input);
//            console.log(arr);
//        }
//    }
//} while (input != null)
//    
//document.write(`[ ${arr.join('-')} ]`);
//
//document.write("<br>" + arr.sort());
//document.write("<br>" + bubbleSort(arr));
/////////// МАССИВ ТА СЛОВО. ЯКЩО СЛОВО В МАССИВі СПівПАДАє - ЗАМіНИТИ на "Заміна" інакше - написати нема
//function checkWord(arr, word) {
//    var count = 0;
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i].toLowerCase() === word.toLowerCase()) {
//            arr[i] = "Заміна";
//            document.write(arr[i] + " ");
//        }
//        else {
//            document.write(arr[i] + " ");
//            count++;
//        }
//    }
//    if (count == arr.length) {
//        document.write("Нема ");
//    }
//}
//var arr = ['html', 'css', 'js', 'php'];
//checkWord(arr, 'css');
///////////////////////TASK WITH ARRAY COORDINATES
var input = document.forms.input;
input[0].addEventListener('click', function () {
    sel('.div').style.display = "block";
});
input[1].addEventListener('blur', function () {
    sel('.div').style.width = input[1].value + "px";
});
input[2].addEventListener('blur', function () {
    sel('.div').style.height = input[2].value + "px";
});
sel('.blocks').addEventListener('click', function() {
    //var target = e.target;
    sel('.div').style.border = "5px double black";
    sel('.div').style.background = this.style.background;
    console.log(this.style.background);
});
var arrX = [];
var arrY = [];
var count = 0;
input[3].addEventListener('click', function () {
    sel('.edit').style.display = "none";
     count = prompt("Скільки пар чисел ви хочете отримати?", 2);
    for (var i = 0; i < count * 2; i++) {
        if (i < count) {
            arrX.push(prompt("Координата по осі X: (у %)"));
        }
        else {
            arrY.push(prompt("Координата по осі Y: (у %)"))
        }
    }
    console.log(arrX);
    console.log(arrY);
});
var i = 0;
sel('.div').addEventListener('mouseover', function () {
    do{
        console.log(i);
            sel('.div').style.left = arrX[i] + "px";
            sel('.div').style.top = arrY[i] + "px";
            i++;
            break;
    }
    while(i < count)
});