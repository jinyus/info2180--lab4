"use strict";


$(document).ready(function() {
    var gameStart = false, start = $("#start"), end = $("#end"), boundary = $(".boundary"), maze = $("#maze");
    
    maze.mouseleave(function() {
        loss();
    });
    
    start.mouseover(function() {
        $("#status").text('Move your mouse to the end to win');
        gameStart = true;
        if (boundary.hasClass('youlose')){
            boundary.removeClass('youlose');
        }
        boundary.mousemove(function(){
            loss(); 
        }
                          )
    });
    
    end.mousemove(function(){
        if(gameStart === true){
            won();
        }

    });
    
    function won(){
        gameStart = false;
        $("#status").text("You Won");
    }
    
    function loss(){
        if(gameStart){
            gameStart = false;
            boundary.addClass('youlose');
            $("#status").text("You Lose");
        }
    }
})