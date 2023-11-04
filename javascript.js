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

const btns = document.querySelectorAll("button");
const div = document.querySelector("div");
let wins = 0;
let loses = 0;

btns.forEach(function (btn) {
    
    btn.addEventListener("click", function () {
        let roundResult = playRound(btn.innerHTML, getComputerChoice()); 

        if (roundResult === "won") { 
            wins++;
        } else if (roundResult === "lost") {
            loses++;
        } else if (roundResult === "tie"){
        } 
        

        div.innerHTML = "Current round: " + roundResult 
        + " - Running score is: " + wins + " wins and " + loses + " loses"


        if (wins >= 5 || loses >= 5) {
            div.innerHTML = "Game over!";

            if (wins > loses) {
                div.innerHTML +=" You WIN!"
            } else if (loses > wins) {
                div.innerHTML += " You lost."
            }
            wins = 0;
            loses = 0;
        }
        
    })
});