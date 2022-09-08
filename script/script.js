// These global variables allow playRound() to keep score.
let playerScore = 0;
let computerScore = 0;

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
    let playerSelection = capitalize(prompt("What move will you make?"));

    // If an alternative to the three game options is entered, prompt user again.
    if (playerSelection === "Rock" || playerSelection === "Paper" || 
        playerSelection === "Scissors") {
        return playerSelection;
    } else {
        alert("Please enter a valid choice: rock, paper or scissors.");
        getPlayerChoice();
    }
}

// This function takes the randomly-generated computer selection and the player
// input selection as arguments, then uses them to play one round of
// rock-paper-scissors. The appropriate party's score is incremented or left
// untouched in the event of a tie. The function returns a string to indicate
// whether the player won and displays the updated game score.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1;
        return "You lose! Rock loses to paper.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        return "You win! Rock beats scissors.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "You tied! Rock ties with rock.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "You tied! Paper ties with paper.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        return "You lose! Paper loses to scissors.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        return "You win! Paper beats rock.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore += 1;
        return "You win! Scissors beats paper.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "You tied! Scissors ties with scissors.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    } else {
        computerScore += 1;
        return "You lose! Scissors loses to rock.\n" + 
            `Player score: ${playerScore}\n` + 
            `Computer score: ${computerScore}`;
    }
}

// This function plays a five-round game that displays the results of each round
// in the web browser's console and reports a win, loss or tie at the end.
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("You tied!");
    }

    return;
}

// Call the game() function to begin playing.
game();