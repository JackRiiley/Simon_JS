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


}

nextSequence();