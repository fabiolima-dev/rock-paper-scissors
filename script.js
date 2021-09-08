function computerSelection () {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerPlay
    if (randomNumber === 0) {
        computerPlay = "rock";
    } else if (randomNumber === 1) {
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    }
    return computerPlay;
}

function playerSelection () {
    const playerPlay = prompt("Rock, Paper or Scissors?").toLowerCase();
    return playerPlay;
}

function playRound (computerPlay, playerPlay) {
    if (computerPlay == playerPlay) {
        return "Tie game";
    } else if (computerPlay === "rock") {
        if (playerPlay === "paper") {
            return "You won";
        } else {
            return "You lost";
        }
    } else if (computerPlay === "paper") {
        if (playerPlay === "scissors") {
            return "You won";
        } else {
            return "You lost";
        }
    } else if (computerPlay === "scissors") {
        if (playerPlay === "rock") {
            return "You won";
        } else {
            return "You lost";
        }
    }
}

function game (playRound, computerSelection, playerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    while (computerScore < 5 && playerScore < 5) {
        const computerPlay = computerSelection();
        const playerPlay = playerSelection();
        if (playRound(computerPlay, playerPlay) === "Tie game") {
            console.log("Tie game");
            console.log(`Computer Score ${computerScore}`);
            console.log(`Player Score ${playerScore}`);
        } else if (playRound(computerPlay, playerPlay) === "You won") {
            console.log("You won this round")
            playerScore++;
            console.log(`Computer Score ${computerScore}`);
            console.log(`Player Score ${playerScore}`);
        } else {
            console.log("You lose this round")
            computerScore++;
            console.log(`Computer Score ${computerScore}`);
            console.log(`Player Score ${playerScore}`);
        }
    }
}

game(playRound, computerSelection, playerSelection);