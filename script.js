function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return 'Rock';
        
        case 1:
            return 'Paper';
        
        case 2:
            return 'Scissors';
    }
}

function singleRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection} :D`;
    }

    return `You lose! ${computerSelection} beats ${playerSelection} :()`;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper or Scissors): ");
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection, computerSelection));

        const result = singleRound(playerSelection, computerSelection);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win!")
    } else if (playerScore < computerScore) {
        console.log("You lose!")
    } else {
        console.log("It's a tie!")
    }
}

playGame()