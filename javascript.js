function getComputerChoice(){
    choice = ['rock', 'paper', 'scissor'];
    return choice[~~(Math.random() * choice.length)]
}

function runGame(playerSelection, computerSelection){
    let answer;
    switch(playerSelection){
        case 'rock':
            if (computerSelection == 'rock'){
                answer = 0;
                break;
            }

            else if (computerSelection == 'paper'){
                answer = 1;
                break;
            }

            else{
                answer = 2;
                break;
            }
        case 'paper':
            if (computerSelection == 'paper'){
                answer = 0;
                break;
            }

            else if (computerSelection == 'scissor'){
                answer = 1;
                break;
            }

            else{
                answer = 2;
                break;
            }
        case 'scissor':
            if (computerSelection == 'scissor'){
                answer = 0;
                break;
            }

            else if (computerSelection == 'rock'){
                answer = 1;
                break;
            }

            else{
                answer = 2;
                break;
            }
        default:
            answer = 3;
            break
    }
    return answer;
}

// user_input = prompt('Enter the Choice').toLowerCase();
// console.log(user_input);
// comp = getComputerChoice();
// result = runGame(user_input, comp);
// console.log(comp);
// console.log(result);


function game(){
    wins = 0;
    losses = 0;
    draws = 0;
    for (let i = 0; i < 5; i++){
        user_input = prompt('Enter the Choice').toLowerCase();
        console.log(user_input);
        comp = getComputerChoice();
        result = runGame(user_input, comp);
        console.log(comp);
        console.log(result);
        console.log((result == 0) ? "It's a Draw": (result == 1) ? `You Lose ${comp.toUpperCase()} beats ${user_input.toUpperCase()}` : (result == 2) ? `You Won ${user_input.toUpperCase()} beats ${comp.toUpperCase()}` : "Enter Correct Value");
        console.log((result == 0) ? draws++ : (result == 1) ? losses++ : (result == 2) ? wins++ : null );
        
    }
    console.log(`Your Wins ${wins}`);
    console.log(`Computer's Wins ${losses}`);
    console.log((wins > losses) ? "You Won The Game" : (wins < losses) ? "You Lost the Game" : "It was a Draw");
}

game();