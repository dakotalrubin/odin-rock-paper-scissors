// This helper function formats user input strings into standard options
// that the game logic will recognize: "Rock", "Paper", and "Scissors".
function capitalize(string) {
    let lowerCaseString = string.toLowerCase();
    let firstChar = lowerCaseString[0].toUpperCase();

    return firstChar + lowerCaseString.slice(1);
}

// This function returns the computer's random selection from the options
// "Rock", "Paper", and "Scissors".
function getComputerChoice() {
    let computerSelection = "";
    let randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber === 1) {
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }

    return computerSelection;
}

// This helper function prompts the user to enter a choice from the options
// "Rock", "Paper", and "Scissors".
function getPlayerChoice() {
    let playerSelection = prompt("What move will you make?");
    return capitalize(playerSelection);
}