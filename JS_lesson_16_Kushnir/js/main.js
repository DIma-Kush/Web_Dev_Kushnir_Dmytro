function sel(a){
    return document.querySelector(a);
}

var add = document.forms.add;
var show = document.forms.show;
var forbidden = [];
var textArea = [];
var space = " ";
add[1].addEventListener('click', function(){
   if(add[0].value ==""){
       alert("empty input!")
   }else{
       sel('.forbidden').innerHTML += add[0].value + space; 
       forbidden.push(add[0].value);
       console.log(forbidden);
    }
});

show[1].addEventListener('click',function(){
    textArea = show[0].value.split(" "); 
    console.log(textArea);
    for(var i =0 ; i < textArea.length; i++){
        for(var j = 0; j <  forbidden.length; j++){
         if(textArea[i].toLowerCase() == forbidden[j].toLowerCase()){
             var string = textArea[i]; 
             string = string.replace(/./g, '*');
             textArea[i] = string.split(" ");
         } 
        }
    }
    show[0].value = textArea.join(" ");
});


//////////////// AUTORIZATION 
var login = {
    dima:'1234',
    viku:'hasky'
}
var autoriz = document.forms.autoriz;
console.log(autoriz.children);
autoriz[2].addEventListener('click', function(){
     sel('.errorPass').innerHTML = "";
     sel('.errorLogin').innerHTML = "";
   if(autoriz[0].value != ""){
       if(autoriz[1].value != ""){
           for(var key in login){
               if(autoriz[1].value == login[key]){ // pass
                   if(autoriz[0].value == key){ // login
                    alert("Connection successfull!");  
                    sel('.autorization').style.display = "none";
                    sel('.cenzor').style.display = "block";
                   }
                }else{
                  sel('.errorPass').innerHTML = "Некоректний логін або пароль"; 
               }
               console.log(key);
               console.log(login[key]);
           }
       }
       else{
            sel('.errorPass').innerHTML = "Введіть дані";
       }
   }else{
       sel('.errorLogin').innerHTML = "Введіть дані";
   }
});