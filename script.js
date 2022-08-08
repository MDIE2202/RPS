
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
    let outcome = 3;

    if (computer == 'rock' && player == 'paper'){
        outcome = 1;
    }
    else if (computer == 'scissors' && player == 'paper'){
        outcome = 0;
    }
    else if (computer == 'paper' && player == 'paper'){
        outcome = 2;
    }
    else if (computer == 'rock' && player == 'rock'){
        outcome = 2;
    }
    else if (computer == 'scissors' && player == 'rock'){
        outcome = 1;
    }
    else if (computer == 'paper' && player == 'rock'){
        outcome = 0;
    }
    else if (computer == 'rock' && player == 'scissors'){
        outcome = 0;
    }
    else if (computer == 'scissors' && player == 'scissors'){
        outcome = 2;
    }
    else if (computer == 'paper' && player == 'scissors'){
        outcome = 1;
    }
    else{
        outcome = 3;
    }

    return outcome;
}

game = () => {
    let player_score = 0;
    let computer_score = 0;

    for (let i = 0; i < 5; i++){
        result = playerSelection(prompt(), getComputerChoice());
        if (result == 0){
            computer_score += 1;
            console.log('computer wins')
        }
        else if (result == 1){
            player_score += 1;
            console.log('you win')
        }
        else if (result == 2){
            player_score += 1;
            computer_score += 1;
            console.log('DRAW')
        }
        else{
            return 'no valid input has been given'
        }
    }

    if (player_score > computer_score){
        return 'You win with '+ player_score + ' VS ' + computer_score + '!' 
    }
    else if (player_score < computer_score){
        return 'You lose with '+ player_score + ' VS ' + computer_score + '!' 
    }
    else{
        return 'It s a DRAW!'
    }
}


