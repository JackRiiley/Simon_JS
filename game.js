let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

// Detects when a key has been pressed to start the game
$(document).keypress(function () {
    if (!started) {
        nextSequence();
    }

    $("#level-title").text("Level " + level);
})

// Detects when a button has been clicked in the browser, this is stored
// in an array to check whether it matches the gamePattern
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

// Handles checking the userPattern to the gamePattern
function checkAnswer(currentLevel) {
    if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[gamePattern.length - 1]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    } else {
        
    }
}

// Handles a simple animation for key presses
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Handles the audio elements so that this can be used in both the user
// clicks and within the nextSequence fuunction
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {

    level++;
    started = true;

    // Creates a random number between 0 - 3
    // This is then used to select a random value from array 'buttonColours'
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    // This is then pushed onto the gamePattern array
    gamePattern.push(randomChosenColour);

    // Used jQuery to select the HTML element that is the same colour
    // Used jQuery to add a simple animation to the button to let the 
    // user know which button is selected.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("#level-title").text("Level " + level);
}