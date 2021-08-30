let computerChoice = {Value: ""};
let playerChoice;
let playerChoiceInt = 0;
let computerChoiceInt = 0;
const buttons = document.querySelectorAll('.myButton');

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "Good luck and let the games begin!"


buttons.forEach((button)=>{button.addEventListener('click', ()=>{

    playerChoice = button.id;
    if (playerChoice == "rock") {
        playerChoiceInt = 0;
    }
    else if (playerChoice == "paper") {
        playerChoiceInt = 1;
    }
    else if (playerChoice == 'scissors') {
        playerChoiceInt = 2;
    }
    computerChoiceInt = computerPlay(computerChoice);
    playGame();
    })
})


 // Computer makes a random play
function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3) // Generates random num. 0 through 3.
    if (compChoice == 0) {
        compChoice.Value = "=rock";
    } else if (compChoice == 1) {
        compChoice.Value = "paper";
    } else if (compChoice == 2) {
        compChoice.Value = "scissors";
    }
    return compChoice;
 }

//console.log(computerPlay());

function playRound() {
    let win_array = [[0, 2, 1],
                    [1, 0, 2],
                    [2, 1, 0]];

    let result = win_array[playerChoiceInt][computerChoiceInt];
    if (result == 0) {
        output.textContent = `It's a tie! You chose ${playerChoice} and The computer chose ${computerChoice.Value}`;
    }
    else if (result == 1) {
        output.textContent = `You Won! You chose ${playerChoice} and The computer chose ${computerChoice.Value}`;
        playerScore++;
    } else if (result == 2) {
        output.textContent = `You lost! You chose ${playerChoice} and The computer chose ${computerChoice.Value}`;
        compScore++;
    }
}

function playGame() {
    output.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;
    if (playerScore == 5) {
        output.textContent = "Congratulations! You won the game!"
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    }
    else if (compScore == 5) {
        output.textContent = "Sorry! You lost the game."
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    }
}

