/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var maze = $("#maze");
     var boundary = $(".boundary");
    var start = $("#start");
    var end = $("#end");
    var gameStart = false;
    maze.mouseleave(function () { loss() });

    start.click(function () {
        $("#status").text('Move the mouse through without touching any walls');
        gameStart = true;
        if (boundary.hasClass('off')) {
            boundary.removeClass('off');
        }
        boundary.mousemove(function () { loss(); })
    });

    end.mousemove(function () {
        if (gameStart == true) won();
//        else if (gameStart && boundary.hasClass('off')) loss();

    });

    function won() {
        // alert("You win! :]");
        gameStart = false;
        $("#status").text("Congratulations, You win! :)");
    }

    function loss() {
        if (gameStart) {
            gameStart = false;
            boundary.addClass('off');
            $("#status").text('Sorry, you lost :(');
        }
    }
});