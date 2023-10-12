let playerScore=0;
let computerScore=0;


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return (choices[randomChoice]);

}

function getPlayerChoice() {
    let player = prompt("Which do you choose? rock , paper, scissors");
    return (player);
}
function game() {
    let replay = 0;
    while (replay <= 5) {
        playRound();
        replay++;
    }
    endGame();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    // playerScore = 0;
    // computerScore = 0;

    if ((playerSelection === computerSelection)) {
        computerScore++;
        playerScore++;
    }
    else if ((playerSelection === rock) && (computerSelection === paper)) {
        computerScore++;
    } else if ((playerSelection === rock) && (computerSelection === scissors)) {
        playerScore++;
    } else if ((playerSelection === paper) && (computerSelection === scissors)) {
        computerScore++;
    } else if ((playerSelection === paper) && (computerSelection === rock)) {
        playerScore++;
    } else if ((playerSelection === scissors) && (computerSelection === rock)) {
        computerScore++;
    } else if ((playerSelection === scissors) && (computerSelection === paper)) {
        playerScore++;
    }
    else {
        alert("No Luck");
    }
    alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
    let tally = (playerScore + " and " + computerScore);
    return (tally);
}

function endGame() {
    let outcome;

    if (playerScore > computerScore) {
        outcome = ("The player wins with a total of " + playerScore + " points");
    }
    else if(computerScore>playerScore) {
        outcome = ("The computer wins with a total of " + computerScore + " points");
    } else{
        outcome=("The computer and player have tied!");
    }
    return (alert(outcome))
}
function startGame() {
    alert("Welcome to The Rock, Paper, Scissors Game...Let's begin");
    game();
}


startGame();