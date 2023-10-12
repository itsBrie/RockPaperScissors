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
