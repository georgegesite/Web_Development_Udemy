
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSequence()
{
    var randomNUmber =  Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNUmber];
    gamePattern.push(randomChosenColour);
};

