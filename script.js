
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

        btn.classList.add('hide')
        btn1.classList.add('hide')
        btn2.classList.add('hide')
        rp.classList.remove('hide')
    }
    
    }
    

game = (player) => {
        let computer_choice = getComputerChoice();
        result = playerSelection(player, computer_choice);
        if (result == 0){
            computer_score += 1;
            console.log('computer wins')
        }
        else if (result == 1){
            player_score += 1;
            console.log('you win')
        }
        else if (result == 2){
            console.log('DRAW')
        }
        else{
            return 'no valid input has been given'
        }
        
        document.querySelector('.holder').innerHTML = ''
        
        const holder = document.querySelector('.holder');
        const content = document.createElement('p');
        const content_choice = document.createElement('p')

        content_choice.classList.add('content_choice');
        content_choice.textContent = 'You chose:' + player + 'VS computer chose:' + computer_choice;
        holder.appendChild(content_choice)

        content.classList.add('content');
        let text = 'Player Score = '+ player_score + ' Computer Score ' + computer_score + '!' 
        content.textContent = text;

        
        holder.appendChild(content);
        end(computer_score, player_score)
    }

reset = () => {
    console.log('test')
    computer_score = 0
    player_score = 0
    btn.classList.remove('hide');
    btn1.classList.remove('hide');
    btn2.classList.remove('hide');
    document.querySelector('.holder').innerHTML = ''
    rp.classList.add('hide');
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

        const btnholder = document.querySelector('.btnholder');
        const content2 = document.createElement('button');
        content2.classList.add('replaybutton');
        content2.classList.add('hide');
        content2.textContent = 'Replay';  
        btnholder.appendChild(content2);

        const holder = document.querySelector('.holder');
        const content = document.createElement('p');
        content.classList.add('content');
        let text = 'Player Score = '+ player_score + ' Computer Score ' + computer_score + '!' 
        content.textContent = text;
        holder.appendChild(content);

        const rp = document.querySelector('.replaybutton');
        rp.classList.add('.hide')
        rp.addEventListener('click', reset);




