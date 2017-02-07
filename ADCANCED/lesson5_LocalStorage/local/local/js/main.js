function renderQuestions() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            var questions = data.questions;
            render(questions);
        };
    };
};

function renderAnswers() {
    var xhrAns = new XMLHttpRequest();
    xhrAns.open('GET', 'data.json', true);
    xhrAns.send();
    xhrAns.onreadystatechange = function () {
         /*
//                 0 - початковий стан
//                 1 - викликаний open
//                 2 - отримані заголовки (див f12 -> network )
//                 3 - завантаженняangular.module('MyApp', [
//                 4 - запит завершено
//                 0->1->2->3->3->3->3->3->3->3->3->4 - приблизно ось такий шлях. 
//                */    
//                }
        if (xhrAns.readyState == 4) {
            var data = JSON.parse(xhrAns.responseText);
            var answers = data.answers;
            renderAns(answers);
        };
    };
};
function render(arr) {
    arr.forEach(function (elem) {
        var li = document.createElement('li');
        li.textContent = elem;
        question.appendChild(li);
    });
    renderAnswers();
};
function renderAns(arrdata){
    arrdata.forEach(function(el){
       var li = document.createElement('li');
        li.textContent = el;
        answers.appendChild(li);
    });
};

document.getElementById('rendq').addEventListener('click', renderQuestions);