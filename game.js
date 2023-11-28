let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {

    // Creates a random number between 0 - 3
    // This is then used to select a random value from array 'buttonColours'
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);

    // This is then pushed onto the gamePattern array
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    // Used jQuery to select the HTML element that is the same colour
    // Used jQuery to add a simple animation to the button to let the 
    // user know which button is selected.
    let selectedBtn = $("#" + randomChosenColour);
    selectedBtn.fadeIn(100).fadeOut(100).fadeIn(100);
}

nextSequence();