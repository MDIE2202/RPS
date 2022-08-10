
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

        btn.setAttribute('id','hide');
        btn1.setAttribute('id','hide');
        btn2.setAttribute('id','hide');
        rp.removeAttribute('id');

        const final = document.querySelector('.final_message');
        const final_message = document.createElement('p');
        if(player_score == 5){
            final_message.textContent = 'You WIN!'
        }else{
            final_message.textContent = 'You LOSE!'
        }
        final.appendChild(final_message)
        

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
        
        document.querySelector('.holder_player').innerHTML = ''
        document.querySelector('.holder_computer').innerHTML = ''

        const pick = document.querySelector('.pick1');
        pick.innerHTML = '<img src = ./images/'+ player + '.png style = max-width:100%>'

        const holder_player = document.querySelector('.holder_player');
        const content_choice = document.createElement('p')
        content_choice.textContent = player_score;
        holder_player.appendChild(content_choice)

        const pick2 = document.querySelector('.pick2');
        pick2.innerHTML = '<img src = ./images/'+ computer_choice + '.png style = max-width:100%>'

        const holder_computer = document.querySelector('.holder_computer');
        const content_computer = document.createElement('p')
        content_computer.textContent = computer_score;
        holder_computer.appendChild(content_computer);

        end(computer_score, player_score)
    }

reset = () => {
    computer_score = 0
    player_score = 0
    btn.removeAttribute('id');;
    btn1.removeAttribute('id');
    btn2.removeAttribute('id');
    rp.setAttribute('id','hide');
    document.querySelector('.final_message').innerHTML = ''
    document.querySelector('.holder_player').innerHTML = ''
    document.querySelector('.holder_computer').innerHTML = ''
    const pick = document.querySelector('.pick1');
    pick.innerHTML = ''
    const pick2 = document.querySelector('.pick2');
    pick2.innerHTML = ''


}
    

let computer_score = 0;
let player_score = 0;

        const btn = document.querySelector('.rock');
        const btncontent = document.createElement('button');
        btncontent.classList.add('rock_layout')
        btncontent.textContent = 'Rock';
        btncontent.innerHTML = '<img src = ./images/rock.png style = max-width:100%>'
        btn.appendChild(btncontent)
        btn.addEventListener('click', function(){game('rock')})

        const btn1 = document.querySelector('.paper');
        btncontent1 = document.createElement('button');
        btncontent1.classList.add('paper_layout')
        btncontent1.textContent = 'Paper';
        btncontent1.innerHTML = '<img src = ./images/paper.png style = max-width:100%>'
        btn1.appendChild(btncontent1)
        btn1.addEventListener('click', function(){game('paper')})

        const btn2 = document.querySelector('.scissors');
        btncontent2 = document.createElement('button');
        btncontent2.classList.add('scissors_layout')
        btncontent2.textContent = 'Scissors';
        btncontent2.innerHTML = '<img src = ./images/scissors.png style = "max-width:100%">'
        btn2.appendChild(btncontent2)
        btn2.addEventListener('click', function(){game('scissors')})

        const btnholder = document.querySelector('.btnholder');
        const content2 = document.createElement('button');
        content2.classList.add('replaybutton');
        content2.classList.add('hide');
        content2.textContent = 'Replay';  
        btnholder.appendChild(content2);

        const rp = document.querySelector('.replaybutton');
        rp.setAttribute('id','hide')
        rp.addEventListener('click', reset);




