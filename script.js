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

let playerSelection;
let computerSelection;

// variables to track scores
let playerScore = 0;
let computerScore = 0;

//play a 5 round game
function PlayGame() {
    for(let i=0; i<5; i++) {
        playerSelection = prompt("Your choice: ").toLowerCase();
        computerSelection = getComputerChoice();
        console.log("Computer:", computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        //create empty space after every round to make console output look pretty
        console.log("")
        //keep track of score
        if(playRound(playerSelection, computerSelection) === "You win!") {
            playerScore++;
        } else if(playRound(playerSelection, computerSelection) === "You lose!") {
            computerScore++;
        }
    }
 }

PlayGame();
console.log("Your score:", playerScore);
console.log("Computer's score:", computerScore);
//display winner
if(playerScore > computerScore) {
    console.log("Congrats! You beat the computer")
} else if(computerScore > playerScore) {
    console.log("You lost to computer. Better luck next time!!")
} else {
    console.log("Game was a tie!")
}