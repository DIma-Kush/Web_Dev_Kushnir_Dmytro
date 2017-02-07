var app = angular.module('myApp', []);
var model = {
    Users: [
        {
            login: "viku"
            , password: "hasky"
            }
        , {
            login: "1"
            , password: "2"
            }
        ]
    , postes: [{
        autor: "Admin"
        , theme: "Hello"
        , date: new Date()
        , descr: "Hello my friends. Here you could leave your comment!"
        }]
};
$('#myModal').modal('show');
