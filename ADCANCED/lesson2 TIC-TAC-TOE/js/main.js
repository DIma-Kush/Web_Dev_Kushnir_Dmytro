$(function () {
    (function () {
        var Game = {
            winCombination: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]], // keys to win
            $cellIndex: 0, // index of panel when click
            $keyArrRed: []
            , $keyArrGreen: []
            , moveCount: 0, // player move count
              counter: 1,
            // export function
            init: function () {
                this.cacheDom();
                this.bindEvents();
                this.restart();
            }
            , cacheDom: function () {
                this.$table = $(".table");
                this.$row = $(".row");
                this.$cell = $(".cell");
                this.$button = $(".button");
                this.$result = $(".result");
                this.$wormRed = $(".wormRed");
                this.$wormGreen = $(".wormGreen");
                this.$turnRed = $(".turnRed");
                this.$turnGreen = $(".turnGreen");
                this.$slime = $("#slime");
                this.$quote = $("#quote");
            }
            , bindEvents: function () {
                this.$button.on('click', this.restart.bind(this));
                this.$row.delegate('td.cell', 'click', this.cellClick.bind(this));
                this.$cell.on("mouseover", function (e) {
                    var $cellPoint = $(e.target).closest('td');
                    $cellPoint.css({
                        border: "1px solid yellow"
                    , });
                });
                this.$cell.on("mouseout", function (e) {
                    var $cellPoint = $(e.target).closest('td');
                    $cellPoint.css({
                        border: "0px solid yellow"
                    , });
                });
            }
            , restart: function () {
                this.$row.find("*").css({
                    backgroundColor: ("rgb(128, 128, 128)")
                });
                //  $(".row *").css("background","rgb(128, 128, 128)");
                this.$table.css({
                    opacity: "1"
                    , background: "none"
                });
                this.$result.css({
                    display: "none"
                });
                this.$wormGreen.css({
                    cursor: "pointer"
                    , display: "none"
                });
                this.$wormRed.css({
                    cursor: "pointer"
                    , display: "none"
                });
                this.$cellIndex = 0;
                this.$keyArrRed = [];
                this.$keyArrGreen = [];
                this.moveCount = 0;
                this.$cell.css({
                    cursor: "pointer"
                    , //                border: "1px solid yellow",
                    pointerEvents: "auto"
                });
                this.$turnRed.css({display: "block"});
                this.$turnGreen.css({display: "block" });
                this.$quote.css({display : "none"});
                this.$slime.css({display : "none"});
            }
            , // private functions
            cellClick: function (e) {
                var $cellPoint = $(e.target).closest('td');
                this.$cellIndex = this.$row.find('td').index($cellPoint) + 1;
                if ($cellPoint.css("background-color") == "rgb(128, 128, 128)") { // check start colors (setted in CSS!)
                    if (this.moveCount % 2 == 0) {
                        $cellPoint.css({
                            backgroundColor: "rgb(220, 20, 60)"
                        });
                        this.$wormRed.css({
                            display: "block"
                        });
                        this.$wormGreen.css({
                            display: "none"
                        });
                        this.$wormRed.toggleClass("animated fadeInRight");
                        this.$wormGreen.removeClass(`animated fadeInRight fadeInLeft`);
                        this.moveCount++;
                        this.playerValidate(this.$keyArrRed, "red");
                    }
                    else {
                        $cellPoint.css({
                            backgroundColor: "rgb(127,255,0)"
                        });
                        this.$wormGreen.css({
                            display: "block"
                        });
                        this.$wormRed.css({
                            display: "none"
                        });
                        this.$wormGreen.toggleClass("animated fadeInLeft");
                        this.$wormRed.removeClass(`animated fadeInRight fadeInLeft`);
                        this.moveCount++;
                        this.playerValidate(this.$keyArrGreen, "green");
                    }
                }
            }
            , playerValidate: function (array, player) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i] == this.$cellIndex) return;
                }
                if (this.$cellIndex != 0) { // avoiding start value
                    array.push(this.$cellIndex);
                }
                if ((this.check(array) == true && this.standoff() == false) 
                    || (this.check(array) == true && this.standoff() == true)) {
                    
                    if (player == "green") {
                        this.$result.text("ЗЕЛЕНІ ВИГРАЛИ!");
                        this.$result.css({
                            display: "block"
                            , color: 'green'
                        });
                        this.$table.css({
                            opacity: "0.25"
                            , background: "black"
                        });
                        this.$cell.css({
                            cursor: "none"
                            , border: "0px solid black"
                            , pointerEvents: "none"
                        });
                        this.$turnGreen.css({display: "none"});
                        this.$quote.css({display : "block"});
                        this.$slime.css({display : "block"});
                        this.slime();
                    }
                    else { // red
                        this.$result.text("ЧЕРВОНІ ВИГРАЛИ!");
                        this.$result.css({
                            display: "block"
                            , color: 'red'
                        });
                        this.$table.css({
                            opacity: "0.25"
                            , background: "black"
                        });
                        this.$cell.css({
                            cursor: "auto"
                            , border: "0px solid black"
                            , pointerEvents: "none"
                        });
                        this.$turnRed.css({display: "none"});
                        this.$quote.css({display : "block"});
                        this.$slime.css({display : "block"});
                        this.slime();
                    }
                }
                else if(this.standoff() == true){ // situation when all cells field and NO win
                    this.$result.text("НІХТО НЕ ВИГРАВ!");
                        this.$result.css({
                            display: "block"
                            , color: 'blue'
                        });
                        this.$table.css({
                            opacity: "0.25"
                            , background: "black"
                        });
                        this.$cell.css({
                            cursor: "none"
                            , border: "0px solid black"
                            , pointerEvents: "none"
                        });
                        this.$wormGreen.css({display: "none"});
                        this.$wormRed.css({display: "none" });
                        this.$quote.css({display : "block"});
                        this.$slime.css({display : "block"});
                        this.slime();
                }
                console.log(array);
            }
            , check: function (playerArray) {
                var correctFlag = 1; // should be 3 to proceed.
                for (var i = 0; i < this.winCombination.length; i++) {
                    for (var j = 0; j < playerArray.length; j++) {
                        if ($.inArray(playerArray[j], this.winCombination[i]) !== -1) {
                            if (correctFlag == 3) {
                                return true;
                                break;
                            }
                            correctFlag++;
                        }
                    }
                    correctFlag = 1; // value to 1 to count next sub-array
                }
            }
            , standoff: function(){
                var gray = "rgb(128, 128, 128)";
                var bgCol = "background-color";
                if(
                ($(".td1").css(bgCol) !== gray) &
                ($(".td2").css(bgCol) !== gray) &
                ($(".td3").css(bgCol) !== gray) &
                ($(".td4").css(bgCol) !== gray) &
                ($(".td5").css(bgCol) !== gray) &
                ($(".td6").css(bgCol) !== gray) &
                ($(".td7").css(bgCol) !== gray) &
                ($(".td8").css(bgCol) !== gray) &
                ($(".td9").css(bgCol) !== gray))
                {
                     return true;
                }
                else return false;
            }
        , slime: function(){
                    var randQ;
            var quoteArray = [
                "Тисніть 'рестарт', швидше!",
                "Як Ви думаєте, чому я такий веселий?",
                "Думаю Вам час натискати 'рестарт'",
                "Моя мама грає краще за Вас",
                "Просто натисніть 'рестарт'",
                "Капітошка? Ні, не чув...",
                "Довго будете на мене дивитись?",
                "Браузери не моя стихія...",
                "Обожнюю цю гру!",
                "Як Ви думаєте, чому я такий веселий?",
                "Колись я жив біля лісу...",
            ];

            setInterval(function() {
	       randQ = Math.floor(Math.random( )*10);
	       quote.innerHTML = quoteArray[randQ];
            }, 7000);
        }
};
        Game.init();
    })();
});


