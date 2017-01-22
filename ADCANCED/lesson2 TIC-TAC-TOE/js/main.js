$(function(){
    (function(){
    var Game = {
     winCombination : [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]], // keys to win
    $cellIndex: 0, // index of panel when click
    $keyArrRed : [],
    $keyArrGreen : [],
    moveCount: 0, // player move count
    // export function
         init: function(){
            this.cacheDom();
            this.bindEvents();
            this.restart();
        },
        cacheDom: function(){
           this.$table = $(".table");
           this.$row = $(".row");
           this.$cell = $(".cell");
           this.$button = $(".button");
           this.$result = $(".result");
            this.$wormRed = $(".wormRed");
            this.$wormGreen = $(".wormGreen");
            this.$turnRed = $(".turnRed");
            this.$turnGreen = $(".turnGreen");
        },
         bindEvents: function(){
            this.$button.on('click', this.restart.bind(this));
            this.$row.delegate('td.cell', 'click', this.cellClick.bind(this));
        },
        restart: function(){
          this.$row.find("*").css({
           backgroundColor: ("rgb(128, 128, 128)")    
          }) ;
          //  $(".row *").css("background","rgb(128, 128, 128)");
            this.$table.css({
               opacity: "1",
                background: "none"
            });
            this.$result.css({
                display: "none"
            });
            this.$wormGreen.css({
                cursor: "pointer",
                display: "none"
            });
            this.$wormRed.css({
                cursor: "pointer",
                display: "none"
            });
            this.$cellIndex = 0;
            this.$keyArrRed = [];
            this.$keyArrGreen = [];
            this.moveCount = 0;
             this.$cell.css({
                cursor: "pointer",
//                border: "1px solid yellow",
                pointerEvents: "auto"
            });
            this.$turnRed.css({
                display: "block"
            });
            this.$turnRed.css({
                display: "block"
            });
        },
        // private functions
        cellClick: function(e){
            var $cellPoint = $(e.target).closest('td');
            this.$cellIndex = this.$row.find('td').index($cellPoint) + 1;      
        if($cellPoint.css("background-color")=="rgb(128, 128, 128)"){ // check start colors (setted in CSS!)
            if(this.moveCount % 2 == 0){
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
            else
            {
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
        
        },
        check: function(playerArray){
        var correctFlag = 1; // should be 3 to proceed.
          for(var i = 0; i < this.winCombination.length; i++){
            for(var j = 0; j < playerArray.length; j++){
                if($.inArray(playerArray[j], this.winCombination[i]) !== -1){ 
                    if(correctFlag == 3){
                        return true;
                        break;
                    }
                    correctFlag++;
                    
                }
            }
            correctFlag = 1; // value to 1 to count next sub-array
        }
   
            },
        playerValidate: function(array, player){
            for(var i = 0; i < array.length; i++){
                 if(array[i] == this.$cellIndex) 
                     return;
            } 
            if(this.$cellIndex != 0){ // avoiding start value
                array.push(this.$cellIndex);
            }

            if(this.check(array) == true){
                if(player == "green"){
                    this.$result.text("ЗЕЛЕНІ ВИГРАЛИ!");
                    this.$result.css({
                        display: "block",
                        color: 'green'
                    });
                    this.$table.css({
                       opacity: "0.25",
                        background: "black"
                    });
                    this.$cell.css({
                       cursor: "none",
                        border: "0px solid black",
                        pointerEvents: "none"
                    });
                     this.$turnGreen.css({
                       display: "none" 
                    });
                }
                else{ // red
                   this.$result.text("ЧЕРВОНІ ВИГРАЛИ!"); 
                    this.$result.css({
                       display: "block",
                        color: 'red' 
                    });
                     this.$table.css({
                       opacity: "0.25",
                        background: "black"
                    });
                    this.$cell.css({
                       cursor: "auto",
                        border: "0px solid black",
                        pointerEvents: "none"
                    });
                    this.$turnRed.css({
                       display: "none"
                    });
                    
                }   
            }
           
        
           console.log(array);
        }
        
        
        
    };
       Game.init(); 
    })();
    
    
    
//    
//    var importVar = [1,2,4,3];
//    
//    
//    function check(imp){
//        var correctFlag = 1; // should be 3 to proceed.
//     var winCombination = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
//        for(var i = 0; i < winCombination.length; i++){
//            for(var j = 0; j < imp.length; j++){
//              //  console.log(winCombination[i]); // 1 2 3
//              //  console.log(winCombination[i][j]); // 1
//                
//                if($.inArray(imp[j], winCombination[i]) !== -1){ 
//                    if(correctFlag == 3){
//                        return true;
//                        break;
//                    }
//                     console.log(correctFlag);
//                    correctFlag++;
//                }
//            }
//            correctFlag = 1; // value to 1 to count next sub-array
//        }
//      
//    }
//   console.log(check(importVar)); //3 
});