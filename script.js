function getComputerSelection () {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerSelection
    if (randomNumber === 0) {
        computerSelection = "rock";
    } else if (randomNumber === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function getRoundWinner (computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return "tie";
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "player";
        } else {
            return "computer";
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return "player";
        } else {
            return "computer";
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "player";
        } else {
            return "computer";
        }
    }
}

function game (playerSelection,) {
    const computerSelection = getComputerSelection();
    const roundWinner = getRoundWinner(computerSelection, playerSelection);
    if (roundWinner === 'tie') {
        p.textContent = `The computer played ${computerSelection}. It's a tie!`
    } else if (roundWinner === 'player') {
        p.textContent = `The computer played ${computerSelection}. You Win this round!!! :D`
        playerScore.textContent++;
    } else {
        p.textContent = `The computer played ${computerSelection}. You lose this round :(`
        computerScore.textContent++;
    }
    if (computerScore.textContent === '5') {
        p.textContent = 'the computer won the game :(';
        endgame()
    } else if (playerScore.textContent === '5') {
        p.textContent = 'YOU WIN!!! :D';
        endgame()
    }
}

function endgame () {
    start.textContent = "PLAY AGAIN";
    rock.onclick = "";
    paper.onclick = "";
    scissors.onclick = "";
};

const startContainer = document.querySelector('#start-container');

const start = document.querySelector('#start');

const p = document.querySelector('p');

const rock = document.querySelector('#rock');

const paper = document.querySelector('#paper');

const scissors = document.querySelector('#scissors');

const computerScore = document.querySelector("#computer-score");

const playerScore = document.querySelector("#player-score");

start.onclick = () => {

    start.textContent = "RESTART"

    start.onclick = () => {
        window.location.reload(false);
    };

    rock.onclick = () => game(rock.id);
    
    paper.onclick = () => game(paper.id);
    
    scissors.onclick = () => game(scissors.id);  
};
