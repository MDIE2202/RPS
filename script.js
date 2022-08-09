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

end = (computer_score, player_score) => {
    if (computer_score >= 5 || player_score >=5){
        const holder = document.querySelector('.holder');
        const content = document.createElement('p');
    
        if (player_score > computer_score){
            content.classList.add('content');
            let text = 'You win with '+ player_score + ' VS ' + computer_score + '!' 
            content.textContent = text;
        }
        else if (player_score < computer_score){
            content.classList.add('content');
            let text = 'You lose with '+ player_score + ' VS ' + computer_score + '!'
            content.textContent = text
        }
        else{
            content.classList.add('content');
            let text = 'Its a DRAW'
            content.textContent = text
        }
        
        holder.appendChild(content);

        const btnholder = document.querySelector('.btnholder');
        const content2 = document.createElement('button');
        content2.textContent = 'Replay';

        btnholder.appendChild(content2)

        btn.style.display = 'none';
        btn1.style.display = 'none';
        btn2.style.display = 'none';


    }
    
    }
    

game = (player) => {
        result = playerSelection(player, getComputerChoice());
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
        
        end(computer_score, player_score)
    }


let computer_score = 0;
let player_score = 0;

        const btn = document.querySelector('.rock');
        const btncontent = document.createElement('button');
        btncontent.textContent = 'Rock';
        btn.appendChild(btncontent)
        btn.addEventListener('click', function(){game('rock')})

        const btn1 = document.querySelector('.paper');
        btncontent1 = document.createElement('button');
        btncontent1.textContent = 'Paper';
        btn1.appendChild(btncontent1)
        btn1.addEventListener('click', function(){game('paper')})

        const btn2 = document.querySelector('.scissors');
        btncontent2 = document.createElement('button');
        btncontent2.textContent = 'Scissors';
        btn2.appendChild(btncontent2)
        btn2.addEventListener('click', function(){game('scissors')})

    




