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
    //playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "tie";
    } else if (
        playerSelection === "rock" && computerSelection === "paper" 
    || playerSelection === "paper" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "rock") {
        return "lost";
    }
    else if (
        playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "scissors" && computerSelection === "paper") {
        return "won";
    } else {
        return "error";
    }
}

function game(){
    let wins = 0;
    let loses = 0;
    /*for (let i = 0; i < 5; i++){
        let selected = prompt("Write rock, paper or scissors");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(selected, computerSelection);
        if (roundResult === "won") { 
            wins++;
            console.log(`You WIN - ${selected} beats ${computerSelection}.`);
        } else if (roundResult === "lost") {
            loses++;
            console.log(`You LOSE - ${computerSelection} beats ${selected}.`);
        } else if (roundResult === "tie"){
            console.log(`Its a TIE - both picks were ${computerSelection}`);
        } else {
            console.log("enter one of the following words: rock, paper, scissors");
            i--;
        }
        console.log(`You won ${wins} times and lost ${loses} times.`);
        
    } */
    if (wins > loses) {
        console.log("You're the WINNER!");
    } else if (loses > wins) {
        console.log("You lost! :(");
    } else if (loses === wins) {
        console.log("You're tied");
    }
}

const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
    btn.addEventListener("click", () => console.log(playRound(btn.innerHTML, getComputerChoice())))
});