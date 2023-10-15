let playerScore=0;
let computerScore=0;
let player;
let replay = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return (choices[randomChoice]);

}

function canReplay() {
    replay++;
    console.log(replay);
    if (replay === 5) {
        endGame();
        return confirm("Would you like to play again?");
    }
    return false;
}



function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return (choices[randomChoice]);

}



function getPlayerChoice(choice) {
    player = choice;
    playRound();
    let isReplayable = canReplay();
    if ((isReplayable && replay === 5) || (!isReplayable && replay === 5)) {
        reset();
    }else {
        // continue game
    }
}

function reset() {
    replay = 0;
    computerScore=0;
    playerScore=0;
    updateScores(playerScore,computerScore);
}




function playRound() {
    let playerSelection = player;
    let computerSelection = getComputerChoice();
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if ((playerSelection === computerSelection)) {
        //tie-no points
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
    let msg = ("Player Score: " + playerScore + " Computer Score: " + computerScore);
    updateScores(playerScore, computerScore);
    // console.log("Game #%s,",replay+1,msg);

}

function updateScores(pScore, cScore) {
    let cpuSpan = document.getElementById('cpuParagraph');
    let playerSpan = document.getElementById('playerScore');
    cpuSpan.innerHTML = '<span id="cpuScore">'+cScore+'</span>';
    playerSpan.innerText=pScore;


}


function endGame() {
    let outcome;

    if (playerScore > computerScore) {
        outcome = ("The player wins with a total of " + playerScore + " points");
    }
    else if (computerScore > playerScore) {
        outcome = ("The computer wins with a total of " + computerScore + " points");
    } else {
        outcome = ("The computer and player have tied!");
    }
    return (alert(outcome))
}


function startGame() {
    alert("Welcome to The Rock, Paper, Scissors Game...Let's begin");

}




document.getElementById('rockBtn').addEventListener('click', () => getPlayerChoice("rock"));
document.getElementById('paperBtn').addEventListener('click', () => getPlayerChoice("paper"));
document.getElementById('scissorsBtn').addEventListener('click', () => getPlayerChoice("scissors"));

startGame();