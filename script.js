
function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    let choice = 'hello'

    if(i == 0) {
        choice = 'rock';
    }
    else if (i == 1) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }

    return choice;
}

playerSelection = (player, computer) => {
//determines the outcome: 1: player wins 0: computer wins 2:draw 3: no valid input
    let outcome = '';

    if (computer == 'rock' && player == 'paper'){
        outome = 'Player wins!' + player + ' beats ' + computer + ' !';
    }
    else if (computer == 'scissors' && player == 'paper'){
        outcome = 'Computer wins!' + computer + ' beats ' + player + ' !'
    }
    else if (computer == 'paper' && player == 'paper'){
        outcome = 'Draw! You both picked ' + computer
    }
    else if (computer == 'rock' && player == 'rock'){
        outcome = 'Draw! You both picked ' + computer
    }
    else if (computer == 'scissors' && player == 'rock'){
        outcome = 'Player wins!' + player + ' beats ' + computer + ' !';
    }
    else if (computer == 'paper' && player == 'rock'){
        outcome = 'Computer wins!' + computer + ' beats ' + player + ' !'
    }
    else if (computer == 'rock' && player == 'scissors'){
        outcome = 'Computer wins!' + computer + ' beats ' + player + ' !'
    }
    else if (computer == 'scissors' && player == 'scissors'){
        outcome = 'Draw! You both picked ' + computer;
    }
    else if (computer == 'paper' && player == 'scissors'){
        outcome = 'Player wins!' + player + ' beats ' + computer + ' !';
    }
    else{
        outcome = 'Invalid input, please put "rock", "paper" or "scissors"' + outcome;
    }

    return outcome;
}

