
let playerScore = 0;
let computerScore = 0;




    // Inputs the users choice
    function userChoice() {
        const userChoice = prompt("Let's play Rock, Paper, Scissors!").toLowerCase(); // Summons prompt
        return userChoice; // Returns prompt
    }



    // Computer makes a random play
    function computerPlay() {
        let compChoice = Math.floor(Math.random() * 3) // Generates random num. 0 through 3.
        if (compChoice < 1) {
            compChoice = "rock";
        } else if (compChoice = 2) {
            compChoice = "paper";
        } else {
            compChoice = "scissors";
        }
        return compChoice;
    }

  

    // Plays a round.
    function playRound(userChoice, compChoice) {
        //Rock Choice
        if (userChoice == "rock") {
            if (compChoice == "scissors") {
                return "You Win! rock beats scissors!";
            } else if (compChoice == "paper") {
                return "Loser! paper Beats rock";
            } else if (compChoice == "rock") {
                return "It's a Draw";
            } else {
                return "Something Went Wrong";
            }
        }
        //paper Choice
        else if (userChoice == "paper") {
            if (compChoice == "rock") {
                return "You Win! paper beats rock";
            } else if (compChoice == "scissors") {
                return "You Lose! scissors beats paper";
            } else if (compChoice == "paper") {
                return "It's a Draw";
            } else {
                return "Something Went Wrong";
            }
        }
        //scissors Choice
        else if (userChoice == "scissors") {
            if (compChoice == "paper") {
                return "You win! scissors beat paper";
            } else if (userChoice == "scissors" && compChoice == "rock") {
                return "You Lose! rock beats scissors";
            } else if (userChoice == "scissors" && compChoice == "scissors") {
                return "It's a Draw";
            } else {
                return "Something Went Wrong";
            }
        } else {
            return "That's not a valid choice";
        }
        }



    const rockButton = document.querySelector('.rock-button');
    const paperButton = document.querySelector('.paper-button');
    const scissorsButton = document.querySelector('.scissors-button');

    const buttons = document.querySelectorAll('.myButton');
    // buttons.forEach((button)=>{button.addEventListener('click',()=> {

    // }

    console.log(rockButton);
    
    // Executes a play
    //console.log(playRound(userChoice(), computerPlay()));