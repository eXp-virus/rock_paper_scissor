function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {return "rock";}
    else if(choice === 1) {return "paper";}
    else {return "scissor";}
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        
        if(playerSelection === 'rock' && computerSelection === 'paper') {
            return "You lose!";
        } else if(playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win!";
        } else if(playerSelection === 'paper' && computerSelection === 'scissor') {
            return "You lose!";
        } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
            return "You win!";
        } else if(playerSelection === 'scissor' && computerSelection === 'rock') {
            return "You lose!";
        } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
            return "You win!";
        }
    }
}

let playerSelection = prompt("Your choice: ").toLowerCase();
let computerSelection = getComputerChoice();
console.log("Computer:", computerSelection);
console.log(playRound(playerSelection, computerSelection));