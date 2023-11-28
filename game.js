let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {

    // Creates a random number between 0 - 3
    // This is then used to select a random value from array 'buttonColours'
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    // This is then pushed onto the gamePattern array
    gamePattern.push(randomChosenColour);

    // Used jQuery to select the HTML element that is the same colour
    // Used jQuery to add a simple animation to the button to let the 
    // user know which button is selected.
    let selectedBtn = $("#" + randomChosenColour);
    selectedBtn.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(selectedBtn);
}

nextSequence();