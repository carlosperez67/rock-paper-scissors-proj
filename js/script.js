// JS for the Rock Paper Scissors Game


function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    switch(x) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getPlayerChoice() {

    const userInput = prompt("Rock, paper or scissors?: ").toLowerCase();
    console.log(userInput);
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
        throw new Error('Input is not a valid choice');
    }
    return userInput;
}

// playerSelection and computerSelection are oneOf rock,paper,scissors
function playRound(playerSelection, computerSelection) {
    let lose = 'You lose! ';
    let win = 'You win! ';

    console.log('Computer chose ' + computerSelection);

    if (playerSelection === computerSelection) {
        return 'That was a tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return win + 'Rock beats Scissors!'
        } else {
            return lose + 'Paper beats Rock!'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return lose + 'Scissors beats paper!'
        } else {
            return win + 'Paper beats Rock!'
        }
    } else {
        if (computerSelection === 'paper') {
            return win + 'Scissors beats paper!'
        } else {
            return win + 'Rock beats Scissors!'
        }
    }
}

function game() {
    let score = 0;

    for (let index = 0; index < 5; index++) {
        let result = playRound(getPlayerChoice(),getComputerChoice());
        console.log(result);
        if (result.slice(4,5) === 'w') {
            score++;
        }
        console.log("You've played " + index + " games.");
        console.log("You've won " + score + " games.");
    }
}
game();