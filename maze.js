/**
* Created with info2180-lab4.
* User: Don-1
* Date: 2014-10-18
* Time: 07:46 PM
* To change this template use Tools | Templates.
*/
var loser = false;  

window.onload = function() 
{
    $("start").onclick = startGame;
    $("end").onmouseover = endGame;
    $("start").onmouseover = youCheat;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].onmouseover = colourChange;
    }
};

function colourChange() 
{
    loser = true;
    $("status").textContent = "You lose!";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
   {
        boundaries[i].addClassName("youlose");
   }
}

function startGame() 
{
    loser = false;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].removeClassName("youlose");
    }
}

function endGame() 
{
    if (!loser) 
    {
        $("status").textContent = "You win! :]";
    }
}

function youCheat()
{
    while (startGame)
    {
         if ()
    }
}