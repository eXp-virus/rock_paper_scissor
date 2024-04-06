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
let pScore = document.querySelector('#pscore');
let cScore = document.querySelector('#cscore');
let compChoice = document.querySelector('#compChoice');

btn.addEventListener('click', (event) => {
    let target = event.target;
    computerSelection = getComputerChoice();

    let result = document.querySelector('#result');
    switch (target.id) {
        case 'rock':
            
            roundWinner = playRound('rock', computerSelection);
            calScore();
            compChoice.textContent = `Computer: ${computerSelection}`;
            result.textContent = `${roundWinner}`;
            break;

        case 'paper':
            roundWinner = playRound('paper', computerSelection);
            calScore();
            compChoice.textContent = `Computer: ${computerSelection}`;
            result.textContent = `${roundWinner}`;
            break;

        case 'scissor':
            roundWinner = playRound('scissor', computerSelection);
            calScore();
            compChoice.textContent = `Computer: ${computerSelection}`;
            result.textContent = `${roundWinner}`;
            break;

    }
    pScore.textContent = `Your Score: ${playerScore}`;
    cScore.textContent = `Computer's Score: ${computerScore}`;
    displayWinner();
});

function calScore() {
    if(roundWinner == 'You win!') playerScore++;
    else if(roundWinner == 'You lose!') computerScore++;
}

buttons = document.querySelectorAll('button');
function displayWinner() {
    if(playerScore == 5 || computerScore == 5) {
       buttons.forEach(elem => { // disable buttons
        elem.disabled = true;

        if(playerScore > computerScore) result.textContent = `You won the game!`;
        else result.textContent = `You lost the game!`;
       }) 
    }
}
