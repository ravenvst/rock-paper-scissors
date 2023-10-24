function getComputerChoice(){
    let x = Math.random();
    if (x < 0.33) {
        return "rock";
    } 
    else if (x < 0.66){
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return `Its a TIE - both picks were ${computerSelection}`
    } else if (
        playerSelection === "rock" && computerSelection === "paper" 
    || playerSelection === "paper" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "rock") {
        return `You LOSE - ${computerSelection} beats ${playerSelection}.`;
    }
    else if (
        playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "scissors" && computerSelection === "paper") {
        return `You WIN - ${playerSelection} beats ${computerSelection}.`;
    } else {
        return "enter one of the options: rock, paper, scissors"
    }
}