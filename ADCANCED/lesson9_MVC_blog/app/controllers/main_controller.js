app.controller('myCtrl', function () {
    var self = this;
    self.name = "гість";
    //self.changeIndex;
    self.model = model;
    //Methods
    self.deleteElement = function (e) {
        self.model.postes.splice(e, 1);
    };
    self.changeElement = function (e) {
        self.changeIndex = e;
        $('#changeUsr').val(self.model.postes[e].theme);
        $('#changeCom').val(self.model.postes[e].descr);
        $("#change").modal("show");
    };
    self.finishChange = function () {
        self.model.postes[self.changeIndex].theme = $('#changeUsr').val();
        self.model.postes[self.changeIndex].descr = $('#changeCom').val();
        $("#change").modal("hide")
    };
    self.addPost = function () {
        var Pos = {
            autor: self.name
            , theme: $("#usr").val()
            , date: new Date()
            , descr: $("#comment").val()
        }
        self.model.postes.unshift(Pos);
        console.log(self.model.postes);
    };
    self.ent = function () {
        for (var i = 0; i < self.model.Users.length; i++) {
            if (self.model.Users[i].login == $("#login").val() && self.model.Users[i].password == $("#pwd").val()) {
                self.name = self.model.Users[i].login;
                $('.modal').modal('hide');
            }
            else  {
                if (i == self.model.Users.length - 1) {
                    $("#wrongPass").css({
                        display: "block"
                    })
                    $("#login").val("");
                    $("#pwd").val("");
                }
            }
        }
    };
    self.mesWrong = function () {
        $("#wrongPass").css({
            display: "none"
        })
    };
});