function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) { return "rock"; }
    else if (choice === 1) { return "paper"; }
    else { return "scissor"; }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {

        if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "You lose!";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win!";
        } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
            return "You lose!";
        } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
            return "You win!";
        } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
            return "You lose!";
        } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
            return "You win!";
        }
    }
}

let playerSelection;
let computerSelection;

let roundWinner;
let playerScore = 0;
let computerScore = 0;

const btn = document.querySelector("#selection");
btn.addEventListener('click', (event) => {
    let target = event.target;
    computerSelection = getComputerChoice();

    let result = document.querySelector('#result');
    switch (target.id) {
        case 'rock':
            console.log("Computer's choice:", computerSelection)
            //console.log(playRound('rock', computerSelection))
            result.textContent = `${playRound('rock', computerSelection)}`;
            break;

        case 'paper':
            console.log("Computer's choice:", computerSelection)
            result.textContent = `${playRound('paper', computerSelection)}`;
            break;
        case 'scissor':

            console.log("Computer's choice:", computerSelection)
            result.textContent = `${playRound('scissor', computerSelection)}`;
            break;

    }

});
