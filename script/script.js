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
    let computerChoice = "";
    let randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}